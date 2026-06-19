/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../VoloAbpAccountProfileDtoExtraProperties.ts";
import type { VoloAbpHttpRemoteServiceValidationErrorInfo } from "./RemoteServiceValidationErrorInfo.ts";

/**
 * @type object
 */
export type VoloAbpHttpRemoteServiceErrorInfo = {
  /**
   * @type string | undefined
   */
  code?: string | null;
  /**
   * @type string | undefined
   */
  message?: string | null;
  /**
   * @type string | undefined
   */
  details?: string | null;
  data?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @type array | undefined
   */
  validationErrors?: VoloAbpHttpRemoteServiceValidationErrorInfo[] | null;
};
