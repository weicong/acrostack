/* oxlint-disable */

import type { AcroStackServicesDtosIdentityClaimsIdentityClaimTypeDto } from "../acroStack/services/dtos/identityClaims/IdentityClaimTypeDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type array
 */
export type IdentityClaimTypeGetAllClaimTypesStatus200Plain =
  AcroStackServicesDtosIdentityClaimsIdentityClaimTypeDto[];

/**
 * @type array
 */
export type IdentityClaimTypeGetAllClaimTypesStatus200Json =
  AcroStackServicesDtosIdentityClaimsIdentityClaimTypeDto[];

/**
 * @type array
 */
export type IdentityClaimTypeGetAllClaimTypesStatus200Json2 =
  AcroStackServicesDtosIdentityClaimsIdentityClaimTypeDto[];

export type IdentityClaimTypeGetAllClaimTypesStatus200 =
  | IdentityClaimTypeGetAllClaimTypesStatus200Plain
  | IdentityClaimTypeGetAllClaimTypesStatus200Json
  | IdentityClaimTypeGetAllClaimTypesStatus200Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus400 =
  | IdentityClaimTypeGetAllClaimTypesStatus400Plain
  | IdentityClaimTypeGetAllClaimTypesStatus400Json
  | IdentityClaimTypeGetAllClaimTypesStatus400Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus401 =
  | IdentityClaimTypeGetAllClaimTypesStatus401Plain
  | IdentityClaimTypeGetAllClaimTypesStatus401Json
  | IdentityClaimTypeGetAllClaimTypesStatus401Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus403 =
  | IdentityClaimTypeGetAllClaimTypesStatus403Plain
  | IdentityClaimTypeGetAllClaimTypesStatus403Json
  | IdentityClaimTypeGetAllClaimTypesStatus403Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus404 =
  | IdentityClaimTypeGetAllClaimTypesStatus404Plain
  | IdentityClaimTypeGetAllClaimTypesStatus404Json
  | IdentityClaimTypeGetAllClaimTypesStatus404Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus500 =
  | IdentityClaimTypeGetAllClaimTypesStatus500Plain
  | IdentityClaimTypeGetAllClaimTypesStatus500Json
  | IdentityClaimTypeGetAllClaimTypesStatus500Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus501 =
  | IdentityClaimTypeGetAllClaimTypesStatus501Plain
  | IdentityClaimTypeGetAllClaimTypesStatus501Json
  | IdentityClaimTypeGetAllClaimTypesStatus501Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/identity-claim-type/all";
};

/**
 * @type object
 */
export type IdentityClaimTypeGetAllClaimTypesResponses = {
  "200": IdentityClaimTypeGetAllClaimTypesStatus200;
  "400": IdentityClaimTypeGetAllClaimTypesStatus400;
  "401": IdentityClaimTypeGetAllClaimTypesStatus401;
  "403": IdentityClaimTypeGetAllClaimTypesStatus403;
  "404": IdentityClaimTypeGetAllClaimTypesStatus404;
  "500": IdentityClaimTypeGetAllClaimTypesStatus500;
  "501": IdentityClaimTypeGetAllClaimTypesStatus501;
};

/**
 * @description Union of all possible responses
 */
export type IdentityClaimTypeGetAllClaimTypesResponse =
  | IdentityClaimTypeGetAllClaimTypesStatus200
  | IdentityClaimTypeGetAllClaimTypesStatus400
  | IdentityClaimTypeGetAllClaimTypesStatus401
  | IdentityClaimTypeGetAllClaimTypesStatus403
  | IdentityClaimTypeGetAllClaimTypesStatus404
  | IdentityClaimTypeGetAllClaimTypesStatus500
  | IdentityClaimTypeGetAllClaimTypesStatus501;
