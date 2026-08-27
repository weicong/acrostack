/* oxlint-disable */

import type { AcroStackIdentityClaimsIdentityClaimTypeDto } from "../../acroStack/identityClaims/IdentityClaimTypeDto";

export type PagedResultDtoOfAcroStackIdentityClaimsIdentityClaimTypeDto = {
  items?: AcroStackIdentityClaimsIdentityClaimTypeDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
