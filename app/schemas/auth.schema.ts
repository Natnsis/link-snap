import { z } from 'zod';

const AuthSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty().min(8, "password must be atleast 8 characters")
})

type AuthType = z.infer<typeof AuthSchema>
