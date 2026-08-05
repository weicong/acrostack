/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type ChatBlockUnblockUserPathBlockedUserId = string;

/**
 * @type any
 */
export type ChatBlockUnblockUserStatus200 = any;

/**
 * @type any
 */
export type ChatBlockUnblockUserStatus204 = any;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus400 =
  | ChatBlockUnblockUserStatus400Plain
  | ChatBlockUnblockUserStatus400Json
  | ChatBlockUnblockUserStatus400Json2;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus401 =
  | ChatBlockUnblockUserStatus401Plain
  | ChatBlockUnblockUserStatus401Json
  | ChatBlockUnblockUserStatus401Json2;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus403 =
  | ChatBlockUnblockUserStatus403Plain
  | ChatBlockUnblockUserStatus403Json
  | ChatBlockUnblockUserStatus403Json2;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus404 =
  | ChatBlockUnblockUserStatus404Plain
  | ChatBlockUnblockUserStatus404Json
  | ChatBlockUnblockUserStatus404Json2;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus500 =
  | ChatBlockUnblockUserStatus500Plain
  | ChatBlockUnblockUserStatus500Json
  | ChatBlockUnblockUserStatus500Json2;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockUnblockUserStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus501 =
  | ChatBlockUnblockUserStatus501Plain
  | ChatBlockUnblockUserStatus501Json
  | ChatBlockUnblockUserStatus501Json2;

/**
 * @type object
 */
export type ChatBlockUnblockUserRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    blockedUserId: ChatBlockUnblockUserPathBlockedUserId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/chat-block/unblock-user/${string}`;
};

/**
 * @type object
 */
export type ChatBlockUnblockUserResponses = {
  "200": ChatBlockUnblockUserStatus200;
  "204": ChatBlockUnblockUserStatus204;
  "400": ChatBlockUnblockUserStatus400;
  "401": ChatBlockUnblockUserStatus401;
  "403": ChatBlockUnblockUserStatus403;
  "404": ChatBlockUnblockUserStatus404;
  "500": ChatBlockUnblockUserStatus500;
  "501": ChatBlockUnblockUserStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ChatBlockUnblockUserResponse =
  | ChatBlockUnblockUserStatus200
  | ChatBlockUnblockUserStatus204
  | ChatBlockUnblockUserStatus400
  | ChatBlockUnblockUserStatus401
  | ChatBlockUnblockUserStatus403
  | ChatBlockUnblockUserStatus404
  | ChatBlockUnblockUserStatus500
  | ChatBlockUnblockUserStatus501;
