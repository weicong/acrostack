import { z } from "zod";

const baseFields = {
  name: z.string().min(1).max(256),
  isDefault: z.boolean(),
  isPublic: z.boolean(),
};

export const createSchema = z.object(baseFields);

export const updateSchema = z.object({
  ...baseFields,
  concurrencyStamp: z.string().nullable(),
});
