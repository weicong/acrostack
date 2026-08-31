/* oxlint-disable */

/**
 * @description 当前题统计（教师课堂面板 + 投屏端匿名数据）。
 * @type object
 */
export type ClassroomDtosQuestionStatisticsDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  sessionQuestionId?: string;
  /**
   * @description 参与总人数。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  totalParticipants?: number;
  /**
   * @description 已提交人数。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  submittedCount?: number;
  /**
   * @description 未开始人数。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  notStartedCount?: number;
  /**
   * @description 作答中（已加入未提交）人数。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  answeringCount?: number;
  /**
   * @description 完成率 = SubmittedCount / TotalParticipants（总人数为 0 时为 0）。
   *
   * Format: `double`
   * @type number | undefined
   */
  completionRate?: number;
  /**
   * @description 各选项人数（客观题选项键 -> 人数；主观题为空）。
   * @type object | undefined
   */
  optionCounts?: {
    [key: string]: number;
  } | null;
  /**
   * @description 客观题正确率（0~1；无判分数据为 null）。
   *
   * Format: `double`
   * @type number | undefined
   */
  correctRate?: number | null;
  /**
   * @description 平均答题用时（秒，从开题到最终提交）。
   *
   * Format: `double`
   * @type number | undefined
   */
  averageAnswerSeconds?: number;
};
