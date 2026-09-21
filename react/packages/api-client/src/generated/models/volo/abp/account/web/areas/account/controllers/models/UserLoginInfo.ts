/* oxlint-disable */

export type VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo = {
  /**
   * @minLength 0
   * @maxLength 255
   * @type string
   */
  userNameOrEmailAddress: string;
  /**
   * @description
   * Format: `password`
   * @minLength 0
   * @maxLength 32
   * @type string
   */
  password: string;
  rememberMe?: boolean;
};
