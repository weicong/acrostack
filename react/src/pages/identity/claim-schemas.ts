import { z } from "zod";

export const claimSchema = z.object({
  claimType: z.string().min(1).max(256),
  claimValue: z.string().max(1024),
});

export type ClaimFormValues = z.infer<typeof claimSchema>;
