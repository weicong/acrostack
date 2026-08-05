/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminCommentsCommentSettingsDto } from "../volo/cmsKit/admin/comments/CommentSettingsDto.ts";

/**
 * @type any
 */
export type CommentAdminUpdateSettingsStatus200 = any;

/**
 * @type any
 */
export type CommentAdminUpdateSettingsStatus204 = any;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus400 =
  | CommentAdminUpdateSettingsStatus400Plain
  | CommentAdminUpdateSettingsStatus400Json
  | CommentAdminUpdateSettingsStatus400Json2;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus401 =
  | CommentAdminUpdateSettingsStatus401Plain
  | CommentAdminUpdateSettingsStatus401Json
  | CommentAdminUpdateSettingsStatus401Json2;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus403 =
  | CommentAdminUpdateSettingsStatus403Plain
  | CommentAdminUpdateSettingsStatus403Json
  | CommentAdminUpdateSettingsStatus403Json2;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus404 =
  | CommentAdminUpdateSettingsStatus404Plain
  | CommentAdminUpdateSettingsStatus404Json
  | CommentAdminUpdateSettingsStatus404Json2;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus500 =
  | CommentAdminUpdateSettingsStatus500Plain
  | CommentAdminUpdateSettingsStatus500Json
  | CommentAdminUpdateSettingsStatus500Json2;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus501 =
  | CommentAdminUpdateSettingsStatus501Plain
  | CommentAdminUpdateSettingsStatus501Json
  | CommentAdminUpdateSettingsStatus501Json2;

/**
 * @type object | undefined
 */
export type CommentAdminUpdateSettingsJsonData =
  | VoloCmsKitAdminCommentsCommentSettingsDto
  | undefined;

/**
 * @type object | undefined
 */
export type CommentAdminUpdateSettingsJson2Data =
  | VoloCmsKitAdminCommentsCommentSettingsDto
  | undefined;

/**
 * @type object | undefined
 */
export type CommentAdminUpdateSettingsJson3Data =
  | VoloCmsKitAdminCommentsCommentSettingsDto
  | undefined;

export type CommentAdminUpdateSettingsData =
  | CommentAdminUpdateSettingsJsonData
  | CommentAdminUpdateSettingsJson2Data
  | CommentAdminUpdateSettingsJson3Data;

/**
 * @type object
 */
export type CommentAdminUpdateSettingsRequestConfig = {
  data?: CommentAdminUpdateSettingsData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/comments/settings";
};

/**
 * @type object
 */
export type CommentAdminUpdateSettingsResponses = {
  "200": CommentAdminUpdateSettingsStatus200;
  "204": CommentAdminUpdateSettingsStatus204;
  "400": CommentAdminUpdateSettingsStatus400;
  "401": CommentAdminUpdateSettingsStatus401;
  "403": CommentAdminUpdateSettingsStatus403;
  "404": CommentAdminUpdateSettingsStatus404;
  "500": CommentAdminUpdateSettingsStatus500;
  "501": CommentAdminUpdateSettingsStatus501;
};

/**
 * @description Union of all possible responses
 */
export type CommentAdminUpdateSettingsResponse =
  | CommentAdminUpdateSettingsStatus200
  | CommentAdminUpdateSettingsStatus204
  | CommentAdminUpdateSettingsStatus400
  | CommentAdminUpdateSettingsStatus401
  | CommentAdminUpdateSettingsStatus403
  | CommentAdminUpdateSettingsStatus404
  | CommentAdminUpdateSettingsStatus500
  | CommentAdminUpdateSettingsStatus501;
