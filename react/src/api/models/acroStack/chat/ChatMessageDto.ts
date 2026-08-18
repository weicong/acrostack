/* oxlint-disable */

import type { AcroStackChatChatMessageSideDto } from "./ChatMessageSideDto.ts";

/**
 * @type object
 */
export type AcroStackChatChatMessageDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  senderUserId?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  receiverUserId?: string;
  /**
   * @type string | undefined
   */
  text?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  sendTime?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  side?: AcroStackChatChatMessageSideDto;
  /**
   * @type boolean | undefined
   */
  isRead?: boolean;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  readTime?: string | null;
  /**
   * @type boolean | undefined
   */
  isEdited?: boolean;
  /**
   * @type boolean | undefined
   */
  isDeleted?: boolean;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastModificationTime?: string | null;
  /**
   * @type string | undefined
   */
  attachmentName?: string | null;
  /**
   * @type string | undefined
   */
  attachmentContentType?: string | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  attachmentSize?: bigint;
  /**
   * @type boolean | undefined
   */
  readonly hasAttachment?: boolean;
  /**
   * @type string | undefined
   */
  attachmentBlobName?: string | null;
};
