/* oxlint-disable */

import type { AcroStackIdentityClaimsIdentityClaimTypeDto } from "../acroStack/identityClaims/IdentityClaimTypeDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type IdentityClaimTypeGetPathId = string;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus200Plain = AcroStackIdentityClaimsIdentityClaimTypeDto;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus200Json = AcroStackIdentityClaimsIdentityClaimTypeDto;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus200Json2 = AcroStackIdentityClaimsIdentityClaimTypeDto;

export type IdentityClaimTypeGetStatus200 =
  | IdentityClaimTypeGetStatus200Plain
  | IdentityClaimTypeGetStatus200Json
  | IdentityClaimTypeGetStatus200Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus400 =
  | IdentityClaimTypeGetStatus400Plain
  | IdentityClaimTypeGetStatus400Json
  | IdentityClaimTypeGetStatus400Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus401 =
  | IdentityClaimTypeGetStatus401Plain
  | IdentityClaimTypeGetStatus401Json
  | IdentityClaimTypeGetStatus401Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus403 =
  | IdentityClaimTypeGetStatus403Plain
  | IdentityClaimTypeGetStatus403Json
  | IdentityClaimTypeGetStatus403Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus404 =
  | IdentityClaimTypeGetStatus404Plain
  | IdentityClaimTypeGetStatus404Json
  | IdentityClaimTypeGetStatus404Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus500 =
  | IdentityClaimTypeGetStatus500Plain
  | IdentityClaimTypeGetStatus500Json
  | IdentityClaimTypeGetStatus500Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus501 =
  | IdentityClaimTypeGetStatus501Plain
  | IdentityClaimTypeGetStatus501Json
  | IdentityClaimTypeGetStatus501Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: IdentityClaimTypeGetPathId;
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
export type IdentityClaimTypeGetResponses = {
  "200": IdentityClaimTypeGetStatus200;
  "400": IdentityClaimTypeGetStatus400;
  "401": IdentityClaimTypeGetStatus401;
  "403": IdentityClaimTypeGetStatus403;
  "404": IdentityClaimTypeGetStatus404;
  "500": IdentityClaimTypeGetStatus500;
  "501": IdentityClaimTypeGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type IdentityClaimTypeGetResponse =
  | IdentityClaimTypeGetStatus200
  | IdentityClaimTypeGetStatus400
  | IdentityClaimTypeGetStatus401
  | IdentityClaimTypeGetStatus403
  | IdentityClaimTypeGetStatus404
  | IdentityClaimTypeGetStatus500
  | IdentityClaimTypeGetStatus501;
