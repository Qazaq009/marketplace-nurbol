import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ltufrhcugwjqarxguiox.supabase.co";
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0dWZyaGN1Z3dqcWFyeGd1aW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMjc0NDgsImV4cCI6MjA1OTcwMzQ0OH0.MEWUsOBXgVxZnWkiJsUq-WEQDckqy_p2pxILcQXE80s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
