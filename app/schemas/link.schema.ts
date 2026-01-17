import { z } from 'zod';

export const LinkForm = z.object({
  url: z.string().min(5, "link must have atleast 5 characters"),
  title: z.string().nonempty("input title of the link"),
  priority: z.string().nonempty("select a priority"),
  purpose: z.string().nonempty("select a priority")
});

export type LinkType = z.infer<typeof LinkForm>
