import { z } from "zod";

export const taskSchema = z.object({
    task: z.string()
        .min(5, "A tarefa deve ter pelo menos 5 caracteres!"),

    description: z.string()
        .min(5, "A descrição deve ter pelo menos 5 caracteres!"),

    isActive: z.boolean().default(true),
});
