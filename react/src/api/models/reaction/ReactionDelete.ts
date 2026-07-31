/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type ReactionDeleteQueryEntityType = string | undefined;

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type ReactionDeleteQueryEntityId = string | undefined;

/**
 * @type string | undefined
 */
export type ReactionDeleteQueryReactionType = string | undefined;

/**
 * @type any
 */
export type ReactionDeleteStatus200 = any;

/**
 * @type any
 */
export type ReactionDeleteStatus204 = any;

/**
 * @type object
 */
export type ReactionDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionDeleteStatus400 =
  | ReactionDeleteStatus400Plain
  | ReactionDeleteStatus400Json
  | ReactionDeleteStatus400Json2;

/**
 * @type object
 */
export type ReactionDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionDeleteStatus401 =
  | ReactionDeleteStatus401Plain
  | ReactionDeleteStatus401Json
  | ReactionDeleteStatus401Json2;

/**
 * @type object
 */
export type ReactionDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionDeleteStatus403 =
  | ReactionDeleteStatus403Plain
  | ReactionDeleteStatus403Json
  | ReactionDeleteStatus403Json2;

/**
 * @type object
 */
export type ReactionDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionDeleteStatus404 =
  | ReactionDeleteStatus404Plain
  | ReactionDeleteStatus404Json
  | ReactionDeleteStatus404Json2;

/**
 * @type object
 */
export type ReactionDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionDeleteStatus500 =
  | ReactionDeleteStatus500Plain
  | ReactionDeleteStatus500Json
  | ReactionDeleteStatus500Json2;

/**
 * @type object
 */
export type ReactionDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionDeleteStatus501 =
  | ReactionDeleteStatus501Plain
  | ReactionDeleteStatus501Json
  | ReactionDeleteStatus501Json2;

/**
 * @type object
 */
export type ReactionDeleteRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    entityType?: ReactionDeleteQueryEntityType;
    entityId?: ReactionDeleteQueryEntityId;
    reactionType?: ReactionDeleteQueryReactionType;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/reaction";
};

/**
 * @type object
 */
export type ReactionDeleteResponses = {
  "200": ReactionDeleteStatus200;
  "204": ReactionDeleteStatus204;
  "400": ReactionDeleteStatus400;
  "401": ReactionDeleteStatus401;
  "403": ReactionDeleteStatus403;
  "404": ReactionDeleteStatus404;
  "500": ReactionDeleteStatus500;
  "501": ReactionDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ReactionDeleteResponse =
  | ReactionDeleteStatus200
  | ReactionDeleteStatus204
  | ReactionDeleteStatus400
  | ReactionDeleteStatus401
  | ReactionDeleteStatus403
  | ReactionDeleteStatus404
  | ReactionDeleteStatus500
  | ReactionDeleteStatus501;
