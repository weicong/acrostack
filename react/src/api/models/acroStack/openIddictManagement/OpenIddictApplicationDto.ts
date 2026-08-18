/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackOpenIddictManagementOpenIddictApplicationDto = {
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
   * @type boolean | undefined
   */
  hasClientSecret?: boolean;
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
