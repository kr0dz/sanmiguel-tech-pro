
-- Roles
CREATE TYPE public.app_role AS ENUM ('admin', 'staff');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users see their own roles" ON public.user_roles
FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Admins see all roles" ON public.user_roles
FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Enum de estatus de solicitud
CREATE TYPE public.service_request_status AS ENUM (
  'nueva','contactado','diagnostico_pendiente','esperando_equipo',
  'esperando_autorizacion','esperando_pieza','en_reparacion','listo','resuelto','cancelado'
);

-- Secuencia para número visible SM-000001
CREATE SEQUENCE public.service_request_seq START 1000;

CREATE TABLE public.service_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_number text NOT NULL UNIQUE DEFAULT ('SM-' || lpad(nextval('public.service_request_seq')::text, 6, '0')),
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

  status service_request_status NOT NULL DEFAULT 'nueva'
);

CREATE INDEX service_requests_created_at_idx ON public.service_requests (created_at DESC);
CREATE INDEX service_requests_status_idx ON public.service_requests (status);

-- El público puede insertar (formulario), pero NO leer.
GRANT INSERT ON public.service_requests TO anon, authenticated;
GRANT SELECT, UPDATE ON public.service_requests TO authenticated;
GRANT ALL ON public.service_requests TO service_role;

ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a request"
ON public.service_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can read all requests"
ON public.service_requests FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'staff'));

CREATE POLICY "Admins can update requests"
ON public.service_requests FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'staff'))
WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'staff'));

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.tg_set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER service_requests_updated_at
BEFORE UPDATE ON public.service_requests
FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();
