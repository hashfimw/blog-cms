import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cuopiyydjhwklbozyzys.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY! || "key"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
