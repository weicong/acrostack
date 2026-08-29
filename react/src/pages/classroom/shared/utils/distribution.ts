/**
 * 选项分布展示助手。
 *
 * 后端 optionCounts 的键为小写归一：单选/多选为 "a"、"b"…，判断题为 "true"/"false"；
 * 计数语义是"选择该选项的人数"——多选题一人提交会同时贡献多个键，
 * 因此提交人数必须使用后端 submittedCount，不能对 counts 求和。
 */

/** 判断题分布键的显示文案（与 student-session/utils/answerFormat 的 trueFalseLabel 一致）。 */
function trueFalseLabel(value: string): string {
  if (value === "true") return "对";
  if (value === "false") return "错";
  return value;
}

/** 单字母键转大写，其余原样（"c" -> "C"，"true" 保持不变）。 */
export function normalizeDistributionKey(key: string): string {
  return key.length === 1 ? key.toUpperCase() : key;
}

/** 分布行的显示键：判断题显示 对/错，选项题为归一后的大写字母。 */
export function distributionKeyLabel(key: string): string {
  if (key === "true" || key === "false") return trueFalseLabel(key);
  return normalizeDistributionKey(key);
}

/**
 * key 是否属于正确答案。correctAnswer 编码与 Question.CorrectAnswer 一致：
 * 单选 "A"、多选 "A,C"（逗号分隔、顺序无关）、判断 "true"/"false"；比较不区分大小写。
 */
export function isCorrectDistributionKey(
  correctAnswer: string | null | undefined,
  key: string,
): boolean {
  if (!correctAnswer) return false;
  const normalized = normalizeDistributionKey(key).toUpperCase();
  return correctAnswer.split(",").some((part) => part.trim().toUpperCase() === normalized);
}
