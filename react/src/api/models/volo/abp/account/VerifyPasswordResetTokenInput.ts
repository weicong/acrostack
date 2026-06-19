/* oxlint-disable */

/**
 * @type object
 */
export type VoloAbpAccountVerifyPasswordResetTokenInput = {
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
};
