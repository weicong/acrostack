/* oxlint-disable */

import type { ClassroomQuestionType } from "../QuestionType";
import type { ClassroomDtosQuestionOptionDto } from "./QuestionOptionDto";

export type ClassroomDtosQuestionViewDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  questionId?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  sessionQuestionId?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  type?: ClassroomQuestionType;
  stem?: string | null;
  options?: ClassroomDtosQuestionOptionDto[] | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  order?: number;
};
