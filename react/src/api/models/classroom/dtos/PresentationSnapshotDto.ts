/* oxlint-disable */

import type { ClassroomClassSessionStatus } from "../ClassSessionStatus";
import type { ClassroomDtosOpenQuestionInfoDto } from "./OpenQuestionInfoDto";

export type ClassroomDtosPresentationSnapshotDto = {
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
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  questionCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  currentQuestionNumber?: number;
  currentQuestion?: ClassroomDtosOpenQuestionInfoDto;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  submittedCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  totalParticipants?: number;
  publishedOptionCounts?: {
    [key: string]: number;
  } | null;
  correctAnswer?: string | null;
  explanation?: string | null;
};
