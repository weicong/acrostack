/* oxlint-disable */

export type VoloAbpIdentityIdentityUserDto = {
  readonly extraProperties?: {
    [key: string]: unknown;
  } | null;
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
  userName?: string | null;
  name?: string | null;
  surname?: string | null;
  email?: string | null;
  emailConfirmed?: boolean;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  isActive?: boolean;
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
