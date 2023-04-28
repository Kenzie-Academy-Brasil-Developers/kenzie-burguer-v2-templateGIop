import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email("Deve ser um email valido!")
    .min(1, "Email é obrigatório!"),
  password: z.string().min(1, "Senha obrigatória!"),
});

export type TLoginValues = z.infer<typeof LoginSchema>;
