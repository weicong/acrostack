/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitPublicCommentsCommentDto } from "../volo/cmsKit/public/comments/CommentDto.ts";
import type { VoloCmsKitPublicCommentsUpdateCommentInput } from "../volo/cmsKit/public/comments/UpdateCommentInput.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type CommentPublicUpdatePathId = string;

/**
 * @type object
 */
export type CommentPublicUpdateStatus200Plain = VoloCmsKitPublicCommentsCommentDto;

/**
 * @type object
 */
export type CommentPublicUpdateStatus200Json = VoloCmsKitPublicCommentsCommentDto;

/**
 * @type object
 */
export type CommentPublicUpdateStatus200Json2 = VoloCmsKitPublicCommentsCommentDto;

export type CommentPublicUpdateStatus200 =
  | CommentPublicUpdateStatus200Plain
  | CommentPublicUpdateStatus200Json
  | CommentPublicUpdateStatus200Json2;

/**
 * @type object
 */
export type CommentPublicUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus400 =
  | CommentPublicUpdateStatus400Plain
  | CommentPublicUpdateStatus400Json
  | CommentPublicUpdateStatus400Json2;

/**
 * @type object
 */
export type CommentPublicUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus401 =
  | CommentPublicUpdateStatus401Plain
  | CommentPublicUpdateStatus401Json
  | CommentPublicUpdateStatus401Json2;

/**
 * @type object
 */
export type CommentPublicUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus403 =
  | CommentPublicUpdateStatus403Plain
  | CommentPublicUpdateStatus403Json
  | CommentPublicUpdateStatus403Json2;

/**
 * @type object
 */
export type CommentPublicUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus404 =
  | CommentPublicUpdateStatus404Plain
  | CommentPublicUpdateStatus404Json
  | CommentPublicUpdateStatus404Json2;

/**
 * @type object
 */
export type CommentPublicUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus500 =
  | CommentPublicUpdateStatus500Plain
  | CommentPublicUpdateStatus500Json
  | CommentPublicUpdateStatus500Json2;

/**
 * @type object
 */
export type CommentPublicUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus501 =
  | CommentPublicUpdateStatus501Plain
  | CommentPublicUpdateStatus501Json
  | CommentPublicUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type CommentPublicUpdateJsonData =
  | Omit<NonNullable<VoloCmsKitPublicCommentsUpdateCommentInput>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type CommentPublicUpdateJson2Data =
  | Omit<NonNullable<VoloCmsKitPublicCommentsUpdateCommentInput>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type CommentPublicUpdateJson3Data =
  | Omit<NonNullable<VoloCmsKitPublicCommentsUpdateCommentInput>, "extraProperties">
  | undefined;

export type CommentPublicUpdateData =
  | CommentPublicUpdateJsonData
  | CommentPublicUpdateJson2Data
  | CommentPublicUpdateJson3Data;

/**
 * @type object
 */
export type CommentPublicUpdateRequestConfig = {
  data?: CommentPublicUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: CommentPublicUpdatePathId;
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
export type CommentPublicUpdateResponses = {
  "200": CommentPublicUpdateStatus200;
  "400": CommentPublicUpdateStatus400;
  "401": CommentPublicUpdateStatus401;
  "403": CommentPublicUpdateStatus403;
  "404": CommentPublicUpdateStatus404;
  "500": CommentPublicUpdateStatus500;
  "501": CommentPublicUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type CommentPublicUpdateResponse =
  | CommentPublicUpdateStatus200
  | CommentPublicUpdateStatus400
  | CommentPublicUpdateStatus401
  | CommentPublicUpdateStatus403
  | CommentPublicUpdateStatus404
  | CommentPublicUpdateStatus500
  | CommentPublicUpdateStatus501;
