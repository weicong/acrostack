/* oxlint-disable */

import type { VoloAbpPermissionManagementPermissionGrantInfoDto } from "./PermissionGrantInfoDto";

export type VoloAbpPermissionManagementPermissionGroupDto = {
  name?: string | null;
  displayName?: string | null;
  displayNameKey?: string | null;
  displayNameResource?: string | null;
  permissions?: VoloAbpPermissionManagementPermissionGrantInfoDto[] | null;
};
