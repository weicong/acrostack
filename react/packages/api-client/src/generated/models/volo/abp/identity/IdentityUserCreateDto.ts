/* oxlint-disable */

export type VoloAbpIdentityIdentityUserCreateDto = {
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
   * @description
   * Format: `email`
   * @minLength 0
   * @maxLength 256
   * @type string
   */
  email: string;
  /**
   * @minLength 0
   * @maxLength 16
   * @type string | undefined
   */
  phoneNumber?: string | null;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  roleNames?: string[] | null;
  /**
   * @minLength 0
   * @maxLength 128
   * @type string
   */
  password: string;
};
