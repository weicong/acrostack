/* oxlint-disable */

import type { AcroStackImpersonationImpersonationSessionDto } from "../../acroStack/impersonation/ImpersonationSessionDto";

export type PagedResultDtoOfAcroStackImpersonationImpersonationSessionDto = {
  items?: AcroStackImpersonationImpersonationSessionDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
