/* oxlint-disable */

import type { AcroStackOpenIddictManagementCreateOpenIddictApplicationDto } from "../acroStack/openIddictManagement/CreateOpenIddictApplicationDto.ts";
import type { AcroStackOpenIddictManagementOpenIddictApplicationDto } from "../acroStack/openIddictManagement/OpenIddictApplicationDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus200Plain =
  AcroStackOpenIddictManagementOpenIddictApplicationDto;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus200Json =
  AcroStackOpenIddictManagementOpenIddictApplicationDto;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus200Json2 =
  AcroStackOpenIddictManagementOpenIddictApplicationDto;

export type OpenIddictApplicationCreateStatus200 =
  | OpenIddictApplicationCreateStatus200Plain
  | OpenIddictApplicationCreateStatus200Json
  | OpenIddictApplicationCreateStatus200Json2;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus400 =
  | OpenIddictApplicationCreateStatus400Plain
  | OpenIddictApplicationCreateStatus400Json
  | OpenIddictApplicationCreateStatus400Json2;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus401 =
  | OpenIddictApplicationCreateStatus401Plain
  | OpenIddictApplicationCreateStatus401Json
  | OpenIddictApplicationCreateStatus401Json2;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus403 =
  | OpenIddictApplicationCreateStatus403Plain
  | OpenIddictApplicationCreateStatus403Json
  | OpenIddictApplicationCreateStatus403Json2;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus404 =
  | OpenIddictApplicationCreateStatus404Plain
  | OpenIddictApplicationCreateStatus404Json
  | OpenIddictApplicationCreateStatus404Json2;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus500 =
  | OpenIddictApplicationCreateStatus500Plain
  | OpenIddictApplicationCreateStatus500Json
  | OpenIddictApplicationCreateStatus500Json2;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus501 =
  | OpenIddictApplicationCreateStatus501Plain
  | OpenIddictApplicationCreateStatus501Json
  | OpenIddictApplicationCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type OpenIddictApplicationCreateJsonData =
  | AcroStackOpenIddictManagementCreateOpenIddictApplicationDto
  | undefined;

/**
 * @type object | undefined
 */
export type OpenIddictApplicationCreateJson2Data =
  | AcroStackOpenIddictManagementCreateOpenIddictApplicationDto
  | undefined;

/**
 * @type object | undefined
 */
export type OpenIddictApplicationCreateJson3Data =
  | AcroStackOpenIddictManagementCreateOpenIddictApplicationDto
  | undefined;

export type OpenIddictApplicationCreateData =
  | OpenIddictApplicationCreateJsonData
  | OpenIddictApplicationCreateJson2Data
  | OpenIddictApplicationCreateJson3Data;

/**
 * @type object
 */
export type OpenIddictApplicationCreateRequestConfig = {
  data?: OpenIddictApplicationCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/open-iddict-application";
};

/**
 * @type object
 */
export type OpenIddictApplicationCreateResponses = {
  "200": OpenIddictApplicationCreateStatus200;
  "400": OpenIddictApplicationCreateStatus400;
  "401": OpenIddictApplicationCreateStatus401;
  "403": OpenIddictApplicationCreateStatus403;
  "404": OpenIddictApplicationCreateStatus404;
  "500": OpenIddictApplicationCreateStatus500;
  "501": OpenIddictApplicationCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictApplicationCreateResponse =
  | OpenIddictApplicationCreateStatus200
  | OpenIddictApplicationCreateStatus400
  | OpenIddictApplicationCreateStatus401
  | OpenIddictApplicationCreateStatus403
  | OpenIddictApplicationCreateStatus404
  | OpenIddictApplicationCreateStatus500
  | OpenIddictApplicationCreateStatus501;
