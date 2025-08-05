import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = https://yjumbkfpnnujdrxlgauj.supabase.co
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqdW1ia2Zwbm51amRyeGxnYXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzOTQ4MTksImV4cCI6MjA2OTk3MDgxOX0.YxzZ7ZDeKHpGEuAzxuDqgbSYbFQxle-GhDlJ6PaZDOc

export const supabase = createClient(supabaseUrl, supabaseKey)
