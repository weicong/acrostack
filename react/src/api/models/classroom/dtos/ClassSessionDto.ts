/* oxlint-disable */

import type { ClassroomClassSessionStatus } from "../ClassSessionStatus";

export type ClassroomDtosClassSessionDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  quizId?: string;
  quizName?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  teacherId?: string;
  classroomCode?: string | null;
  joinUrl?: string | null;
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
  questionCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  currentQuestionNumber?: number;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  startedAt?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  finishedAt?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
