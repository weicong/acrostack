/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosChatChatMessageReactionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1AcroStack/services/dtos/chat/ChatMessageReactionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type ConversationGetReactionsPathMessageId = string;

/**
 * @type object
 */
export type ConversationGetReactionsStatus200Plain =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosChatChatMessageReactionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type ConversationGetReactionsStatus200Json =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosChatChatMessageReactionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type ConversationGetReactionsStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosChatChatMessageReactionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type ConversationGetReactionsStatus200 =
  | ConversationGetReactionsStatus200Plain
  | ConversationGetReactionsStatus200Json
  | ConversationGetReactionsStatus200Json2;

/**
 * @type object
 */
export type ConversationGetReactionsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetReactionsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetReactionsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus400 =
  | ConversationGetReactionsStatus400Plain
  | ConversationGetReactionsStatus400Json
  | ConversationGetReactionsStatus400Json2;

/**
 * @type object
 */
export type ConversationGetReactionsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetReactionsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetReactionsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus401 =
  | ConversationGetReactionsStatus401Plain
  | ConversationGetReactionsStatus401Json
  | ConversationGetReactionsStatus401Json2;

/**
 * @type object
 */
export type ConversationGetReactionsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetReactionsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetReactionsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus403 =
  | ConversationGetReactionsStatus403Plain
  | ConversationGetReactionsStatus403Json
  | ConversationGetReactionsStatus403Json2;

/**
 * @type object
 */
export type ConversationGetReactionsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetReactionsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetReactionsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus404 =
  | ConversationGetReactionsStatus404Plain
  | ConversationGetReactionsStatus404Json
  | ConversationGetReactionsStatus404Json2;

/**
 * @type object
 */
export type ConversationGetReactionsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetReactionsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetReactionsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus500 =
  | ConversationGetReactionsStatus500Plain
  | ConversationGetReactionsStatus500Json
  | ConversationGetReactionsStatus500Json2;

/**
 * @type object
 */
export type ConversationGetReactionsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetReactionsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetReactionsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus501 =
  | ConversationGetReactionsStatus501Plain
  | ConversationGetReactionsStatus501Json
  | ConversationGetReactionsStatus501Json2;

/**
 * @type object
 */
export type ConversationGetReactionsRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    messageId: ConversationGetReactionsPathMessageId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/conversation/reactions/${string}`;
};

/**
 * @type object
 */
export type ConversationGetReactionsResponses = {
  "200": ConversationGetReactionsStatus200;
  "400": ConversationGetReactionsStatus400;
  "401": ConversationGetReactionsStatus401;
  "403": ConversationGetReactionsStatus403;
  "404": ConversationGetReactionsStatus404;
  "500": ConversationGetReactionsStatus500;
  "501": ConversationGetReactionsStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ConversationGetReactionsResponse =
  | ConversationGetReactionsStatus200
  | ConversationGetReactionsStatus400
  | ConversationGetReactionsStatus401
  | ConversationGetReactionsStatus403
  | ConversationGetReactionsStatus404
  | ConversationGetReactionsStatus500
  | ConversationGetReactionsStatus501;
