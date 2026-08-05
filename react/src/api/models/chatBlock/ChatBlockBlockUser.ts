/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type ChatBlockBlockUserPathBlockedUserId = string;

/**
 * @type any
 */
export type ChatBlockBlockUserStatus200 = any;

/**
 * @type any
 */
export type ChatBlockBlockUserStatus204 = any;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus400 =
  | ChatBlockBlockUserStatus400Plain
  | ChatBlockBlockUserStatus400Json
  | ChatBlockBlockUserStatus400Json2;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus401 =
  | ChatBlockBlockUserStatus401Plain
  | ChatBlockBlockUserStatus401Json
  | ChatBlockBlockUserStatus401Json2;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus403 =
  | ChatBlockBlockUserStatus403Plain
  | ChatBlockBlockUserStatus403Json
  | ChatBlockBlockUserStatus403Json2;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus404 =
  | ChatBlockBlockUserStatus404Plain
  | ChatBlockBlockUserStatus404Json
  | ChatBlockBlockUserStatus404Json2;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus500 =
  | ChatBlockBlockUserStatus500Plain
  | ChatBlockBlockUserStatus500Json
  | ChatBlockBlockUserStatus500Json2;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockBlockUserStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus501 =
  | ChatBlockBlockUserStatus501Plain
  | ChatBlockBlockUserStatus501Json
  | ChatBlockBlockUserStatus501Json2;

/**
 * @type object
 */
export type ChatBlockBlockUserRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    blockedUserId: ChatBlockBlockUserPathBlockedUserId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/chat-block/block-user/${string}`;
};

/**
 * @type object
 */
export type ChatBlockBlockUserResponses = {
  "200": ChatBlockBlockUserStatus200;
  "204": ChatBlockBlockUserStatus204;
  "400": ChatBlockBlockUserStatus400;
  "401": ChatBlockBlockUserStatus401;
  "403": ChatBlockBlockUserStatus403;
  "404": ChatBlockBlockUserStatus404;
  "500": ChatBlockBlockUserStatus500;
  "501": ChatBlockBlockUserStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ChatBlockBlockUserResponse =
  | ChatBlockBlockUserStatus200
  | ChatBlockBlockUserStatus204
  | ChatBlockBlockUserStatus400
  | ChatBlockBlockUserStatus401
  | ChatBlockBlockUserStatus403
  | ChatBlockBlockUserStatus404
  | ChatBlockBlockUserStatus500
  | ChatBlockBlockUserStatus501;
