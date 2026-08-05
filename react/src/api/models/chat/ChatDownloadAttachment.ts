/* oxlint-disable */

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type ChatDownloadAttachmentPathMessageId = string;

/**
 * @type any
 */
export type ChatDownloadAttachmentStatus200 = any;

/**
 * @type object
 */
export type ChatDownloadAttachmentRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    messageId: ChatDownloadAttachmentPathMessageId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/chat/messages/${string}/attachment`;
};

/**
 * @type object
 */
export type ChatDownloadAttachmentResponses = {
  "200": ChatDownloadAttachmentStatus200;
};

/**
 * @description Union of all possible responses
 */
export type ChatDownloadAttachmentResponse = ChatDownloadAttachmentStatus200;
