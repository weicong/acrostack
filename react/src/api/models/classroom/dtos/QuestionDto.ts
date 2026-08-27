/* oxlint-disable */

import type { ClassroomQuestionType } from "../QuestionType";
import type { ClassroomDtosQuestionOptionDto } from "./QuestionOptionDto";

/**
 * @description 题目 DTO。CorrectAnswer/Explanation 仅返回给具有题库管理权限的教师。
 * @type object
 */
export type ClassroomDtosQuestionDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description 题型：单选 / 多选 / 判断 / 简答（主观题不自动判分）。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  type?: ClassroomQuestionType;
  stem?: string | null;
  options?: ClassroomDtosQuestionOptionDto[] | null;
  correctAnswer?: string | null;
  explanation?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
