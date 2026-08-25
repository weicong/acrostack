import { z } from "zod";

export const bookSchema = z.object({
  name: z.string().min(1).max(128),
  type: z.string().min(1),
  publishDate: z.instanceof(Date, { message: "Required" }),
  price: z.number().min(0),
});
