import { z } from "zod";

const baseFields = {
  name: z.string().min(1).max(256),
  description: z.string().max(512).nullable(),
  valueType: z.number().int().min(0),
  isRequired: z.boolean(),
  regex: z.string().max(512).nullable(),
};

export const createClaimTypeSchema = z.object(baseFields);

export const updateClaimTypeSchema = z.object({
  ...baseFields,
  // Static claim types cannot be renamed; the form disables the field but
  // we still accept the value so the schema stays uniform.
  isStatic: z.boolean().optional(),
});
