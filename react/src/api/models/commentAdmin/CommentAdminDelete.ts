/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type CommentAdminDeletePathId = string;

/**
 * @type any
 */
export type CommentAdminDeleteStatus200 = any;

/**
 * @type any
 */
export type CommentAdminDeleteStatus204 = any;

/**
 * @type object
 */
export type CommentAdminDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus400 =
  | CommentAdminDeleteStatus400Plain
  | CommentAdminDeleteStatus400Json
  | CommentAdminDeleteStatus400Json2;

/**
 * @type object
 */
export type CommentAdminDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus401 =
  | CommentAdminDeleteStatus401Plain
  | CommentAdminDeleteStatus401Json
  | CommentAdminDeleteStatus401Json2;

/**
 * @type object
 */
export type CommentAdminDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus403 =
  | CommentAdminDeleteStatus403Plain
  | CommentAdminDeleteStatus403Json
  | CommentAdminDeleteStatus403Json2;

/**
 * @type object
 */
export type CommentAdminDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus404 =
  | CommentAdminDeleteStatus404Plain
  | CommentAdminDeleteStatus404Json
  | CommentAdminDeleteStatus404Json2;

/**
 * @type object
 */
export type CommentAdminDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus500 =
  | CommentAdminDeleteStatus500Plain
  | CommentAdminDeleteStatus500Json
  | CommentAdminDeleteStatus500Json2;

/**
 * @type object
 */
export type CommentAdminDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus501 =
  | CommentAdminDeleteStatus501Plain
  | CommentAdminDeleteStatus501Json
  | CommentAdminDeleteStatus501Json2;

/**
 * @type object
 */
export type CommentAdminDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: CommentAdminDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/comments/${string}`;
};

/**
 * @type object
 */
export type CommentAdminDeleteResponses = {
  "200": CommentAdminDeleteStatus200;
  "204": CommentAdminDeleteStatus204;
  "400": CommentAdminDeleteStatus400;
  "401": CommentAdminDeleteStatus401;
  "403": CommentAdminDeleteStatus403;
  "404": CommentAdminDeleteStatus404;
  "500": CommentAdminDeleteStatus500;
  "501": CommentAdminDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type CommentAdminDeleteResponse =
  | CommentAdminDeleteStatus200
  | CommentAdminDeleteStatus204
  | CommentAdminDeleteStatus400
  | CommentAdminDeleteStatus401
  | CommentAdminDeleteStatus403
  | CommentAdminDeleteStatus404
  | CommentAdminDeleteStatus500
  | CommentAdminDeleteStatus501;
