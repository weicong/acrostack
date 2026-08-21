/* oxlint-disable */

import type { ClassroomClassSessionStatus } from "../ClassSessionStatus";
import type { ClassroomDtosMyAnswerDto } from "./MyAnswerDto";
import type { ClassroomDtosOpenQuestionInfoDto } from "./OpenQuestionInfoDto";

export type ClassroomDtosStudentSnapshotDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  sessionId?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  status?: ClassroomClassSessionStatus;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  version?: number;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  serverTime?: string;
  currentQuestion?: ClassroomDtosOpenQuestionInfoDto;
  myAnswer?: ClassroomDtosMyAnswerDto;
  statisticsPublished?: boolean;
  answerPublished?: boolean;
  correctAnswer?: string | null;
  explanation?: string | null;
  publishedOptionCounts?: {
    [key: string]: number;
  } | null;
};
