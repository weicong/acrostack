/* oxlint-disable */

import type { AcroStackAccountProImpersonationSessionDto } from "../../acroStack/accountPro/ImpersonationSessionDto";

export type PagedResultDtoOfAcroStackAccountProImpersonationSessionDto = {
  items?: AcroStackAccountProImpersonationSessionDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
