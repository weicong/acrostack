/* oxlint-disable */

/**
 * @description DTO for creating a new OpenIddict application.\r\nMirrors `OpenIddictApplicationDescriptor` fields. The\r\n`ClientSecret` is hashed by `IAbpApplicationManager` on save.
 * @type object
 */
export type AcroStackOpenIddictManagementCreateOpenIddictApplicationDto = {
  /**
   * @minLength 0
   * @maxLength 64
   * @type string
   */
  clientId: string;
  /**
   * @minLength 0
   * @maxLength 200
   * @type string | undefined
   */
  displayName?: string | null;
  /**
   * @description One of `OpenIddictConstants.ClientTypes` (public/confidential).
   * @type string | undefined
   */
  clientType?: string | null;
  /**
   * @description One of `OpenIddictConstants.ConsentTypes`.
   * @type string | undefined
   */
  consentType?: string | null;
  /**
   * @description Plain-text secret; hashed on save. Null for public clients.
   * @type string | undefined
   */
  clientSecret?: string | null;
  permissions?: string[] | null;
  redirectUris?: string[] | null;
  postLogoutRedirectUris?: string[] | null;
  requirements?: string[] | null;
};
