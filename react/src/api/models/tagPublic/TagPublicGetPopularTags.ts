/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitTagsPopularTagDto } from "../volo/cmsKit/tags/PopularTagDto.ts";

/**
 * @type string
 */
export type TagPublicGetPopularTagsPathEntityType = string;

/**
 * @description
 * Format: `int32`
 * @type integer
 */
export type TagPublicGetPopularTagsPathMaxCount = number;

/**
 * @type array
 */
export type TagPublicGetPopularTagsStatus200Plain = VoloCmsKitTagsPopularTagDto[];

/**
 * @type array
 */
export type TagPublicGetPopularTagsStatus200Json = VoloCmsKitTagsPopularTagDto[];

/**
 * @type array
 */
export type TagPublicGetPopularTagsStatus200Json2 = VoloCmsKitTagsPopularTagDto[];

export type TagPublicGetPopularTagsStatus200 =
  | TagPublicGetPopularTagsStatus200Plain
  | TagPublicGetPopularTagsStatus200Json
  | TagPublicGetPopularTagsStatus200Json2;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus400 =
  | TagPublicGetPopularTagsStatus400Plain
  | TagPublicGetPopularTagsStatus400Json
  | TagPublicGetPopularTagsStatus400Json2;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus401 =
  | TagPublicGetPopularTagsStatus401Plain
  | TagPublicGetPopularTagsStatus401Json
  | TagPublicGetPopularTagsStatus401Json2;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus403 =
  | TagPublicGetPopularTagsStatus403Plain
  | TagPublicGetPopularTagsStatus403Json
  | TagPublicGetPopularTagsStatus403Json2;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus404 =
  | TagPublicGetPopularTagsStatus404Plain
  | TagPublicGetPopularTagsStatus404Json
  | TagPublicGetPopularTagsStatus404Json2;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus500 =
  | TagPublicGetPopularTagsStatus500Plain
  | TagPublicGetPopularTagsStatus500Json
  | TagPublicGetPopularTagsStatus500Json2;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagPublicGetPopularTagsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus501 =
  | TagPublicGetPopularTagsStatus501Plain
  | TagPublicGetPopularTagsStatus501Json
  | TagPublicGetPopularTagsStatus501Json2;

/**
 * @type object
 */
export type TagPublicGetPopularTagsRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    entityType: TagPublicGetPopularTagsPathEntityType;
    maxCount: TagPublicGetPopularTagsPathMaxCount;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-public/tags/popular/${string}/${string}`;
};

/**
 * @type object
 */
export type TagPublicGetPopularTagsResponses = {
  "200": TagPublicGetPopularTagsStatus200;
  "400": TagPublicGetPopularTagsStatus400;
  "401": TagPublicGetPopularTagsStatus401;
  "403": TagPublicGetPopularTagsStatus403;
  "404": TagPublicGetPopularTagsStatus404;
  "500": TagPublicGetPopularTagsStatus500;
  "501": TagPublicGetPopularTagsStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TagPublicGetPopularTagsResponse =
  | TagPublicGetPopularTagsStatus200
  | TagPublicGetPopularTagsStatus400
  | TagPublicGetPopularTagsStatus401
  | TagPublicGetPopularTagsStatus403
  | TagPublicGetPopularTagsStatus404
  | TagPublicGetPopularTagsStatus500
  | TagPublicGetPopularTagsStatus501;
