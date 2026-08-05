/* oxlint-disable */

import type { AcroStackServicesDtosChatChatMessageDto } from "../acroStack/services/dtos/chat/ChatMessageDto.ts";
import type { AcroStackServicesDtosChatEditMessageInput } from "../acroStack/services/dtos/chat/EditMessageInput.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type ConversationEditMessagePathMessageId = string;

/**
 * @type object
 */
export type ConversationEditMessageStatus200Plain = AcroStackServicesDtosChatChatMessageDto;

/**
 * @type object
 */
export type ConversationEditMessageStatus200Json = AcroStackServicesDtosChatChatMessageDto;

/**
 * @type object
 */
export type ConversationEditMessageStatus200Json2 = AcroStackServicesDtosChatChatMessageDto;

export type ConversationEditMessageStatus200 =
  | ConversationEditMessageStatus200Plain
  | ConversationEditMessageStatus200Json
  | ConversationEditMessageStatus200Json2;

/**
 * @type object
 */
export type ConversationEditMessageStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationEditMessageStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationEditMessageStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus400 =
  | ConversationEditMessageStatus400Plain
  | ConversationEditMessageStatus400Json
  | ConversationEditMessageStatus400Json2;

/**
 * @type object
 */
export type ConversationEditMessageStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationEditMessageStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationEditMessageStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus401 =
  | ConversationEditMessageStatus401Plain
  | ConversationEditMessageStatus401Json
  | ConversationEditMessageStatus401Json2;

/**
 * @type object
 */
export type ConversationEditMessageStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationEditMessageStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationEditMessageStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus403 =
  | ConversationEditMessageStatus403Plain
  | ConversationEditMessageStatus403Json
  | ConversationEditMessageStatus403Json2;

/**
 * @type object
 */
export type ConversationEditMessageStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationEditMessageStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationEditMessageStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus404 =
  | ConversationEditMessageStatus404Plain
  | ConversationEditMessageStatus404Json
  | ConversationEditMessageStatus404Json2;

/**
 * @type object
 */
export type ConversationEditMessageStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationEditMessageStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationEditMessageStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus500 =
  | ConversationEditMessageStatus500Plain
  | ConversationEditMessageStatus500Json
  | ConversationEditMessageStatus500Json2;

/**
 * @type object
 */
export type ConversationEditMessageStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationEditMessageStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationEditMessageStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus501 =
  | ConversationEditMessageStatus501Plain
  | ConversationEditMessageStatus501Json
  | ConversationEditMessageStatus501Json2;

/**
 * @type object | undefined
 */
export type ConversationEditMessageJsonData = AcroStackServicesDtosChatEditMessageInput | undefined;

/**
 * @type object | undefined
 */
export type ConversationEditMessageJson2Data =
  | AcroStackServicesDtosChatEditMessageInput
  | undefined;

/**
 * @type object | undefined
 */
export type ConversationEditMessageJson3Data =
  | AcroStackServicesDtosChatEditMessageInput
  | undefined;

export type ConversationEditMessageData =
  | ConversationEditMessageJsonData
  | ConversationEditMessageJson2Data
  | ConversationEditMessageJson3Data;

/**
 * @type object
 */
export type ConversationEditMessageRequestConfig = {
  data?: ConversationEditMessageData;
  /**
   * @type object
   */
  pathParams: {
    messageId: ConversationEditMessagePathMessageId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/conversation/edit-message/${string}`;
};

/**
 * @type object
 */
export type ConversationEditMessageResponses = {
  "200": ConversationEditMessageStatus200;
  "400": ConversationEditMessageStatus400;
  "401": ConversationEditMessageStatus401;
  "403": ConversationEditMessageStatus403;
  "404": ConversationEditMessageStatus404;
  "500": ConversationEditMessageStatus500;
  "501": ConversationEditMessageStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ConversationEditMessageResponse =
  | ConversationEditMessageStatus200
  | ConversationEditMessageStatus400
  | ConversationEditMessageStatus401
  | ConversationEditMessageStatus403
  | ConversationEditMessageStatus404
  | ConversationEditMessageStatus500
  | ConversationEditMessageStatus501;
