/* oxlint-disable */

import type { ClassroomClassSessionStatus } from "../ClassSessionStatus";
import type { ClassroomDtosStudentAnswerHistoryItemDto } from "./StudentAnswerHistoryItemDto";

/**
 * @description 学员答题记录（本课堂全部题目，按 Order 排序）。
 * @type object
 */
export type ClassroomDtosStudentAnswerHistoryDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  sessionId?: string;
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
   * Format: `date-time`
   * @type string | undefined
   */
  serverTime?: string;
  nickname?: string | null;
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
  answeredCount?: number;
  /**
   * @description 客观题答对数（仅统计已公布答案的题）。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  correctCount?: number;
  items?: ClassroomDtosStudentAnswerHistoryItemDto[] | null;
};
