/* oxlint-disable */

import type { ClassroomQuestionType } from "../QuestionType";
import type { ClassroomSessionQuestionStatus } from "../SessionQuestionStatus";
import type { ClassroomDtosQuestionOptionDto } from "./QuestionOptionDto";

/**
 * @description 学员答题记录条目（本课堂逐题回顾）。正确答案与解析仅在对应题目\r\nAnswerPublished 后下发，与快照安全规则一致。
 * @type object
 */
export type ClassroomDtosStudentAnswerHistoryItemDto = {
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  order?: number;
  /**
   * @description 题型：单选 / 多选 / 判断 / 简答（主观题不自动判分）。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  questionType?: ClassroomQuestionType;
  stem?: string | null;
  options?: ClassroomDtosQuestionOptionDto[] | null;
  /**
   * @description 课堂题目状态机（提示词第五节）：\r\nPending -> Open（开放）\r\nOpen -> Closed（截止）\r\nClosed -> StatisticsPublished（公布匿名统计）\r\nClosed -> AnswerPublished（公布答案）\r\nStatisticsPublished -> AnswerPublished（先公布统计后公布答案）
   *
   * Format: `int32`
   * @type integer | undefined
   */
  questionStatus?: ClassroomSessionQuestionStatus;
  /**
   * @description 本人的最终答案；未提交为 null。
   * @type string | undefined
   */
  myAnswerContent?: string | null;
  /**
   * @description 客观题判分结果；仅公布答案后非 null。主观题/未答为 null。
   * @type boolean | undefined
   */
  myIsCorrect?: boolean | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  myRevision?: number;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  myLastSubmittedAt?: string | null;
  /**
   * @description 仅 AnswerPublished 后下发。
   * @type string | undefined
   */
  correctAnswer?: string | null;
  /**
   * @description 仅 AnswerPublished 后下发。
   * @type string | undefined
   */
  explanation?: string | null;
};
