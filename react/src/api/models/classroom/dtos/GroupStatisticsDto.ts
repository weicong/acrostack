/* oxlint-disable */

/**
 * @description 学习小组统计（教师驾驶舱；按加入顺序自动分组，每组默认 5 人）。
 * @type object
 */
export type ClassroomDtosGroupStatisticsDto = {
  /**
   * @description 小组编号（1 起）。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  groupIndex?: number;
  /**
   * @description 组内人数。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  memberCount?: number;
  /**
   * @description 组内在线人数。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  onlineCount?: number;
  /**
   * @description 当前题已提交人数。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  submittedCount?: number;
  /**
   * @description 当前题组内正确率（0~1，已判分口径：正确数/已判分数；无人判分为 null）。
   *
   * Format: `double`
   * @type number | undefined
   */
  correctRate?: number | null;
};
