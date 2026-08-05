/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitTagsTagDto } from "../volo/cmsKit/tags/TagDto.ts";

/**
 * @type string
 */
export type TagPublicGetAllRelatedTagsPathEntityType = string;

/**
 * @type string
 */
export type TagPublicGetAllRelatedTagsPathEntityId = string;

/**
 * @type array
 */
export type TagPublicGetAllRelatedTagsStatus200Plain = VoloCmsKitTagsTagDto[];

/**
 * @type array
 */
export type TagPublicGetAllRelatedTagsStatus200Json = VoloCmsKitTagsTagDto[];

/**
 * @type array
 */
export type TagPublicGetAllRelatedTagsStatus200Json2 = VoloCmsKitTagsTagDto[];

export type TagPublicGetAllRelatedTagsStatus200 =
  | TagPublicGetAllRelatedTagsStatus200Plain
  | TagPublicGetAllRelatedTagsStatus200Json
  | TagPublicGetAllRelatedTagsStatus200Json2;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus400 =
  | TagPublicGetAllRelatedTagsStatus400Plain
  | TagPublicGetAllRelatedTagsStatus400Json
  | TagPublicGetAllRelatedTagsStatus400Json2;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus401 =
  | TagPublicGetAllRelatedTagsStatus401Plain
  | TagPublicGetAllRelatedTagsStatus401Json
  | TagPublicGetAllRelatedTagsStatus401Json2;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus403 =
  | TagPublicGetAllRelatedTagsStatus403Plain
  | TagPublicGetAllRelatedTagsStatus403Json
  | TagPublicGetAllRelatedTagsStatus403Json2;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus404 =
  | TagPublicGetAllRelatedTagsStatus404Plain
  | TagPublicGetAllRelatedTagsStatus404Json
  | TagPublicGetAllRelatedTagsStatus404Json2;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus500 =
  | TagPublicGetAllRelatedTagsStatus500Plain
  | TagPublicGetAllRelatedTagsStatus500Json
  | TagPublicGetAllRelatedTagsStatus500Json2;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus501 =
  | TagPublicGetAllRelatedTagsStatus501Plain
  | TagPublicGetAllRelatedTagsStatus501Json
  | TagPublicGetAllRelatedTagsStatus501Json2;

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    entityType: TagPublicGetAllRelatedTagsPathEntityType;
    entityId: TagPublicGetAllRelatedTagsPathEntityId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-public/tags/${string}/${string}`;
};

/**
 * @type object
 */
export type TagPublicGetAllRelatedTagsResponses = {
  "200": TagPublicGetAllRelatedTagsStatus200;
  "400": TagPublicGetAllRelatedTagsStatus400;
  "401": TagPublicGetAllRelatedTagsStatus401;
  "403": TagPublicGetAllRelatedTagsStatus403;
  "404": TagPublicGetAllRelatedTagsStatus404;
  "500": TagPublicGetAllRelatedTagsStatus500;
  "501": TagPublicGetAllRelatedTagsStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TagPublicGetAllRelatedTagsResponse =
  | TagPublicGetAllRelatedTagsStatus200
  | TagPublicGetAllRelatedTagsStatus400
  | TagPublicGetAllRelatedTagsStatus401
  | TagPublicGetAllRelatedTagsStatus403
  | TagPublicGetAllRelatedTagsStatus404
  | TagPublicGetAllRelatedTagsStatus500
  | TagPublicGetAllRelatedTagsStatus501;
