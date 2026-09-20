import { z } from "zod";

const baseFields = {
  userName: z.string().min(1).max(256),
  name: z.string().max(64).nullable(),
  surname: z.string().max(64).nullable(),
  email: z.string().min(1).max(256).email(),
  phoneNumber: z.string().max(16).nullable(),
  isActive: z.boolean(),
  lockoutEnabled: z.boolean(),
  roleNames: z.array(z.string()).nullable(),
};

export const createSchema = z.object({
  ...baseFields,
  password: z.string().min(1).max(128),
});

export const updateSchema = z.object({
  ...baseFields,
  password: z.string().max(128).nullable(),
  concurrencyStamp: z.string().nullable(),
});
