/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloAbpIdentityIdentityUserUpdateDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
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
  /**
   * @type boolean | undefined
   */
  isActive?: boolean;
  /**
   * @type boolean | undefined
   */
  lockoutEnabled?: boolean;
  /**
   * @type array | undefined
   */
  roleNames?: string[] | null;
  /**
   * @minLength 0
   * @maxLength 128
   * @type string | undefined
   */
  password?: string | null;
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
};
