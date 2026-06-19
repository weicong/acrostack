/* oxlint-disable */

/**
 * @type object
 */
export type VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto = {
  /**
   * @type boolean | undefined
   */
  success?: boolean;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  tenantId?: string | null;
  /**
   * @type string | undefined
   */
  name?: string | null;
  /**
   * @type string | undefined
   */
  normalizedName?: string | null;
  /**
   * @type boolean | undefined
   */
  isActive?: boolean;
};
