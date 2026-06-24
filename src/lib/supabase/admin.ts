import { createClient } from '@supabase/supabase-js'

// Cliente de administración que omite RLS usando Service Role Key (solo para backend)
// Si no existe, usa la Anon Key, pero podría fallar en inserts si RLS está activo y sin política para anónimos.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
