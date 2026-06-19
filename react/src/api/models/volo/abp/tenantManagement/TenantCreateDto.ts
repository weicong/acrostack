/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloAbpTenantManagementTenantCreateDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @minLength 0
   * @maxLength 64
   * @type string
   */
  name: string;
  /**
   * @description
   * Format: `email`
   * @minLength 1
   * @maxLength 256
   * @type string
   */
  adminEmailAddress: string;
  /**
   * @minLength 1
   * @maxLength 128
   * @type string
   */
  adminPassword: string;
};
