/* oxlint-disable */

import type { VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult } from "../volo/abp/account/web/areas/account/controllers/models/AbpLoginResult.ts";
import type { VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo } from "../volo/abp/account/web/areas/account/controllers/models/UserLoginInfo.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type LoginCheckPasswordStatus200Plain =
  VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult;

/**
 * @type object
 */
export type LoginCheckPasswordStatus200Json =
  VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult;

/**
 * @type object
 */
export type LoginCheckPasswordStatus200Json2 =
  VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult;

export type LoginCheckPasswordStatus200 =
  | LoginCheckPasswordStatus200Plain
  | LoginCheckPasswordStatus200Json
  | LoginCheckPasswordStatus200Json2;

/**
 * @type object
 */
export type LoginCheckPasswordStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginCheckPasswordStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginCheckPasswordStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus400 =
  | LoginCheckPasswordStatus400Plain
  | LoginCheckPasswordStatus400Json
  | LoginCheckPasswordStatus400Json2;

/**
 * @type object
 */
export type LoginCheckPasswordStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginCheckPasswordStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginCheckPasswordStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus401 =
  | LoginCheckPasswordStatus401Plain
  | LoginCheckPasswordStatus401Json
  | LoginCheckPasswordStatus401Json2;

/**
 * @type object
 */
export type LoginCheckPasswordStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginCheckPasswordStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginCheckPasswordStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus403 =
  | LoginCheckPasswordStatus403Plain
  | LoginCheckPasswordStatus403Json
  | LoginCheckPasswordStatus403Json2;

/**
 * @type object
 */
export type LoginCheckPasswordStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginCheckPasswordStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginCheckPasswordStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus404 =
  | LoginCheckPasswordStatus404Plain
  | LoginCheckPasswordStatus404Json
  | LoginCheckPasswordStatus404Json2;

/**
 * @type object
 */
export type LoginCheckPasswordStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginCheckPasswordStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginCheckPasswordStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus500 =
  | LoginCheckPasswordStatus500Plain
  | LoginCheckPasswordStatus500Json
  | LoginCheckPasswordStatus500Json2;

/**
 * @type object
 */
export type LoginCheckPasswordStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginCheckPasswordStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginCheckPasswordStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus501 =
  | LoginCheckPasswordStatus501Plain
  | LoginCheckPasswordStatus501Json
  | LoginCheckPasswordStatus501Json2;

/**
 * @type object | undefined
 */
export type LoginCheckPasswordJsonData =
  | VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo
  | undefined;

/**
 * @type object | undefined
 */
export type LoginCheckPasswordJson2Data =
  | VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo
  | undefined;

/**
 * @type object | undefined
 */
export type LoginCheckPasswordJson3Data =
  | VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo
  | undefined;

export type LoginCheckPasswordData =
  | LoginCheckPasswordJsonData
  | LoginCheckPasswordJson2Data
  | LoginCheckPasswordJson3Data;

/**
 * @type object
 */
export type LoginCheckPasswordRequestConfig = {
  data?: LoginCheckPasswordData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/account/check-password";
};

/**
 * @type object
 */
export type LoginCheckPasswordResponses = {
  "200": LoginCheckPasswordStatus200;
  "400": LoginCheckPasswordStatus400;
  "401": LoginCheckPasswordStatus401;
  "403": LoginCheckPasswordStatus403;
  "404": LoginCheckPasswordStatus404;
  "500": LoginCheckPasswordStatus500;
  "501": LoginCheckPasswordStatus501;
};

/**
 * @description Union of all possible responses
 */
export type LoginCheckPasswordResponse =
  | LoginCheckPasswordStatus200
  | LoginCheckPasswordStatus400
  | LoginCheckPasswordStatus401
  | LoginCheckPasswordStatus403
  | LoginCheckPasswordStatus404
  | LoginCheckPasswordStatus500
  | LoginCheckPasswordStatus501;
