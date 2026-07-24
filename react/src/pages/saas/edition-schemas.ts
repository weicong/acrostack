import { z } from "zod";

export const editionSchema = z.object({
  displayName: z.string().min(1).max(256),
});

export type EditionFormValues = z.infer<typeof editionSchema>;
