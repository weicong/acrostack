/* oxlint-disable */

export type ClassroomDtosMyAnswerDto = {
  answerContent?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  submittedAt?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  revision?: number;
  isCorrect?: boolean | null;
};
