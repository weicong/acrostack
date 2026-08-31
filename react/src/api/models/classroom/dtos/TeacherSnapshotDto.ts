/* oxlint-disable */

import type { ClassroomClassSessionStatus } from "../ClassSessionStatus";
import type { ClassroomDtosDashboardDto } from "./DashboardDto";
import type { ClassroomDtosTeacherQuestionInfoDto } from "./TeacherQuestionInfoDto";

/**
 * @description 教师快照：完整课堂状态 + 当前题 + 学员列表 + 当前统计 + 版本。
 * @type object
 */
export type ClassroomDtosTeacherSnapshotDto = {
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
   * Format: `date-time`
   * @type string | undefined
   */
  serverTime?: string;
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
   * @description 教师视角的当前题（含正确答案与解析）。
   * @type object | undefined
   */
  currentQuestion?: ClassroomDtosTeacherQuestionInfoDto;
  /**
   * @description 教师课堂面板数据（提示词五节：在线/总数/各状态人数/统计/最近更新时间等）。
   * @type object | undefined
   */
  dashboard?: ClassroomDtosDashboardDto;
};
