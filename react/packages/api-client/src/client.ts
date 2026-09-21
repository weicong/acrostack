/**
 * 应用与生成客户端之间的唯一入口（本文件手写，其余均为生成物）。
 *
 * 生成物 `src/generated/.kubb/client` 只提供**裸 axios 实例**：
 * baseURL、鉴权头、Accept-Language 与错误处理由应用在
 * `apps/web/src/lib/http/client.ts` 注册拦截器注入——本包不含应用语义。
 */
export * from "./generated/.kubb/client";
