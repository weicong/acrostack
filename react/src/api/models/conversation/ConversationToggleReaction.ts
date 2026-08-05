/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type ConversationToggleReactionPathMessageId = string;

/**
 * @type string | undefined
 */
export type ConversationToggleReactionQueryReaction = string | undefined;

/**
 * @type boolean
 */
export type ConversationToggleReactionStatus200Plain = boolean;

/**
 * @type boolean
 */
export type ConversationToggleReactionStatus200Json = boolean;

/**
 * @type boolean
 */
export type ConversationToggleReactionStatus200Json2 = boolean;

export type ConversationToggleReactionStatus200 =
  | ConversationToggleReactionStatus200Plain
  | ConversationToggleReactionStatus200Json
  | ConversationToggleReactionStatus200Json2;

/**
 * @type object
 */
export type ConversationToggleReactionStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationToggleReactionStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationToggleReactionStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus400 =
  | ConversationToggleReactionStatus400Plain
  | ConversationToggleReactionStatus400Json
  | ConversationToggleReactionStatus400Json2;

/**
 * @type object
 */
export type ConversationToggleReactionStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationToggleReactionStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationToggleReactionStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus401 =
  | ConversationToggleReactionStatus401Plain
  | ConversationToggleReactionStatus401Json
  | ConversationToggleReactionStatus401Json2;

/**
 * @type object
 */
export type ConversationToggleReactionStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationToggleReactionStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationToggleReactionStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus403 =
  | ConversationToggleReactionStatus403Plain
  | ConversationToggleReactionStatus403Json
  | ConversationToggleReactionStatus403Json2;

/**
 * @type object
 */
export type ConversationToggleReactionStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationToggleReactionStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationToggleReactionStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus404 =
  | ConversationToggleReactionStatus404Plain
  | ConversationToggleReactionStatus404Json
  | ConversationToggleReactionStatus404Json2;

/**
 * @type object
 */
export type ConversationToggleReactionStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationToggleReactionStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationToggleReactionStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus500 =
  | ConversationToggleReactionStatus500Plain
  | ConversationToggleReactionStatus500Json
  | ConversationToggleReactionStatus500Json2;

/**
 * @type object
 */
export type ConversationToggleReactionStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationToggleReactionStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationToggleReactionStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus501 =
  | ConversationToggleReactionStatus501Plain
  | ConversationToggleReactionStatus501Json
  | ConversationToggleReactionStatus501Json2;

/**
 * @type object
 */
export type ConversationToggleReactionRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    messageId: ConversationToggleReactionPathMessageId;
  };
  /**
   * @type object | undefined
   */
  queryParams?: {
    reaction?: ConversationToggleReactionQueryReaction;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/conversation/toggle-reaction/${string}`;
};

/**
 * @type object
 */
export type ConversationToggleReactionResponses = {
  "200": ConversationToggleReactionStatus200;
  "400": ConversationToggleReactionStatus400;
  "401": ConversationToggleReactionStatus401;
  "403": ConversationToggleReactionStatus403;
  "404": ConversationToggleReactionStatus404;
  "500": ConversationToggleReactionStatus500;
  "501": ConversationToggleReactionStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ConversationToggleReactionResponse =
  | ConversationToggleReactionStatus200
  | ConversationToggleReactionStatus400
  | ConversationToggleReactionStatus401
  | ConversationToggleReactionStatus403
  | ConversationToggleReactionStatus404
  | ConversationToggleReactionStatus500
  | ConversationToggleReactionStatus501;
