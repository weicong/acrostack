/* oxlint-disable */

/**
 * @type object
 */
export type VoloAbpAccountSendPasswordResetCodeDto = {
  /**
   * @description
   * Format: `email`
   * @minLength 0
   * @maxLength 256
   * @type string
   */
  email: string;
  /**
   * @minLength 1
   * @type string
   */
  appName: string;
  /**
   * @type string | undefined
   */
  returnUrl?: string | null;
  /**
   * @type string | undefined
   */
  returnUrlHash?: string | null;
};
