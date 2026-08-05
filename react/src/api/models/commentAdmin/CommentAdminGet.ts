/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminCommentsCommentWithAuthorDto } from "../volo/cmsKit/admin/comments/CommentWithAuthorDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type CommentAdminGetPathId = string;

/**
 * @type object
 */
export type CommentAdminGetStatus200Plain = VoloCmsKitAdminCommentsCommentWithAuthorDto;

/**
 * @type object
 */
export type CommentAdminGetStatus200Json = VoloCmsKitAdminCommentsCommentWithAuthorDto;

/**
 * @type object
 */
export type CommentAdminGetStatus200Json2 = VoloCmsKitAdminCommentsCommentWithAuthorDto;

export type CommentAdminGetStatus200 =
  | CommentAdminGetStatus200Plain
  | CommentAdminGetStatus200Json
  | CommentAdminGetStatus200Json2;

/**
 * @type object
 */
export type CommentAdminGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus400 =
  | CommentAdminGetStatus400Plain
  | CommentAdminGetStatus400Json
  | CommentAdminGetStatus400Json2;

/**
 * @type object
 */
export type CommentAdminGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus401 =
  | CommentAdminGetStatus401Plain
  | CommentAdminGetStatus401Json
  | CommentAdminGetStatus401Json2;

/**
 * @type object
 */
export type CommentAdminGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus403 =
  | CommentAdminGetStatus403Plain
  | CommentAdminGetStatus403Json
  | CommentAdminGetStatus403Json2;

/**
 * @type object
 */
export type CommentAdminGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus404 =
  | CommentAdminGetStatus404Plain
  | CommentAdminGetStatus404Json
  | CommentAdminGetStatus404Json2;

/**
 * @type object
 */
export type CommentAdminGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus500 =
  | CommentAdminGetStatus500Plain
  | CommentAdminGetStatus500Json
  | CommentAdminGetStatus500Json2;

/**
 * @type object
 */
export type CommentAdminGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus501 =
  | CommentAdminGetStatus501Plain
  | CommentAdminGetStatus501Json
  | CommentAdminGetStatus501Json2;

/**
 * @type object
 */
export type CommentAdminGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: CommentAdminGetPathId;
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
export type CommentAdminGetResponses = {
  "200": CommentAdminGetStatus200;
  "400": CommentAdminGetStatus400;
  "401": CommentAdminGetStatus401;
  "403": CommentAdminGetStatus403;
  "404": CommentAdminGetStatus404;
  "500": CommentAdminGetStatus500;
  "501": CommentAdminGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type CommentAdminGetResponse =
  | CommentAdminGetStatus200
  | CommentAdminGetStatus400
  | CommentAdminGetStatus401
  | CommentAdminGetStatus403
  | CommentAdminGetStatus404
  | CommentAdminGetStatus500
  | CommentAdminGetStatus501;
