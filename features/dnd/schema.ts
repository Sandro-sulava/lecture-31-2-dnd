import z from "zod";

export const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "decription is required"),
});

export type TaskForm = z.infer<typeof taskSchema>;
