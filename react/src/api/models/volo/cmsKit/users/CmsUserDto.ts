/* oxlint-disable */

export type VoloCmsKitUsersCmsUserDto = {
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
   * Format: `uuid`
   * @type string | undefined
   */
  tenantId?: string | null;
  userName?: string | null;
  name?: string | null;
  surname?: string | null;
};
