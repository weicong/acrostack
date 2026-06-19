/* oxlint-disable */

import type { VoloAbpFeatureManagementFeatureDto } from "./FeatureDto.ts";

/**
 * @type object
 */
export type VoloAbpFeatureManagementFeatureGroupDto = {
  /**
   * @type string | undefined
   */
  name?: string | null;
  /**
   * @type string | undefined
   */
  displayName?: string | null;
  /**
   * @type array | undefined
   */
  features?: VoloAbpFeatureManagementFeatureDto[] | null;
};
