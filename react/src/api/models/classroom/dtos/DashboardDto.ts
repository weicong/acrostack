/* oxlint-disable */

import type { ClassroomClassSessionStatus } from "../ClassSessionStatus";
import type { ClassroomDtosGroupStatisticsDto } from "./GroupStatisticsDto";
import type { ClassroomDtosParticipantStateDto } from "./ParticipantStateDto";
import type { ClassroomDtosQuestionStatisticsDto } from "./QuestionStatisticsDto";

/**
 * @description 教师驾驶舱数据（提示词五节：在线/总数/各状态人数/统计/最近更新时间等）。
 * @type object
 */
export type ClassroomDtosDashboardDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  sessionId?: string;
  classroomCode?: string | null;
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
  currentQuestionNumber?: number;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  currentSessionQuestionId?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  onlineCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  totalParticipants?: number;
  /**
   * @description 当前题统计（教师驾驶舱 + 投屏端匿名数据）。
   * @type object | undefined
   */
  statistics?: ClassroomDtosQuestionStatisticsDto;
  participants?: ClassroomDtosParticipantStateDto[] | null;
  /**
   * @description 学习小组统计（按组聚合当前题的提交与正确率）。
   * @type array | undefined
   */
  groupStatistics?: ClassroomDtosGroupStatisticsDto[] | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastStatisticsUpdatedAt?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  serverTime?: string;
};
