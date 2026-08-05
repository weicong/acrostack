/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../VoloAbpAccountProfileDtoExtraProperties.ts";
import type { VoloCmsKitPagesPageStatus } from "../../pages/PageStatus.ts";

/**
 * @type object
 */
export type VoloCmsKitAdminPagesUpdatePageInputDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
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
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
};
