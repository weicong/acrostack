/* oxlint-disable */

import type { ClassroomSessionQuestionStatus } from "../SessionQuestionStatus";
import type { ClassroomDtosQuestionViewDto } from "./QuestionViewDto";

export type ClassroomDtosTeacherQuestionInfoDto = {
  question?: ClassroomDtosQuestionViewDto;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  openedAt?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  endsAt?: string | null;
  isAcceptingAnswers?: boolean;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  status?: ClassroomSessionQuestionStatus;
  correctAnswer?: string | null;
  explanation?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  closedAt?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  statisticsPublishedAt?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  answerPublishedAt?: string | null;
};
