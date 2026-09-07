/* oxlint-disable */

/**
 * @description 更新本人资料。手机号为身份锚点，不可修改。
 * @type object
 */
export type ClassroomDtosUpdateStudentProfileInputDto = {
  /**
   * @minLength 0
   * @maxLength 32
   * @type string
   */
  name: string;
  /**
   * @minLength 0
   * @maxLength 64
   * @type string
   */
  unit: string;
  /**
   * @minLength 0
   * @maxLength 32
   * @type string
   */
  position: string;
};
