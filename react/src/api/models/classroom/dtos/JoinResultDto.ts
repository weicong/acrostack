/* oxlint-disable */

import type { ClassroomClassSessionStatus } from "../ClassSessionStatus";

export type ClassroomDtosJoinResultDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  sessionId?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  participantId?: string;
  /**
   * @description 课堂范围短期 JWT（学员角色）。客户端持久化后用于快照/提交/SignalR。
   * @type string | undefined
   */
  accessToken?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  expiresInSeconds?: number;
  nickname?: string | null;
  /**
   * @description 课堂状态机（提示词第五节）：\r\nPreparing -> Waiting（开始课堂）\r\nWaiting  -> Answering（开放题目）\r\nAnswering -> Explaining（截止题目，进入讲评阶段）\r\nExplaining -> Answering（开放下一题）\r\n任意非 Finished -> Finished（结束课堂）
   *
   * Format: `int32`
   * @type integer | undefined
   */
  sessionStatus?: ClassroomClassSessionStatus;
};
