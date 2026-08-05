/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosChatBlockedUserDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1AcroStack/services/dtos/chat/BlockedUserDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus200Plain =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosChatBlockedUserDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus200Json =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosChatBlockedUserDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosChatBlockedUserDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type ChatBlockGetBlockedUsersStatus200 =
  | ChatBlockGetBlockedUsersStatus200Plain
  | ChatBlockGetBlockedUsersStatus200Json
  | ChatBlockGetBlockedUsersStatus200Json2;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus400 =
  | ChatBlockGetBlockedUsersStatus400Plain
  | ChatBlockGetBlockedUsersStatus400Json
  | ChatBlockGetBlockedUsersStatus400Json2;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus401 =
  | ChatBlockGetBlockedUsersStatus401Plain
  | ChatBlockGetBlockedUsersStatus401Json
  | ChatBlockGetBlockedUsersStatus401Json2;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus403 =
  | ChatBlockGetBlockedUsersStatus403Plain
  | ChatBlockGetBlockedUsersStatus403Json
  | ChatBlockGetBlockedUsersStatus403Json2;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus404 =
  | ChatBlockGetBlockedUsersStatus404Plain
  | ChatBlockGetBlockedUsersStatus404Json
  | ChatBlockGetBlockedUsersStatus404Json2;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus500 =
  | ChatBlockGetBlockedUsersStatus500Plain
  | ChatBlockGetBlockedUsersStatus500Json
  | ChatBlockGetBlockedUsersStatus500Json2;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus501 =
  | ChatBlockGetBlockedUsersStatus501Plain
  | ChatBlockGetBlockedUsersStatus501Json
  | ChatBlockGetBlockedUsersStatus501Json2;

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/chat-block/blocked-users";
};

/**
 * @type object
 */
export type ChatBlockGetBlockedUsersResponses = {
  "200": ChatBlockGetBlockedUsersStatus200;
  "400": ChatBlockGetBlockedUsersStatus400;
  "401": ChatBlockGetBlockedUsersStatus401;
  "403": ChatBlockGetBlockedUsersStatus403;
  "404": ChatBlockGetBlockedUsersStatus404;
  "500": ChatBlockGetBlockedUsersStatus500;
  "501": ChatBlockGetBlockedUsersStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ChatBlockGetBlockedUsersResponse =
  | ChatBlockGetBlockedUsersStatus200
  | ChatBlockGetBlockedUsersStatus400
  | ChatBlockGetBlockedUsersStatus401
  | ChatBlockGetBlockedUsersStatus403
  | ChatBlockGetBlockedUsersStatus404
  | ChatBlockGetBlockedUsersStatus500
  | ChatBlockGetBlockedUsersStatus501;
