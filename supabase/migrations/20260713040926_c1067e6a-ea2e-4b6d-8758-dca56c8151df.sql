-- San Miguel Tech: initial secure schema

-- Roles
CREATE TYPE public.app_role AS ENUM ('admin', 'staff');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = auth.uid()
      AND role = _role
  )
$$;

REVOKE ALL ON FUNCTION public.has_role(public.app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.has_role(public.app_role) TO authenticated, service_role;

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

CREATE POLICY "Users see their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins see all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role('admin'));

-- Service requests
CREATE TYPE public.service_request_status AS ENUM (
  'nueva',
  'contactado',
  'diagnostico_pendiente',
  'esperando_equipo',
  'esperando_autorizacion',
  'esperando_pieza',
  'en_reparacion',
  'listo',
  'resuelto',
  'cancelado'
);

CREATE SEQUENCE public.service_request_seq START 1000;

CREATE TABLE public.service_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_number text NOT NULL UNIQUE DEFAULT (
    'SM-' || lpad(nextval('public.service_request_seq')::text, 6, '0')
  ),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),

  customer_name text NOT NULL,
  whatsapp text NOT NULL,
  email text,
  preferred_language text NOT NULL DEFAULT 'es',
  customer_type text NOT NULL,

  device_type text NOT NULL,
  brand text,
  model text,
  operating_system text,

  issue_description text NOT NULL,
  issue_start text,
  powers_on text,
  important_data text,

  service_mode text NOT NULL,
  neighborhood text,
  urgency text,
  preferred_date date,

  attachments jsonb NOT NULL DEFAULT '[]'::jsonb,
  internal_notes text,
  estimated_price numeric(10,2),
  final_price numeric(10,2),
  assigned_to uuid REFERENCES auth.users(id) ON DELETE SET NULL,

  status public.service_request_status NOT NULL DEFAULT 'nueva',

  CONSTRAINT service_requests_language_check
    CHECK (preferred_language IN ('es', 'en')),
  CONSTRAINT service_requests_mode_check
    CHECK (service_mode IN ('remoto', 'domicilio', 'revision')),
  CONSTRAINT service_requests_urgency_check
    CHECK (urgency IS NULL OR urgency IN ('baja', 'media', 'alta')),
  CONSTRAINT service_requests_powers_on_check
    CHECK (powers_on IS NULL OR powers_on IN ('si', 'no', 'parcial')),
  CONSTRAINT service_requests_important_data_check
    CHECK (important_data IS NULL OR important_data IN ('si', 'no')),
  CONSTRAINT service_requests_price_check
    CHECK (
      (estimated_price IS NULL OR estimated_price >= 0)
      AND (final_price IS NULL OR final_price >= 0)
    )
);

CREATE INDEX service_requests_created_at_idx
  ON public.service_requests (created_at DESC);
CREATE INDEX service_requests_status_idx
  ON public.service_requests (status);
CREATE INDEX service_requests_customer_name_idx
  ON public.service_requests (customer_name);

ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;

-- The public cannot access the table directly. Submissions go through the RPC below.
REVOKE ALL ON public.service_requests FROM anon;
REVOKE ALL ON public.service_requests FROM authenticated;
GRANT SELECT, UPDATE ON public.service_requests TO authenticated;
GRANT ALL ON public.service_requests TO service_role;

CREATE POLICY "Admins and staff can read requests"
ON public.service_requests
FOR SELECT
TO authenticated
USING (public.has_role('admin') OR public.has_role('staff'));

CREATE POLICY "Admins and staff can update requests"
ON public.service_requests
FOR UPDATE
TO authenticated
USING (public.has_role('admin') OR public.has_role('staff'))
WITH CHECK (public.has_role('admin') OR public.has_role('staff'));

CREATE OR REPLACE FUNCTION public.tg_set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER service_requests_updated_at
BEFORE UPDATE ON public.service_requests
FOR EACH ROW
EXECUTE FUNCTION public.tg_set_updated_at();

-- Secure public submission function. It returns only the generated request number.
CREATE OR REPLACE FUNCTION public.submit_service_request(
  p_customer_name text,
  p_whatsapp text,
  p_customer_type text,
  p_device_type text,
  p_issue_description text,
  p_service_mode text,
  p_email text DEFAULT NULL,
  p_preferred_language text DEFAULT 'es',
  p_brand text DEFAULT NULL,
  p_model text DEFAULT NULL,
  p_operating_system text DEFAULT NULL,
  p_issue_start text DEFAULT NULL,
  p_powers_on text DEFAULT NULL,
  p_important_data text DEFAULT NULL,
  p_neighborhood text DEFAULT NULL,
  p_urgency text DEFAULT NULL,
  p_preferred_date date DEFAULT NULL
)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_request_number text;
BEGIN
  IF char_length(trim(p_customer_name)) NOT BETWEEN 2 AND 120 THEN
    RAISE EXCEPTION 'invalid_customer_name';
  END IF;

  IF char_length(trim(p_whatsapp)) NOT BETWEEN 6 AND 40 THEN
    RAISE EXCEPTION 'invalid_whatsapp';
  END IF;

  IF char_length(trim(p_customer_type)) NOT BETWEEN 2 AND 40 THEN
    RAISE EXCEPTION 'invalid_customer_type';
  END IF;

  IF char_length(trim(p_device_type)) NOT BETWEEN 2 AND 80 THEN
    RAISE EXCEPTION 'invalid_device_type';
  END IF;

  IF char_length(trim(p_issue_description)) NOT BETWEEN 5 AND 4000 THEN
    RAISE EXCEPTION 'invalid_issue_description';
  END IF;

  IF p_service_mode NOT IN ('remoto', 'domicilio', 'revision') THEN
    RAISE EXCEPTION 'invalid_service_mode';
  END IF;

  IF p_preferred_language NOT IN ('es', 'en') THEN
    RAISE EXCEPTION 'invalid_language';
  END IF;

  IF p_email IS NOT NULL AND char_length(p_email) > 200 THEN
    RAISE EXCEPTION 'invalid_email';
  END IF;

  IF p_urgency IS NOT NULL AND p_urgency NOT IN ('baja', 'media', 'alta') THEN
    RAISE EXCEPTION 'invalid_urgency';
  END IF;

  INSERT INTO public.service_requests (
    customer_name,
    whatsapp,
    email,
    preferred_language,
    customer_type,
    device_type,
    brand,
    model,
    operating_system,
    issue_description,
    issue_start,
    powers_on,
    important_data,
    service_mode,
    neighborhood,
    urgency,
    preferred_date
  )
  VALUES (
    trim(p_customer_name),
    trim(p_whatsapp),
    NULLIF(trim(p_email), ''),
    p_preferred_language,
    trim(p_customer_type),
    trim(p_device_type),
    NULLIF(trim(p_brand), ''),
    NULLIF(trim(p_model), ''),
    NULLIF(trim(p_operating_system), ''),
    trim(p_issue_description),
    NULLIF(trim(p_issue_start), ''),
    p_powers_on,
    p_important_data,
    p_service_mode,
    NULLIF(trim(p_neighborhood), ''),
    p_urgency,
    p_preferred_date
  )
  RETURNING request_number INTO v_request_number;

  RETURN v_request_number;
END;
$$;

REVOKE ALL ON FUNCTION public.submit_service_request(
  text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, date
) FROM PUBLIC;

GRANT EXECUTE ON FUNCTION public.submit_service_request(
  text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, date
) TO anon, authenticated;
