/* oxlint-disable */

/**
 * @description DTO for creating a new OpenIddict scope.\r\nMirrors `OpenIddictScopeDescriptor` fields.
 * @type object
 */
export type AcroStackOpenIddictManagementCreateOpenIddictScopeDto = {
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  resources?: string[] | null;
};
