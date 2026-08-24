/**
 * 文件管理页工具函数：图片内容类型判断与字节大小格式化。
 */

const IMAGE_CONTENT_TYPES = ["image/png", "image/jpeg", "image/gif", "image/webp", "image/bmp"];

/** 判断内容类型是否为可生成缩略图的图片类型。 */
export function isImageContentType(contentType?: string | null): boolean {
  if (!contentType) return false;
  return IMAGE_CONTENT_TYPES.includes(contentType.toLowerCase());
}

/** 将字节数格式化为人类可读字符串（空值或非正值显示 "-"）。 */
export function formatBytes(bytes?: number | bigint): string {
  if (bytes == null) return "-";
  const n = typeof bytes === "bigint" ? Number(bytes) : bytes;
  if (!Number.isFinite(n) || n <= 0) return "-";
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  if (n < 1024 * 1024 * 1024) return `${(n / (1024 * 1024)).toFixed(1)} MB`;
  return `${(n / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}
