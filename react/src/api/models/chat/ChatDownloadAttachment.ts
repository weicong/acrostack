/* oxlint-disable */

export type ChatDownloadAttachmentPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  messageId: string;
};

export type ChatDownloadAttachmentStatus200 = unknown;

export type ChatDownloadAttachmentOptions = {
  body?: never;
  path: ChatDownloadAttachmentPath;
  query?: never;
  headers?: never;
};

export type ChatDownloadAttachmentResponses = {
  "200": ChatDownloadAttachmentStatus200;
};

/**
 * @description Union of all possible responses
 */
export type ChatDownloadAttachmentResponse = ChatDownloadAttachmentStatus200;
