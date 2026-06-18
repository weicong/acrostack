type FieldError = { message?: string } | string | undefined | null;

type FieldMetaLike = {
  errors: ReadonlyArray<FieldError>;
  isTouched: boolean;
};

/**
 * 从 TanStack Form 字段元数据中提取错误消息。
 *
 * 遵循 TanStack Form 的约定：仅当字段 `isTouched` 时才显示错误，
 * 避免表单初始加载就显示校验错误。
 */
export function getErrorMessage(meta: FieldMetaLike): string | undefined {
  if (!meta.isTouched) return undefined;
  const msg = meta.errors
    .map((e) => (typeof e === "string" ? e : (e?.message ?? "")))
    .filter(Boolean)
    .join(", ");
  return msg || undefined;
}
