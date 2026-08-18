/* oxlint-disable */

import type { VoloAbpIdentityIdentityClaimValueType } from "../../volo/abp/identity/IdentityClaimValueType.ts";

/**
 * @type object
 */
export type AcroStackIdentityClaimsIdentityClaimTypeDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @type string | undefined
   */
  name?: string | null;
  /**
   * @type string | undefined
   */
  description?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  valueType?: VoloAbpIdentityIdentityClaimValueType;
  /**
   * @type boolean | undefined
   */
  isRequired?: boolean;
  /**
   * @type string | undefined
   */
  regex?: string | null;
  /**
   * @type boolean | undefined
   */
  isStatic?: boolean;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
