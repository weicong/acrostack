/**
 * 应用名称：单一数据源模块。
 *
 * 取自后端本地化资源（Localization/AcroStack/*.json 的 AppName），前端不写死。
 * 复用生成的 Kubb 客户端请求 /api/abp/application-localization，自动获得全局
 * httpClient 拦截器能力（baseURL/Bearer/__tenant/固定 Accept-Language: zh-Hans）。
 *
 * 架构约定：TanStack Query 缓存即全局 store——UI 组件与 document.title 共享同一条
 * 查询（一次请求、去重订阅）；不引入额外 Context，避免服务端状态在 React 树中二次存储。
 */
import { useQuery, type QueryClient } from "@tanstack/react-query";
import { abpApplicationLocalizationGetQueryOptions } from "@/api/hooks/abpApplicationLocalization/useAbpApplicationLocalizationGet";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationDto } from "@/api/models/volo/abp/aspNetCore/mvc/applicationConfigurations/ApplicationLocalizationDto";

/** 后端本地化资源名（对应 AcroStackResource 的 LocalizationResourceName("AcroStack")） */
const APP_RESOURCE_NAME = "AcroStack";

/** 本地化未加载或缺失时显示的兜底应用名（与 index.html <title> 保持一致） */
export const FALLBACK_APP_NAME = "AcroStack";

/**
 * 应用名称查询选项：整个应用唯一的定义处。
 * 系统仅支持简体中文（见 httpClient.ts 固定 Accept-Language），故固定 CultureName=zh-Hans；
 * staleTime=Infinity 表示每会话取一次；retry=false 避免后端短暂不可用时的无谓重试风暴
 * （失败的查询在下个观察者挂载时会自动重新拉取，具备自愈性）。
 */
const appNameQuery = {
  ...abpApplicationLocalizationGetQueryOptions({ query: { CultureName: "zh-Hans" } }),
  staleTime: Number.POSITIVE_INFINITY,
  retry: false,
};

function extractAppName(
  data: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationDto | undefined,
): string | undefined {
  return data?.resources?.[APP_RESOURCE_NAME]?.texts?.AppName ?? undefined;
}

/** 应用名称 Hook：读取后端 AppName，随语言/品牌配置变化；加载完成前显示兜底名。 */
export function useAppName(): string {
  const { data } = useQuery(appNameQuery);
  return extractAppName(data) ?? FALLBACK_APP_NAME;
}

/**
 * 启动时同步浏览器标签页标题（fire-and-forget）：
 * 与 UI 共享查询缓存（fetchQuery 命中同一 staleTime=Infinity 条目），
 * 失败时保持 index.html 的静态标题作为兜底。
 */
export function syncDocumentTitle(queryClient: QueryClient): void {
  void queryClient
    .fetchQuery(appNameQuery)
    .then((data) => {
      const name = extractAppName(data);
      if (name) document.title = name;
    })
    .catch(() => undefined);
}
