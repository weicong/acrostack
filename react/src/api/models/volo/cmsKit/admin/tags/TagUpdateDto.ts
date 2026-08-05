/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloCmsKitAdminTagsTagUpdateDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @minLength 1
   * @maxLength 32
   * @type string
   */
  name: string;
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
};
