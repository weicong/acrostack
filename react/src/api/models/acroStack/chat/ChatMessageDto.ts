/* oxlint-disable */

import type { AcroStackChatChatMessageSideDto } from "./ChatMessageSideDto";

/**
 * @description A single chat message in a conversation history.
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
   * @description IdentityUser.Id of the sender.
   *
   * Format: `uuid`
   * @type string | undefined
   */
  senderUserId?: string;
  /**
   * @description IdentityUser.Id of the receiver.
   *
   * Format: `uuid`
   * @type string | undefined
   */
  receiverUserId?: string;
  /**
   * @description Message content.
   * @type string | undefined
   */
  text?: string | null;
  /**
   * @description When the message was sent.
   *
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
  /**
   * @description True if the message text was edited after sending.
   * @type boolean | undefined
   */
  isEdited?: boolean;
  /**
   * @description True if the message was soft-deleted by the sender.
   * @type boolean | undefined
   */
  isDeleted?: boolean;
  /**
   * @description When the message was last modified (edit time).
   *
   * Format: `date-time`
   * @type string | undefined
   */
  lastModificationTime?: string | null;
  /**
   * @description Original file name of the attachment (null when no attachment).
   * @type string | undefined
   */
  attachmentName?: string | null;
  /**
   * @description MIME content type of the attachment.
   * @type string | undefined
   */
  attachmentContentType?: string | null;
  /**
   * @description Attachment size in bytes (0 when no attachment).
   *
   * Format: `int64`
   * @type integer | undefined
   */
  attachmentSize?: bigint;
  /**
   * @description True if the message has an attachment.
   * @type boolean | undefined
   */
  readonly hasAttachment?: boolean;
  /**
   * @description Blob name of the attachment (omitted from API responses via JsonIgnore if needed).
   * @type string | undefined
   */
  attachmentBlobName?: string | null;
};
