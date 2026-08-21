/* oxlint-disable */

import type { ClassroomQuestionType } from "../QuestionType";
import type { ClassroomDtosQuestionOptionDto } from "./QuestionOptionDto";

export type ClassroomDtosCreateUpdateQuestionDto = {
  /**
   * @description
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
