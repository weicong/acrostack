/* oxlint-disable */

import type { AcroStackChatChatMessageDto } from "../acroStack/chat/ChatMessageDto";

export type ChatSendMessageWithAttachmentStatus200Plain = AcroStackChatChatMessageDto;

export type ChatSendMessageWithAttachmentStatus200Json = AcroStackChatChatMessageDto;

export type ChatSendMessageWithAttachmentStatus200Json2 = AcroStackChatChatMessageDto;

export type ChatSendMessageWithAttachmentStatus200 =
  | ChatSendMessageWithAttachmentStatus200Plain
  | ChatSendMessageWithAttachmentStatus200Json
  | ChatSendMessageWithAttachmentStatus200Json2;

export type ChatSendMessageWithAttachmentBody =
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
      attachment?: Blob;
    }
  | undefined;

export type ChatSendMessageWithAttachmentOptions = {
  body: ChatSendMessageWithAttachmentBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type ChatSendMessageWithAttachmentResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ChatSendMessageWithAttachmentStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ChatSendMessageWithAttachmentStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ChatSendMessageWithAttachmentStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ChatSendMessageWithAttachmentResponse = ChatSendMessageWithAttachmentStatus200;
