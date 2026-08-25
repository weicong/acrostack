import { z } from "zod";

export const emailSchema = z.object({
  smtpHost: z.string().max(256).nullable(),
  smtpPort: z.number().int().min(0).max(65535).nullable(),
  smtpUserName: z.string().max(1024).nullable(),
  smtpPassword: z.string().max(1024).nullable(),
  smtpDomain: z.string().max(1024).nullable(),
  smtpEnableSsl: z.boolean(),
  smtpUseDefaultCredentials: z.boolean(),
  defaultFromAddress: z.string().min(1).max(1024),
  defaultFromDisplayName: z.string().min(1).max(1024),
});
