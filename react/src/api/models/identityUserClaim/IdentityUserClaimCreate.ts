/* oxlint-disable */

import type { AcroStackServicesDtosIdentityClaimsCreateIdentityUserClaimDto } from "../acroStack/services/dtos/identityClaims/CreateIdentityUserClaimDto.ts";
import type { AcroStackServicesDtosIdentityClaimsIdentityClaimDto } from "../acroStack/services/dtos/identityClaims/IdentityClaimDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus200Plain =
  AcroStackServicesDtosIdentityClaimsIdentityClaimDto;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus200Json =
  AcroStackServicesDtosIdentityClaimsIdentityClaimDto;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus200Json2 =
  AcroStackServicesDtosIdentityClaimsIdentityClaimDto;

export type IdentityUserClaimCreateStatus200 =
  | IdentityUserClaimCreateStatus200Plain
  | IdentityUserClaimCreateStatus200Json
  | IdentityUserClaimCreateStatus200Json2;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus400 =
  | IdentityUserClaimCreateStatus400Plain
  | IdentityUserClaimCreateStatus400Json
  | IdentityUserClaimCreateStatus400Json2;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus401 =
  | IdentityUserClaimCreateStatus401Plain
  | IdentityUserClaimCreateStatus401Json
  | IdentityUserClaimCreateStatus401Json2;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus403 =
  | IdentityUserClaimCreateStatus403Plain
  | IdentityUserClaimCreateStatus403Json
  | IdentityUserClaimCreateStatus403Json2;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus404 =
  | IdentityUserClaimCreateStatus404Plain
  | IdentityUserClaimCreateStatus404Json
  | IdentityUserClaimCreateStatus404Json2;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus500 =
  | IdentityUserClaimCreateStatus500Plain
  | IdentityUserClaimCreateStatus500Json
  | IdentityUserClaimCreateStatus500Json2;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus501 =
  | IdentityUserClaimCreateStatus501Plain
  | IdentityUserClaimCreateStatus501Json
  | IdentityUserClaimCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type IdentityUserClaimCreateJsonData =
  | AcroStackServicesDtosIdentityClaimsCreateIdentityUserClaimDto
  | undefined;

/**
 * @type object | undefined
 */
export type IdentityUserClaimCreateJson2Data =
  | AcroStackServicesDtosIdentityClaimsCreateIdentityUserClaimDto
  | undefined;

/**
 * @type object | undefined
 */
export type IdentityUserClaimCreateJson3Data =
  | AcroStackServicesDtosIdentityClaimsCreateIdentityUserClaimDto
  | undefined;

export type IdentityUserClaimCreateData =
  | IdentityUserClaimCreateJsonData
  | IdentityUserClaimCreateJson2Data
  | IdentityUserClaimCreateJson3Data;

/**
 * @type object
 */
export type IdentityUserClaimCreateRequestConfig = {
  data?: IdentityUserClaimCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/identity-user-claim";
};

/**
 * @type object
 */
export type IdentityUserClaimCreateResponses = {
  "200": IdentityUserClaimCreateStatus200;
  "400": IdentityUserClaimCreateStatus400;
  "401": IdentityUserClaimCreateStatus401;
  "403": IdentityUserClaimCreateStatus403;
  "404": IdentityUserClaimCreateStatus404;
  "500": IdentityUserClaimCreateStatus500;
  "501": IdentityUserClaimCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type IdentityUserClaimCreateResponse =
  | IdentityUserClaimCreateStatus200
  | IdentityUserClaimCreateStatus400
  | IdentityUserClaimCreateStatus401
  | IdentityUserClaimCreateStatus403
  | IdentityUserClaimCreateStatus404
  | IdentityUserClaimCreateStatus500
  | IdentityUserClaimCreateStatus501;
