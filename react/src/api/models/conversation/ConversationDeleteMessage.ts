/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type ConversationDeleteMessagePathMessageId = string;

/**
 * @type any
 */
export type ConversationDeleteMessageStatus200 = any;

/**
 * @type any
 */
export type ConversationDeleteMessageStatus204 = any;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus400 =
  | ConversationDeleteMessageStatus400Plain
  | ConversationDeleteMessageStatus400Json
  | ConversationDeleteMessageStatus400Json2;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus401 =
  | ConversationDeleteMessageStatus401Plain
  | ConversationDeleteMessageStatus401Json
  | ConversationDeleteMessageStatus401Json2;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus403 =
  | ConversationDeleteMessageStatus403Plain
  | ConversationDeleteMessageStatus403Json
  | ConversationDeleteMessageStatus403Json2;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus404 =
  | ConversationDeleteMessageStatus404Plain
  | ConversationDeleteMessageStatus404Json
  | ConversationDeleteMessageStatus404Json2;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus500 =
  | ConversationDeleteMessageStatus500Plain
  | ConversationDeleteMessageStatus500Json
  | ConversationDeleteMessageStatus500Json2;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDeleteMessageStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus501 =
  | ConversationDeleteMessageStatus501Plain
  | ConversationDeleteMessageStatus501Json
  | ConversationDeleteMessageStatus501Json2;

/**
 * @type object
 */
export type ConversationDeleteMessageRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    messageId: ConversationDeleteMessagePathMessageId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/conversation/message/${string}`;
};

/**
 * @type object
 */
export type ConversationDeleteMessageResponses = {
  "200": ConversationDeleteMessageStatus200;
  "204": ConversationDeleteMessageStatus204;
  "400": ConversationDeleteMessageStatus400;
  "401": ConversationDeleteMessageStatus401;
  "403": ConversationDeleteMessageStatus403;
  "404": ConversationDeleteMessageStatus404;
  "500": ConversationDeleteMessageStatus500;
  "501": ConversationDeleteMessageStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ConversationDeleteMessageResponse =
  | ConversationDeleteMessageStatus200
  | ConversationDeleteMessageStatus204
  | ConversationDeleteMessageStatus400
  | ConversationDeleteMessageStatus401
  | ConversationDeleteMessageStatus403
  | ConversationDeleteMessageStatus404
  | ConversationDeleteMessageStatus500
  | ConversationDeleteMessageStatus501;
