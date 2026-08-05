/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminCommentsCommentApprovalDto } from "../volo/cmsKit/admin/comments/CommentApprovalDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type CommentAdminUpdateApprovalStatusPathId = string;

/**
 * @type any
 */
export type CommentAdminUpdateApprovalStatusStatus200 = any;

/**
 * @type any
 */
export type CommentAdminUpdateApprovalStatusStatus204 = any;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus400 =
  | CommentAdminUpdateApprovalStatusStatus400Plain
  | CommentAdminUpdateApprovalStatusStatus400Json
  | CommentAdminUpdateApprovalStatusStatus400Json2;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus401 =
  | CommentAdminUpdateApprovalStatusStatus401Plain
  | CommentAdminUpdateApprovalStatusStatus401Json
  | CommentAdminUpdateApprovalStatusStatus401Json2;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus403 =
  | CommentAdminUpdateApprovalStatusStatus403Plain
  | CommentAdminUpdateApprovalStatusStatus403Json
  | CommentAdminUpdateApprovalStatusStatus403Json2;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus404 =
  | CommentAdminUpdateApprovalStatusStatus404Plain
  | CommentAdminUpdateApprovalStatusStatus404Json
  | CommentAdminUpdateApprovalStatusStatus404Json2;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus500 =
  | CommentAdminUpdateApprovalStatusStatus500Plain
  | CommentAdminUpdateApprovalStatusStatus500Json
  | CommentAdminUpdateApprovalStatusStatus500Json2;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus501 =
  | CommentAdminUpdateApprovalStatusStatus501Plain
  | CommentAdminUpdateApprovalStatusStatus501Json
  | CommentAdminUpdateApprovalStatusStatus501Json2;

/**
 * @type object | undefined
 */
export type CommentAdminUpdateApprovalStatusJsonData =
  | VoloCmsKitAdminCommentsCommentApprovalDto
  | undefined;

/**
 * @type object | undefined
 */
export type CommentAdminUpdateApprovalStatusJson2Data =
  | VoloCmsKitAdminCommentsCommentApprovalDto
  | undefined;

/**
 * @type object | undefined
 */
export type CommentAdminUpdateApprovalStatusJson3Data =
  | VoloCmsKitAdminCommentsCommentApprovalDto
  | undefined;

export type CommentAdminUpdateApprovalStatusData =
  | CommentAdminUpdateApprovalStatusJsonData
  | CommentAdminUpdateApprovalStatusJson2Data
  | CommentAdminUpdateApprovalStatusJson3Data;

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusRequestConfig = {
  data?: CommentAdminUpdateApprovalStatusData;
  /**
   * @type object
   */
  pathParams: {
    id: CommentAdminUpdateApprovalStatusPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/comments/${string}/approval-status`;
};

/**
 * @type object
 */
export type CommentAdminUpdateApprovalStatusResponses = {
  "200": CommentAdminUpdateApprovalStatusStatus200;
  "204": CommentAdminUpdateApprovalStatusStatus204;
  "400": CommentAdminUpdateApprovalStatusStatus400;
  "401": CommentAdminUpdateApprovalStatusStatus401;
  "403": CommentAdminUpdateApprovalStatusStatus403;
  "404": CommentAdminUpdateApprovalStatusStatus404;
  "500": CommentAdminUpdateApprovalStatusStatus500;
  "501": CommentAdminUpdateApprovalStatusStatus501;
};

/**
 * @description Union of all possible responses
 */
export type CommentAdminUpdateApprovalStatusResponse =
  | CommentAdminUpdateApprovalStatusStatus200
  | CommentAdminUpdateApprovalStatusStatus204
  | CommentAdminUpdateApprovalStatusStatus400
  | CommentAdminUpdateApprovalStatusStatus401
  | CommentAdminUpdateApprovalStatusStatus403
  | CommentAdminUpdateApprovalStatusStatus404
  | CommentAdminUpdateApprovalStatusStatus500
  | CommentAdminUpdateApprovalStatusStatus501;
