import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gqljbvmhdpsfitblvkuc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxbGpidm1oZHBzZml0Ymx2a3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczOTYyOTcsImV4cCI6MjA0Mjk3MjI5N30.2VqdXfYYWYnvHi_0wCduV-5L1IX806O2_UHD2JxBIl4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
