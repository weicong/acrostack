/* oxlint-disable */

import type { VoloAbpPermissionManagementResourcePermissionDefinitionDto } from "./ResourcePermissionDefinitionDto.ts";

/**
 * @type object
 */
export type VoloAbpPermissionManagementResourcePermissionGrantInfoDto = {
  /**
   * @type string | undefined
   */
  providerName?: string | null;
  /**
   * @type string | undefined
   */
  providerKey?: string | null;
  /**
   * @type string | undefined
   */
  providerDisplayName?: string | null;
  /**
   * @type string | undefined
   */
  providerNameDisplayName?: string | null;
  /**
   * @type array | undefined
   */
  permissions?: VoloAbpPermissionManagementResourcePermissionDefinitionDto[] | null;
};
