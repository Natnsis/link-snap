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

export const getAllLinks = async () => {
  try {
    const supabase = createClient()
    const { data: linkData, error: linkError } = await supabase.from('link')
      .select('*')
    if (linkError) throw linkError
    return linkData;
  } catch (error) {
    throw error;

  }
}

export const deleteLinks = async (linkId) => {
  try {
    const supabase = createClient()
    const { error: linkError } = await supabase.from('link')
      .delete()
      .eq('id', 'linkId')
    if (linkError) throw linkError
  } catch (error) {
    throw error
  }
}

export const updateLink = async (updateData, linkId) => {
  try {
    const supabase = createClient()
    const { data: linkData, error: updateError } = await supabase.from('link')
      .update({
        title: updateData.title,
        priority: updateData.priority,
        purpose: updateData.purpose,
        url: updateData.url
      })
    if (updateError) throw updateError
    return linkData;
  } catch (error) {
    throw error
  }
}
