/* oxlint-disable */

/**
 * @type object
 */
export type VoloAbpSettingManagementEmailSettingsDto = {
  /**
   * @type string | undefined
   */
  smtpHost?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  smtpPort?: number;
  /**
   * @type string | undefined
   */
  smtpUserName?: string | null;
  /**
   * @type string | undefined
   */
  smtpPassword?: string | null;
  /**
   * @type string | undefined
   */
  smtpDomain?: string | null;
  /**
   * @type boolean | undefined
   */
  smtpEnableSsl?: boolean;
  /**
   * @type boolean | undefined
   */
  smtpUseDefaultCredentials?: boolean;
  /**
   * @type string | undefined
   */
  defaultFromAddress?: string | null;
  /**
   * @type string | undefined
   */
  defaultFromDisplayName?: string | null;
};
