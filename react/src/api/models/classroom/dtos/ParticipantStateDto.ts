/* oxlint-disable */

import type { ClassroomOnlineStatus } from "../OnlineStatus";
import type { ClassroomDtosParticipantAnswerState } from "./ParticipantAnswerState";

/**
 * @description 教师驾驶舱的学员条目（含个人状态；教师专用，绝不下发给学员/投屏端）。
 * @type object
 */
export type ClassroomDtosParticipantStateDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  participantId?: string;
  nickname?: string | null;
  studentNumber?: string | null;
  /**
   * @description 学员在线状态（基于 SignalR 连接 + LastSeenAt 心跳推断，允许短暂误差）。\r\n在线状态只影响教师端展示，不影响答案提交的准确性。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  onlineStatus?: ClassroomOnlineStatus;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastSeenAt?: string;
  /**
   * @description 学员个人作答状态（教师驾驶舱展示）。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  answerState?: ClassroomDtosParticipantAnswerState;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  submittedAt?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  revision?: number | null;
  /**
   * @description 客观题判分（公布答案前后均对教师可见）。
   * @type boolean | undefined
   */
  isCorrect?: boolean | null;
};
