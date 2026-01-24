import { createClient } from "@/utils/supabase/client"

export const linkCount = async (id: string): Promise<number> => {
  const supabase = createClient()

  const { count, error } = await supabase
    .from("link")
    .select("*", { count: "exact", head: true })
    .eq('user_id', id)
  if (error) throw error

  return count ?? 0
}

export const favoriteCount = async () => {
  try {
    const supabase = createClient();
    const { count: favorite, error } = await supabase.from("favorite")
      .select("*", { count: "exact", head: true })
    if (error) throw error
    return favorite
  } catch (e) {
    throw e
  }
}

