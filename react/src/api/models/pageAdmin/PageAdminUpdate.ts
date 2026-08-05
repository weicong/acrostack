/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminPagesPageDto } from "../volo/cmsKit/admin/pages/PageDto.ts";
import type { VoloCmsKitAdminPagesUpdatePageInputDto } from "../volo/cmsKit/admin/pages/UpdatePageInputDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type PageAdminUpdatePathId = string;

/**
 * @type object
 */
export type PageAdminUpdateStatus200Plain = VoloCmsKitAdminPagesPageDto;

/**
 * @type object
 */
export type PageAdminUpdateStatus200Json = VoloCmsKitAdminPagesPageDto;

/**
 * @type object
 */
export type PageAdminUpdateStatus200Json2 = VoloCmsKitAdminPagesPageDto;

export type PageAdminUpdateStatus200 =
  | PageAdminUpdateStatus200Plain
  | PageAdminUpdateStatus200Json
  | PageAdminUpdateStatus200Json2;

/**
 * @type object
 */
export type PageAdminUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus400 =
  | PageAdminUpdateStatus400Plain
  | PageAdminUpdateStatus400Json
  | PageAdminUpdateStatus400Json2;

/**
 * @type object
 */
export type PageAdminUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus401 =
  | PageAdminUpdateStatus401Plain
  | PageAdminUpdateStatus401Json
  | PageAdminUpdateStatus401Json2;

/**
 * @type object
 */
export type PageAdminUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus403 =
  | PageAdminUpdateStatus403Plain
  | PageAdminUpdateStatus403Json
  | PageAdminUpdateStatus403Json2;

/**
 * @type object
 */
export type PageAdminUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus404 =
  | PageAdminUpdateStatus404Plain
  | PageAdminUpdateStatus404Json
  | PageAdminUpdateStatus404Json2;

/**
 * @type object
 */
export type PageAdminUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus500 =
  | PageAdminUpdateStatus500Plain
  | PageAdminUpdateStatus500Json
  | PageAdminUpdateStatus500Json2;

/**
 * @type object
 */
export type PageAdminUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus501 =
  | PageAdminUpdateStatus501Plain
  | PageAdminUpdateStatus501Json
  | PageAdminUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type PageAdminUpdateJsonData =
  | Omit<NonNullable<VoloCmsKitAdminPagesUpdatePageInputDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type PageAdminUpdateJson2Data =
  | Omit<NonNullable<VoloCmsKitAdminPagesUpdatePageInputDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type PageAdminUpdateJson3Data =
  | Omit<NonNullable<VoloCmsKitAdminPagesUpdatePageInputDto>, "extraProperties">
  | undefined;

export type PageAdminUpdateData =
  | PageAdminUpdateJsonData
  | PageAdminUpdateJson2Data
  | PageAdminUpdateJson3Data;

/**
 * @type object
 */
export type PageAdminUpdateRequestConfig = {
  data?: PageAdminUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: PageAdminUpdatePathId;
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
export type PageAdminUpdateResponses = {
  "200": PageAdminUpdateStatus200;
  "400": PageAdminUpdateStatus400;
  "401": PageAdminUpdateStatus401;
  "403": PageAdminUpdateStatus403;
  "404": PageAdminUpdateStatus404;
  "500": PageAdminUpdateStatus500;
  "501": PageAdminUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PageAdminUpdateResponse =
  | PageAdminUpdateStatus200
  | PageAdminUpdateStatus400
  | PageAdminUpdateStatus401
  | PageAdminUpdateStatus403
  | PageAdminUpdateStatus404
  | PageAdminUpdateStatus500
  | PageAdminUpdateStatus501;
