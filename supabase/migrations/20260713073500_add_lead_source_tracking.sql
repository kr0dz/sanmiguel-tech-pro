-- Track where each diagnosis request originated and which service generated it.

ALTER TABLE public.service_requests
  ADD COLUMN IF NOT EXISTS lead_source text,
  ADD COLUMN IF NOT EXISTS service_interest text,
  ADD COLUMN IF NOT EXISTS source_path text;

CREATE INDEX IF NOT EXISTS service_requests_lead_source_idx
  ON public.service_requests (lead_source);

CREATE INDEX IF NOT EXISTS service_requests_service_interest_idx
  ON public.service_requests (service_interest);

CREATE OR REPLACE FUNCTION public.submit_service_request_v2(
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
  p_preferred_date date DEFAULT NULL,
  p_lead_source text DEFAULT NULL,
  p_service_interest text DEFAULT NULL,
  p_source_path text DEFAULT NULL
)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_request_number text;
BEGIN
  SELECT public.submit_service_request(
    p_customer_name,
    p_whatsapp,
    p_customer_type,
    p_device_type,
    p_issue_description,
    p_service_mode,
    p_email,
    p_preferred_language,
    p_brand,
    p_model,
    p_operating_system,
    p_issue_start,
    p_powers_on,
    p_important_data,
    p_neighborhood,
    p_urgency,
    p_preferred_date
  ) INTO v_request_number;

  UPDATE public.service_requests
  SET
    lead_source = NULLIF(left(trim(p_lead_source), 80), ''),
    service_interest = NULLIF(left(trim(p_service_interest), 80), ''),
    source_path = NULLIF(left(trim(p_source_path), 220), '')
  WHERE request_number = v_request_number;

  RETURN v_request_number;
END;
$$;

REVOKE ALL ON FUNCTION public.submit_service_request_v2(
  text, text, text, text, text, text, text, text, text, text,
  text, text, text, text, text, text, date, text, text, text
) FROM PUBLIC;

GRANT EXECUTE ON FUNCTION public.submit_service_request_v2(
  text, text, text, text, text, text, text, text, text, text,
  text, text, text, text, text, text, date, text, text, text
) TO anon, authenticated;
