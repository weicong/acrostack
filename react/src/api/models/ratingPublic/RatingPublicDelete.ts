/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string
 */
export type RatingPublicDeletePathEntityType = string;

/**
 * @type string
 */
export type RatingPublicDeletePathEntityId = string;

/**
 * @type any
 */
export type RatingPublicDeleteStatus200 = any;

/**
 * @type any
 */
export type RatingPublicDeleteStatus204 = any;

/**
 * @type object
 */
export type RatingPublicDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus400 =
  | RatingPublicDeleteStatus400Plain
  | RatingPublicDeleteStatus400Json
  | RatingPublicDeleteStatus400Json2;

/**
 * @type object
 */
export type RatingPublicDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus401 =
  | RatingPublicDeleteStatus401Plain
  | RatingPublicDeleteStatus401Json
  | RatingPublicDeleteStatus401Json2;

/**
 * @type object
 */
export type RatingPublicDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus403 =
  | RatingPublicDeleteStatus403Plain
  | RatingPublicDeleteStatus403Json
  | RatingPublicDeleteStatus403Json2;

/**
 * @type object
 */
export type RatingPublicDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus404 =
  | RatingPublicDeleteStatus404Plain
  | RatingPublicDeleteStatus404Json
  | RatingPublicDeleteStatus404Json2;

/**
 * @type object
 */
export type RatingPublicDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus500 =
  | RatingPublicDeleteStatus500Plain
  | RatingPublicDeleteStatus500Json
  | RatingPublicDeleteStatus500Json2;

/**
 * @type object
 */
export type RatingPublicDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus501 =
  | RatingPublicDeleteStatus501Plain
  | RatingPublicDeleteStatus501Json
  | RatingPublicDeleteStatus501Json2;

/**
 * @type object
 */
export type RatingPublicDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    entityType: RatingPublicDeletePathEntityType;
    entityId: RatingPublicDeletePathEntityId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-public/ratings/${string}/${string}`;
};

/**
 * @type object
 */
export type RatingPublicDeleteResponses = {
  "200": RatingPublicDeleteStatus200;
  "204": RatingPublicDeleteStatus204;
  "400": RatingPublicDeleteStatus400;
  "401": RatingPublicDeleteStatus401;
  "403": RatingPublicDeleteStatus403;
  "404": RatingPublicDeleteStatus404;
  "500": RatingPublicDeleteStatus500;
  "501": RatingPublicDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type RatingPublicDeleteResponse =
  | RatingPublicDeleteStatus200
  | RatingPublicDeleteStatus204
  | RatingPublicDeleteStatus400
  | RatingPublicDeleteStatus401
  | RatingPublicDeleteStatus403
  | RatingPublicDeleteStatus404
  | RatingPublicDeleteStatus500
  | RatingPublicDeleteStatus501;
