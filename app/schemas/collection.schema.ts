import { z } from 'zod';

export const CollectionSchema = z.object({
  title: z.string().min(5, 'title atleast 5 chars'),
  tag1: z.string().min(4, "minimum 4 chars").max(12, 'too long'),
  tag2: z.string().min(4, "minimum 4 chars").max(12, 'too long'),
  tag3: z.string().min(4, "minimum 4 chars").max(12, 'too long'),
  description: z.string().nonempty("description is empty")
})

export type CollectionType = z.infer<typeof CollectionSchema>
