/* oxlint-disable */

import type { VoloAbpPermissionManagementPermissionGroupDto } from "./PermissionGroupDto.ts";

/**
 * @type object
 */
export type VoloAbpPermissionManagementGetPermissionListResultDto = {
  /**
   * @type string | undefined
   */
  entityDisplayName?: string | null;
  /**
   * @type array | undefined
   */
  groups?: VoloAbpPermissionManagementPermissionGroupDto[] | null;
};
