/* oxlint-disable */

import type { AcroStackServicesDtosIdentityClaimsIdentityClaimDto } from "../acroStack/services/dtos/identityClaims/IdentityClaimDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type IdentityRoleClaimGetListQueryRoleId = string | undefined;

/**
 * @type array
 */
export type IdentityRoleClaimGetListStatus200Plain =
  AcroStackServicesDtosIdentityClaimsIdentityClaimDto[];

/**
 * @type array
 */
export type IdentityRoleClaimGetListStatus200Json =
  AcroStackServicesDtosIdentityClaimsIdentityClaimDto[];

/**
 * @type array
 */
export type IdentityRoleClaimGetListStatus200Json2 =
  AcroStackServicesDtosIdentityClaimsIdentityClaimDto[];

export type IdentityRoleClaimGetListStatus200 =
  | IdentityRoleClaimGetListStatus200Plain
  | IdentityRoleClaimGetListStatus200Json
  | IdentityRoleClaimGetListStatus200Json2;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus400 =
  | IdentityRoleClaimGetListStatus400Plain
  | IdentityRoleClaimGetListStatus400Json
  | IdentityRoleClaimGetListStatus400Json2;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus401 =
  | IdentityRoleClaimGetListStatus401Plain
  | IdentityRoleClaimGetListStatus401Json
  | IdentityRoleClaimGetListStatus401Json2;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus403 =
  | IdentityRoleClaimGetListStatus403Plain
  | IdentityRoleClaimGetListStatus403Json
  | IdentityRoleClaimGetListStatus403Json2;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus404 =
  | IdentityRoleClaimGetListStatus404Plain
  | IdentityRoleClaimGetListStatus404Json
  | IdentityRoleClaimGetListStatus404Json2;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus500 =
  | IdentityRoleClaimGetListStatus500Plain
  | IdentityRoleClaimGetListStatus500Json
  | IdentityRoleClaimGetListStatus500Json2;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus501 =
  | IdentityRoleClaimGetListStatus501Plain
  | IdentityRoleClaimGetListStatus501Json
  | IdentityRoleClaimGetListStatus501Json2;

/**
 * @type object
 */
export type IdentityRoleClaimGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    roleId?: IdentityRoleClaimGetListQueryRoleId;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/identity-role-claim";
};

/**
 * @type object
 */
export type IdentityRoleClaimGetListResponses = {
  "200": IdentityRoleClaimGetListStatus200;
  "400": IdentityRoleClaimGetListStatus400;
  "401": IdentityRoleClaimGetListStatus401;
  "403": IdentityRoleClaimGetListStatus403;
  "404": IdentityRoleClaimGetListStatus404;
  "500": IdentityRoleClaimGetListStatus500;
  "501": IdentityRoleClaimGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type IdentityRoleClaimGetListResponse =
  | IdentityRoleClaimGetListStatus200
  | IdentityRoleClaimGetListStatus400
  | IdentityRoleClaimGetListStatus401
  | IdentityRoleClaimGetListStatus403
  | IdentityRoleClaimGetListStatus404
  | IdentityRoleClaimGetListStatus500
  | IdentityRoleClaimGetListStatus501;
