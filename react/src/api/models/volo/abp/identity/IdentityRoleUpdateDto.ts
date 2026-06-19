/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloAbpIdentityIdentityRoleUpdateDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @minLength 0
   * @maxLength 256
   * @type string
   */
  name: string;
  /**
   * @type boolean | undefined
   */
  isDefault?: boolean;
  /**
   * @type boolean | undefined
   */
  isPublic?: boolean;
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
};
