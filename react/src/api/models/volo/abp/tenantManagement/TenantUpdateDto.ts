/* oxlint-disable */

export type VoloAbpTenantManagementTenantUpdateDto = {
  readonly extraProperties?: {
    [key: string]: unknown;
  } | null;
  /**
   * @minLength 0
   * @maxLength 64
   * @type string
   */
  name: string;
  concurrencyStamp?: string | null;
};
