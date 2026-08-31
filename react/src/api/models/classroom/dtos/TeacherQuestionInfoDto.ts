/* oxlint-disable */

import type { ClassroomSessionQuestionStatus } from "../SessionQuestionStatus";
import type { ClassroomDtosQuestionViewDto } from "./QuestionViewDto";

/**
 * @description 教师视角的当前题（含正确答案与解析）。
 * @type object
 */
export type ClassroomDtosTeacherQuestionInfoDto = {
  /**
   * @description 学员/投屏可见的题目视图。绝不包含 CorrectAnswer 与 Explanation\r\n（教师公布答案后通过独立字段下发）。
   * @type object | undefined
   */
  question?: ClassroomDtosQuestionViewDto;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  openedAt?: string;
  /**
   * @description 服务端绝对截止时间；客户端倒计时 = EndsAt - ServerTime（含时钟偏移校正）。
   *
   * Format: `date-time`
   * @type string | undefined
   */
  endsAt?: string | null;
  isAcceptingAnswers?: boolean;
  /**
   * @description 课堂题目状态机：\r\nPending -> Open（开放）\r\nOpen -> Closed（截止）\r\nClosed -> AnswerPublished（公布答案；匿名统计随答案一并可见）
   *
   * Format: `int32`
   * @type integer | undefined
   */
  status?: ClassroomSessionQuestionStatus;
  correctAnswer?: string | null;
  explanation?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  closedAt?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  statisticsPublishedAt?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  answerPublishedAt?: string | null;
};
