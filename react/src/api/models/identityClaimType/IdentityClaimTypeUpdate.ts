/* oxlint-disable */

import type { AcroStackServicesDtosIdentityClaimsCreateIdentityClaimTypeDto } from "../acroStack/services/dtos/identityClaims/CreateIdentityClaimTypeDto.ts";
import type { AcroStackServicesDtosIdentityClaimsIdentityClaimTypeDto } from "../acroStack/services/dtos/identityClaims/IdentityClaimTypeDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type IdentityClaimTypeUpdatePathId = string;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus200Plain =
  AcroStackServicesDtosIdentityClaimsIdentityClaimTypeDto;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus200Json =
  AcroStackServicesDtosIdentityClaimsIdentityClaimTypeDto;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus200Json2 =
  AcroStackServicesDtosIdentityClaimsIdentityClaimTypeDto;

export type IdentityClaimTypeUpdateStatus200 =
  | IdentityClaimTypeUpdateStatus200Plain
  | IdentityClaimTypeUpdateStatus200Json
  | IdentityClaimTypeUpdateStatus200Json2;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus400 =
  | IdentityClaimTypeUpdateStatus400Plain
  | IdentityClaimTypeUpdateStatus400Json
  | IdentityClaimTypeUpdateStatus400Json2;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus401 =
  | IdentityClaimTypeUpdateStatus401Plain
  | IdentityClaimTypeUpdateStatus401Json
  | IdentityClaimTypeUpdateStatus401Json2;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus403 =
  | IdentityClaimTypeUpdateStatus403Plain
  | IdentityClaimTypeUpdateStatus403Json
  | IdentityClaimTypeUpdateStatus403Json2;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus404 =
  | IdentityClaimTypeUpdateStatus404Plain
  | IdentityClaimTypeUpdateStatus404Json
  | IdentityClaimTypeUpdateStatus404Json2;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus500 =
  | IdentityClaimTypeUpdateStatus500Plain
  | IdentityClaimTypeUpdateStatus500Json
  | IdentityClaimTypeUpdateStatus500Json2;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus501 =
  | IdentityClaimTypeUpdateStatus501Plain
  | IdentityClaimTypeUpdateStatus501Json
  | IdentityClaimTypeUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type IdentityClaimTypeUpdateJsonData =
  | AcroStackServicesDtosIdentityClaimsCreateIdentityClaimTypeDto
  | undefined;

/**
 * @type object | undefined
 */
export type IdentityClaimTypeUpdateJson2Data =
  | AcroStackServicesDtosIdentityClaimsCreateIdentityClaimTypeDto
  | undefined;

/**
 * @type object | undefined
 */
export type IdentityClaimTypeUpdateJson3Data =
  | AcroStackServicesDtosIdentityClaimsCreateIdentityClaimTypeDto
  | undefined;

export type IdentityClaimTypeUpdateData =
  | IdentityClaimTypeUpdateJsonData
  | IdentityClaimTypeUpdateJson2Data
  | IdentityClaimTypeUpdateJson3Data;

/**
 * @type object
 */
export type IdentityClaimTypeUpdateRequestConfig = {
  data?: IdentityClaimTypeUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: IdentityClaimTypeUpdatePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/identity-claim-type/${string}`;
};

/**
 * @type object
 */
export type IdentityClaimTypeUpdateResponses = {
  "200": IdentityClaimTypeUpdateStatus200;
  "400": IdentityClaimTypeUpdateStatus400;
  "401": IdentityClaimTypeUpdateStatus401;
  "403": IdentityClaimTypeUpdateStatus403;
  "404": IdentityClaimTypeUpdateStatus404;
  "500": IdentityClaimTypeUpdateStatus500;
  "501": IdentityClaimTypeUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type IdentityClaimTypeUpdateResponse =
  | IdentityClaimTypeUpdateStatus200
  | IdentityClaimTypeUpdateStatus400
  | IdentityClaimTypeUpdateStatus401
  | IdentityClaimTypeUpdateStatus403
  | IdentityClaimTypeUpdateStatus404
  | IdentityClaimTypeUpdateStatus500
  | IdentityClaimTypeUpdateStatus501;
