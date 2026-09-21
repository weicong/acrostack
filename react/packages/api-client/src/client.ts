/**
 * 应用与生成客户端之间的唯一入口（本文件手写，其余均为生成物）。
 *
 * 生成物 `src/generated/.kubb/client` 只提供**裸客户端**：baseURL、鉴权头、
 * 租户头、Accept-Language 与错误处理由应用在 bootstrap 时经 `@acrostack/core`
 * 的 `setupHttpClient(transport)` 注册拦截器注入——本包不含应用语义。
 *
 * `transport` 单独导出的原因：ABP 的"401 刷新后重放一次"必须注册在**原生 axios
 * 响应链**上才能把重放成功的响应交回调用方（Kubb 的 error 通道在调用完处理器后
 * 总是以原错误拒绝，重放结果会被丢弃）。生成物直接 import `.kubb/client` 的单例，
 * 因此这里用 `setConfig({ transport })` 让该单例改走同一个共享实例——
 * 调用方只需保证 bootstrap 时 import 过本模块（见 apps/web 的组合根）。
 */
import axios from "axios";
import { client } from "./generated/.kubb/client";

/** 全应用共享的底层 axios 实例（唯一实例，禁止另建）。 */
export const transport = axios.create();

// 生成物的每次调用都会用 `requestConfig.transport ?? config.transport ?? 内部默认实例`，
// 在此注入后，所有请求（含各生成 hooks）都经过 `transport`，拦截器因此对全应用生效。
client.setConfig({ transport });

export * from "./generated/.kubb/client";
