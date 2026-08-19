/* oxlint-disable */

import type { VoloAbpIdentityIdentityClaimValueType } from "../../volo/abp/identity/IdentityClaimValueType";

export type AcroStackIdentityClaimsUpdateIdentityClaimTypeDto = {
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
};
