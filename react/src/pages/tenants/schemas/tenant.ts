import { z } from "zod";

/** 新建租户：名称 + 初始管理员邮箱/密码（ABP TenantCreateDto 约束）。 */
export const createSchema = z.object({
  name: z.string().min(1).max(64),
  adminEmailAddress: z.string().min(1).max(256).email(),
  adminPassword: z.string().min(1).max(128),
});

/** 编辑租户：名称 + 默认连接字符串（使用宿主数据库时连接字符串可不填）。 */
export const updateSchema = z
  .object({
    name: z.string().min(1).max(64),
    useSharedDatabase: z.boolean(),
    defaultConnectionString: z.string(),
  })
  .refine((d) => d.useSharedDatabase || d.defaultConnectionString.trim().length > 0, {
    message: "请输入连接字符串",
    path: ["defaultConnectionString"],
  });
