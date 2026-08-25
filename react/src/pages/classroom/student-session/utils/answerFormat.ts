/**
 * 学员答题相关显示格式化助手。
 */

/** 判断题答案编码 "true"/"false" 的显示文案（对/错）。 */
export function trueFalseLabel(value: string | null | undefined): string {
  if (value === "true") return "对";
  if (value === "false") return "错";
  return value ?? "";
}
