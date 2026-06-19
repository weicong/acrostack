/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloAbpUsersUserData = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  tenantId?: string | null;
  /**
   * @type string | undefined
   */
  userName?: string | null;
  /**
   * @type string | undefined
   */
  name?: string | null;
  /**
   * @type string | undefined
   */
  surname?: string | null;
  /**
   * @type boolean | undefined
   */
  isActive?: boolean;
  /**
   * @type string | undefined
   */
  email?: string | null;
  /**
   * @type boolean | undefined
   */
  emailConfirmed?: boolean;
  /**
   * @type string | undefined
   */
  phoneNumber?: string | null;
  /**
   * @type boolean | undefined
   */
  phoneNumberConfirmed?: boolean;
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
};
