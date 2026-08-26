/**
 * 应用名称：取自后端本地化资源（Localization/AcroStack/*.json 的 AppName），
 * 前端不写死。系统仅支持简体中文（见 httpClient.ts 固定 Accept-Language），
 * 因此固定请求 zh-Hans。加载失败时回退到静态兜底名。
 */
import { useQuery } from "@tanstack/react-query";
import { abpApplicationLocalizationGetQueryOptions } from "@/api/hooks/abpApplicationLocalization/useAbpApplicationLocalizationGet";

/** 后端本地化资源名（对应 AcroStackResource 的 LocalizationResourceName("AcroStack")） */
const APP_RESOURCE_NAME = "AcroStack";

/** 本地化未加载或缺失时显示的兜底应用名（与 index.html <title> 保持一致） */
export const FALLBACK_APP_NAME = "AcroStack";

/** 应用名称 Hook：读取后端本地化资源 AcroStack/AppName，随语言/品牌配置变化。 */
export function useAppName(): string {
  const { data } = useQuery({
    ...abpApplicationLocalizationGetQueryOptions({ query: { CultureName: "zh-Hans" } }),
    staleTime: Number.POSITIVE_INFINITY,
    retry: false,
  });

  return data?.resources?.[APP_RESOURCE_NAME]?.texts?.AppName || FALLBACK_APP_NAME;
}
