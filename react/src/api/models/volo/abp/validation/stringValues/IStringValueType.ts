/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../VoloAbpAccountProfileDtoExtraProperties.ts";
import type { VoloAbpValidationStringValuesIValueValidator } from "./IValueValidator.ts";

/**
 * @type object
 */
export type VoloAbpValidationStringValuesIStringValueType = {
  /**
   * @type string | undefined
   */
  readonly name?: string | null;
  readonly properties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @type object | undefined
   */
  validator?: VoloAbpValidationStringValuesIValueValidator;
};
