import { createClient } from "@/utils/supabase/client"

export const linkCount = async () => {
  try {
    const supabase = createClient();
    const { count: link, error } = await supabase.from("links")
      .select("*", { count: "exact", head: true })
    if (error) throw error
    return link;
  } catch (e) {
    throw e
  }
};

export const collectionCount = async () => {
  try {
    const supabase = createClient();
    const { count: collection, error } = await supabase.from("collection")
      .select("*", { count: "exact", head: true })
    if (error) throw error
    return collection
  } catch (e) {
    throw e
  }
}

export const favoriteCount = async () => {
  try {
    const supabase = createClient();
    const { count: favorite, error } = await supabase.from("favorite")
  }
}

