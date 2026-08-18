/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackOpenIddictManagementUpdateOpenIddictApplicationDto = {
  /**
   * @minLength 0
   * @maxLength 200
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
};
