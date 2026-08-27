/**
 * 题库编辑器表单类型：题型取值、选项行与表单状态。
 * 从 Kubb 生成类型派生以保持字段同步。
 */
import type { ClassroomDtosQuestionOptionDto } from "@/api/models/classroom/dtos/QuestionOptionDto";

/** UI 窄化：生成类型 ClassroomQuestionType 为 number，表单仅允许 4 种题型。 */
export type QuestionTypeValue = 1 | 2 | 3 | 4;

/** 单个选项行（从生成 DTO 派生，去 null/undefined 使表单字段必填）。 */
export type OptionRow = {
  [K in "key" | "text"]: NonNullable<ClassroomDtosQuestionOptionDto[K]>;
};

/** 编辑器表单状态（correctKeys 单选长度 1；判断题用 trueFalseAnswer）。 */
export interface QuestionFormState {
  type: QuestionTypeValue;
  stem: string;
  options: OptionRow[];
  correctKeys: string[];
  trueFalseAnswer: "true" | "false";
  explanation: string;
}
