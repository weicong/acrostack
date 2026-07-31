/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsCommentDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/services/dtos/cms/CommentDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @minLength 0
 * @maxLength 64
 * @type string
 */
export type CommentGetListForEntityQueryEntityType = string;

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type CommentGetListForEntityQueryEntityId = string;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type CommentGetListForEntityQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type CommentGetListForEntityQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type CommentGetListForEntityStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsCommentDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type CommentGetListForEntityStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsCommentDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type CommentGetListForEntityStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsCommentDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type CommentGetListForEntityStatus200 =
  | CommentGetListForEntityStatus200Plain
  | CommentGetListForEntityStatus200Json
  | CommentGetListForEntityStatus200Json2;

/**
 * @type object
 */
export type CommentGetListForEntityStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentGetListForEntityStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentGetListForEntityStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentGetListForEntityStatus400 =
  | CommentGetListForEntityStatus400Plain
  | CommentGetListForEntityStatus400Json
  | CommentGetListForEntityStatus400Json2;

/**
 * @type object
 */
export type CommentGetListForEntityStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentGetListForEntityStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentGetListForEntityStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentGetListForEntityStatus401 =
  | CommentGetListForEntityStatus401Plain
  | CommentGetListForEntityStatus401Json
  | CommentGetListForEntityStatus401Json2;

/**
 * @type object
 */
export type CommentGetListForEntityStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentGetListForEntityStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentGetListForEntityStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentGetListForEntityStatus403 =
  | CommentGetListForEntityStatus403Plain
  | CommentGetListForEntityStatus403Json
  | CommentGetListForEntityStatus403Json2;

/**
 * @type object
 */
export type CommentGetListForEntityStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentGetListForEntityStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentGetListForEntityStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentGetListForEntityStatus404 =
  | CommentGetListForEntityStatus404Plain
  | CommentGetListForEntityStatus404Json
  | CommentGetListForEntityStatus404Json2;

/**
 * @type object
 */
export type CommentGetListForEntityStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentGetListForEntityStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentGetListForEntityStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentGetListForEntityStatus500 =
  | CommentGetListForEntityStatus500Plain
  | CommentGetListForEntityStatus500Json
  | CommentGetListForEntityStatus500Json2;

/**
 * @type object
 */
export type CommentGetListForEntityStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentGetListForEntityStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type CommentGetListForEntityStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentGetListForEntityStatus501 =
  | CommentGetListForEntityStatus501Plain
  | CommentGetListForEntityStatus501Json
  | CommentGetListForEntityStatus501Json2;

/**
 * @type object
 */
export type CommentGetListForEntityRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    EntityType: CommentGetListForEntityQueryEntityType;
    EntityId: CommentGetListForEntityQueryEntityId;
    SkipCount?: CommentGetListForEntityQuerySkipCount;
    MaxResultCount?: CommentGetListForEntityQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/comment/for-entity";
};

/**
 * @type object
 */
export type CommentGetListForEntityResponses = {
  "200": CommentGetListForEntityStatus200;
  "400": CommentGetListForEntityStatus400;
  "401": CommentGetListForEntityStatus401;
  "403": CommentGetListForEntityStatus403;
  "404": CommentGetListForEntityStatus404;
  "500": CommentGetListForEntityStatus500;
  "501": CommentGetListForEntityStatus501;
};

/**
 * @description Union of all possible responses
 */
export type CommentGetListForEntityResponse =
  | CommentGetListForEntityStatus200
  | CommentGetListForEntityStatus400
  | CommentGetListForEntityStatus401
  | CommentGetListForEntityStatus403
  | CommentGetListForEntityStatus404
  | CommentGetListForEntityStatus500
  | CommentGetListForEntityStatus501;
