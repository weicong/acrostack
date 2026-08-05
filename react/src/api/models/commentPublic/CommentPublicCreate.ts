/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitPublicCommentsCommentDto } from "../volo/cmsKit/public/comments/CommentDto.ts";
import type { VoloCmsKitPublicCommentsCreateCommentInput } from "../volo/cmsKit/public/comments/CreateCommentInput.ts";

/**
 * @type string
 */
export type CommentPublicCreatePathEntityType = string;

/**
 * @type string
 */
export type CommentPublicCreatePathEntityId = string;

/**
 * @type object
 */
export type CommentPublicCreateStatus200Plain = VoloCmsKitPublicCommentsCommentDto;

/**
 * @type object
 */
export type CommentPublicCreateStatus200Json = VoloCmsKitPublicCommentsCommentDto;

/**
 * @type object
 */
export type CommentPublicCreateStatus200Json2 = VoloCmsKitPublicCommentsCommentDto;

export type CommentPublicCreateStatus200 =
  | CommentPublicCreateStatus200Plain
  | CommentPublicCreateStatus200Json
  | CommentPublicCreateStatus200Json2;

/**
 * @type object
 */
export type CommentPublicCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus400 =
  | CommentPublicCreateStatus400Plain
  | CommentPublicCreateStatus400Json
  | CommentPublicCreateStatus400Json2;

/**
 * @type object
 */
export type CommentPublicCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus401 =
  | CommentPublicCreateStatus401Plain
  | CommentPublicCreateStatus401Json
  | CommentPublicCreateStatus401Json2;

/**
 * @type object
 */
export type CommentPublicCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus403 =
  | CommentPublicCreateStatus403Plain
  | CommentPublicCreateStatus403Json
  | CommentPublicCreateStatus403Json2;

/**
 * @type object
 */
export type CommentPublicCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus404 =
  | CommentPublicCreateStatus404Plain
  | CommentPublicCreateStatus404Json
  | CommentPublicCreateStatus404Json2;

/**
 * @type object
 */
export type CommentPublicCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus500 =
  | CommentPublicCreateStatus500Plain
  | CommentPublicCreateStatus500Json
  | CommentPublicCreateStatus500Json2;

/**
 * @type object
 */
export type CommentPublicCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus501 =
  | CommentPublicCreateStatus501Plain
  | CommentPublicCreateStatus501Json
  | CommentPublicCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type CommentPublicCreateJsonData =
  | Omit<NonNullable<VoloCmsKitPublicCommentsCreateCommentInput>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type CommentPublicCreateJson2Data =
  | Omit<NonNullable<VoloCmsKitPublicCommentsCreateCommentInput>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type CommentPublicCreateJson3Data =
  | Omit<NonNullable<VoloCmsKitPublicCommentsCreateCommentInput>, "extraProperties">
  | undefined;

export type CommentPublicCreateData =
  | CommentPublicCreateJsonData
  | CommentPublicCreateJson2Data
  | CommentPublicCreateJson3Data;

/**
 * @type object
 */
export type CommentPublicCreateRequestConfig = {
  data?: CommentPublicCreateData;
  /**
   * @type object
   */
  pathParams: {
    entityType: CommentPublicCreatePathEntityType;
    entityId: CommentPublicCreatePathEntityId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-public/comments/${string}/${string}`;
};

/**
 * @type object
 */
export type CommentPublicCreateResponses = {
  "200": CommentPublicCreateStatus200;
  "400": CommentPublicCreateStatus400;
  "401": CommentPublicCreateStatus401;
  "403": CommentPublicCreateStatus403;
  "404": CommentPublicCreateStatus404;
  "500": CommentPublicCreateStatus500;
  "501": CommentPublicCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type CommentPublicCreateResponse =
  | CommentPublicCreateStatus200
  | CommentPublicCreateStatus400
  | CommentPublicCreateStatus401
  | CommentPublicCreateStatus403
  | CommentPublicCreateStatus404
  | CommentPublicCreateStatus500
  | CommentPublicCreateStatus501;
