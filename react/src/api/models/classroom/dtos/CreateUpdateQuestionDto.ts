/* oxlint-disable */

import type { ClassroomQuestionType } from "../QuestionType";
import type { ClassroomDtosQuestionOptionDto } from "./QuestionOptionDto";

export type ClassroomDtosCreateUpdateQuestionDto = {
  /**
   * @description 题型：单选 / 多选 / 判断 / 简答（主观题不自动判分）。
   *
   * Format: `int32`
   * @type integer
   */
  type: ClassroomQuestionType;
  /**
   * @minLength 0
   * @maxLength 2000
   * @type string
   */
  stem: string;
  options: ClassroomDtosQuestionOptionDto[];
  /**
   * @description 客观题必填；简答题忽略。
   * @minLength 0
   * @maxLength 128
   * @type string | undefined
   */
  correctAnswer?: string | null;
  /**
   * @minLength 0
   * @maxLength 4000
   * @type string | undefined
   */
  explanation?: string | null;
};
