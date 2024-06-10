import { createClient } from '@supabase/supabase-js';



function SupaBase() {
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1ZWt3c2Z0cXJ0dGF1ZWtjZnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5NDk3MzYsImV4cCI6MjAzMzUyNTczNn0.pf6dYG_2R5pAn2yM8WOYiI649o0kEFZq5igrIFWxJ74";
    const supabaseUrl = "https://guekwsftqrttauekcfqk.supabase.co";

    return createClient(supabaseUrl, supabaseKey);
}


export default SupaBase;
