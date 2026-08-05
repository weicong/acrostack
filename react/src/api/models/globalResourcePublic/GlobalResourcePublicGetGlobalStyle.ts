/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitPublicGlobalResourcesGlobalResourceDto } from "../volo/cmsKit/public/globalResources/GlobalResourceDto.ts";

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus200Plain =
  VoloCmsKitPublicGlobalResourcesGlobalResourceDto;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus200Json =
  VoloCmsKitPublicGlobalResourcesGlobalResourceDto;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus200Json2 =
  VoloCmsKitPublicGlobalResourcesGlobalResourceDto;

export type GlobalResourcePublicGetGlobalStyleStatus200 =
  | GlobalResourcePublicGetGlobalStyleStatus200Plain
  | GlobalResourcePublicGetGlobalStyleStatus200Json
  | GlobalResourcePublicGetGlobalStyleStatus200Json2;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus400 =
  | GlobalResourcePublicGetGlobalStyleStatus400Plain
  | GlobalResourcePublicGetGlobalStyleStatus400Json
  | GlobalResourcePublicGetGlobalStyleStatus400Json2;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus401 =
  | GlobalResourcePublicGetGlobalStyleStatus401Plain
  | GlobalResourcePublicGetGlobalStyleStatus401Json
  | GlobalResourcePublicGetGlobalStyleStatus401Json2;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus403 =
  | GlobalResourcePublicGetGlobalStyleStatus403Plain
  | GlobalResourcePublicGetGlobalStyleStatus403Json
  | GlobalResourcePublicGetGlobalStyleStatus403Json2;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus404 =
  | GlobalResourcePublicGetGlobalStyleStatus404Plain
  | GlobalResourcePublicGetGlobalStyleStatus404Json
  | GlobalResourcePublicGetGlobalStyleStatus404Json2;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus500 =
  | GlobalResourcePublicGetGlobalStyleStatus500Plain
  | GlobalResourcePublicGetGlobalStyleStatus500Json
  | GlobalResourcePublicGetGlobalStyleStatus500Json2;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus501 =
  | GlobalResourcePublicGetGlobalStyleStatus501Plain
  | GlobalResourcePublicGetGlobalStyleStatus501Json
  | GlobalResourcePublicGetGlobalStyleStatus501Json2;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-public/global-resources/style";
};

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalStyleResponses = {
  "200": GlobalResourcePublicGetGlobalStyleStatus200;
  "400": GlobalResourcePublicGetGlobalStyleStatus400;
  "401": GlobalResourcePublicGetGlobalStyleStatus401;
  "403": GlobalResourcePublicGetGlobalStyleStatus403;
  "404": GlobalResourcePublicGetGlobalStyleStatus404;
  "500": GlobalResourcePublicGetGlobalStyleStatus500;
  "501": GlobalResourcePublicGetGlobalStyleStatus501;
};

/**
 * @description Union of all possible responses
 */
export type GlobalResourcePublicGetGlobalStyleResponse =
  | GlobalResourcePublicGetGlobalStyleStatus200
  | GlobalResourcePublicGetGlobalStyleStatus400
  | GlobalResourcePublicGetGlobalStyleStatus401
  | GlobalResourcePublicGetGlobalStyleStatus403
  | GlobalResourcePublicGetGlobalStyleStatus404
  | GlobalResourcePublicGetGlobalStyleStatus500
  | GlobalResourcePublicGetGlobalStyleStatus501;
