/* oxlint-disable */

import type { ClassroomOnlineStatus } from "../OnlineStatus";
import type { ClassroomDtosParticipantAnswerState } from "./ParticipantAnswerState";

export type ClassroomDtosParticipantStateDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  participantId?: string;
  nickname?: string | null;
  studentNumber?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  onlineStatus?: ClassroomOnlineStatus;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastSeenAt?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  answerState?: ClassroomDtosParticipantAnswerState;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  submittedAt?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  revision?: number | null;
  isCorrect?: boolean | null;
};
