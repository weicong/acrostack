/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloAbpIdentityIdentityRoleDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @type string | undefined
   */
  name?: string | null;
  /**
   * @type boolean | undefined
   */
  isDefault?: boolean;
  /**
   * @type boolean | undefined
   */
  isStatic?: boolean;
  /**
   * @type boolean | undefined
   */
  isPublic?: boolean;
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
