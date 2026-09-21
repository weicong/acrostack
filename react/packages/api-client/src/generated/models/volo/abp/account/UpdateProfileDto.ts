/* oxlint-disable */

export type VoloAbpAccountUpdateProfileDto = {
  readonly extraProperties?: {
    [key: string]: unknown;
  } | null;
  /**
   * @minLength 0
   * @maxLength 256
   * @type string | undefined
   */
  userName?: string | null;
  /**
   * @minLength 0
   * @maxLength 256
   * @type string | undefined
   */
  email?: string | null;
  /**
   * @minLength 0
   * @maxLength 64
   * @type string | undefined
   */
  name?: string | null;
  /**
   * @minLength 0
   * @maxLength 64
   * @type string | undefined
   */
  surname?: string | null;
  /**
   * @minLength 0
   * @maxLength 16
   * @type string | undefined
   */
  phoneNumber?: string | null;
  concurrencyStamp?: string | null;
};
