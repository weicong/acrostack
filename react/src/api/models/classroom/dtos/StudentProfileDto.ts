/* oxlint-disable */

/**
 * @description 学员档案视图（手机号脱敏由客户端处理；此处返回原值供本人核对）。
 * @type object
 */
export type ClassroomDtosStudentProfileDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  name?: string | null;
  phone?: string | null;
  unit?: string | null;
  position?: string | null;
};
