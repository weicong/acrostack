/* oxlint-disable */

/**
 * @type object
 */
export type VoloAbpSettingManagementSendTestEmailInput = {
  /**
   * @minLength 1
   * @type string
   */
  senderEmailAddress: string;
  /**
   * @minLength 1
   * @type string
   */
  targetEmailAddress: string;
  /**
   * @minLength 1
   * @type string
   */
  subject: string;
  /**
   * @type string | undefined
   */
  body?: string | null;
};
