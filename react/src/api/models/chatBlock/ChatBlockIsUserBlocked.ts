/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type ChatBlockIsUserBlockedQueryUserId = string | undefined;

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type ChatBlockIsUserBlockedQueryTargetUserId = string | undefined;

/**
 * @type boolean
 */
export type ChatBlockIsUserBlockedStatus200Plain = boolean;

/**
 * @type boolean
 */
export type ChatBlockIsUserBlockedStatus200Json = boolean;

/**
 * @type boolean
 */
export type ChatBlockIsUserBlockedStatus200Json2 = boolean;

export type ChatBlockIsUserBlockedStatus200 =
  | ChatBlockIsUserBlockedStatus200Plain
  | ChatBlockIsUserBlockedStatus200Json
  | ChatBlockIsUserBlockedStatus200Json2;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus400 =
  | ChatBlockIsUserBlockedStatus400Plain
  | ChatBlockIsUserBlockedStatus400Json
  | ChatBlockIsUserBlockedStatus400Json2;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus401 =
  | ChatBlockIsUserBlockedStatus401Plain
  | ChatBlockIsUserBlockedStatus401Json
  | ChatBlockIsUserBlockedStatus401Json2;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus403 =
  | ChatBlockIsUserBlockedStatus403Plain
  | ChatBlockIsUserBlockedStatus403Json
  | ChatBlockIsUserBlockedStatus403Json2;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus404 =
  | ChatBlockIsUserBlockedStatus404Plain
  | ChatBlockIsUserBlockedStatus404Json
  | ChatBlockIsUserBlockedStatus404Json2;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus500 =
  | ChatBlockIsUserBlockedStatus500Plain
  | ChatBlockIsUserBlockedStatus500Json
  | ChatBlockIsUserBlockedStatus500Json2;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus501 =
  | ChatBlockIsUserBlockedStatus501Plain
  | ChatBlockIsUserBlockedStatus501Json
  | ChatBlockIsUserBlockedStatus501Json2;

/**
 * @type object
 */
export type ChatBlockIsUserBlockedRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    userId?: ChatBlockIsUserBlockedQueryUserId;
    targetUserId?: ChatBlockIsUserBlockedQueryTargetUserId;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/chat-block/is-user-blocked";
};

/**
 * @type object
 */
export type ChatBlockIsUserBlockedResponses = {
  "200": ChatBlockIsUserBlockedStatus200;
  "400": ChatBlockIsUserBlockedStatus400;
  "401": ChatBlockIsUserBlockedStatus401;
  "403": ChatBlockIsUserBlockedStatus403;
  "404": ChatBlockIsUserBlockedStatus404;
  "500": ChatBlockIsUserBlockedStatus500;
  "501": ChatBlockIsUserBlockedStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ChatBlockIsUserBlockedResponse =
  | ChatBlockIsUserBlockedStatus200
  | ChatBlockIsUserBlockedStatus400
  | ChatBlockIsUserBlockedStatus401
  | ChatBlockIsUserBlockedStatus403
  | ChatBlockIsUserBlockedStatus404
  | ChatBlockIsUserBlockedStatus500
  | ChatBlockIsUserBlockedStatus501;
