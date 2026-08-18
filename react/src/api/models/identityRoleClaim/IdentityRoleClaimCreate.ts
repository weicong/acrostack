/* oxlint-disable */

import type { AcroStackIdentityClaimsCreateIdentityRoleClaimDto } from "../acroStack/identityClaims/CreateIdentityRoleClaimDto.ts";
import type { AcroStackIdentityClaimsIdentityClaimDto } from "../acroStack/identityClaims/IdentityClaimDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus200Plain = AcroStackIdentityClaimsIdentityClaimDto;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus200Json = AcroStackIdentityClaimsIdentityClaimDto;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus200Json2 = AcroStackIdentityClaimsIdentityClaimDto;

export type IdentityRoleClaimCreateStatus200 =
  | IdentityRoleClaimCreateStatus200Plain
  | IdentityRoleClaimCreateStatus200Json
  | IdentityRoleClaimCreateStatus200Json2;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus400 =
  | IdentityRoleClaimCreateStatus400Plain
  | IdentityRoleClaimCreateStatus400Json
  | IdentityRoleClaimCreateStatus400Json2;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus401 =
  | IdentityRoleClaimCreateStatus401Plain
  | IdentityRoleClaimCreateStatus401Json
  | IdentityRoleClaimCreateStatus401Json2;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus403 =
  | IdentityRoleClaimCreateStatus403Plain
  | IdentityRoleClaimCreateStatus403Json
  | IdentityRoleClaimCreateStatus403Json2;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus404 =
  | IdentityRoleClaimCreateStatus404Plain
  | IdentityRoleClaimCreateStatus404Json
  | IdentityRoleClaimCreateStatus404Json2;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus500 =
  | IdentityRoleClaimCreateStatus500Plain
  | IdentityRoleClaimCreateStatus500Json
  | IdentityRoleClaimCreateStatus500Json2;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus501 =
  | IdentityRoleClaimCreateStatus501Plain
  | IdentityRoleClaimCreateStatus501Json
  | IdentityRoleClaimCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type IdentityRoleClaimCreateJsonData =
  | AcroStackIdentityClaimsCreateIdentityRoleClaimDto
  | undefined;

/**
 * @type object | undefined
 */
export type IdentityRoleClaimCreateJson2Data =
  | AcroStackIdentityClaimsCreateIdentityRoleClaimDto
  | undefined;

/**
 * @type object | undefined
 */
export type IdentityRoleClaimCreateJson3Data =
  | AcroStackIdentityClaimsCreateIdentityRoleClaimDto
  | undefined;

export type IdentityRoleClaimCreateData =
  | IdentityRoleClaimCreateJsonData
  | IdentityRoleClaimCreateJson2Data
  | IdentityRoleClaimCreateJson3Data;

/**
 * @type object
 */
export type IdentityRoleClaimCreateRequestConfig = {
  data?: IdentityRoleClaimCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/identity-role-claim";
};

/**
 * @type object
 */
export type IdentityRoleClaimCreateResponses = {
  "200": IdentityRoleClaimCreateStatus200;
  "400": IdentityRoleClaimCreateStatus400;
  "401": IdentityRoleClaimCreateStatus401;
  "403": IdentityRoleClaimCreateStatus403;
  "404": IdentityRoleClaimCreateStatus404;
  "500": IdentityRoleClaimCreateStatus500;
  "501": IdentityRoleClaimCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type IdentityRoleClaimCreateResponse =
  | IdentityRoleClaimCreateStatus200
  | IdentityRoleClaimCreateStatus400
  | IdentityRoleClaimCreateStatus401
  | IdentityRoleClaimCreateStatus403
  | IdentityRoleClaimCreateStatus404
  | IdentityRoleClaimCreateStatus500
  | IdentityRoleClaimCreateStatus501;
