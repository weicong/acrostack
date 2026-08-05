/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminGlobalResourcesGlobalResourcesDto } from "../volo/cmsKit/admin/globalResources/GlobalResourcesDto.ts";

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus200Plain = VoloCmsKitAdminGlobalResourcesGlobalResourcesDto;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus200Json = VoloCmsKitAdminGlobalResourcesGlobalResourcesDto;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus200Json2 = VoloCmsKitAdminGlobalResourcesGlobalResourcesDto;

export type GlobalResourceAdminGetStatus200 =
  | GlobalResourceAdminGetStatus200Plain
  | GlobalResourceAdminGetStatus200Json
  | GlobalResourceAdminGetStatus200Json2;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus400 =
  | GlobalResourceAdminGetStatus400Plain
  | GlobalResourceAdminGetStatus400Json
  | GlobalResourceAdminGetStatus400Json2;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus401 =
  | GlobalResourceAdminGetStatus401Plain
  | GlobalResourceAdminGetStatus401Json
  | GlobalResourceAdminGetStatus401Json2;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus403 =
  | GlobalResourceAdminGetStatus403Plain
  | GlobalResourceAdminGetStatus403Json
  | GlobalResourceAdminGetStatus403Json2;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus404 =
  | GlobalResourceAdminGetStatus404Plain
  | GlobalResourceAdminGetStatus404Json
  | GlobalResourceAdminGetStatus404Json2;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus500 =
  | GlobalResourceAdminGetStatus500Plain
  | GlobalResourceAdminGetStatus500Json
  | GlobalResourceAdminGetStatus500Json2;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus501 =
  | GlobalResourceAdminGetStatus501Plain
  | GlobalResourceAdminGetStatus501Json
  | GlobalResourceAdminGetStatus501Json2;

/**
 * @type object
 */
export type GlobalResourceAdminGetRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/global-resources";
};

/**
 * @type object
 */
export type GlobalResourceAdminGetResponses = {
  "200": GlobalResourceAdminGetStatus200;
  "400": GlobalResourceAdminGetStatus400;
  "401": GlobalResourceAdminGetStatus401;
  "403": GlobalResourceAdminGetStatus403;
  "404": GlobalResourceAdminGetStatus404;
  "500": GlobalResourceAdminGetStatus500;
  "501": GlobalResourceAdminGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type GlobalResourceAdminGetResponse =
  | GlobalResourceAdminGetStatus200
  | GlobalResourceAdminGetStatus400
  | GlobalResourceAdminGetStatus401
  | GlobalResourceAdminGetStatus403
  | GlobalResourceAdminGetStatus404
  | GlobalResourceAdminGetStatus500
  | GlobalResourceAdminGetStatus501;
