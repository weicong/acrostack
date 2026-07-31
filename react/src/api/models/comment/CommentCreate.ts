/* oxlint-disable */

import type { AcroStackServicesDtosCmsCommentDto } from "../acroStack/services/dtos/cms/CommentDto.ts";
import type { AcroStackServicesDtosCmsCreateCommentInput } from "../acroStack/services/dtos/cms/CreateCommentInput.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type CommentCreateStatus200Plain = AcroStackServicesDtosCmsCommentDto;

/**
 * @type object
 */
export type CommentCreateStatus200Json = AcroStackServicesDtosCmsCommentDto;

/**
 * @type object
 */
export type CommentCreateStatus200Json2 = AcroStackServicesDtosCmsCommentDto;

export type CommentCreateStatus200 =
  | CommentCreateStatus200Plain
  | CommentCreateStatus200Json
  | CommentCreateStatus200Json2;

/**
 * @type object
 */
export type CommentCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentCreateStatus400 =
  | CommentCreateStatus400Plain
  | CommentCreateStatus400Json
  | CommentCreateStatus400Json2;

/**
 * @type object
 */
export type CommentCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentCreateStatus401 =
  | CommentCreateStatus401Plain
  | CommentCreateStatus401Json
  | CommentCreateStatus401Json2;

/**
 * @type object
 */
export type CommentCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentCreateStatus403 =
  | CommentCreateStatus403Plain
  | CommentCreateStatus403Json
  | CommentCreateStatus403Json2;

/**
 * @type object
 */
export type CommentCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentCreateStatus404 =
  | CommentCreateStatus404Plain
  | CommentCreateStatus404Json
  | CommentCreateStatus404Json2;

/**
 * @type object
 */
export type CommentCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentCreateStatus500 =
  | CommentCreateStatus500Plain
  | CommentCreateStatus500Json
  | CommentCreateStatus500Json2;

/**
 * @type object
 */
export type CommentCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentCreateStatus501 =
  | CommentCreateStatus501Plain
  | CommentCreateStatus501Json
  | CommentCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type CommentCreateJsonData = AcroStackServicesDtosCmsCreateCommentInput | undefined;

/**
 * @type object | undefined
 */
export type CommentCreateJson2Data = AcroStackServicesDtosCmsCreateCommentInput | undefined;

/**
 * @type object | undefined
 */
export type CommentCreateJson3Data = AcroStackServicesDtosCmsCreateCommentInput | undefined;

export type CommentCreateData =
  | CommentCreateJsonData
  | CommentCreateJson2Data
  | CommentCreateJson3Data;

/**
 * @type object
 */
export type CommentCreateRequestConfig = {
  data?: CommentCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/comment";
};

/**
 * @type object
 */
export type CommentCreateResponses = {
  "200": CommentCreateStatus200;
  "400": CommentCreateStatus400;
  "401": CommentCreateStatus401;
  "403": CommentCreateStatus403;
  "404": CommentCreateStatus404;
  "500": CommentCreateStatus500;
  "501": CommentCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type CommentCreateResponse =
  | CommentCreateStatus200
  | CommentCreateStatus400
  | CommentCreateStatus401
  | CommentCreateStatus403
  | CommentCreateStatus404
  | CommentCreateStatus500
  | CommentCreateStatus501;
