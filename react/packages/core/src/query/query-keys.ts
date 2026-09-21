/**
 * core 内部共享的查询键。
 *
 * 单独成模块是为了打断 tenant ↔ permissions 的循环依赖：
 * 两者都要用 application-configuration 的缓存键（前者失效、后者读写）。
 */

/** application configuration（当前用户 + grantedPolicies）的查询键。 */
export const APP_CONFIG_QUERY_KEY = ["abp-app-config"] as const;
