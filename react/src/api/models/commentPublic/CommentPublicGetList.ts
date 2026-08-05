/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicCommentsCommentWithDetailsDtoVoloCmsKitPublicApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1Volo/cmsKit/public/comments/commentWithDetailsDtoVolo/cmsKit/public/application/ContractsVersion10600CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string
 */
export type CommentPublicGetListPathEntityType = string;

/**
 * @type string
 */
export type CommentPublicGetListPathEntityId = string;

/**
 * @type object
 */
export type CommentPublicGetListStatus200Plain =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicCommentsCommentWithDetailsDtoVoloCmsKitPublicApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type CommentPublicGetListStatus200Json =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicCommentsCommentWithDetailsDtoVoloCmsKitPublicApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type CommentPublicGetListStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicCommentsCommentWithDetailsDtoVoloCmsKitPublicApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type CommentPublicGetListStatus200 =
  | CommentPublicGetListStatus200Plain
  | CommentPublicGetListStatus200Json
  | CommentPublicGetListStatus200Json2;

/**
 * @type object
 */
export type CommentPublicGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus400 =
  | CommentPublicGetListStatus400Plain
  | CommentPublicGetListStatus400Json
  | CommentPublicGetListStatus400Json2;

/**
 * @type object
 */
export type CommentPublicGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus401 =
  | CommentPublicGetListStatus401Plain
  | CommentPublicGetListStatus401Json
  | CommentPublicGetListStatus401Json2;

/**
 * @type object
 */
export type CommentPublicGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus403 =
  | CommentPublicGetListStatus403Plain
  | CommentPublicGetListStatus403Json
  | CommentPublicGetListStatus403Json2;

/**
 * @type object
 */
export type CommentPublicGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus404 =
  | CommentPublicGetListStatus404Plain
  | CommentPublicGetListStatus404Json
  | CommentPublicGetListStatus404Json2;

/**
 * @type object
 */
export type CommentPublicGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus500 =
  | CommentPublicGetListStatus500Plain
  | CommentPublicGetListStatus500Json
  | CommentPublicGetListStatus500Json2;

/**
 * @type object
 */
export type CommentPublicGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentPublicGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus501 =
  | CommentPublicGetListStatus501Plain
  | CommentPublicGetListStatus501Json
  | CommentPublicGetListStatus501Json2;

/**
 * @type object
 */
export type CommentPublicGetListRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    entityType: CommentPublicGetListPathEntityType;
    entityId: CommentPublicGetListPathEntityId;
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
export type CommentPublicGetListResponses = {
  "200": CommentPublicGetListStatus200;
  "400": CommentPublicGetListStatus400;
  "401": CommentPublicGetListStatus401;
  "403": CommentPublicGetListStatus403;
  "404": CommentPublicGetListStatus404;
  "500": CommentPublicGetListStatus500;
  "501": CommentPublicGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type CommentPublicGetListResponse =
  | CommentPublicGetListStatus200
  | CommentPublicGetListStatus400
  | CommentPublicGetListStatus401
  | CommentPublicGetListStatus403
  | CommentPublicGetListStatus404
  | CommentPublicGetListStatus500
  | CommentPublicGetListStatus501;
