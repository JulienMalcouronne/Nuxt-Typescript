import { createClient } from "@supabase/supabase-js";

const supabaseKey  = process.env.SUPABASE_KEY;
const supabaseUrl = process.env.SUPABASE_URL;


const useSupabase = () => {
  const supabase = createClient(supabaseUrl, supabaseKey);

  return {
    supabase,
  }
}

export default useSupabase
