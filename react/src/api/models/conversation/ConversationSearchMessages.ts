/* oxlint-disable */

import type { AcroStackChatSearchMessagesInput } from "../acroStack/chat/SearchMessagesInput.ts";
import type { VoloAbpApplicationDtosPagedResultDto1AcroStackChatChatMessageDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/chat/chatMessageDtoAcroStack/ChatVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type ConversationSearchMessagesStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackChatChatMessageDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackChatChatMessageDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackChatChatMessageDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ConversationSearchMessagesStatus200 =
  | ConversationSearchMessagesStatus200Plain
  | ConversationSearchMessagesStatus200Json
  | ConversationSearchMessagesStatus200Json2;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus400 =
  | ConversationSearchMessagesStatus400Plain
  | ConversationSearchMessagesStatus400Json
  | ConversationSearchMessagesStatus400Json2;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus401 =
  | ConversationSearchMessagesStatus401Plain
  | ConversationSearchMessagesStatus401Json
  | ConversationSearchMessagesStatus401Json2;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus403 =
  | ConversationSearchMessagesStatus403Plain
  | ConversationSearchMessagesStatus403Json
  | ConversationSearchMessagesStatus403Json2;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus404 =
  | ConversationSearchMessagesStatus404Plain
  | ConversationSearchMessagesStatus404Json
  | ConversationSearchMessagesStatus404Json2;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus500 =
  | ConversationSearchMessagesStatus500Plain
  | ConversationSearchMessagesStatus500Json
  | ConversationSearchMessagesStatus500Json2;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationSearchMessagesStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus501 =
  | ConversationSearchMessagesStatus501Plain
  | ConversationSearchMessagesStatus501Json
  | ConversationSearchMessagesStatus501Json2;

/**
 * @type object | undefined
 */
export type ConversationSearchMessagesJsonData = AcroStackChatSearchMessagesInput | undefined;

/**
 * @type object | undefined
 */
export type ConversationSearchMessagesJson2Data = AcroStackChatSearchMessagesInput | undefined;

/**
 * @type object | undefined
 */
export type ConversationSearchMessagesJson3Data = AcroStackChatSearchMessagesInput | undefined;

export type ConversationSearchMessagesData =
  | ConversationSearchMessagesJsonData
  | ConversationSearchMessagesJson2Data
  | ConversationSearchMessagesJson3Data;

/**
 * @type object
 */
export type ConversationSearchMessagesRequestConfig = {
  data?: ConversationSearchMessagesData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/conversation/search-messages";
};

/**
 * @type object
 */
export type ConversationSearchMessagesResponses = {
  "200": ConversationSearchMessagesStatus200;
  "400": ConversationSearchMessagesStatus400;
  "401": ConversationSearchMessagesStatus401;
  "403": ConversationSearchMessagesStatus403;
  "404": ConversationSearchMessagesStatus404;
  "500": ConversationSearchMessagesStatus500;
  "501": ConversationSearchMessagesStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ConversationSearchMessagesResponse =
  | ConversationSearchMessagesStatus200
  | ConversationSearchMessagesStatus400
  | ConversationSearchMessagesStatus401
  | ConversationSearchMessagesStatus403
  | ConversationSearchMessagesStatus404
  | ConversationSearchMessagesStatus500
  | ConversationSearchMessagesStatus501;
