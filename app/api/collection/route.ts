import { CollectionType } from "@/app/schemas/collection.schema"
import { createClient } from "@/utils/supabase/client"

export const getCollections = async () => {
  try {
    const supabase = createClient()
    const { data: collections, error: collectionError } = await supabase.from('collection')
      .select('*')
    if (collectionError) throw collectionError
    return collections
  } catch (error) {
    throw error
  }
}

export const deleteCollecion = async (id: string) => {
  try {
    const supabase = createClient()
    const { error: deletionError } = await supabase.from('collection')
      .delete()
      .eq('id', id)
    if (deletionError) throw deletionError
  } catch (error) {
    throw error
  }
}

export const createCollection = async (collectionData: CollectionType, id: string) => {
  try {
    const supabase = createClient()
    const { title, description, tag1, tag2, tag3 } = collectionData
    const { error: collectionError } = await supabase.from('collection')
      .insert([
        {
          title,
          description,
          tag1,
          tag2,
          tag3,
          user_id: id
        }
      ])
    if (collectionError) throw collectionError
  } catch (error) {
    throw error
  }
}

export const updateCollection = async (collectionData: CollectionType, id: string) => {
  try {
    const supabase = createClient()
    const { title, description, tag1, tag2, tag3 } = collectionData;
    const { error: updateError } = await supabase.from('collection')
      .update({
        title,
        description,
        tag1,
        tag2,
        tag3,
      })
      .eq('id', id)
      .select()
    if (updateError) throw updateError
  } catch (error) {
    throw error
  }
}

export const getCollectionsByUser = async (userId: string): Promise<CollectionType[]> => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("collection")
    .select("title, tag1, tag2, tag3, description, user_id")
    .eq("user_id", userId)
  if (error) throw error
  return data ?? []
}
