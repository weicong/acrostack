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
  /**
   * @description 仅公布答案后返回（客观题）。
   * @type boolean | undefined
   */
  isCorrect?: boolean | null;
};
