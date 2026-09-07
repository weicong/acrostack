/* oxlint-disable */

import type { ClassroomClassSessionStatus } from "../ClassSessionStatus";

/**
 * @description 我的课堂列表项（按加入的课堂聚合；进行中的排前）。
 * @type object
 */
export type ClassroomDtosMyClassroomItemDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  sessionId?: string;
  /**
   * @description 课堂使用的试卷名（作为课堂标题展示）。
   * @type string | undefined
   */
  quizTitle?: string | null;
  /**
   * @description 课堂状态机（提示词第五节）：\r\nPreparing -> Waiting（开始课堂）\r\nWaiting  -> Answering（开放题目）\r\nAnswering -> Explaining（截止题目，进入讲评阶段）\r\nExplaining -> Answering（开放下一题）\r\n任意非 Finished -> Finished（结束课堂）
   *
   * Format: `int32`
   * @type integer | undefined
   */
  status?: ClassroomClassSessionStatus;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  groupIndex?: number;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  joinedAt?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  finishedAt?: string | null;
  /**
   * @description 课堂题目总数（老师配置的题目；未开放也计入）。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  questionCount?: number;
  /**
   * @description 本人已提交答案的题目数。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  answeredCount?: number;
};
