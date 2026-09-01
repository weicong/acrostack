/* oxlint-disable */

import type { ClassroomQuestionType } from "../QuestionType";
import type { ClassroomSessionQuestionStatus } from "../SessionQuestionStatus";
import type { ClassroomDtosQuestionOptionDto } from "./QuestionOptionDto";
import type { ClassroomDtosQuestionStatisticsDto } from "./QuestionStatisticsDto";

/**
 * @description 教师视角的历史题目条目（题目记录）：切到下一题后回看已讲过的题目。\r\n含正确答案与解析（教师权限口径）及该题最终统计。
 * @type object
 */
export type ClassroomDtosTeacherQuestionHistoryItemDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  sessionQuestionId?: string;
  /**
   * @description 课堂内题号（1 起）。
   *
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
  type?: ClassroomQuestionType;
  stem?: string | null;
  options?: ClassroomDtosQuestionOptionDto[] | null;
  /**
   * @description 课堂题目状态机：\r\nPending -> Open（开放）\r\nOpen -> Closed（截止）\r\nClosed -> AnswerPublished（公布答案；匿名统计随答案一并可见）
   *
   * Format: `int32`
   * @type integer | undefined
   */
  status?: ClassroomSessionQuestionStatus;
  /**
   * @description 正确答案（教师视角始终下发，未公布时教师可提前掌握）。
   * @type string | undefined
   */
  correctAnswer?: string | null;
  explanation?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  openedAt?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  closedAt?: string | null;
  /**
   * @description 当前题统计（教师课堂面板 + 投屏端匿名数据）。
   * @type object | undefined
   */
  statistics?: ClassroomDtosQuestionStatisticsDto;
};
