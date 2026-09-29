/**
 * 宿主注入点。
 *
 * core 不读 `import.meta.env`、不 import `from "@workspace/api-client"`，也不直接操作宿主路由：
 * 环境差异（后端地址、默认文化、403 目标与跳转方式、共享 axios 实例）一律由宿主在 bootstrap 时注入。
 * 这样 core 可脱离具体应用单测，也让"换部署环境/换宿主"只改宿主的组合根。
 */

/** 宿主的环境配置（宿主 `env.ts` 的形状）。 */
export interface CoreEnv {
  /** 后端 HTTP API 根地址（分层/单层方案即 HttpApi.Host）。 */
  apiUrl: string;
  oauth: {
    /** Auth Server / OpenIddict authority。 */
    issuer: string;
    /** OpenIddict 客户端 ID，通常是 `<ProjectName>_App`。 */
    clientId: string;
    /** 登录后回调地址（也是登出回调地址）。 */
    redirectUri: string;
    /** 请求的 scope，需含 `openid profile email offline_access <ProjectName>`（offline_access 用于静默续期）。 */
    scope: string;
  };
}

export interface CoreOptions {
  env: CoreEnv;
  /**
   * 宿主是否处于开发模式（通常是 Vite 的 `import.meta.env.DEV`）。
   * 为 true 且 API 地址不是绝对 URL 时，请求走相对 `/api`（由 dev server 代理）。
   */
  development?: boolean;
  /** 无前端 i18n 时的 `Accept-Language` 兜底值（如 `"zh-Hans"`）。 */
  defaultCulture?: string;
  /** 动态配置未下发 `application.name` 时的应用名兜底。 */
  appNameFallback?: string;
  /** 运行时配置文件的候选地址（按序尝试），默认 `["/dynamic-env.json", "/getEnvConfig"]`。 */
  dynamicEnvUrls?: string[];
  /** 权限不足时的跳转路径，默认 `"/403"`。 */
  forbiddenPath?: string;
  /** 权限不足时的跳转动作（宿主注入 SPA 路由跳转）；缺省时整页跳转。 */
  onForbidden?: (path: string) => void;
}

let options: CoreOptions | null = null;

/** 在应用 bootstrap 的第一行调用；必须先于任何其它 core API。 */
export function configureCore(next: CoreOptions): void {
  options = next;
}

export function getCoreOptions(): CoreOptions {
  if (!options) {
    throw new Error(
      "[@workspace/core] 尚未配置：请在应用入口先调用 configureCore({ env, ... })（见 apps/web/src/lib/core.ts）。",
    );
  }
  return options;
}
