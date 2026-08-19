/* oxlint-disable */

export type VoloCmsKitPublicCommentsCreateCommentInput = {
  readonly extraProperties?: {
    [key: string]: unknown;
  } | null;
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
  url?: string | null;
  /**
   * @minLength 1
   * @type string
   */
  idempotencyToken: string;
};
