/* oxlint-disable */

export type VoloCmsKitAdminTagsTagUpdateDto = {
  readonly extraProperties?: {
    [key: string]: unknown;
  } | null;
  /**
   * @minLength 1
   * @maxLength 32
   * @type string
   */
  name: string;
  concurrencyStamp?: string | null;
};
