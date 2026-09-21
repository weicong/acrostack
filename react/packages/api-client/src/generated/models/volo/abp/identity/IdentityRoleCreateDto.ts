/* oxlint-disable */

export type VoloAbpIdentityIdentityRoleCreateDto = {
  readonly extraProperties?: {
    [key: string]: unknown;
  } | null;
  /**
   * @minLength 0
   * @maxLength 256
   * @type string
   */
  name: string;
  isDefault?: boolean;
  isPublic?: boolean;
};
