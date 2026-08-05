/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloCmsKitPublicCommentsCreateCommentInput = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @minLength 0
   * @maxLength 512
   * @type string
   */
  text: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  repliedCommentId?: string | null;
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
  /**
   * @type string | undefined
   */
  url?: string | null;
  /**
   * @minLength 1
   * @type string
   */
  idempotencyToken: string;
};
