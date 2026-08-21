/* oxlint-disable */

export type ClassroomDtosCreateUpdateQuizDto = {
  /**
   * @minLength 0
   * @maxLength 128
   * @type string
   */
  name: string;
  /**
   * @minLength 0
   * @maxLength 500
   * @type string | undefined
   */
  description?: string | null;
  questionIds: string[];
};
