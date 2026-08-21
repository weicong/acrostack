/* oxlint-disable */

import type { ClassroomClassSessionStatus } from "../ClassSessionStatus";

export type ClassroomDtosJoinResultDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  sessionId?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  participantId?: string;
  accessToken?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  expiresInSeconds?: number;
  nickname?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  sessionStatus?: ClassroomClassSessionStatus;
};
