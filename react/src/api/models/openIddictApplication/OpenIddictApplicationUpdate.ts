/* oxlint-disable */

import type { AcroStackOpenIddictManagementOpenIddictApplicationDto } from "../acroStack/openIddictManagement/OpenIddictApplicationDto.ts";
import type { AcroStackOpenIddictManagementUpdateOpenIddictApplicationDto } from "../acroStack/openIddictManagement/UpdateOpenIddictApplicationDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type OpenIddictApplicationUpdatePathId = string;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus200Plain =
  AcroStackOpenIddictManagementOpenIddictApplicationDto;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus200Json =
  AcroStackOpenIddictManagementOpenIddictApplicationDto;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus200Json2 =
  AcroStackOpenIddictManagementOpenIddictApplicationDto;

export type OpenIddictApplicationUpdateStatus200 =
  | OpenIddictApplicationUpdateStatus200Plain
  | OpenIddictApplicationUpdateStatus200Json
  | OpenIddictApplicationUpdateStatus200Json2;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus400 =
  | OpenIddictApplicationUpdateStatus400Plain
  | OpenIddictApplicationUpdateStatus400Json
  | OpenIddictApplicationUpdateStatus400Json2;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus401 =
  | OpenIddictApplicationUpdateStatus401Plain
  | OpenIddictApplicationUpdateStatus401Json
  | OpenIddictApplicationUpdateStatus401Json2;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus403 =
  | OpenIddictApplicationUpdateStatus403Plain
  | OpenIddictApplicationUpdateStatus403Json
  | OpenIddictApplicationUpdateStatus403Json2;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus404 =
  | OpenIddictApplicationUpdateStatus404Plain
  | OpenIddictApplicationUpdateStatus404Json
  | OpenIddictApplicationUpdateStatus404Json2;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus500 =
  | OpenIddictApplicationUpdateStatus500Plain
  | OpenIddictApplicationUpdateStatus500Json
  | OpenIddictApplicationUpdateStatus500Json2;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus501 =
  | OpenIddictApplicationUpdateStatus501Plain
  | OpenIddictApplicationUpdateStatus501Json
  | OpenIddictApplicationUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type OpenIddictApplicationUpdateJsonData =
  | AcroStackOpenIddictManagementUpdateOpenIddictApplicationDto
  | undefined;

/**
 * @type object | undefined
 */
export type OpenIddictApplicationUpdateJson2Data =
  | AcroStackOpenIddictManagementUpdateOpenIddictApplicationDto
  | undefined;

/**
 * @type object | undefined
 */
export type OpenIddictApplicationUpdateJson3Data =
  | AcroStackOpenIddictManagementUpdateOpenIddictApplicationDto
  | undefined;

export type OpenIddictApplicationUpdateData =
  | OpenIddictApplicationUpdateJsonData
  | OpenIddictApplicationUpdateJson2Data
  | OpenIddictApplicationUpdateJson3Data;

/**
 * @type object
 */
export type OpenIddictApplicationUpdateRequestConfig = {
  data?: OpenIddictApplicationUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: OpenIddictApplicationUpdatePathId;
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
export type OpenIddictApplicationUpdateResponses = {
  "200": OpenIddictApplicationUpdateStatus200;
  "400": OpenIddictApplicationUpdateStatus400;
  "401": OpenIddictApplicationUpdateStatus401;
  "403": OpenIddictApplicationUpdateStatus403;
  "404": OpenIddictApplicationUpdateStatus404;
  "500": OpenIddictApplicationUpdateStatus500;
  "501": OpenIddictApplicationUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictApplicationUpdateResponse =
  | OpenIddictApplicationUpdateStatus200
  | OpenIddictApplicationUpdateStatus400
  | OpenIddictApplicationUpdateStatus401
  | OpenIddictApplicationUpdateStatus403
  | OpenIddictApplicationUpdateStatus404
  | OpenIddictApplicationUpdateStatus500
  | OpenIddictApplicationUpdateStatus501;
