/* oxlint-disable */

import type { AcroStackChatChatMessageDto } from "../acroStack/chat/ChatMessageDto.ts";

/**
 * @type object
 */
export type ChatSendMessageWithAttachmentStatus200Plain = AcroStackChatChatMessageDto;

/**
 * @type object
 */
export type ChatSendMessageWithAttachmentStatus200Json = AcroStackChatChatMessageDto;

/**
 * @type object
 */
export type ChatSendMessageWithAttachmentStatus200Json2 = AcroStackChatChatMessageDto;

export type ChatSendMessageWithAttachmentStatus200 =
  | ChatSendMessageWithAttachmentStatus200Plain
  | ChatSendMessageWithAttachmentStatus200Json
  | ChatSendMessageWithAttachmentStatus200Json2;

/**
 * @type object | undefined
 */
export type ChatSendMessageWithAttachmentData =
  | {
      /**
       * @description
       * Format: `uuid`
       * @type string | undefined
       */
      TargetUserId?: string;
      /**
       * @minLength 0
       * @maxLength 4000
       * @type string | undefined
       */
      Text?: string;
      /**
       * @description
       * Format: `binary`
       * @type string | undefined
       */
      attachment?: Blob;
    }
  | undefined;

/**
 * @type object
 */
export type ChatSendMessageWithAttachmentRequestConfig = {
  data?: ChatSendMessageWithAttachmentData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/chat/messages/send-with-attachment";
};

/**
 * @type object
 */
export type ChatSendMessageWithAttachmentResponses = {
  "200": ChatSendMessageWithAttachmentStatus200;
};

/**
 * @description Union of all possible responses
 */
export type ChatSendMessageWithAttachmentResponse = ChatSendMessageWithAttachmentStatus200;
