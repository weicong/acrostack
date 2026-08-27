/* oxlint-disable */

import type { AcroStackAppUsersAppUserDto } from "../../acroStack/appUsers/AppUserDto";

export type PagedResultDtoOfAcroStackAppUsersAppUserDto = {
  items?: AcroStackAppUsersAppUserDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
