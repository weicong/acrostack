/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackServicesDtosOpenIddictManagementOpenIddictApplicationDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @type string | undefined
   */
  clientId?: string | null;
  /**
   * @type string | undefined
   */
  displayName?: string | null;
  /**
   * @type string | undefined
   */
  clientType?: string | null;
  /**
   * @type string | undefined
   */
  consentType?: string | null;
  /**
   * @type string | undefined
   */
  clientSecret?: string | null;
  /**
   * @type array | undefined
   */
  permissions?: string[] | null;
  /**
   * @type array | undefined
   */
  redirectUris?: string[] | null;
  /**
   * @type array | undefined
   */
  postLogoutRedirectUris?: string[] | null;
  /**
   * @type array | undefined
   */
  requirements?: string[] | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
