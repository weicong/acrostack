/* oxlint-disable */

import type { ClassroomClassSessionStatus } from "../ClassSessionStatus";
import type { ClassroomDtosMyAnswerDto } from "./MyAnswerDto";
import type { ClassroomDtosOpenQuestionInfoDto } from "./OpenQuestionInfoDto";

/**
 * @description 学员快照（提示词九节：当前状态/当前题/EndsAt/本人提交状态/本人最终答案/公布标记/版本号）。
 * @type object
 */
export type ClassroomDtosStudentSnapshotDto = {
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
   * @description 当前题的开放信息（学员端倒计时依据）。
   * @type object | undefined
   */
  currentQuestion?: ClassroomDtosOpenQuestionInfoDto;
  myAnswer?: ClassroomDtosMyAnswerDto;
  statisticsPublished?: boolean;
  answerPublished?: boolean;
  /**
   * @description 仅 AnswerPublished 后下发。
   * @type string | undefined
   */
  correctAnswer?: string | null;
  explanation?: string | null;
  /**
   * @description 已公布统计时的匿名选项分布（学员也可见教师公布的统计）。
   * @type object | undefined
   */
  publishedOptionCounts?: {
    [key: string]: number;
  } | null;
};
