/* oxlint-disable */

export type VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentUserDto = {
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
  impersonatorUserName?: string | null;
  impersonatorTenantName?: string | null;
  userName?: string | null;
  name?: string | null;
  surName?: string | null;
  email?: string | null;
  emailVerified?: boolean;
  phoneNumber?: string | null;
  phoneNumberVerified?: boolean;
  roles?: string[] | null;
  sessionId?: string | null;
};
