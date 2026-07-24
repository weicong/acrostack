/* oxlint-disable */

import type { AcroStackServicesDtosOpenIddictManagementOpenIddictApplicationDto } from "../acroStack/services/dtos/openIddictManagement/OpenIddictApplicationDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type OpenIddictApplicationGetPathId = string;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus200Plain =
  AcroStackServicesDtosOpenIddictManagementOpenIddictApplicationDto;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus200Json =
  AcroStackServicesDtosOpenIddictManagementOpenIddictApplicationDto;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus200Json2 =
  AcroStackServicesDtosOpenIddictManagementOpenIddictApplicationDto;

export type OpenIddictApplicationGetStatus200 =
  | OpenIddictApplicationGetStatus200Plain
  | OpenIddictApplicationGetStatus200Json
  | OpenIddictApplicationGetStatus200Json2;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus400 =
  | OpenIddictApplicationGetStatus400Plain
  | OpenIddictApplicationGetStatus400Json
  | OpenIddictApplicationGetStatus400Json2;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus401 =
  | OpenIddictApplicationGetStatus401Plain
  | OpenIddictApplicationGetStatus401Json
  | OpenIddictApplicationGetStatus401Json2;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus403 =
  | OpenIddictApplicationGetStatus403Plain
  | OpenIddictApplicationGetStatus403Json
  | OpenIddictApplicationGetStatus403Json2;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus404 =
  | OpenIddictApplicationGetStatus404Plain
  | OpenIddictApplicationGetStatus404Json
  | OpenIddictApplicationGetStatus404Json2;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus500 =
  | OpenIddictApplicationGetStatus500Plain
  | OpenIddictApplicationGetStatus500Json
  | OpenIddictApplicationGetStatus500Json2;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus501 =
  | OpenIddictApplicationGetStatus501Plain
  | OpenIddictApplicationGetStatus501Json
  | OpenIddictApplicationGetStatus501Json2;

/**
 * @type object
 */
export type OpenIddictApplicationGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: OpenIddictApplicationGetPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/open-iddict-application/${string}`;
};

/**
 * @type object
 */
export type OpenIddictApplicationGetResponses = {
  "200": OpenIddictApplicationGetStatus200;
  "400": OpenIddictApplicationGetStatus400;
  "401": OpenIddictApplicationGetStatus401;
  "403": OpenIddictApplicationGetStatus403;
  "404": OpenIddictApplicationGetStatus404;
  "500": OpenIddictApplicationGetStatus500;
  "501": OpenIddictApplicationGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictApplicationGetResponse =
  | OpenIddictApplicationGetStatus200
  | OpenIddictApplicationGetStatus400
  | OpenIddictApplicationGetStatus401
  | OpenIddictApplicationGetStatus403
  | OpenIddictApplicationGetStatus404
  | OpenIddictApplicationGetStatus500
  | OpenIddictApplicationGetStatus501;
