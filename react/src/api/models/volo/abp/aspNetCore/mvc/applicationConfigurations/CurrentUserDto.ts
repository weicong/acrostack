/* oxlint-disable */

/**
 * @type object
 */
export type VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentUserDto = {
  /**
   * @type boolean | undefined
   */
  isAuthenticated?: boolean;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  tenantId?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  impersonatorUserId?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  impersonatorTenantId?: string | null;
  /**
   * @type string | undefined
   */
  impersonatorUserName?: string | null;
  /**
   * @type string | undefined
   */
  impersonatorTenantName?: string | null;
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
  surName?: string | null;
  /**
   * @type string | undefined
   */
  email?: string | null;
  /**
   * @type boolean | undefined
   */
  emailVerified?: boolean;
  /**
   * @type string | undefined
   */
  phoneNumber?: string | null;
  /**
   * @type boolean | undefined
   */
  phoneNumberVerified?: boolean;
  /**
   * @type array | undefined
   */
  roles?: string[] | null;
  /**
   * @type string | undefined
   */
  sessionId?: string | null;
};
