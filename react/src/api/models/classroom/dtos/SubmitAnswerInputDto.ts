/* oxlint-disable */

export type ClassroomDtosSubmitAnswerInputDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  sessionQuestionId: string;
  /**
   * @minLength 0
   * @maxLength 64
   * @type string
   */
  requestId: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  classroomVersion?: number;
  /**
   * @minLength 0
   * @maxLength 4000
   * @type string
   */
  answerContent: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  clientStartedAt?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  clientSubmittedAt?: string;
};
