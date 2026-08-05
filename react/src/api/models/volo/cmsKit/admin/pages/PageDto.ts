/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../VoloAbpAccountProfileDtoExtraProperties.ts";
import type { VoloCmsKitPagesPageStatus } from "../../pages/PageStatus.ts";

/**
 * @type object
 */
export type VoloCmsKitAdminPagesPageDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  creatorId?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastModificationTime?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  lastModifierId?: string | null;
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
   * @type boolean | undefined
   */
  isHomePage?: boolean;
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
