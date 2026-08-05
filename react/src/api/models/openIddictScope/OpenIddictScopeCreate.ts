/* oxlint-disable */

import type { AcroStackServicesDtosOpenIddictManagementCreateOpenIddictScopeDto } from "../acroStack/services/dtos/openIddictManagement/CreateOpenIddictScopeDto.ts";
import type { AcroStackServicesDtosOpenIddictManagementOpenIddictScopeDto } from "../acroStack/services/dtos/openIddictManagement/OpenIddictScopeDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus200Plain =
  AcroStackServicesDtosOpenIddictManagementOpenIddictScopeDto;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus200Json =
  AcroStackServicesDtosOpenIddictManagementOpenIddictScopeDto;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus200Json2 =
  AcroStackServicesDtosOpenIddictManagementOpenIddictScopeDto;

export type OpenIddictScopeCreateStatus200 =
  | OpenIddictScopeCreateStatus200Plain
  | OpenIddictScopeCreateStatus200Json
  | OpenIddictScopeCreateStatus200Json2;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus400 =
  | OpenIddictScopeCreateStatus400Plain
  | OpenIddictScopeCreateStatus400Json
  | OpenIddictScopeCreateStatus400Json2;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus401 =
  | OpenIddictScopeCreateStatus401Plain
  | OpenIddictScopeCreateStatus401Json
  | OpenIddictScopeCreateStatus401Json2;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus403 =
  | OpenIddictScopeCreateStatus403Plain
  | OpenIddictScopeCreateStatus403Json
  | OpenIddictScopeCreateStatus403Json2;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus404 =
  | OpenIddictScopeCreateStatus404Plain
  | OpenIddictScopeCreateStatus404Json
  | OpenIddictScopeCreateStatus404Json2;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus500 =
  | OpenIddictScopeCreateStatus500Plain
  | OpenIddictScopeCreateStatus500Json
  | OpenIddictScopeCreateStatus500Json2;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus501 =
  | OpenIddictScopeCreateStatus501Plain
  | OpenIddictScopeCreateStatus501Json
  | OpenIddictScopeCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type OpenIddictScopeCreateJsonData =
  | AcroStackServicesDtosOpenIddictManagementCreateOpenIddictScopeDto
  | undefined;

/**
 * @type object | undefined
 */
export type OpenIddictScopeCreateJson2Data =
  | AcroStackServicesDtosOpenIddictManagementCreateOpenIddictScopeDto
  | undefined;

/**
 * @type object | undefined
 */
export type OpenIddictScopeCreateJson3Data =
  | AcroStackServicesDtosOpenIddictManagementCreateOpenIddictScopeDto
  | undefined;

export type OpenIddictScopeCreateData =
  | OpenIddictScopeCreateJsonData
  | OpenIddictScopeCreateJson2Data
  | OpenIddictScopeCreateJson3Data;

/**
 * @type object
 */
export type OpenIddictScopeCreateRequestConfig = {
  data?: OpenIddictScopeCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/open-iddict-scope";
};

/**
 * @type object
 */
export type OpenIddictScopeCreateResponses = {
  "200": OpenIddictScopeCreateStatus200;
  "400": OpenIddictScopeCreateStatus400;
  "401": OpenIddictScopeCreateStatus401;
  "403": OpenIddictScopeCreateStatus403;
  "404": OpenIddictScopeCreateStatus404;
  "500": OpenIddictScopeCreateStatus500;
  "501": OpenIddictScopeCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictScopeCreateResponse =
  | OpenIddictScopeCreateStatus200
  | OpenIddictScopeCreateStatus400
  | OpenIddictScopeCreateStatus401
  | OpenIddictScopeCreateStatus403
  | OpenIddictScopeCreateStatus404
  | OpenIddictScopeCreateStatus500
  | OpenIddictScopeCreateStatus501;
