/* oxlint-disable */

import type { AcroStackIdentityClaimsIdentityClaimDto } from "../acroStack/identityClaims/IdentityClaimDto.ts";
import type { AcroStackIdentityClaimsUpdateIdentityClaimDto } from "../acroStack/identityClaims/UpdateIdentityClaimDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type IdentityRoleClaimUpdatePathId = string;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus200Plain = AcroStackIdentityClaimsIdentityClaimDto;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus200Json = AcroStackIdentityClaimsIdentityClaimDto;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus200Json2 = AcroStackIdentityClaimsIdentityClaimDto;

export type IdentityRoleClaimUpdateStatus200 =
  | IdentityRoleClaimUpdateStatus200Plain
  | IdentityRoleClaimUpdateStatus200Json
  | IdentityRoleClaimUpdateStatus200Json2;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus400 =
  | IdentityRoleClaimUpdateStatus400Plain
  | IdentityRoleClaimUpdateStatus400Json
  | IdentityRoleClaimUpdateStatus400Json2;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus401 =
  | IdentityRoleClaimUpdateStatus401Plain
  | IdentityRoleClaimUpdateStatus401Json
  | IdentityRoleClaimUpdateStatus401Json2;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus403 =
  | IdentityRoleClaimUpdateStatus403Plain
  | IdentityRoleClaimUpdateStatus403Json
  | IdentityRoleClaimUpdateStatus403Json2;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus404 =
  | IdentityRoleClaimUpdateStatus404Plain
  | IdentityRoleClaimUpdateStatus404Json
  | IdentityRoleClaimUpdateStatus404Json2;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus500 =
  | IdentityRoleClaimUpdateStatus500Plain
  | IdentityRoleClaimUpdateStatus500Json
  | IdentityRoleClaimUpdateStatus500Json2;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus501 =
  | IdentityRoleClaimUpdateStatus501Plain
  | IdentityRoleClaimUpdateStatus501Json
  | IdentityRoleClaimUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type IdentityRoleClaimUpdateJsonData =
  | AcroStackIdentityClaimsUpdateIdentityClaimDto
  | undefined;

/**
 * @type object | undefined
 */
export type IdentityRoleClaimUpdateJson2Data =
  | AcroStackIdentityClaimsUpdateIdentityClaimDto
  | undefined;

/**
 * @type object | undefined
 */
export type IdentityRoleClaimUpdateJson3Data =
  | AcroStackIdentityClaimsUpdateIdentityClaimDto
  | undefined;

export type IdentityRoleClaimUpdateData =
  | IdentityRoleClaimUpdateJsonData
  | IdentityRoleClaimUpdateJson2Data
  | IdentityRoleClaimUpdateJson3Data;

/**
 * @type object
 */
export type IdentityRoleClaimUpdateRequestConfig = {
  data?: IdentityRoleClaimUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: IdentityRoleClaimUpdatePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/identity-role-claim/${string}`;
};

/**
 * @type object
 */
export type IdentityRoleClaimUpdateResponses = {
  "200": IdentityRoleClaimUpdateStatus200;
  "400": IdentityRoleClaimUpdateStatus400;
  "401": IdentityRoleClaimUpdateStatus401;
  "403": IdentityRoleClaimUpdateStatus403;
  "404": IdentityRoleClaimUpdateStatus404;
  "500": IdentityRoleClaimUpdateStatus500;
  "501": IdentityRoleClaimUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type IdentityRoleClaimUpdateResponse =
  | IdentityRoleClaimUpdateStatus200
  | IdentityRoleClaimUpdateStatus400
  | IdentityRoleClaimUpdateStatus401
  | IdentityRoleClaimUpdateStatus403
  | IdentityRoleClaimUpdateStatus404
  | IdentityRoleClaimUpdateStatus500
  | IdentityRoleClaimUpdateStatus501;
