/* oxlint-disable */

import type { ClassroomClassSessionStatus } from "../ClassSessionStatus";

export type ClassroomDtosClassSessionDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  quizId?: string;
  quizName?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  teacherId?: string;
  classroomCode?: string | null;
  /**
   * @description 可分享的加入地址（前端路由 /student/join?code=xxx）。
   * @type string | undefined
   */
  joinUrl?: string | null;
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
  version?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  questionCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  currentQuestionNumber?: number;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  startedAt?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  finishedAt?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
