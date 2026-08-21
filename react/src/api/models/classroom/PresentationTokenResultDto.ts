/* oxlint-disable */

export type ClassroomPresentationTokenResultDto = {
  accessToken?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  expiresInSeconds?: number;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  sessionId?: string;
};
