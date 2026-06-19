/* oxlint-disable */

import type { VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult } from "../volo/abp/account/web/areas/account/controllers/models/AbpLoginResult.ts";
import type { VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo } from "../volo/abp/account/web/areas/account/controllers/models/UserLoginInfo.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type LoginLoginStatus200Plain = VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult;

/**
 * @type object
 */
export type LoginLoginStatus200Json = VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult;

/**
 * @type object
 */
export type LoginLoginStatus200Json2 = VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult;

export type LoginLoginStatus200 =
  | LoginLoginStatus200Plain
  | LoginLoginStatus200Json
  | LoginLoginStatus200Json2;

/**
 * @type object
 */
export type LoginLoginStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLoginStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLoginStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus400 =
  | LoginLoginStatus400Plain
  | LoginLoginStatus400Json
  | LoginLoginStatus400Json2;

/**
 * @type object
 */
export type LoginLoginStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLoginStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLoginStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus401 =
  | LoginLoginStatus401Plain
  | LoginLoginStatus401Json
  | LoginLoginStatus401Json2;

/**
 * @type object
 */
export type LoginLoginStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLoginStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLoginStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus403 =
  | LoginLoginStatus403Plain
  | LoginLoginStatus403Json
  | LoginLoginStatus403Json2;

/**
 * @type object
 */
export type LoginLoginStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLoginStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLoginStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus404 =
  | LoginLoginStatus404Plain
  | LoginLoginStatus404Json
  | LoginLoginStatus404Json2;

/**
 * @type object
 */
export type LoginLoginStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLoginStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLoginStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus500 =
  | LoginLoginStatus500Plain
  | LoginLoginStatus500Json
  | LoginLoginStatus500Json2;

/**
 * @type object
 */
export type LoginLoginStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLoginStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLoginStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus501 =
  | LoginLoginStatus501Plain
  | LoginLoginStatus501Json
  | LoginLoginStatus501Json2;

/**
 * @type object | undefined
 */
export type LoginLoginJsonData =
  | VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo
  | undefined;

/**
 * @type object | undefined
 */
export type LoginLoginJson2Data =
  | VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo
  | undefined;

/**
 * @type object | undefined
 */
export type LoginLoginJson3Data =
  | VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo
  | undefined;

export type LoginLoginData = LoginLoginJsonData | LoginLoginJson2Data | LoginLoginJson3Data;

/**
 * @type object
 */
export type LoginLoginRequestConfig = {
  data?: LoginLoginData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/account/login";
};

/**
 * @type object
 */
export type LoginLoginResponses = {
  "200": LoginLoginStatus200;
  "400": LoginLoginStatus400;
  "401": LoginLoginStatus401;
  "403": LoginLoginStatus403;
  "404": LoginLoginStatus404;
  "500": LoginLoginStatus500;
  "501": LoginLoginStatus501;
};

/**
 * @description Union of all possible responses
 */
export type LoginLoginResponse =
  | LoginLoginStatus200
  | LoginLoginStatus400
  | LoginLoginStatus401
  | LoginLoginStatus403
  | LoginLoginStatus404
  | LoginLoginStatus500
  | LoginLoginStatus501;
