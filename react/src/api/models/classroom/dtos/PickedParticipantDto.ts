/* oxlint-disable */

/**
 * @description 随机点名结果（教师端展示；含学号，仅返回给教师）。
 * @type object
 */
export type ClassroomDtosPickedParticipantDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  participantId?: string;
  nickname?: string | null;
  studentNumber?: string | null;
  /**
   * @description 学习小组编号（1 起）。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  groupIndex?: number;
};
