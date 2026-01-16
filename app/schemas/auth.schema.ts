import { z } from 'zod';

export const AuthSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty("password is empty")
})

export type AuthType = z.infer<typeof AuthSchema>
