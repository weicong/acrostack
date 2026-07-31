/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosChatChatMessageDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/services/dtos/chat/ChatMessageDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type ConversationGetMessageListQueryTargetUserId = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type ConversationGetMessageListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type ConversationGetMessageListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type ConversationGetMessageListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosChatChatMessageDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type ConversationGetMessageListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosChatChatMessageDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type ConversationGetMessageListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosChatChatMessageDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type ConversationGetMessageListStatus200 =
  | ConversationGetMessageListStatus200Plain
  | ConversationGetMessageListStatus200Json
  | ConversationGetMessageListStatus200Json2;

/**
 * @type object
 */
export type ConversationGetMessageListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetMessageListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetMessageListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus400 =
  | ConversationGetMessageListStatus400Plain
  | ConversationGetMessageListStatus400Json
  | ConversationGetMessageListStatus400Json2;

/**
 * @type object
 */
export type ConversationGetMessageListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetMessageListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetMessageListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus401 =
  | ConversationGetMessageListStatus401Plain
  | ConversationGetMessageListStatus401Json
  | ConversationGetMessageListStatus401Json2;

/**
 * @type object
 */
export type ConversationGetMessageListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetMessageListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetMessageListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus403 =
  | ConversationGetMessageListStatus403Plain
  | ConversationGetMessageListStatus403Json
  | ConversationGetMessageListStatus403Json2;

/**
 * @type object
 */
export type ConversationGetMessageListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetMessageListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetMessageListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus404 =
  | ConversationGetMessageListStatus404Plain
  | ConversationGetMessageListStatus404Json
  | ConversationGetMessageListStatus404Json2;

/**
 * @type object
 */
export type ConversationGetMessageListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetMessageListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetMessageListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus500 =
  | ConversationGetMessageListStatus500Plain
  | ConversationGetMessageListStatus500Json
  | ConversationGetMessageListStatus500Json2;

/**
 * @type object
 */
export type ConversationGetMessageListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetMessageListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationGetMessageListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus501 =
  | ConversationGetMessageListStatus501Plain
  | ConversationGetMessageListStatus501Json
  | ConversationGetMessageListStatus501Json2;

/**
 * @type object
 */
export type ConversationGetMessageListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    TargetUserId?: ConversationGetMessageListQueryTargetUserId;
    SkipCount?: ConversationGetMessageListQuerySkipCount;
    MaxResultCount?: ConversationGetMessageListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/conversation/message-list";
};

/**
 * @type object
 */
export type ConversationGetMessageListResponses = {
  "200": ConversationGetMessageListStatus200;
  "400": ConversationGetMessageListStatus400;
  "401": ConversationGetMessageListStatus401;
  "403": ConversationGetMessageListStatus403;
  "404": ConversationGetMessageListStatus404;
  "500": ConversationGetMessageListStatus500;
  "501": ConversationGetMessageListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ConversationGetMessageListResponse =
  | ConversationGetMessageListStatus200
  | ConversationGetMessageListStatus400
  | ConversationGetMessageListStatus401
  | ConversationGetMessageListStatus403
  | ConversationGetMessageListStatus404
  | ConversationGetMessageListStatus500
  | ConversationGetMessageListStatus501;
