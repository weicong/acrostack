/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitPublicGlobalResourcesGlobalResourceDto } from "../volo/cmsKit/public/globalResources/GlobalResourceDto.ts";

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus200Plain =
  VoloCmsKitPublicGlobalResourcesGlobalResourceDto;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus200Json =
  VoloCmsKitPublicGlobalResourcesGlobalResourceDto;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus200Json2 =
  VoloCmsKitPublicGlobalResourcesGlobalResourceDto;

export type GlobalResourcePublicGetGlobalScriptStatus200 =
  | GlobalResourcePublicGetGlobalScriptStatus200Plain
  | GlobalResourcePublicGetGlobalScriptStatus200Json
  | GlobalResourcePublicGetGlobalScriptStatus200Json2;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus400Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus400 =
  | GlobalResourcePublicGetGlobalScriptStatus400Plain
  | GlobalResourcePublicGetGlobalScriptStatus400Json
  | GlobalResourcePublicGetGlobalScriptStatus400Json2;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus401Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus401 =
  | GlobalResourcePublicGetGlobalScriptStatus401Plain
  | GlobalResourcePublicGetGlobalScriptStatus401Json
  | GlobalResourcePublicGetGlobalScriptStatus401Json2;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus403Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus403 =
  | GlobalResourcePublicGetGlobalScriptStatus403Plain
  | GlobalResourcePublicGetGlobalScriptStatus403Json
  | GlobalResourcePublicGetGlobalScriptStatus403Json2;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus404Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus404 =
  | GlobalResourcePublicGetGlobalScriptStatus404Plain
  | GlobalResourcePublicGetGlobalScriptStatus404Json
  | GlobalResourcePublicGetGlobalScriptStatus404Json2;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus500Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus500 =
  | GlobalResourcePublicGetGlobalScriptStatus500Plain
  | GlobalResourcePublicGetGlobalScriptStatus500Json
  | GlobalResourcePublicGetGlobalScriptStatus500Json2;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus501Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus501 =
  | GlobalResourcePublicGetGlobalScriptStatus501Plain
  | GlobalResourcePublicGetGlobalScriptStatus501Json
  | GlobalResourcePublicGetGlobalScriptStatus501Json2;

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-public/global-resources/script";
};

/**
 * @type object
 */
export type GlobalResourcePublicGetGlobalScriptResponses = {
  "200": GlobalResourcePublicGetGlobalScriptStatus200;
  "400": GlobalResourcePublicGetGlobalScriptStatus400;
  "401": GlobalResourcePublicGetGlobalScriptStatus401;
  "403": GlobalResourcePublicGetGlobalScriptStatus403;
  "404": GlobalResourcePublicGetGlobalScriptStatus404;
  "500": GlobalResourcePublicGetGlobalScriptStatus500;
  "501": GlobalResourcePublicGetGlobalScriptStatus501;
};

/**
 * @description Union of all possible responses
 */
export type GlobalResourcePublicGetGlobalScriptResponse =
  | GlobalResourcePublicGetGlobalScriptStatus200
  | GlobalResourcePublicGetGlobalScriptStatus400
  | GlobalResourcePublicGetGlobalScriptStatus401
  | GlobalResourcePublicGetGlobalScriptStatus403
  | GlobalResourcePublicGetGlobalScriptStatus404
  | GlobalResourcePublicGetGlobalScriptStatus500
  | GlobalResourcePublicGetGlobalScriptStatus501;
