/* oxlint-disable */

import type { VoloAbpIdentityIdentityClaimValueType } from "../../volo/abp/identity/IdentityClaimValueType";

export type AcroStackIdentityClaimsIdentityClaimTypeDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  name?: string | null;
  description?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  valueType?: VoloAbpIdentityIdentityClaimValueType;
  isRequired?: boolean;
  regex?: string | null;
  isStatic?: boolean;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
