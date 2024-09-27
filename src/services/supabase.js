import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://mmyxdnpmmlqmyjxjypmw.supabase.co';
const supabaseKey =
  ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1teXhkbnBtbWxxbXlqeGp5cG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5MTgyOTcsImV4cCI6MjA0MjQ5NDI5N30.qJ6FXlmb7R17szFjRphguUy8vYMiZ8c2qB0EXr66mrQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
