/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitTagsTagDto } from "../volo/cmsKit/tags/TagDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type TagAdminGetPathId = string;

/**
 * @type object
 */
export type TagAdminGetStatus200Plain = VoloCmsKitTagsTagDto;

/**
 * @type object
 */
export type TagAdminGetStatus200Json = VoloCmsKitTagsTagDto;

/**
 * @type object
 */
export type TagAdminGetStatus200Json2 = VoloCmsKitTagsTagDto;

export type TagAdminGetStatus200 =
  | TagAdminGetStatus200Plain
  | TagAdminGetStatus200Json
  | TagAdminGetStatus200Json2;

/**
 * @type object
 */
export type TagAdminGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus400 =
  | TagAdminGetStatus400Plain
  | TagAdminGetStatus400Json
  | TagAdminGetStatus400Json2;

/**
 * @type object
 */
export type TagAdminGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus401 =
  | TagAdminGetStatus401Plain
  | TagAdminGetStatus401Json
  | TagAdminGetStatus401Json2;

/**
 * @type object
 */
export type TagAdminGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus403 =
  | TagAdminGetStatus403Plain
  | TagAdminGetStatus403Json
  | TagAdminGetStatus403Json2;

/**
 * @type object
 */
export type TagAdminGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus404 =
  | TagAdminGetStatus404Plain
  | TagAdminGetStatus404Json
  | TagAdminGetStatus404Json2;

/**
 * @type object
 */
export type TagAdminGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus500 =
  | TagAdminGetStatus500Plain
  | TagAdminGetStatus500Json
  | TagAdminGetStatus500Json2;

/**
 * @type object
 */
export type TagAdminGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus501 =
  | TagAdminGetStatus501Plain
  | TagAdminGetStatus501Json
  | TagAdminGetStatus501Json2;

/**
 * @type object
 */
export type TagAdminGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: TagAdminGetPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/tags/${string}`;
};

/**
 * @type object
 */
export type TagAdminGetResponses = {
  "200": TagAdminGetStatus200;
  "400": TagAdminGetStatus400;
  "401": TagAdminGetStatus401;
  "403": TagAdminGetStatus403;
  "404": TagAdminGetStatus404;
  "500": TagAdminGetStatus500;
  "501": TagAdminGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TagAdminGetResponse =
  | TagAdminGetStatus200
  | TagAdminGetStatus400
  | TagAdminGetStatus401
  | TagAdminGetStatus403
  | TagAdminGetStatus404
  | TagAdminGetStatus500
  | TagAdminGetStatus501;
