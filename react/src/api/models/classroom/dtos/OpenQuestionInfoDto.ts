/* oxlint-disable */

import type { ClassroomSessionQuestionStatus } from "../SessionQuestionStatus";
import type { ClassroomDtosQuestionViewDto } from "./QuestionViewDto";

export type ClassroomDtosOpenQuestionInfoDto = {
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
};
