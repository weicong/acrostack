/**
 * 试卷编辑器表单类型：已选题目条目与表单状态。
 * 从 Kubb 生成类型派生以保持字段同步。
 */
import type { ClassroomDtosQuestionDto } from "@/api/models/classroom/dtos/QuestionDto";
import type { ClassroomDtosCreateUpdateQuizDto } from "@/api/models/classroom/dtos/CreateUpdateQuizDto";

/** 已选题目条目（从 QuestionDto 派生，保持选择顺序）。 */
export type SelectedQuestion = {
  [K in "id" | "type" | "stem"]: NonNullable<ClassroomDtosQuestionDto[K]>;
};

export interface QuizFormState extends Pick<ClassroomDtosCreateUpdateQuizDto, "name"> {
  description: string;
  /** 选择顺序即试卷题目顺序。 */
  selected: SelectedQuestion[];
}
