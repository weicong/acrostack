/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloCmsKitAdminTagsTagCreateDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @minLength 1
   * @maxLength 64
   * @type string
   */
  entityType: string;
  /**
   * @minLength 1
   * @maxLength 32
   * @type string
   */
  name: string;
};
