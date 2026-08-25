/**
 * 题库/试卷共用常量：选项数量上限、选项 key 序列与题型中文标签。
 */

/** 选项数量上限（与后端 MaxOptionCount 一致）。 */
export const MAX_OPTIONS = 8;

/** 选项 key 序列（按顺序编号）。 */
export const OPTION_KEYS = ["A", "B", "C", "D", "E", "F", "G", "H"];

/** 题型中文标签。 */
export const questionTypeLabel: Record<number, string> = {
  1: "单选题",
  2: "多选题",
  3: "判断题",
  4: "简答题",
};
