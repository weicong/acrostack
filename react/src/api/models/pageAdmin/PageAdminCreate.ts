/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminPagesCreatePageInputDto } from "../volo/cmsKit/admin/pages/CreatePageInputDto.ts";
import type { VoloCmsKitAdminPagesPageDto } from "../volo/cmsKit/admin/pages/PageDto.ts";

/**
 * @type object
 */
export type PageAdminCreateStatus200Plain = VoloCmsKitAdminPagesPageDto;

/**
 * @type object
 */
export type PageAdminCreateStatus200Json = VoloCmsKitAdminPagesPageDto;

/**
 * @type object
 */
export type PageAdminCreateStatus200Json2 = VoloCmsKitAdminPagesPageDto;

export type PageAdminCreateStatus200 =
  | PageAdminCreateStatus200Plain
  | PageAdminCreateStatus200Json
  | PageAdminCreateStatus200Json2;

/**
 * @type object
 */
export type PageAdminCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus400 =
  | PageAdminCreateStatus400Plain
  | PageAdminCreateStatus400Json
  | PageAdminCreateStatus400Json2;

/**
 * @type object
 */
export type PageAdminCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus401 =
  | PageAdminCreateStatus401Plain
  | PageAdminCreateStatus401Json
  | PageAdminCreateStatus401Json2;

/**
 * @type object
 */
export type PageAdminCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus403 =
  | PageAdminCreateStatus403Plain
  | PageAdminCreateStatus403Json
  | PageAdminCreateStatus403Json2;

/**
 * @type object
 */
export type PageAdminCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus404 =
  | PageAdminCreateStatus404Plain
  | PageAdminCreateStatus404Json
  | PageAdminCreateStatus404Json2;

/**
 * @type object
 */
export type PageAdminCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus500 =
  | PageAdminCreateStatus500Plain
  | PageAdminCreateStatus500Json
  | PageAdminCreateStatus500Json2;

/**
 * @type object
 */
export type PageAdminCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus501 =
  | PageAdminCreateStatus501Plain
  | PageAdminCreateStatus501Json
  | PageAdminCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type PageAdminCreateJsonData =
  | Omit<NonNullable<VoloCmsKitAdminPagesCreatePageInputDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type PageAdminCreateJson2Data =
  | Omit<NonNullable<VoloCmsKitAdminPagesCreatePageInputDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type PageAdminCreateJson3Data =
  | Omit<NonNullable<VoloCmsKitAdminPagesCreatePageInputDto>, "extraProperties">
  | undefined;

export type PageAdminCreateData =
  | PageAdminCreateJsonData
  | PageAdminCreateJson2Data
  | PageAdminCreateJson3Data;

/**
 * @type object
 */
export type PageAdminCreateRequestConfig = {
  data?: PageAdminCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/pages";
};

/**
 * @type object
 */
export type PageAdminCreateResponses = {
  "200": PageAdminCreateStatus200;
  "400": PageAdminCreateStatus400;
  "401": PageAdminCreateStatus401;
  "403": PageAdminCreateStatus403;
  "404": PageAdminCreateStatus404;
  "500": PageAdminCreateStatus500;
  "501": PageAdminCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PageAdminCreateResponse =
  | PageAdminCreateStatus200
  | PageAdminCreateStatus400
  | PageAdminCreateStatus401
  | PageAdminCreateStatus403
  | PageAdminCreateStatus404
  | PageAdminCreateStatus500
  | PageAdminCreateStatus501;
