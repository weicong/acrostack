/* oxlint-disable */

import type { VoloCmsKitPagesPageStatus } from "../../pages/PageStatus";

export type VoloCmsKitAdminPagesCreatePageInputDto = {
  readonly extraProperties?: {
    [key: string]: unknown;
  } | null;
  /**
   * @minLength 1
   * @maxLength 256
   * @type string
   */
  title: string;
  /**
   * @minLength 1
   * @maxLength 256
   * @type string
   */
  slug: string;
  /**
   * @maxLength 256
   * @type string | undefined
   */
  layoutName?: string | null;
  /**
   * @maxLength 2147483647
   * @type string | undefined
   */
  content?: string | null;
  /**
   * @maxLength 2147483647
   * @type string | undefined
   */
  script?: string | null;
  /**
   * @maxLength 2147483647
   * @type string | undefined
   */
  style?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  status?: VoloCmsKitPagesPageStatus;
};
