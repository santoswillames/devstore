import { z } from "zod";

// Schema de como deve ser a variável
const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

// Fazendo o parse para validar
const parsedEnv = envSchema.safeParse(process.env);

// Se não der sucesso retornar um erro, com throw a aplicação não continua executando
if (!parsedEnv.success) {
  console.error(
    "Invalid environment variables",
    parsedEnv.error.flatten().fieldErrors
  );

  throw new Error("Invalid environment variables");
}

// Se for validado retornar o valor da variavel
export const env = parsedEnv.data;
