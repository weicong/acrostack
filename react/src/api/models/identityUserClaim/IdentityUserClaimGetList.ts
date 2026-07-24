/* oxlint-disable */

import type { AcroStackServicesDtosIdentityClaimsIdentityClaimDto } from "../acroStack/services/dtos/identityClaims/IdentityClaimDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type IdentityUserClaimGetListQueryUserId = string | undefined;

/**
 * @type array
 */
export type IdentityUserClaimGetListStatus200Plain =
  AcroStackServicesDtosIdentityClaimsIdentityClaimDto[];

/**
 * @type array
 */
export type IdentityUserClaimGetListStatus200Json =
  AcroStackServicesDtosIdentityClaimsIdentityClaimDto[];

/**
 * @type array
 */
export type IdentityUserClaimGetListStatus200Json2 =
  AcroStackServicesDtosIdentityClaimsIdentityClaimDto[];

export type IdentityUserClaimGetListStatus200 =
  | IdentityUserClaimGetListStatus200Plain
  | IdentityUserClaimGetListStatus200Json
  | IdentityUserClaimGetListStatus200Json2;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus400 =
  | IdentityUserClaimGetListStatus400Plain
  | IdentityUserClaimGetListStatus400Json
  | IdentityUserClaimGetListStatus400Json2;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus401 =
  | IdentityUserClaimGetListStatus401Plain
  | IdentityUserClaimGetListStatus401Json
  | IdentityUserClaimGetListStatus401Json2;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus403 =
  | IdentityUserClaimGetListStatus403Plain
  | IdentityUserClaimGetListStatus403Json
  | IdentityUserClaimGetListStatus403Json2;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus404 =
  | IdentityUserClaimGetListStatus404Plain
  | IdentityUserClaimGetListStatus404Json
  | IdentityUserClaimGetListStatus404Json2;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus500 =
  | IdentityUserClaimGetListStatus500Plain
  | IdentityUserClaimGetListStatus500Json
  | IdentityUserClaimGetListStatus500Json2;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus501 =
  | IdentityUserClaimGetListStatus501Plain
  | IdentityUserClaimGetListStatus501Json
  | IdentityUserClaimGetListStatus501Json2;

/**
 * @type object
 */
export type IdentityUserClaimGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    userId?: IdentityUserClaimGetListQueryUserId;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/identity-user-claim";
};

/**
 * @type object
 */
export type IdentityUserClaimGetListResponses = {
  "200": IdentityUserClaimGetListStatus200;
  "400": IdentityUserClaimGetListStatus400;
  "401": IdentityUserClaimGetListStatus401;
  "403": IdentityUserClaimGetListStatus403;
  "404": IdentityUserClaimGetListStatus404;
  "500": IdentityUserClaimGetListStatus500;
  "501": IdentityUserClaimGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type IdentityUserClaimGetListResponse =
  | IdentityUserClaimGetListStatus200
  | IdentityUserClaimGetListStatus400
  | IdentityUserClaimGetListStatus401
  | IdentityUserClaimGetListStatus403
  | IdentityUserClaimGetListStatus404
  | IdentityUserClaimGetListStatus500
  | IdentityUserClaimGetListStatus501;
