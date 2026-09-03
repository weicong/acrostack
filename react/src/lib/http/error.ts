/**
 * 后端错误的用户可读消息提取与翻译。
 *
 * 本项目不做前端 i18n：UI 文案硬编码中文，后端下发的 ABP 本地化 key
 * 统一在本文件翻译（唯一的 key→中文入口），其他模块不得私建映射表。
 */

/**
 * 后端 ABP 本地化 key → 中文文案。
 * 后端返回 key（而非翻译后文本）的场景集中在此补充。
 */
const ABP_ERROR_MESSAGES: Record<string, string> = {
  "Volo.Account:NestedImpersonationIsNotAllowed": "不允许嵌套模拟登录",
  "Volo.Account:RequirePermissionToImpersonateUser": "无模拟该用户的权限",
  "Volo.Account:RequirePermissionToImpersonateTenant": "无模拟该租户的权限",
  "Volo.Account:ImpersonateTenantOnlyAvailableForHost": "仅主机管理员可模拟租户",
  "Volo.Account:YouCanNotImpersonateYourself": "不能模拟自己",
  "Volo.Account:NotImpersonating": "当前并非模拟状态",
  "Volo.Account:ImpersonationSessionNotFound": "模拟会话不存在",
  "Volo.Account:ImpersonationSessionNotActive": "模拟会话已结束或已撤销",
  "Volo.Account:ImpersonationSessionMismatch": "模拟会话与当前登录不匹配",
  "Volo.Account:ImpersonatorUserNotFound": "原管理员账户不存在",
};

/**
 * 翻译后端下发的 ABP 本地化 key；非 key 字符串原样返回。
 */
export function localizeAbpError(message: string): string {
  return ABP_ERROR_MESSAGES[message] ?? message;
}

/**
 * 从 Kubb/axios 抛出的错误中提取 ABP 用户可读消息
 * （RemoteServiceErrorResponse.error.message，详细文案由后端本地化下发，
 * 若为本地化 key 则经 {@link localizeAbpError} 翻译）。
 */
export function extractAbpErrorMessage(err: unknown): string {
  if (err && typeof err === "object" && "response" in err) {
    const data = (err as { response?: { data?: { error?: { message?: string } } } })?.response
      ?.data;
    const message = data?.error?.message;
    if (message) return localizeAbpError(message);
  }
  if (err instanceof Error) return err.message;
  return String(err);
}
