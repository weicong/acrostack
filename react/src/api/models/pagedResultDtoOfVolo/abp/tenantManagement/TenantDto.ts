/* oxlint-disable */

import type { VoloAbpTenantManagementTenantDto } from "../../../volo/abp/tenantManagement/TenantDto";

export type PagedResultDtoOfVoloAbpTenantManagementTenantDto = {
  items?: VoloAbpTenantManagementTenantDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
