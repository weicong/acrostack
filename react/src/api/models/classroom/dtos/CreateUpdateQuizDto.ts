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
  /**
   * @description 题目 Id 的有序列表（顺序即试卷顺序，服务端重新编号）。
   * @type array
   */
  questionIds: string[];
};
