/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminGlobalResourcesGlobalResourcesUpdateDto } from "../volo/cmsKit/admin/globalResources/GlobalResourcesUpdateDto.ts";

/**
 * @type any
 */
export type GlobalResourceAdminSetGlobalResourcesStatus200 = any;

/**
 * @type any
 */
export type GlobalResourceAdminSetGlobalResourcesStatus204 = any;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus400Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus400 =
  | GlobalResourceAdminSetGlobalResourcesStatus400Plain
  | GlobalResourceAdminSetGlobalResourcesStatus400Json
  | GlobalResourceAdminSetGlobalResourcesStatus400Json2;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus401Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus401 =
  | GlobalResourceAdminSetGlobalResourcesStatus401Plain
  | GlobalResourceAdminSetGlobalResourcesStatus401Json
  | GlobalResourceAdminSetGlobalResourcesStatus401Json2;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus403Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus403 =
  | GlobalResourceAdminSetGlobalResourcesStatus403Plain
  | GlobalResourceAdminSetGlobalResourcesStatus403Json
  | GlobalResourceAdminSetGlobalResourcesStatus403Json2;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus404Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus404 =
  | GlobalResourceAdminSetGlobalResourcesStatus404Plain
  | GlobalResourceAdminSetGlobalResourcesStatus404Json
  | GlobalResourceAdminSetGlobalResourcesStatus404Json2;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus500Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus500 =
  | GlobalResourceAdminSetGlobalResourcesStatus500Plain
  | GlobalResourceAdminSetGlobalResourcesStatus500Json
  | GlobalResourceAdminSetGlobalResourcesStatus500Json2;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus501Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus501 =
  | GlobalResourceAdminSetGlobalResourcesStatus501Plain
  | GlobalResourceAdminSetGlobalResourcesStatus501Json
  | GlobalResourceAdminSetGlobalResourcesStatus501Json2;

/**
 * @type object | undefined
 */
export type GlobalResourceAdminSetGlobalResourcesJsonData =
  | Omit<NonNullable<VoloCmsKitAdminGlobalResourcesGlobalResourcesUpdateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type GlobalResourceAdminSetGlobalResourcesJson2Data =
  | Omit<NonNullable<VoloCmsKitAdminGlobalResourcesGlobalResourcesUpdateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type GlobalResourceAdminSetGlobalResourcesJson3Data =
  | Omit<NonNullable<VoloCmsKitAdminGlobalResourcesGlobalResourcesUpdateDto>, "extraProperties">
  | undefined;

export type GlobalResourceAdminSetGlobalResourcesData =
  | GlobalResourceAdminSetGlobalResourcesJsonData
  | GlobalResourceAdminSetGlobalResourcesJson2Data
  | GlobalResourceAdminSetGlobalResourcesJson3Data;

/**
 * @type object
 */
export type GlobalResourceAdminSetGlobalResourcesRequestConfig = {
  data?: GlobalResourceAdminSetGlobalResourcesData;
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
export type GlobalResourceAdminSetGlobalResourcesResponses = {
  "200": GlobalResourceAdminSetGlobalResourcesStatus200;
  "204": GlobalResourceAdminSetGlobalResourcesStatus204;
  "400": GlobalResourceAdminSetGlobalResourcesStatus400;
  "401": GlobalResourceAdminSetGlobalResourcesStatus401;
  "403": GlobalResourceAdminSetGlobalResourcesStatus403;
  "404": GlobalResourceAdminSetGlobalResourcesStatus404;
  "500": GlobalResourceAdminSetGlobalResourcesStatus500;
  "501": GlobalResourceAdminSetGlobalResourcesStatus501;
};

/**
 * @description Union of all possible responses
 */
export type GlobalResourceAdminSetGlobalResourcesResponse =
  | GlobalResourceAdminSetGlobalResourcesStatus200
  | GlobalResourceAdminSetGlobalResourcesStatus204
  | GlobalResourceAdminSetGlobalResourcesStatus400
  | GlobalResourceAdminSetGlobalResourcesStatus401
  | GlobalResourceAdminSetGlobalResourcesStatus403
  | GlobalResourceAdminSetGlobalResourcesStatus404
  | GlobalResourceAdminSetGlobalResourcesStatus500
  | GlobalResourceAdminSetGlobalResourcesStatus501;
