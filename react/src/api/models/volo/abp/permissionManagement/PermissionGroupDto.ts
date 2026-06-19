/* oxlint-disable */

import type { VoloAbpPermissionManagementPermissionGrantInfoDto } from "./PermissionGrantInfoDto.ts";

/**
 * @type object
 */
export type VoloAbpPermissionManagementPermissionGroupDto = {
  /**
   * @type string | undefined
   */
  name?: string | null;
  /**
   * @type string | undefined
   */
  displayName?: string | null;
  /**
   * @type string | undefined
   */
  displayNameKey?: string | null;
  /**
   * @type string | undefined
   */
  displayNameResource?: string | null;
  /**
   * @type array | undefined
   */
  permissions?: VoloAbpPermissionManagementPermissionGrantInfoDto[] | null;
};
