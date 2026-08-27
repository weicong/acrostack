/* oxlint-disable */

import type { ClassroomQuestionType } from "../QuestionType";
import type { ClassroomDtosQuestionOptionDto } from "./QuestionOptionDto";

/**
 * @description 学员/投屏可见的题目视图。绝不包含 CorrectAnswer 与 Explanation\r\n（教师公布答案后通过独立字段下发）。
 * @type object
 */
export type ClassroomDtosQuestionViewDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  questionId?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  sessionQuestionId?: string;
  /**
   * @description 题型：单选 / 多选 / 判断 / 简答（主观题不自动判分）。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  type?: ClassroomQuestionType;
  stem?: string | null;
  options?: ClassroomDtosQuestionOptionDto[] | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  order?: number;
};
