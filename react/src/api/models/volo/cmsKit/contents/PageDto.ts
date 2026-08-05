/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../VoloAbpAccountProfileDtoExtraProperties.ts";
import type { VoloCmsKitPagesPageStatus } from "../pages/PageStatus.ts";

/**
 * @type object
 */
export type VoloCmsKitContentsPageDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @type string | undefined
   */
  title?: string | null;
  /**
   * @type string | undefined
   */
  slug?: string | null;
  /**
   * @type string | undefined
   */
  layoutName?: string | null;
  /**
   * @type string | undefined
   */
  content?: string | null;
  /**
   * @type string | undefined
   */
  script?: string | null;
  /**
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
