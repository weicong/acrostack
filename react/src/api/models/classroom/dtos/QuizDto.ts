/* oxlint-disable */

export type ClassroomDtosQuizDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  name?: string | null;
  description?: string | null;
  questionIds?: string[] | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  readonly questionCount?: number;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
