const SUPABASE_URL = "https://eltvmtzvpmrmtebbfmaq.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_ab4lyf4pp-_ha0-KD29WZQ_aE4dohbW";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
