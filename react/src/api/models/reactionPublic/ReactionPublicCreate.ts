/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string
 */
export type ReactionPublicCreatePathEntityType = string;

/**
 * @type string
 */
export type ReactionPublicCreatePathEntityId = string;

/**
 * @type string
 */
export type ReactionPublicCreatePathReaction = string;

/**
 * @type any
 */
export type ReactionPublicCreateStatus200 = any;

/**
 * @type any
 */
export type ReactionPublicCreateStatus204 = any;

/**
 * @type object
 */
export type ReactionPublicCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus400 =
  | ReactionPublicCreateStatus400Plain
  | ReactionPublicCreateStatus400Json
  | ReactionPublicCreateStatus400Json2;

/**
 * @type object
 */
export type ReactionPublicCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus401 =
  | ReactionPublicCreateStatus401Plain
  | ReactionPublicCreateStatus401Json
  | ReactionPublicCreateStatus401Json2;

/**
 * @type object
 */
export type ReactionPublicCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus403 =
  | ReactionPublicCreateStatus403Plain
  | ReactionPublicCreateStatus403Json
  | ReactionPublicCreateStatus403Json2;

/**
 * @type object
 */
export type ReactionPublicCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus404 =
  | ReactionPublicCreateStatus404Plain
  | ReactionPublicCreateStatus404Json
  | ReactionPublicCreateStatus404Json2;

/**
 * @type object
 */
export type ReactionPublicCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus500 =
  | ReactionPublicCreateStatus500Plain
  | ReactionPublicCreateStatus500Json
  | ReactionPublicCreateStatus500Json2;

/**
 * @type object
 */
export type ReactionPublicCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus501 =
  | ReactionPublicCreateStatus501Plain
  | ReactionPublicCreateStatus501Json
  | ReactionPublicCreateStatus501Json2;

/**
 * @type object
 */
export type ReactionPublicCreateRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    entityType: ReactionPublicCreatePathEntityType;
    entityId: ReactionPublicCreatePathEntityId;
    reaction: ReactionPublicCreatePathReaction;
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
export type ReactionPublicCreateResponses = {
  "200": ReactionPublicCreateStatus200;
  "204": ReactionPublicCreateStatus204;
  "400": ReactionPublicCreateStatus400;
  "401": ReactionPublicCreateStatus401;
  "403": ReactionPublicCreateStatus403;
  "404": ReactionPublicCreateStatus404;
  "500": ReactionPublicCreateStatus500;
  "501": ReactionPublicCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ReactionPublicCreateResponse =
  | ReactionPublicCreateStatus200
  | ReactionPublicCreateStatus204
  | ReactionPublicCreateStatus400
  | ReactionPublicCreateStatus401
  | ReactionPublicCreateStatus403
  | ReactionPublicCreateStatus404
  | ReactionPublicCreateStatus500
  | ReactionPublicCreateStatus501;
