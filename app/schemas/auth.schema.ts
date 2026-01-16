import { z } from 'zod';

export const AuthSchema = z.object({
  email: z.string().email().nonempty(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
})

export type AuthType = z.infer<typeof AuthSchema>
