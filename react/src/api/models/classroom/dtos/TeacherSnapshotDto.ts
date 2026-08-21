/* oxlint-disable */

import type { ClassroomClassSessionStatus } from "../ClassSessionStatus";
import type { ClassroomDtosDashboardDto } from "./DashboardDto";
import type { ClassroomDtosTeacherQuestionInfoDto } from "./TeacherQuestionInfoDto";

export type ClassroomDtosTeacherSnapshotDto = {
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
  currentQuestion?: ClassroomDtosTeacherQuestionInfoDto;
  dashboard?: ClassroomDtosDashboardDto;
};
