/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type ConversationMarkAsReadPathTargetUserId = string;

/**
 * @type any
 */
export type ConversationMarkAsReadStatus200 = any;

/**
 * @type any
 */
export type ConversationMarkAsReadStatus204 = any;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus400 =
  | ConversationMarkAsReadStatus400Plain
  | ConversationMarkAsReadStatus400Json
  | ConversationMarkAsReadStatus400Json2;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus401 =
  | ConversationMarkAsReadStatus401Plain
  | ConversationMarkAsReadStatus401Json
  | ConversationMarkAsReadStatus401Json2;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus403 =
  | ConversationMarkAsReadStatus403Plain
  | ConversationMarkAsReadStatus403Json
  | ConversationMarkAsReadStatus403Json2;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus404 =
  | ConversationMarkAsReadStatus404Plain
  | ConversationMarkAsReadStatus404Json
  | ConversationMarkAsReadStatus404Json2;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus500 =
  | ConversationMarkAsReadStatus500Plain
  | ConversationMarkAsReadStatus500Json
  | ConversationMarkAsReadStatus500Json2;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationMarkAsReadStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus501 =
  | ConversationMarkAsReadStatus501Plain
  | ConversationMarkAsReadStatus501Json
  | ConversationMarkAsReadStatus501Json2;

/**
 * @type object
 */
export type ConversationMarkAsReadRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    targetUserId: ConversationMarkAsReadPathTargetUserId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/conversation/mark-as-read/${string}`;
};

/**
 * @type object
 */
export type ConversationMarkAsReadResponses = {
  "200": ConversationMarkAsReadStatus200;
  "204": ConversationMarkAsReadStatus204;
  "400": ConversationMarkAsReadStatus400;
  "401": ConversationMarkAsReadStatus401;
  "403": ConversationMarkAsReadStatus403;
  "404": ConversationMarkAsReadStatus404;
  "500": ConversationMarkAsReadStatus500;
  "501": ConversationMarkAsReadStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ConversationMarkAsReadResponse =
  | ConversationMarkAsReadStatus200
  | ConversationMarkAsReadStatus204
  | ConversationMarkAsReadStatus400
  | ConversationMarkAsReadStatus401
  | ConversationMarkAsReadStatus403
  | ConversationMarkAsReadStatus404
  | ConversationMarkAsReadStatus500
  | ConversationMarkAsReadStatus501;
