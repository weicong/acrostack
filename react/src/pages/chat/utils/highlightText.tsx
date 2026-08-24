/**
 * 消息关键词高亮工具：消息气泡与搜索结果行共用。
 */
/** 转义字符串以安全嵌入 RegExp。 */
function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * 将 `text` 中大小写不敏感匹配的 `keyword` 用 `<mark>` 包裹并返回 JSX，
 * `highlightClassName` 为高亮样式类。
 */
export function highlightText(text: string, keyword: string, highlightClassName: string) {
  if (!keyword.trim() || !text) return text;
  const parts = text.split(new RegExp(`(${escapeRegExp(keyword)})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <mark key={i} className={highlightClassName}>
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}
