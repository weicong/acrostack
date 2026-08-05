/* oxlint-disable */

import type { AcroStackServicesDtosOpenIddictManagementOpenIddictScopeDto } from "../acroStack/services/dtos/openIddictManagement/OpenIddictScopeDto.ts";
import type { AcroStackServicesDtosOpenIddictManagementUpdateOpenIddictScopeDto } from "../acroStack/services/dtos/openIddictManagement/UpdateOpenIddictScopeDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type OpenIddictScopeUpdatePathId = string;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus200Plain =
  AcroStackServicesDtosOpenIddictManagementOpenIddictScopeDto;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus200Json =
  AcroStackServicesDtosOpenIddictManagementOpenIddictScopeDto;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus200Json2 =
  AcroStackServicesDtosOpenIddictManagementOpenIddictScopeDto;

export type OpenIddictScopeUpdateStatus200 =
  | OpenIddictScopeUpdateStatus200Plain
  | OpenIddictScopeUpdateStatus200Json
  | OpenIddictScopeUpdateStatus200Json2;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus400 =
  | OpenIddictScopeUpdateStatus400Plain
  | OpenIddictScopeUpdateStatus400Json
  | OpenIddictScopeUpdateStatus400Json2;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus401 =
  | OpenIddictScopeUpdateStatus401Plain
  | OpenIddictScopeUpdateStatus401Json
  | OpenIddictScopeUpdateStatus401Json2;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus403 =
  | OpenIddictScopeUpdateStatus403Plain
  | OpenIddictScopeUpdateStatus403Json
  | OpenIddictScopeUpdateStatus403Json2;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus404 =
  | OpenIddictScopeUpdateStatus404Plain
  | OpenIddictScopeUpdateStatus404Json
  | OpenIddictScopeUpdateStatus404Json2;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus500 =
  | OpenIddictScopeUpdateStatus500Plain
  | OpenIddictScopeUpdateStatus500Json
  | OpenIddictScopeUpdateStatus500Json2;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus501 =
  | OpenIddictScopeUpdateStatus501Plain
  | OpenIddictScopeUpdateStatus501Json
  | OpenIddictScopeUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type OpenIddictScopeUpdateJsonData =
  | AcroStackServicesDtosOpenIddictManagementUpdateOpenIddictScopeDto
  | undefined;

/**
 * @type object | undefined
 */
export type OpenIddictScopeUpdateJson2Data =
  | AcroStackServicesDtosOpenIddictManagementUpdateOpenIddictScopeDto
  | undefined;

/**
 * @type object | undefined
 */
export type OpenIddictScopeUpdateJson3Data =
  | AcroStackServicesDtosOpenIddictManagementUpdateOpenIddictScopeDto
  | undefined;

export type OpenIddictScopeUpdateData =
  | OpenIddictScopeUpdateJsonData
  | OpenIddictScopeUpdateJson2Data
  | OpenIddictScopeUpdateJson3Data;

/**
 * @type object
 */
export type OpenIddictScopeUpdateRequestConfig = {
  data?: OpenIddictScopeUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: OpenIddictScopeUpdatePathId;
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
export type OpenIddictScopeUpdateResponses = {
  "200": OpenIddictScopeUpdateStatus200;
  "400": OpenIddictScopeUpdateStatus400;
  "401": OpenIddictScopeUpdateStatus401;
  "403": OpenIddictScopeUpdateStatus403;
  "404": OpenIddictScopeUpdateStatus404;
  "500": OpenIddictScopeUpdateStatus500;
  "501": OpenIddictScopeUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictScopeUpdateResponse =
  | OpenIddictScopeUpdateStatus200
  | OpenIddictScopeUpdateStatus400
  | OpenIddictScopeUpdateStatus401
  | OpenIddictScopeUpdateStatus403
  | OpenIddictScopeUpdateStatus404
  | OpenIddictScopeUpdateStatus500
  | OpenIddictScopeUpdateStatus501;
