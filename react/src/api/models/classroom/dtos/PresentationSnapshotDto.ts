/* oxlint-disable */

import type { ClassroomClassSessionStatus } from "../ClassSessionStatus";
import type { ClassroomDtosOpenQuestionInfoDto } from "./OpenQuestionInfoDto";

/**
 * @description 投屏快照：仅匿名数据。禁止包含学员姓名、学号、ParticipantId、个人答案\r\n（提示词五、六节）。
 * @type object
 */
export type ClassroomDtosPresentationSnapshotDto = {
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
   * @description 当前题的开放信息（学员端倒计时依据）。
   * @type object | undefined
   */
  currentQuestion?: ClassroomDtosOpenQuestionInfoDto;
  /**
   * @description 已提交人数 / 参与总人数。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  submittedCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  totalParticipants?: number;
  /**
   * @description 教师公布统计后的匿名选项分布；未公布为 null。
   * @type object | undefined
   */
  publishedOptionCounts?: {
    [key: string]: number;
  } | null;
  /**
   * @description 教师公布答案后下发。
   * @type string | undefined
   */
  correctAnswer?: string | null;
  explanation?: string | null;
};
