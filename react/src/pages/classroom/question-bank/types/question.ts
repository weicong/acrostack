/**
 * 题库编辑器表单类型：题型取值、选项行与表单状态。
 */

export type QuestionTypeValue = 1 | 2 | 3 | 4;

/** 单个选项行。 */
export interface OptionRow {
  key: string;
  text: string;
}

/** 编辑器表单状态（correctKeys 单选长度 1；判断题用 trueFalseAnswer）。 */
export interface QuestionFormState {
  type: QuestionTypeValue;
  stem: string;
  options: OptionRow[];
  correctKeys: string[];
  trueFalseAnswer: "true" | "false";
  explanation: string;
}
