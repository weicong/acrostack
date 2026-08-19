/* oxlint-disable */

import type { AcroStackChatChatMessageSideDto } from "./ChatMessageSideDto";

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
  isRead?: boolean;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  readTime?: string | null;
  isEdited?: boolean;
  isDeleted?: boolean;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastModificationTime?: string | null;
  attachmentName?: string | null;
  attachmentContentType?: string | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  attachmentSize?: bigint;
  readonly hasAttachment?: boolean;
  attachmentBlobName?: string | null;
};
