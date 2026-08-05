/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type CommentPublicDeletePathId = string;

/**
 * @type any
 */
export type CommentPublicDeleteStatus200 = any;

/**
 * @type any
 */
export type CommentPublicDeleteStatus204 = any;

/**
 * @type object
 */
export type CommentPublicDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus400 =
  | CommentPublicDeleteStatus400Plain
  | CommentPublicDeleteStatus400Json
  | CommentPublicDeleteStatus400Json2;

/**
 * @type object
 */
export type CommentPublicDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus401 =
  | CommentPublicDeleteStatus401Plain
  | CommentPublicDeleteStatus401Json
  | CommentPublicDeleteStatus401Json2;

/**
 * @type object
 */
export type CommentPublicDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus403 =
  | CommentPublicDeleteStatus403Plain
  | CommentPublicDeleteStatus403Json
  | CommentPublicDeleteStatus403Json2;

/**
 * @type object
 */
export type CommentPublicDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus404 =
  | CommentPublicDeleteStatus404Plain
  | CommentPublicDeleteStatus404Json
  | CommentPublicDeleteStatus404Json2;

/**
 * @type object
 */
export type CommentPublicDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus500 =
  | CommentPublicDeleteStatus500Plain
  | CommentPublicDeleteStatus500Json
  | CommentPublicDeleteStatus500Json2;

/**
 * @type object
 */
export type CommentPublicDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus501 =
  | CommentPublicDeleteStatus501Plain
  | CommentPublicDeleteStatus501Json
  | CommentPublicDeleteStatus501Json2;

/**
 * @type object
 */
export type CommentPublicDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: CommentPublicDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-public/comments/${string}`;
};

/**
 * @type object
 */
export type CommentPublicDeleteResponses = {
  "200": CommentPublicDeleteStatus200;
  "204": CommentPublicDeleteStatus204;
  "400": CommentPublicDeleteStatus400;
  "401": CommentPublicDeleteStatus401;
  "403": CommentPublicDeleteStatus403;
  "404": CommentPublicDeleteStatus404;
  "500": CommentPublicDeleteStatus500;
  "501": CommentPublicDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type CommentPublicDeleteResponse =
  | CommentPublicDeleteStatus200
  | CommentPublicDeleteStatus204
  | CommentPublicDeleteStatus400
  | CommentPublicDeleteStatus401
  | CommentPublicDeleteStatus403
  | CommentPublicDeleteStatus404
  | CommentPublicDeleteStatus500
  | CommentPublicDeleteStatus501;
