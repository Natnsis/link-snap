import { LinkType } from "@/app/schemas/link.schema";
import { createClient } from "@/utils/supabase/client"

export const addLink = async ({ user_id, ...data }: LinkType & { user_id: string }) => {
  const supabase = createClient()
  const { error: linkError } = await supabase
    .from('link')
    .insert([
      {
        url: data.url,
        title: data.title,
        priority: data.priority,
        purpose: data.purpose,
        user_id
      }
    ])
    .select()

  if (linkError) throw linkError
  return true
}

export const getAllLinks = async (id: string) => {
  try {
    const supabase = createClient()
    const { data: linkData, error: linkError } = await supabase.from('link')
      .select('*')
      .eq('user_id', id)
    if (linkError) throw linkError
    return linkData;
  } catch (error) {
    throw error;
  }
}

export const deleteLinks = async (linkId: string) => {
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

export const updateLink = async (updateData, linkId: string) => {
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
