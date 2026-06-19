/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloAbpIdentityIdentityUserDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  creatorId?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastModificationTime?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  lastModifierId?: string | null;
  /**
   * @type boolean | undefined
   */
  isDeleted?: boolean;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  deleterId?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  deletionTime?: string | null;
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
  /**
   * @type boolean | undefined
   */
  isActive?: boolean;
  /**
   * @type boolean | undefined
   */
  lockoutEnabled?: boolean;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  accessFailedCount?: number;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lockoutEnd?: string | null;
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  entityVersion?: number;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastPasswordChangeTime?: string | null;
};
