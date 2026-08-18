/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackChatConversationDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1AcroStack/chat/conversationDtoAcroStack/ChatVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type ConversationGetListStatus200Plain =
  VoloAbpApplicationDtosListResultDto1AcroStackChatConversationDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type ConversationGetListStatus200Json =
  VoloAbpApplicationDtosListResultDto1AcroStackChatConversationDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type ConversationGetListStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1AcroStackChatConversationDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ConversationGetListStatus200 =
  | ConversationGetListStatus200Plain
  | ConversationGetListStatus200Json
  | ConversationGetListStatus200Json2;

/**
 * @type object
 */
export type ConversationGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus400 =
  | ConversationGetListStatus400Plain
  | ConversationGetListStatus400Json
  | ConversationGetListStatus400Json2;

/**
 * @type object
 */
export type ConversationGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus401 =
  | ConversationGetListStatus401Plain
  | ConversationGetListStatus401Json
  | ConversationGetListStatus401Json2;

/**
 * @type object
 */
export type ConversationGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus403 =
  | ConversationGetListStatus403Plain
  | ConversationGetListStatus403Json
  | ConversationGetListStatus403Json2;

/**
 * @type object
 */
export type ConversationGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus404 =
  | ConversationGetListStatus404Plain
  | ConversationGetListStatus404Json
  | ConversationGetListStatus404Json2;

/**
 * @type object
 */
export type ConversationGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus500 =
  | ConversationGetListStatus500Plain
  | ConversationGetListStatus500Json
  | ConversationGetListStatus500Json2;

/**
 * @type object
 */
export type ConversationGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus501 =
  | ConversationGetListStatus501Plain
  | ConversationGetListStatus501Json
  | ConversationGetListStatus501Json2;

/**
 * @type object
 */
export type ConversationGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/conversation";
};

/**
 * @type object
 */
export type ConversationGetListResponses = {
  "200": ConversationGetListStatus200;
  "400": ConversationGetListStatus400;
  "401": ConversationGetListStatus401;
  "403": ConversationGetListStatus403;
  "404": ConversationGetListStatus404;
  "500": ConversationGetListStatus500;
  "501": ConversationGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ConversationGetListResponse =
  | ConversationGetListStatus200
  | ConversationGetListStatus400
  | ConversationGetListStatus401
  | ConversationGetListStatus403
  | ConversationGetListStatus404
  | ConversationGetListStatus500
  | ConversationGetListStatus501;
