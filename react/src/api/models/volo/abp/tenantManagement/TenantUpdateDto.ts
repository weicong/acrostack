/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloAbpTenantManagementTenantUpdateDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @minLength 0
   * @maxLength 64
   * @type string
   */
  name: string;
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
};
