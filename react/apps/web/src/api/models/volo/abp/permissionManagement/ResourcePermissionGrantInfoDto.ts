/* oxlint-disable */

import type { VoloAbpPermissionManagementGrantedResourcePermissionDto } from "./GrantedResourcePermissionDto";

export type VoloAbpPermissionManagementResourcePermissionGrantInfoDto = {
  providerName?: string | null;
  providerKey?: string | null;
  providerDisplayName?: string | null;
  providerNameDisplayName?: string | null;
  permissions?: VoloAbpPermissionManagementGrantedResourcePermissionDto[] | null;
};
