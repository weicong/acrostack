/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string
 */
export type ReactionPublicDeletePathEntityType = string;

/**
 * @type string
 */
export type ReactionPublicDeletePathEntityId = string;

/**
 * @type string
 */
export type ReactionPublicDeletePathReaction = string;

/**
 * @type any
 */
export type ReactionPublicDeleteStatus200 = any;

/**
 * @type any
 */
export type ReactionPublicDeleteStatus204 = any;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus400 =
  | ReactionPublicDeleteStatus400Plain
  | ReactionPublicDeleteStatus400Json
  | ReactionPublicDeleteStatus400Json2;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus401 =
  | ReactionPublicDeleteStatus401Plain
  | ReactionPublicDeleteStatus401Json
  | ReactionPublicDeleteStatus401Json2;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus403 =
  | ReactionPublicDeleteStatus403Plain
  | ReactionPublicDeleteStatus403Json
  | ReactionPublicDeleteStatus403Json2;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus404 =
  | ReactionPublicDeleteStatus404Plain
  | ReactionPublicDeleteStatus404Json
  | ReactionPublicDeleteStatus404Json2;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus500 =
  | ReactionPublicDeleteStatus500Plain
  | ReactionPublicDeleteStatus500Json
  | ReactionPublicDeleteStatus500Json2;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus501 =
  | ReactionPublicDeleteStatus501Plain
  | ReactionPublicDeleteStatus501Json
  | ReactionPublicDeleteStatus501Json2;

/**
 * @type object
 */
export type ReactionPublicDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    entityType: ReactionPublicDeletePathEntityType;
    entityId: ReactionPublicDeletePathEntityId;
    reaction: ReactionPublicDeletePathReaction;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-public/reactions/${string}/${string}/${string}`;
};

/**
 * @type object
 */
export type ReactionPublicDeleteResponses = {
  "200": ReactionPublicDeleteStatus200;
  "204": ReactionPublicDeleteStatus204;
  "400": ReactionPublicDeleteStatus400;
  "401": ReactionPublicDeleteStatus401;
  "403": ReactionPublicDeleteStatus403;
  "404": ReactionPublicDeleteStatus404;
  "500": ReactionPublicDeleteStatus500;
  "501": ReactionPublicDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ReactionPublicDeleteResponse =
  | ReactionPublicDeleteStatus200
  | ReactionPublicDeleteStatus204
  | ReactionPublicDeleteStatus400
  | ReactionPublicDeleteStatus401
  | ReactionPublicDeleteStatus403
  | ReactionPublicDeleteStatus404
  | ReactionPublicDeleteStatus500
  | ReactionPublicDeleteStatus501;
