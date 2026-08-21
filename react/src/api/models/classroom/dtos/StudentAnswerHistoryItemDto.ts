/* oxlint-disable */

import type { ClassroomQuestionType } from "../QuestionType";
import type { ClassroomSessionQuestionStatus } from "../SessionQuestionStatus";
import type { ClassroomDtosQuestionOptionDto } from "./QuestionOptionDto";

export type ClassroomDtosStudentAnswerHistoryItemDto = {
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  order?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  questionType?: ClassroomQuestionType;
  stem?: string | null;
  options?: ClassroomDtosQuestionOptionDto[] | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  questionStatus?: ClassroomSessionQuestionStatus;
  myAnswerContent?: string | null;
  myIsCorrect?: boolean | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  myRevision?: number;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  myLastSubmittedAt?: string | null;
  correctAnswer?: string | null;
  explanation?: string | null;
};
