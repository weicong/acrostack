/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type CommentDeletePathId = string;

/**
 * @type any
 */
export type CommentDeleteStatus200 = any;

/**
 * @type any
 */
export type CommentDeleteStatus204 = any;

/**
 * @type object
 */
export type CommentDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentDeleteStatus400 =
  | CommentDeleteStatus400Plain
  | CommentDeleteStatus400Json
  | CommentDeleteStatus400Json2;

/**
 * @type object
 */
export type CommentDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentDeleteStatus401 =
  | CommentDeleteStatus401Plain
  | CommentDeleteStatus401Json
  | CommentDeleteStatus401Json2;

/**
 * @type object
 */
export type CommentDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentDeleteStatus403 =
  | CommentDeleteStatus403Plain
  | CommentDeleteStatus403Json
  | CommentDeleteStatus403Json2;

/**
 * @type object
 */
export type CommentDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentDeleteStatus404 =
  | CommentDeleteStatus404Plain
  | CommentDeleteStatus404Json
  | CommentDeleteStatus404Json2;

/**
 * @type object
 */
export type CommentDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentDeleteStatus500 =
  | CommentDeleteStatus500Plain
  | CommentDeleteStatus500Json
  | CommentDeleteStatus500Json2;

/**
 * @type object
 */
export type CommentDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentDeleteStatus501 =
  | CommentDeleteStatus501Plain
  | CommentDeleteStatus501Json
  | CommentDeleteStatus501Json2;

/**
 * @type object
 */
export type CommentDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: CommentDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/comment/${string}`;
};

/**
 * @type object
 */
export type CommentDeleteResponses = {
  "200": CommentDeleteStatus200;
  "204": CommentDeleteStatus204;
  "400": CommentDeleteStatus400;
  "401": CommentDeleteStatus401;
  "403": CommentDeleteStatus403;
  "404": CommentDeleteStatus404;
  "500": CommentDeleteStatus500;
  "501": CommentDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type CommentDeleteResponse =
  | CommentDeleteStatus200
  | CommentDeleteStatus204
  | CommentDeleteStatus400
  | CommentDeleteStatus401
  | CommentDeleteStatus403
  | CommentDeleteStatus404
  | CommentDeleteStatus500
  | CommentDeleteStatus501;
