import { createClient } from "@/utils/supabase/client"

export const addLink = async (id, data) => {
  try {
    const supabase = createClient()
    const { error: linkError } = await supabase.from('link')
      .insert([
        {
          title: data.title,
          descripton: data.description,
          tag1: data.tag1,
          tag2: data.tag2,
          tag3: data.tag3,
          user_id: id
        }
      ])
      .select()
    if (linkError) throw linkError;
  } catch (error) {
    throw error
  }
}


