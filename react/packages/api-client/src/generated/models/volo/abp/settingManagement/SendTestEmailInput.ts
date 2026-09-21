/* oxlint-disable */

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
  body?: string | null;
};
