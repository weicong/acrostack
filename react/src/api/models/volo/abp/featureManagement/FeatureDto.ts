/* oxlint-disable */

import type { VoloAbpFeatureManagementFeatureProviderDto } from "./FeatureProviderDto.ts";
import type { VoloAbpValidationStringValuesIStringValueType } from "../validation/stringValues/IStringValueType.ts";

/**
 * @type object
 */
export type VoloAbpFeatureManagementFeatureDto = {
  /**
   * @type string | undefined
   */
  name?: string | null;
  /**
   * @type string | undefined
   */
  displayName?: string | null;
  /**
   * @type string | undefined
   */
  value?: string | null;
  /**
   * @type object | undefined
   */
  provider?: VoloAbpFeatureManagementFeatureProviderDto;
  /**
   * @type string | undefined
   */
  description?: string | null;
  /**
   * @type object | undefined
   */
  valueType?: VoloAbpValidationStringValuesIStringValueType;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  depth?: number;
  /**
   * @type string | undefined
   */
  parentName?: string | null;
};
