/* oxlint-disable */

import type { ClassroomClassSessionStatus } from "../ClassSessionStatus";
import type { ClassroomDtosStudentAnswerHistoryItemDto } from "./StudentAnswerHistoryItemDto";

export type ClassroomDtosStudentAnswerHistoryDto = {
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
  nickname?: string | null;
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
  answeredCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  correctCount?: number;
  items?: ClassroomDtosStudentAnswerHistoryItemDto[] | null;
};
