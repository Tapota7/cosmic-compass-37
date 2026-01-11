-- Create rate limit tracking table for email sends
CREATE TABLE public.email_rate_limits (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  identifier text NOT NULL,
  identifier_type text NOT NULL CHECK (identifier_type IN ('ip', 'email')),
  request_count integer NOT NULL DEFAULT 1,
  window_start timestamp with time zone NOT NULL DEFAULT now(),
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create index for fast lookups
CREATE INDEX idx_email_rate_limits_lookup ON public.email_rate_limits (identifier, identifier_type, window_start);

-- Enable RLS
ALTER TABLE public.email_rate_limits ENABLE ROW LEVEL SECURITY;

-- Only service role can access this table (edge functions use service role key)
CREATE POLICY "Service role only" ON public.email_rate_limits
  FOR ALL USING (false) WITH CHECK (false);

-- Function to check and update rate limit
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  p_identifier text,
  p_identifier_type text,
  p_max_requests integer,
  p_window_minutes integer
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_window_start timestamp with time zone;
  v_current_count integer;
BEGIN
  v_window_start := now() - (p_window_minutes || ' minutes')::interval;
  
  -- Get current request count in the window
  SELECT COALESCE(SUM(request_count), 0) INTO v_current_count
  FROM email_rate_limits
  WHERE identifier = p_identifier
    AND identifier_type = p_identifier_type
    AND window_start >= v_window_start;
  
  -- If over limit, return false
  IF v_current_count >= p_max_requests THEN
    RETURN false;
  END IF;
  
  -- Insert new request record
  INSERT INTO email_rate_limits (identifier, identifier_type, request_count, window_start)
  VALUES (p_identifier, p_identifier_type, 1, now());
  
  RETURN true;
END;
$$;

-- Cleanup old rate limit records (run periodically)
CREATE OR REPLACE FUNCTION public.cleanup_rate_limits()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM email_rate_limits
  WHERE window_start < now() - interval '2 hours';
END;
$$;