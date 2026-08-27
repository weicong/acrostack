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
  /**
   * @description 是否为幂等命中的重放（未新建/未修订）。
   * @type boolean | undefined
   */
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
   * @description 当前课堂版本（供客户端校准）。
   *
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
