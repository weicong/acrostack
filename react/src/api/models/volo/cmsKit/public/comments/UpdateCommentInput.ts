/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloCmsKitPublicCommentsUpdateCommentInput = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @minLength 0
   * @maxLength 512
   * @type string
   */
  text: string;
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  captchaToken?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  captchaAnswer?: number;
};
