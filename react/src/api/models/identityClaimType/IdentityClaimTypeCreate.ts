/* oxlint-disable */

import type { AcroStackIdentityClaimsCreateIdentityClaimTypeDto } from "../acroStack/identityClaims/CreateIdentityClaimTypeDto.ts";
import type { AcroStackIdentityClaimsIdentityClaimTypeDto } from "../acroStack/identityClaims/IdentityClaimTypeDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus200Plain = AcroStackIdentityClaimsIdentityClaimTypeDto;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus200Json = AcroStackIdentityClaimsIdentityClaimTypeDto;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus200Json2 = AcroStackIdentityClaimsIdentityClaimTypeDto;

export type IdentityClaimTypeCreateStatus200 =
  | IdentityClaimTypeCreateStatus200Plain
  | IdentityClaimTypeCreateStatus200Json
  | IdentityClaimTypeCreateStatus200Json2;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus400 =
  | IdentityClaimTypeCreateStatus400Plain
  | IdentityClaimTypeCreateStatus400Json
  | IdentityClaimTypeCreateStatus400Json2;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus401 =
  | IdentityClaimTypeCreateStatus401Plain
  | IdentityClaimTypeCreateStatus401Json
  | IdentityClaimTypeCreateStatus401Json2;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus403 =
  | IdentityClaimTypeCreateStatus403Plain
  | IdentityClaimTypeCreateStatus403Json
  | IdentityClaimTypeCreateStatus403Json2;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus404 =
  | IdentityClaimTypeCreateStatus404Plain
  | IdentityClaimTypeCreateStatus404Json
  | IdentityClaimTypeCreateStatus404Json2;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus500 =
  | IdentityClaimTypeCreateStatus500Plain
  | IdentityClaimTypeCreateStatus500Json
  | IdentityClaimTypeCreateStatus500Json2;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus501 =
  | IdentityClaimTypeCreateStatus501Plain
  | IdentityClaimTypeCreateStatus501Json
  | IdentityClaimTypeCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type IdentityClaimTypeCreateJsonData =
  | AcroStackIdentityClaimsCreateIdentityClaimTypeDto
  | undefined;

/**
 * @type object | undefined
 */
export type IdentityClaimTypeCreateJson2Data =
  | AcroStackIdentityClaimsCreateIdentityClaimTypeDto
  | undefined;

/**
 * @type object | undefined
 */
export type IdentityClaimTypeCreateJson3Data =
  | AcroStackIdentityClaimsCreateIdentityClaimTypeDto
  | undefined;

export type IdentityClaimTypeCreateData =
  | IdentityClaimTypeCreateJsonData
  | IdentityClaimTypeCreateJson2Data
  | IdentityClaimTypeCreateJson3Data;

/**
 * @type object
 */
export type IdentityClaimTypeCreateRequestConfig = {
  data?: IdentityClaimTypeCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/identity-claim-type";
};

/**
 * @type object
 */
export type IdentityClaimTypeCreateResponses = {
  "200": IdentityClaimTypeCreateStatus200;
  "400": IdentityClaimTypeCreateStatus400;
  "401": IdentityClaimTypeCreateStatus401;
  "403": IdentityClaimTypeCreateStatus403;
  "404": IdentityClaimTypeCreateStatus404;
  "500": IdentityClaimTypeCreateStatus500;
  "501": IdentityClaimTypeCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type IdentityClaimTypeCreateResponse =
  | IdentityClaimTypeCreateStatus200
  | IdentityClaimTypeCreateStatus400
  | IdentityClaimTypeCreateStatus401
  | IdentityClaimTypeCreateStatus403
  | IdentityClaimTypeCreateStatus404
  | IdentityClaimTypeCreateStatus500
  | IdentityClaimTypeCreateStatus501;
