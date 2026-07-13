
-- Restrict has_role execution (only server/policies use it via SECURITY DEFINER context)
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;

-- Replace permissive insert policy with basic validation
DROP POLICY IF EXISTS "Anyone can submit a request" ON public.service_requests;

CREATE POLICY "Anyone can submit a valid request"
ON public.service_requests FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(customer_name) BETWEEN 2 AND 120
  AND char_length(whatsapp) BETWEEN 6 AND 40
  AND char_length(issue_description) BETWEEN 5 AND 4000
  AND char_length(device_type) BETWEEN 2 AND 80
  AND char_length(service_mode) BETWEEN 2 AND 40
  AND char_length(customer_type) BETWEEN 2 AND 40
  AND (email IS NULL OR char_length(email) <= 200)
);
