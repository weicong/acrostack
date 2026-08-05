/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `int32`
 * @type integer
 */
export type CommentAdminGetWaitingCountStatus200Plain = number;

/**
 * @description
 * Format: `int32`
 * @type integer
 */
export type CommentAdminGetWaitingCountStatus200Json = number;

/**
 * @description
 * Format: `int32`
 * @type integer
 */
export type CommentAdminGetWaitingCountStatus200Json2 = number;

export type CommentAdminGetWaitingCountStatus200 =
  | CommentAdminGetWaitingCountStatus200Plain
  | CommentAdminGetWaitingCountStatus200Json
  | CommentAdminGetWaitingCountStatus200Json2;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus400 =
  | CommentAdminGetWaitingCountStatus400Plain
  | CommentAdminGetWaitingCountStatus400Json
  | CommentAdminGetWaitingCountStatus400Json2;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus401 =
  | CommentAdminGetWaitingCountStatus401Plain
  | CommentAdminGetWaitingCountStatus401Json
  | CommentAdminGetWaitingCountStatus401Json2;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus403 =
  | CommentAdminGetWaitingCountStatus403Plain
  | CommentAdminGetWaitingCountStatus403Json
  | CommentAdminGetWaitingCountStatus403Json2;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus404 =
  | CommentAdminGetWaitingCountStatus404Plain
  | CommentAdminGetWaitingCountStatus404Json
  | CommentAdminGetWaitingCountStatus404Json2;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus500 =
  | CommentAdminGetWaitingCountStatus500Plain
  | CommentAdminGetWaitingCountStatus500Json
  | CommentAdminGetWaitingCountStatus500Json2;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus501 =
  | CommentAdminGetWaitingCountStatus501Plain
  | CommentAdminGetWaitingCountStatus501Json
  | CommentAdminGetWaitingCountStatus501Json2;

/**
 * @type object
 */
export type CommentAdminGetWaitingCountRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/comments/waiting-count";
};

/**
 * @type object
 */
export type CommentAdminGetWaitingCountResponses = {
  "200": CommentAdminGetWaitingCountStatus200;
  "400": CommentAdminGetWaitingCountStatus400;
  "401": CommentAdminGetWaitingCountStatus401;
  "403": CommentAdminGetWaitingCountStatus403;
  "404": CommentAdminGetWaitingCountStatus404;
  "500": CommentAdminGetWaitingCountStatus500;
  "501": CommentAdminGetWaitingCountStatus501;
};

/**
 * @description Union of all possible responses
 */
export type CommentAdminGetWaitingCountResponse =
  | CommentAdminGetWaitingCountStatus200
  | CommentAdminGetWaitingCountStatus400
  | CommentAdminGetWaitingCountStatus401
  | CommentAdminGetWaitingCountStatus403
  | CommentAdminGetWaitingCountStatus404
  | CommentAdminGetWaitingCountStatus500
  | CommentAdminGetWaitingCountStatus501;
