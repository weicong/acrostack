/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloAbpAccountProfileDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @type string | undefined
   */
  userName?: string | null;
  /**
   * @type string | undefined
   */
  email?: string | null;
  /**
   * @type string | undefined
   */
  name?: string | null;
  /**
   * @type string | undefined
   */
  surname?: string | null;
  /**
   * @type string | undefined
   */
  phoneNumber?: string | null;
  /**
   * @type boolean | undefined
   */
  isExternal?: boolean;
  /**
   * @type boolean | undefined
   */
  hasPassword?: boolean;
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
};
