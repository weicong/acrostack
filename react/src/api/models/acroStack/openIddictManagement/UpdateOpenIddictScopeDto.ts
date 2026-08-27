/* oxlint-disable */

/**
 * @description DTO for updating an existing OpenIddict scope. `Name` is\r\nintentionally omitted — changing it after creation is not supported.
 * @type object
 */
export type AcroStackOpenIddictManagementUpdateOpenIddictScopeDto = {
  displayName?: string | null;
  description?: string | null;
  resources?: string[] | null;
};
