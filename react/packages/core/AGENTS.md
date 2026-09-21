# @acrostack/core — ABP 框架接入层

把 ABP React 的框架能力从应用里抽出来的可复用包：运行时配置、OIDC 授权、权限判定、多租户、
ABP 语义的 HTTP 拦截器。应用侧只保留业务（路由表、页面、组合根）。

## 结构

| 子路径            | 职责                                                                                      | 关键导出                                                                                                            |
| ----------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `@acrostack/core` | 组合根与聚合导出                                                                          | `configureCore`、`bootstrapCore`、`setupHttpClient`                                                                 |
| `./config`        | 运行时配置（`dynamic-env.json` → 宿主 env 回退）                                          | `loadRuntimeConfig`、`getApiUrl`、`getApiBaseUrl`、`getOAuthConfig`、`getApplicationName`                           |
| `./http`          | ABP 语义拦截器（baseURL / Bearer / `__tenant` / `Accept-Language` / 401 重放 / 403 分流） | `setupHttpClient`、`applyAbpRequestConfig`、`handleAbpResponseError`、`isMutatingRequest`、`extractAbpErrorMessage` |
| `./auth`          | OIDC（PKCE + 静默续期）、Provider、守卫、模拟登录                                         | `AuthProvider`、`useAuth`、`authGuard`、`RedirectingError`、`ensureAccessToken`、`impersonateUser`                  |
| `./permissions`   | application configuration、权限判定与守卫                                                 | `usePermissions`、`isPolicyGranted`、`createPermissionGuard`、`ensureAppConfig`、`Authorize`、`useCurrentUser`      |
| `./tenant`        | 多租户上下文（`abp_tenant_id` → `__tenant`）                                              | `getTenantId`、`setTenantId`、`tenantHeaders`                                                                       |
| `./query`         | 全局 QueryClient 与共享查询键                                                             | `queryClient`、`APP_CONFIG_QUERY_KEY`                                                                               |

## 依赖倒置（本包的核心约束）

- **不读 `import.meta.env`**：宿主 env、开发标记、默认文化由 `configureCore` 注入。
- **不 import `@acrostack/api-client`**：共享 axios 实例由 `setupHttpClient(transport)` 注入。
- **不直接操作宿主路由**：403 交给 `onForbidden` 回调（缺省整页跳转）。

因此本包可脱离具体应用编译与替换，也不产生循环依赖。

依赖方向：`core ← apps/web`；`core` 与 `ui`、`api-client` 互不依赖，由应用的组合根
（`apps/web/src/lib/core.ts`）把三者接在一起。

## 与 ABP 官方文档的对应

- 授权 <https://abp.io/docs/latest/framework/ui/react/authorization>：PKCE、`AuthProvider`、`authGuard`
- 权限 <https://abp.io/docs/latest/framework/ui/react/permission-management>：application configuration、
  `isGranted`、复合策略（`||` / `&&`）、多租户、`createPermissionGuard`
- HTTP <https://abp.io/docs/latest/framework/ui/react/http-requests>：单一共享实例、请求/响应拦截器语义
- 本地化：**未实现**（项目不做前端 i18n，仅保留 `Accept-Language` 注入与后端本地化 key 的集中翻译）

## 约定

- 子路径导出对应 `src/<模块>/index.ts`；**跨模块 import 指向具体文件而非 barrel**（避免 barrel 成环）。
- 新增能力前先判断它是否属于"宿主差异"：属于则经 `CoreOptions` 注入，不要写死。

## 已知行为（与迁移前不同的地方）

- 403 只对**非变更请求**（GET/HEAD/OPTIONS）跳转；POST/PUT/PATCH/DELETE 的 403 原样拒绝，
  交 TanStack Query / 调用方提示（ABP 文档语义）。
- 401 会先用 refresh token 静默续期并**重放一次**，续期失败才跳登录。
- 请求与 application configuration 都会带 `__tenant`（多租户）；`setTenantId` 会失效配置缓存。
