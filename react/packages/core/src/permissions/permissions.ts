/**
 * ABP application configuration：授权数据的唯一来源。
 *
 * 权限在服务端定义，经 `application-configuration` 下发给前端，用于
 * 路由守卫、菜单过滤与组件级条件渲染（见 ABP React 权限管理文档）。
 * 拉取时携带当前 access token 与租户头（多租户下权限随租户变化）。
 */
import { createAbpReactAppConfig } from "@volo/abp-react-app-config";
import { userManager } from "../auth/user-manager";
import { getApiUrl } from "../config/runtime-config";
import { APP_CONFIG_QUERY_KEY } from "../query/query-keys";
import { queryClient } from "../query/query-client";
import { tenantHeaders } from "../tenant/tenant";

/** 复合策略求值（`A || B`、`A && B`），语义与 @volo/abp-react-app-config 一致。 */
function evaluatePolicy(policies: Record<string, boolean>, policy: string): boolean {
  const hasPolicy = (p: string) => policies[p.trim()] === true;
  if (policy.includes("||")) {
    return policy.split("||").some((p) => hasPolicy(p));
  }
  if (policy.includes("&&")) {
    return policy.split("&&").every((p) => hasPolicy(p));
  }
  return hasPolicy(policy);
}

export const appConfig = createAbpReactAppConfig({
  baseUrl: () => getApiUrl(),
  // 本项目不做前端 i18n：后端本地化 key 的翻译集中在 http/error.ts
  includeLocalizationResources: false,
});

/** 拉取 application configuration（当前用户 + grantedPolicies）。 */
export async function fetchAppConfig(token: string | null): Promise<void> {
  await appConfig.fetchConfig(token, { headers: tenantHeaders() });
}

/** application configuration 的查询键。 */
export function appConfigQueryKey(): readonly unknown[] {
  return APP_CONFIG_QUERY_KEY;
}

/**
 * 通过 TanStack Query 加载 application configuration 的唯一入口：
 * 并发调用去重，守卫（beforeLoad）与 AuthProvider 共用同一条路径。
 */
export async function ensureAppConfig(): Promise<void> {
  await queryClient.ensureQueryData({
    queryKey: APP_CONFIG_QUERY_KEY,
    queryFn: async () => {
      const user = await userManager.getUser();
      await fetchAppConfig(user?.access_token ?? null);
      return true;
    },
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * 失效缓存的 application configuration（如刷新动态声明、切换租户后），
 * 使下一次守卫/导航重新拉取权限。
 */
export function invalidateAppConfig(): void {
  void queryClient.invalidateQueries({ queryKey: APP_CONFIG_QUERY_KEY });
}

/** 非 React 上下文（守卫）用：支持复合策略（`||` 与 `&&`）。 */
export function isPolicyGranted(policy: string): boolean {
  const sections = appConfig.getSections() as {
    auth?: {
      grantedPolicies?: Record<string, boolean>;
      policies?: Record<string, boolean>;
    };
  };
  const policies = sections.auth?.grantedPolicies ?? sections.auth?.policies ?? {};
  return evaluatePolicy(policies, policy);
}

/** 组件内权限判定（响应式）：`const { isGranted } = usePermissions()`。 */
export function usePermissions() {
  return appConfig.usePolicies();
}

interface CurrentUser {
  id?: string;
  userName?: string;
  name?: string;
  email?: string;
  impersonatorUserId?: string | null;
  impersonatorUserName?: string | null;
}

interface AppConfigSnapshot {
  sections?: {
    currentUser?: CurrentUser;
  };
}

/** 当前用户（来自 application configuration，含模拟登录标记）。 */
export function useCurrentUser(): CurrentUser | null {
  const snapshot = appConfig.useSnapshot() as AppConfigSnapshot | null;
  return snapshot?.sections?.currentUser ?? null;
}
