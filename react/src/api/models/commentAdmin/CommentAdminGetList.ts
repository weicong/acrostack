/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminCommentsCommentWithAuthorDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Volo/cmsKit/admin/comments/commentWithAuthorDtoVolo/cmsKit/admin/application/ContractsVersion10600CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitCommentsCommentApproveState } from "../volo/cmsKit/comments/CommentApproveState.ts";

/**
 * @type string | undefined
 */
export type CommentAdminGetListQueryEntityType = string | undefined;

/**
 * @type string | undefined
 */
export type CommentAdminGetListQueryText = string | undefined;

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type CommentAdminGetListQueryRepliedCommentId = string | undefined;

/**
 * @type string | undefined
 */
export type CommentAdminGetListQueryAuthor = string | undefined;

/**
 * @description
 * Format: `date-time`
 * @type string | undefined
 */
export type CommentAdminGetListQueryCreationStartDate = string | undefined;

/**
 * @description
 * Format: `date-time`
 * @type string | undefined
 */
export type CommentAdminGetListQueryCreationEndDate = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type CommentAdminGetListQueryCommentApproveState =
  | VoloCmsKitCommentsCommentApproveState
  | undefined;

/**
 * @type string | undefined
 */
export type CommentAdminGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type CommentAdminGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type CommentAdminGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type CommentAdminGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminCommentsCommentWithAuthorDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type CommentAdminGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminCommentsCommentWithAuthorDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type CommentAdminGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminCommentsCommentWithAuthorDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type CommentAdminGetListStatus200 =
  | CommentAdminGetListStatus200Plain
  | CommentAdminGetListStatus200Json
  | CommentAdminGetListStatus200Json2;

/**
 * @type object
 */
export type CommentAdminGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus400 =
  | CommentAdminGetListStatus400Plain
  | CommentAdminGetListStatus400Json
  | CommentAdminGetListStatus400Json2;

/**
 * @type object
 */
export type CommentAdminGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus401 =
  | CommentAdminGetListStatus401Plain
  | CommentAdminGetListStatus401Json
  | CommentAdminGetListStatus401Json2;

/**
 * @type object
 */
export type CommentAdminGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus403 =
  | CommentAdminGetListStatus403Plain
  | CommentAdminGetListStatus403Json
  | CommentAdminGetListStatus403Json2;

/**
 * @type object
 */
export type CommentAdminGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus404 =
  | CommentAdminGetListStatus404Plain
  | CommentAdminGetListStatus404Json
  | CommentAdminGetListStatus404Json2;

/**
 * @type object
 */
export type CommentAdminGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus500 =
  | CommentAdminGetListStatus500Plain
  | CommentAdminGetListStatus500Json
  | CommentAdminGetListStatus500Json2;

/**
 * @type object
 */
export type CommentAdminGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus501 =
  | CommentAdminGetListStatus501Plain
  | CommentAdminGetListStatus501Json
  | CommentAdminGetListStatus501Json2;

/**
 * @type object
 */
export type CommentAdminGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    EntityType?: CommentAdminGetListQueryEntityType;
    Text?: CommentAdminGetListQueryText;
    RepliedCommentId?: CommentAdminGetListQueryRepliedCommentId;
    Author?: CommentAdminGetListQueryAuthor;
    CreationStartDate?: CommentAdminGetListQueryCreationStartDate;
    CreationEndDate?: CommentAdminGetListQueryCreationEndDate;
    CommentApproveState?: CommentAdminGetListQueryCommentApproveState;
    Sorting?: CommentAdminGetListQuerySorting;
    SkipCount?: CommentAdminGetListQuerySkipCount;
    MaxResultCount?: CommentAdminGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/comments";
};

/**
 * @type object
 */
export type CommentAdminGetListResponses = {
  "200": CommentAdminGetListStatus200;
  "400": CommentAdminGetListStatus400;
  "401": CommentAdminGetListStatus401;
  "403": CommentAdminGetListStatus403;
  "404": CommentAdminGetListStatus404;
  "500": CommentAdminGetListStatus500;
  "501": CommentAdminGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type CommentAdminGetListResponse =
  | CommentAdminGetListStatus200
  | CommentAdminGetListStatus400
  | CommentAdminGetListStatus401
  | CommentAdminGetListStatus403
  | CommentAdminGetListStatus404
  | CommentAdminGetListStatus500
  | CommentAdminGetListStatus501;
