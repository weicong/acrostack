/* oxlint-disable */

import type { AcroStackChatChatMessageDto } from "../acroStack/chat/ChatMessageDto.ts";
import type { AcroStackChatSendMessageInput } from "../acroStack/chat/SendMessageInput.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type ConversationSendMessageStatus200Plain = AcroStackChatChatMessageDto;

/**
 * @type object
 */
export type ConversationSendMessageStatus200Json = AcroStackChatChatMessageDto;

/**
 * @type object
 */
export type ConversationSendMessageStatus200Json2 = AcroStackChatChatMessageDto;

export type ConversationSendMessageStatus200 =
  | ConversationSendMessageStatus200Plain
  | ConversationSendMessageStatus200Json
  | ConversationSendMessageStatus200Json2;

/**
 * @type object
 */
export type ConversationSendMessageStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus400 =
  | ConversationSendMessageStatus400Plain
  | ConversationSendMessageStatus400Json
  | ConversationSendMessageStatus400Json2;

/**
 * @type object
 */
export type ConversationSendMessageStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus401 =
  | ConversationSendMessageStatus401Plain
  | ConversationSendMessageStatus401Json
  | ConversationSendMessageStatus401Json2;

/**
 * @type object
 */
export type ConversationSendMessageStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus403 =
  | ConversationSendMessageStatus403Plain
  | ConversationSendMessageStatus403Json
  | ConversationSendMessageStatus403Json2;

/**
 * @type object
 */
export type ConversationSendMessageStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus404 =
  | ConversationSendMessageStatus404Plain
  | ConversationSendMessageStatus404Json
  | ConversationSendMessageStatus404Json2;

/**
 * @type object
 */
export type ConversationSendMessageStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus500 =
  | ConversationSendMessageStatus500Plain
  | ConversationSendMessageStatus500Json
  | ConversationSendMessageStatus500Json2;

/**
 * @type object
 */
export type ConversationSendMessageStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSendMessageStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus501 =
  | ConversationSendMessageStatus501Plain
  | ConversationSendMessageStatus501Json
  | ConversationSendMessageStatus501Json2;

/**
 * @type object | undefined
 */
export type ConversationSendMessageJsonData = AcroStackChatSendMessageInput | undefined;

/**
 * @type object | undefined
 */
export type ConversationSendMessageJson2Data = AcroStackChatSendMessageInput | undefined;

/**
 * @type object | undefined
 */
export type ConversationSendMessageJson3Data = AcroStackChatSendMessageInput | undefined;

export type ConversationSendMessageData =
  | ConversationSendMessageJsonData
  | ConversationSendMessageJson2Data
  | ConversationSendMessageJson3Data;

/**
 * @type object
 */
export type ConversationSendMessageRequestConfig = {
  data?: ConversationSendMessageData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/conversation/send-message";
};

/**
 * @type object
 */
export type ConversationSendMessageResponses = {
  "200": ConversationSendMessageStatus200;
  "400": ConversationSendMessageStatus400;
  "401": ConversationSendMessageStatus401;
  "403": ConversationSendMessageStatus403;
  "404": ConversationSendMessageStatus404;
  "500": ConversationSendMessageStatus500;
  "501": ConversationSendMessageStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ConversationSendMessageResponse =
  | ConversationSendMessageStatus200
  | ConversationSendMessageStatus400
  | ConversationSendMessageStatus401
  | ConversationSendMessageStatus403
  | ConversationSendMessageStatus404
  | ConversationSendMessageStatus500
  | ConversationSendMessageStatus501;
