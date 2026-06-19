/* oxlint-disable */

/**
 * @type object
 */
export type VoloAbpAccountResetPasswordDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  userId?: string;
  /**
   * @minLength 1
   * @type string
   */
  resetToken: string;
  /**
   * @minLength 1
   * @type string
   */
  password: string;
};
