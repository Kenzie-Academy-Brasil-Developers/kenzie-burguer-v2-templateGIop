import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().min(1, "Nome obrigatório!"),
    email: z
      .string()
      .email("Digite um email válido")
      .min(1, "Email obrigatório!"),
    password: z
      .string()
      .min(8, "A senha deve conter ao menos 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "A senha deve conter ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "A senha deve conter ao menos uma letra minúscula")
      .regex(/(?=.*?[1-9])/, "A senha deve conter ao menos um número")
      .regex(/\W|_/, "A senha deve conter ao menos um caractere especial"),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas precisam corresponder",
    path: ["confirm"],
  });

export type TRegisterValues = z.infer<typeof RegisterSchema>;
