/* oxlint-disable */

import type { ClassroomQuestionType } from "../QuestionType";
import type { ClassroomDtosQuestionOptionDto } from "./QuestionOptionDto";

export type ClassroomDtosQuestionDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  type?: ClassroomQuestionType;
  stem?: string | null;
  options?: ClassroomDtosQuestionOptionDto[] | null;
  correctAnswer?: string | null;
  explanation?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
