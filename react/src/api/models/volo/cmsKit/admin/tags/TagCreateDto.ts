/* oxlint-disable */

export type VoloCmsKitAdminTagsTagCreateDto = {
  readonly extraProperties?: {
    [key: string]: unknown;
  } | null;
  /**
   * @minLength 1
   * @maxLength 64
   * @type string
   */
  entityType: string;
  /**
   * @minLength 1
   * @maxLength 32
   * @type string
   */
  name: string;
};
