/* oxlint-disable */

import type { VoloAbpFeatureManagementFeatureProviderDto } from "./FeatureProviderDto";
import type { VoloAbpValidationStringValuesIStringValueType } from "../validation/stringValues/IStringValueType";

export type VoloAbpFeatureManagementFeatureDto = {
  name?: string | null;
  displayName?: string | null;
  value?: string | null;
  provider?: VoloAbpFeatureManagementFeatureProviderDto;
  description?: string | null;
  valueType?: VoloAbpValidationStringValuesIStringValueType;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  depth?: number;
  parentName?: string | null;
};
