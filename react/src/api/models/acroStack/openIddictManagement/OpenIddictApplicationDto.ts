/* oxlint-disable */

export type AcroStackOpenIddictManagementOpenIddictApplicationDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  clientId?: string | null;
  displayName?: string | null;
  clientType?: string | null;
  consentType?: string | null;
  hasClientSecret?: boolean;
  permissions?: string[] | null;
  redirectUris?: string[] | null;
  postLogoutRedirectUris?: string[] | null;
  requirements?: string[] | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
