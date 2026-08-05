/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminTagsTagUpdateDto } from "../volo/cmsKit/admin/tags/TagUpdateDto.ts";
import type { VoloCmsKitTagsTagDto } from "../volo/cmsKit/tags/TagDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type TagAdminUpdatePathId = string;

/**
 * @type object
 */
export type TagAdminUpdateStatus200Plain = VoloCmsKitTagsTagDto;

/**
 * @type object
 */
export type TagAdminUpdateStatus200Json = VoloCmsKitTagsTagDto;

/**
 * @type object
 */
export type TagAdminUpdateStatus200Json2 = VoloCmsKitTagsTagDto;

export type TagAdminUpdateStatus200 =
  | TagAdminUpdateStatus200Plain
  | TagAdminUpdateStatus200Json
  | TagAdminUpdateStatus200Json2;

/**
 * @type object
 */
export type TagAdminUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus400 =
  | TagAdminUpdateStatus400Plain
  | TagAdminUpdateStatus400Json
  | TagAdminUpdateStatus400Json2;

/**
 * @type object
 */
export type TagAdminUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus401 =
  | TagAdminUpdateStatus401Plain
  | TagAdminUpdateStatus401Json
  | TagAdminUpdateStatus401Json2;

/**
 * @type object
 */
export type TagAdminUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus403 =
  | TagAdminUpdateStatus403Plain
  | TagAdminUpdateStatus403Json
  | TagAdminUpdateStatus403Json2;

/**
 * @type object
 */
export type TagAdminUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus404 =
  | TagAdminUpdateStatus404Plain
  | TagAdminUpdateStatus404Json
  | TagAdminUpdateStatus404Json2;

/**
 * @type object
 */
export type TagAdminUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus500 =
  | TagAdminUpdateStatus500Plain
  | TagAdminUpdateStatus500Json
  | TagAdminUpdateStatus500Json2;

/**
 * @type object
 */
export type TagAdminUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus501 =
  | TagAdminUpdateStatus501Plain
  | TagAdminUpdateStatus501Json
  | TagAdminUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type TagAdminUpdateJsonData =
  | Omit<NonNullable<VoloCmsKitAdminTagsTagUpdateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type TagAdminUpdateJson2Data =
  | Omit<NonNullable<VoloCmsKitAdminTagsTagUpdateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type TagAdminUpdateJson3Data =
  | Omit<NonNullable<VoloCmsKitAdminTagsTagUpdateDto>, "extraProperties">
  | undefined;

export type TagAdminUpdateData =
  | TagAdminUpdateJsonData
  | TagAdminUpdateJson2Data
  | TagAdminUpdateJson3Data;

/**
 * @type object
 */
export type TagAdminUpdateRequestConfig = {
  data?: TagAdminUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: TagAdminUpdatePathId;
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
export type TagAdminUpdateResponses = {
  "200": TagAdminUpdateStatus200;
  "400": TagAdminUpdateStatus400;
  "401": TagAdminUpdateStatus401;
  "403": TagAdminUpdateStatus403;
  "404": TagAdminUpdateStatus404;
  "500": TagAdminUpdateStatus500;
  "501": TagAdminUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TagAdminUpdateResponse =
  | TagAdminUpdateStatus200
  | TagAdminUpdateStatus400
  | TagAdminUpdateStatus401
  | TagAdminUpdateStatus403
  | TagAdminUpdateStatus404
  | TagAdminUpdateStatus500
  | TagAdminUpdateStatus501;
