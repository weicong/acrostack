/* oxlint-disable */

export type VoloAbpAccountRegisterDto = {
  readonly extraProperties?: {
    [key: string]: unknown;
  } | null;
  /**
   * @minLength 0
   * @maxLength 256
   * @type string
   */
  userName: string;
  /**
   * @description
   * Format: `email`
   * @minLength 0
   * @maxLength 256
   * @type string
   */
  emailAddress: string;
  /**
   * @description
   * Format: `password`
   * @minLength 0
   * @maxLength 128
   * @type string
   */
  password: string;
  /**
   * @minLength 1
   * @type string
   */
  appName: string;
};
