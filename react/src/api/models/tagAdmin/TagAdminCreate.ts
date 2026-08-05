/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminTagsTagCreateDto } from "../volo/cmsKit/admin/tags/TagCreateDto.ts";
import type { VoloCmsKitTagsTagDto } from "../volo/cmsKit/tags/TagDto.ts";

/**
 * @type object
 */
export type TagAdminCreateStatus200Plain = VoloCmsKitTagsTagDto;

/**
 * @type object
 */
export type TagAdminCreateStatus200Json = VoloCmsKitTagsTagDto;

/**
 * @type object
 */
export type TagAdminCreateStatus200Json2 = VoloCmsKitTagsTagDto;

export type TagAdminCreateStatus200 =
  | TagAdminCreateStatus200Plain
  | TagAdminCreateStatus200Json
  | TagAdminCreateStatus200Json2;

/**
 * @type object
 */
export type TagAdminCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus400 =
  | TagAdminCreateStatus400Plain
  | TagAdminCreateStatus400Json
  | TagAdminCreateStatus400Json2;

/**
 * @type object
 */
export type TagAdminCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus401 =
  | TagAdminCreateStatus401Plain
  | TagAdminCreateStatus401Json
  | TagAdminCreateStatus401Json2;

/**
 * @type object
 */
export type TagAdminCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus403 =
  | TagAdminCreateStatus403Plain
  | TagAdminCreateStatus403Json
  | TagAdminCreateStatus403Json2;

/**
 * @type object
 */
export type TagAdminCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus404 =
  | TagAdminCreateStatus404Plain
  | TagAdminCreateStatus404Json
  | TagAdminCreateStatus404Json2;

/**
 * @type object
 */
export type TagAdminCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus500 =
  | TagAdminCreateStatus500Plain
  | TagAdminCreateStatus500Json
  | TagAdminCreateStatus500Json2;

/**
 * @type object
 */
export type TagAdminCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus501 =
  | TagAdminCreateStatus501Plain
  | TagAdminCreateStatus501Json
  | TagAdminCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type TagAdminCreateJsonData =
  | Omit<NonNullable<VoloCmsKitAdminTagsTagCreateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type TagAdminCreateJson2Data =
  | Omit<NonNullable<VoloCmsKitAdminTagsTagCreateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type TagAdminCreateJson3Data =
  | Omit<NonNullable<VoloCmsKitAdminTagsTagCreateDto>, "extraProperties">
  | undefined;

export type TagAdminCreateData =
  | TagAdminCreateJsonData
  | TagAdminCreateJson2Data
  | TagAdminCreateJson3Data;

/**
 * @type object
 */
export type TagAdminCreateRequestConfig = {
  data?: TagAdminCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/tags";
};

/**
 * @type object
 */
export type TagAdminCreateResponses = {
  "200": TagAdminCreateStatus200;
  "400": TagAdminCreateStatus400;
  "401": TagAdminCreateStatus401;
  "403": TagAdminCreateStatus403;
  "404": TagAdminCreateStatus404;
  "500": TagAdminCreateStatus500;
  "501": TagAdminCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TagAdminCreateResponse =
  | TagAdminCreateStatus200
  | TagAdminCreateStatus400
  | TagAdminCreateStatus401
  | TagAdminCreateStatus403
  | TagAdminCreateStatus404
  | TagAdminCreateStatus500
  | TagAdminCreateStatus501;
