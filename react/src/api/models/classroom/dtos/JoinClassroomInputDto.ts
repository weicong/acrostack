/* oxlint-disable */

export type ClassroomDtosJoinClassroomInputDto = {
  /**
   * @minLength 0
   * @maxLength 6
   * @type string
   */
  classroomCode: string;
  /**
   * @description 手机号：学员档案唯一键。已注册时须与档案匹配。
   * @minLength 0
   * @maxLength 20
   * @type string
   */
  phone: string;
  /**
   * @description 姓名。档案已存在时必须与注册姓名一致（防误用他人手机号）；不存在时作为档案姓名与展示名。
   * @minLength 0
   * @maxLength 32
   * @type string
   */
  name: string;
  /**
   * @description 首次加入（无档案）时必填。
   * @minLength 0
   * @maxLength 64
   * @type string | undefined
   */
  unit?: string | null;
  /**
   * @description 首次加入（无档案）时必填。
   * @minLength 0
   * @maxLength 32
   * @type string | undefined
   */
  position?: string | null;
};
