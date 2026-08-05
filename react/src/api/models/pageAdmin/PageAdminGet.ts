/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminPagesPageDto } from "../volo/cmsKit/admin/pages/PageDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type PageAdminGetPathId = string;

/**
 * @type object
 */
export type PageAdminGetStatus200Plain = VoloCmsKitAdminPagesPageDto;

/**
 * @type object
 */
export type PageAdminGetStatus200Json = VoloCmsKitAdminPagesPageDto;

/**
 * @type object
 */
export type PageAdminGetStatus200Json2 = VoloCmsKitAdminPagesPageDto;

export type PageAdminGetStatus200 =
  | PageAdminGetStatus200Plain
  | PageAdminGetStatus200Json
  | PageAdminGetStatus200Json2;

/**
 * @type object
 */
export type PageAdminGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus400 =
  | PageAdminGetStatus400Plain
  | PageAdminGetStatus400Json
  | PageAdminGetStatus400Json2;

/**
 * @type object
 */
export type PageAdminGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus401 =
  | PageAdminGetStatus401Plain
  | PageAdminGetStatus401Json
  | PageAdminGetStatus401Json2;

/**
 * @type object
 */
export type PageAdminGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus403 =
  | PageAdminGetStatus403Plain
  | PageAdminGetStatus403Json
  | PageAdminGetStatus403Json2;

/**
 * @type object
 */
export type PageAdminGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus404 =
  | PageAdminGetStatus404Plain
  | PageAdminGetStatus404Json
  | PageAdminGetStatus404Json2;

/**
 * @type object
 */
export type PageAdminGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus500 =
  | PageAdminGetStatus500Plain
  | PageAdminGetStatus500Json
  | PageAdminGetStatus500Json2;

/**
 * @type object
 */
export type PageAdminGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus501 =
  | PageAdminGetStatus501Plain
  | PageAdminGetStatus501Json
  | PageAdminGetStatus501Json2;

/**
 * @type object
 */
export type PageAdminGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: PageAdminGetPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/pages/${string}`;
};

/**
 * @type object
 */
export type PageAdminGetResponses = {
  "200": PageAdminGetStatus200;
  "400": PageAdminGetStatus400;
  "401": PageAdminGetStatus401;
  "403": PageAdminGetStatus403;
  "404": PageAdminGetStatus404;
  "500": PageAdminGetStatus500;
  "501": PageAdminGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PageAdminGetResponse =
  | PageAdminGetStatus200
  | PageAdminGetStatus400
  | PageAdminGetStatus401
  | PageAdminGetStatus403
  | PageAdminGetStatus404
  | PageAdminGetStatus500
  | PageAdminGetStatus501;
