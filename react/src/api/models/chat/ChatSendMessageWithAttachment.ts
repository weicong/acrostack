/* oxlint-disable */

import type { AcroStackChatChatMessageDto } from "../acroStack/chat/ChatMessageDto";

/**
 * @description A single chat message in a conversation history.
 * @type object
 */
export type ChatSendMessageWithAttachmentStatus200Plain = AcroStackChatChatMessageDto;

/**
 * @description A single chat message in a conversation history.
 * @type object
 */
export type ChatSendMessageWithAttachmentStatus200Json = AcroStackChatChatMessageDto;

/**
 * @description A single chat message in a conversation history.
 * @type object
 */
export type ChatSendMessageWithAttachmentStatus200Json2 = AcroStackChatChatMessageDto;

export type ChatSendMessageWithAttachmentStatus200 =
  | ChatSendMessageWithAttachmentStatus200Plain
  | ChatSendMessageWithAttachmentStatus200Json
  | ChatSendMessageWithAttachmentStatus200Json2;

export type ChatSendMessageWithAttachmentBody =
  | {
      /**
       * @description IdentityUser.Id of the message recipient.
       *
       * Format: `uuid`
       * @type string | undefined
       */
      TargetUserId?: string;
      /**
       * @description 消息文本。限制最长 4000 字符，与 ChatMessage.Text 的数据库列宽\r\n（见 ChatEfCoreDbContextExtensions.MaxMessageTextLength）一致，\r\n避免超长文本穿透到数据库层才抛异常。
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
