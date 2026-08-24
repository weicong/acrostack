/**
 * 从 Kubb/axios 抛出的错误中提取 ABP 用户可读消息
 * （RemoteServiceErrorResponse.error.message，详细文案由后端本地化下发）。
 */
export function extractAbpErrorMessage(err: unknown): string {
  if (err && typeof err === "object" && "response" in err) {
    const data = (err as { response?: { data?: { error?: { message?: string } } } })?.response
      ?.data;
    const message = data?.error?.message;
    if (message) return message;
  }
  if (err instanceof Error) return err.message;
  return String(err);
}
