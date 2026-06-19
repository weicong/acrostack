/* oxlint-disable */

import type { VoloAbpPermissionManagementProviderInfoDto } from "./ProviderInfoDto.ts";

/**
 * @type object
 */
export type VoloAbpPermissionManagementPermissionGrantInfoDto = {
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
  parentName?: string | null;
  /**
   * @type boolean | undefined
   */
  isGranted?: boolean;
  /**
   * @type array | undefined
   */
  allowedProviders?: string[] | null;
  /**
   * @type array | undefined
   */
  grantedProviders?: VoloAbpPermissionManagementProviderInfoDto[] | null;
  /**
   * @type boolean | undefined
   */
  isEditable?: boolean;
};
