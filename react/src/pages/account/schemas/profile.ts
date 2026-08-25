import { z } from "zod";

export const profileSchema = z.object({
  userName: z.string().min(1).max(256),
  email: z.string().min(1).max(256).email(),
  name: z.string().max(64).nullable(),
  surname: z.string().max(64).nullable(),
  phoneNumber: z.string().max(16).nullable(),
  concurrencyStamp: z.string().nullable(),
});

export const passwordSchema = z
  .object({
    currentPassword: z.string().max(128),
    newPassword: z.string().min(1).max(128),
    newPasswordConfirm: z.string().min(1).max(128),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirm, {
    path: ["newPasswordConfirm"],
    message: "两次输入的密码不一致",
  });
