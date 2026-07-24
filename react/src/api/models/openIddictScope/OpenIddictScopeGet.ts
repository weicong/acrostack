/* oxlint-disable */

import type { AcroStackServicesDtosOpenIddictManagementOpenIddictScopeDto } from "../acroStack/services/dtos/openIddictManagement/OpenIddictScopeDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type OpenIddictScopeGetPathId = string;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus200Plain =
  AcroStackServicesDtosOpenIddictManagementOpenIddictScopeDto;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus200Json =
  AcroStackServicesDtosOpenIddictManagementOpenIddictScopeDto;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus200Json2 =
  AcroStackServicesDtosOpenIddictManagementOpenIddictScopeDto;

export type OpenIddictScopeGetStatus200 =
  | OpenIddictScopeGetStatus200Plain
  | OpenIddictScopeGetStatus200Json
  | OpenIddictScopeGetStatus200Json2;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus400 =
  | OpenIddictScopeGetStatus400Plain
  | OpenIddictScopeGetStatus400Json
  | OpenIddictScopeGetStatus400Json2;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus401 =
  | OpenIddictScopeGetStatus401Plain
  | OpenIddictScopeGetStatus401Json
  | OpenIddictScopeGetStatus401Json2;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus403 =
  | OpenIddictScopeGetStatus403Plain
  | OpenIddictScopeGetStatus403Json
  | OpenIddictScopeGetStatus403Json2;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus404 =
  | OpenIddictScopeGetStatus404Plain
  | OpenIddictScopeGetStatus404Json
  | OpenIddictScopeGetStatus404Json2;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus500 =
  | OpenIddictScopeGetStatus500Plain
  | OpenIddictScopeGetStatus500Json
  | OpenIddictScopeGetStatus500Json2;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus501 =
  | OpenIddictScopeGetStatus501Plain
  | OpenIddictScopeGetStatus501Json
  | OpenIddictScopeGetStatus501Json2;

/**
 * @type object
 */
export type OpenIddictScopeGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: OpenIddictScopeGetPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/open-iddict-scope/${string}`;
};

/**
 * @type object
 */
export type OpenIddictScopeGetResponses = {
  "200": OpenIddictScopeGetStatus200;
  "400": OpenIddictScopeGetStatus400;
  "401": OpenIddictScopeGetStatus401;
  "403": OpenIddictScopeGetStatus403;
  "404": OpenIddictScopeGetStatus404;
  "500": OpenIddictScopeGetStatus500;
  "501": OpenIddictScopeGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictScopeGetResponse =
  | OpenIddictScopeGetStatus200
  | OpenIddictScopeGetStatus400
  | OpenIddictScopeGetStatus401
  | OpenIddictScopeGetStatus403
  | OpenIddictScopeGetStatus404
  | OpenIddictScopeGetStatus500
  | OpenIddictScopeGetStatus501;
