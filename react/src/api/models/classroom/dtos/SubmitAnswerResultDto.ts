/* oxlint-disable */

export type ClassroomDtosSubmitAnswerResultDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  sessionQuestionId?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  answerRecordId?: string;
  isDuplicateRequest?: boolean;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  revision?: number;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  serverSubmittedAt?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  classroomVersion?: number;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  serverTime?: string;
};
