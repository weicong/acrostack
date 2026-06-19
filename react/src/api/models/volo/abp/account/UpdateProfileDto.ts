/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloAbpAccountUpdateProfileDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
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
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
};
