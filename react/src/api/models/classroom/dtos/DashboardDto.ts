/* oxlint-disable */

import type { ClassroomClassSessionStatus } from "../ClassSessionStatus";
import type { ClassroomDtosParticipantStateDto } from "./ParticipantStateDto";
import type { ClassroomDtosQuestionStatisticsDto } from "./QuestionStatisticsDto";

export type ClassroomDtosDashboardDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  sessionId?: string;
  classroomCode?: string | null;
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
   * Format: `int32`
   * @type integer | undefined
   */
  currentQuestionNumber?: number;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  currentSessionQuestionId?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  onlineCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  totalParticipants?: number;
  statistics?: ClassroomDtosQuestionStatisticsDto;
  participants?: ClassroomDtosParticipantStateDto[] | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastStatisticsUpdatedAt?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  serverTime?: string;
};
