/* oxlint-disable */

import type { AcroStackServicesDtosChatChatMessageDto } from "../acroStack/services/dtos/chat/ChatMessageDto.ts";
import type { AcroStackServicesDtosChatSendMessageInput } from "../acroStack/services/dtos/chat/SendMessageInput.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus200Plain =
  AcroStackServicesDtosChatChatMessageDto;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus200Json =
  AcroStackServicesDtosChatChatMessageDto;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus200Json2 =
  AcroStackServicesDtosChatChatMessageDto;

export type ConversationSendMessageWithAttachmentStatus200 =
  | ConversationSendMessageWithAttachmentStatus200Plain
  | ConversationSendMessageWithAttachmentStatus200Json
  | ConversationSendMessageWithAttachmentStatus200Json2;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus400Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus400 =
  | ConversationSendMessageWithAttachmentStatus400Plain
  | ConversationSendMessageWithAttachmentStatus400Json
  | ConversationSendMessageWithAttachmentStatus400Json2;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus401Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus401 =
  | ConversationSendMessageWithAttachmentStatus401Plain
  | ConversationSendMessageWithAttachmentStatus401Json
  | ConversationSendMessageWithAttachmentStatus401Json2;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus403Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus403 =
  | ConversationSendMessageWithAttachmentStatus403Plain
  | ConversationSendMessageWithAttachmentStatus403Json
  | ConversationSendMessageWithAttachmentStatus403Json2;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus404Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus404 =
  | ConversationSendMessageWithAttachmentStatus404Plain
  | ConversationSendMessageWithAttachmentStatus404Json
  | ConversationSendMessageWithAttachmentStatus404Json2;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus500Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus500 =
  | ConversationSendMessageWithAttachmentStatus500Plain
  | ConversationSendMessageWithAttachmentStatus500Json
  | ConversationSendMessageWithAttachmentStatus500Json2;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus501Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus501 =
  | ConversationSendMessageWithAttachmentStatus501Plain
  | ConversationSendMessageWithAttachmentStatus501Json
  | ConversationSendMessageWithAttachmentStatus501Json2;

/**
 * @type object | undefined
 */
export type ConversationSendMessageWithAttachmentJsonData =
  | AcroStackServicesDtosChatSendMessageInput
  | undefined;

/**
 * @type object | undefined
 */
export type ConversationSendMessageWithAttachmentJson2Data =
  | AcroStackServicesDtosChatSendMessageInput
  | undefined;

/**
 * @type object | undefined
 */
export type ConversationSendMessageWithAttachmentJson3Data =
  | AcroStackServicesDtosChatSendMessageInput
  | undefined;

export type ConversationSendMessageWithAttachmentData =
  | ConversationSendMessageWithAttachmentJsonData
  | ConversationSendMessageWithAttachmentJson2Data
  | ConversationSendMessageWithAttachmentJson3Data;

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentRequestConfig = {
  data?: ConversationSendMessageWithAttachmentData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/conversation/send-message-with-attachment";
};

/**
 * @type object
 */
export type ConversationSendMessageWithAttachmentResponses = {
  "200": ConversationSendMessageWithAttachmentStatus200;
  "400": ConversationSendMessageWithAttachmentStatus400;
  "401": ConversationSendMessageWithAttachmentStatus401;
  "403": ConversationSendMessageWithAttachmentStatus403;
  "404": ConversationSendMessageWithAttachmentStatus404;
  "500": ConversationSendMessageWithAttachmentStatus500;
  "501": ConversationSendMessageWithAttachmentStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ConversationSendMessageWithAttachmentResponse =
  | ConversationSendMessageWithAttachmentStatus200
  | ConversationSendMessageWithAttachmentStatus400
  | ConversationSendMessageWithAttachmentStatus401
  | ConversationSendMessageWithAttachmentStatus403
  | ConversationSendMessageWithAttachmentStatus404
  | ConversationSendMessageWithAttachmentStatus500
  | ConversationSendMessageWithAttachmentStatus501;
