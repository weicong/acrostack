/* oxlint-disable */

/**
 * @description DTO for updating an existing OpenIddict application. `ClientId`\r\nis intentionally omitted — changing it after creation is not supported\r\n(it\'s the identifier clients use to authenticate).
 * @type object
 */
export type AcroStackOpenIddictManagementUpdateOpenIddictApplicationDto = {
  /**
   * @minLength 0
   * @maxLength 200
   * @type string | undefined
   */
  displayName?: string | null;
  clientType?: string | null;
  consentType?: string | null;
  /**
   * @description Plain-text secret; hashed on save. Null/empty leaves the existing\r\nsecret unchanged.
   * @type string | undefined
   */
  clientSecret?: string | null;
  permissions?: string[] | null;
  redirectUris?: string[] | null;
  postLogoutRedirectUris?: string[] | null;
  requirements?: string[] | null;
};
