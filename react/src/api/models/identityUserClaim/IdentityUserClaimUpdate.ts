/* oxlint-disable */

import type { AcroStackServicesDtosIdentityClaimsIdentityClaimDto } from "../acroStack/services/dtos/identityClaims/IdentityClaimDto.ts";
import type { AcroStackServicesDtosIdentityClaimsUpdateIdentityClaimDto } from "../acroStack/services/dtos/identityClaims/UpdateIdentityClaimDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type IdentityUserClaimUpdatePathId = string;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus200Plain =
  AcroStackServicesDtosIdentityClaimsIdentityClaimDto;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus200Json =
  AcroStackServicesDtosIdentityClaimsIdentityClaimDto;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus200Json2 =
  AcroStackServicesDtosIdentityClaimsIdentityClaimDto;

export type IdentityUserClaimUpdateStatus200 =
  | IdentityUserClaimUpdateStatus200Plain
  | IdentityUserClaimUpdateStatus200Json
  | IdentityUserClaimUpdateStatus200Json2;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus400 =
  | IdentityUserClaimUpdateStatus400Plain
  | IdentityUserClaimUpdateStatus400Json
  | IdentityUserClaimUpdateStatus400Json2;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus401 =
  | IdentityUserClaimUpdateStatus401Plain
  | IdentityUserClaimUpdateStatus401Json
  | IdentityUserClaimUpdateStatus401Json2;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus403 =
  | IdentityUserClaimUpdateStatus403Plain
  | IdentityUserClaimUpdateStatus403Json
  | IdentityUserClaimUpdateStatus403Json2;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus404 =
  | IdentityUserClaimUpdateStatus404Plain
  | IdentityUserClaimUpdateStatus404Json
  | IdentityUserClaimUpdateStatus404Json2;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus500 =
  | IdentityUserClaimUpdateStatus500Plain
  | IdentityUserClaimUpdateStatus500Json
  | IdentityUserClaimUpdateStatus500Json2;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus501 =
  | IdentityUserClaimUpdateStatus501Plain
  | IdentityUserClaimUpdateStatus501Json
  | IdentityUserClaimUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type IdentityUserClaimUpdateJsonData =
  | AcroStackServicesDtosIdentityClaimsUpdateIdentityClaimDto
  | undefined;

/**
 * @type object | undefined
 */
export type IdentityUserClaimUpdateJson2Data =
  | AcroStackServicesDtosIdentityClaimsUpdateIdentityClaimDto
  | undefined;

/**
 * @type object | undefined
 */
export type IdentityUserClaimUpdateJson3Data =
  | AcroStackServicesDtosIdentityClaimsUpdateIdentityClaimDto
  | undefined;

export type IdentityUserClaimUpdateData =
  | IdentityUserClaimUpdateJsonData
  | IdentityUserClaimUpdateJson2Data
  | IdentityUserClaimUpdateJson3Data;

/**
 * @type object
 */
export type IdentityUserClaimUpdateRequestConfig = {
  data?: IdentityUserClaimUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: IdentityUserClaimUpdatePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/identity-user-claim/${string}`;
};

/**
 * @type object
 */
export type IdentityUserClaimUpdateResponses = {
  "200": IdentityUserClaimUpdateStatus200;
  "400": IdentityUserClaimUpdateStatus400;
  "401": IdentityUserClaimUpdateStatus401;
  "403": IdentityUserClaimUpdateStatus403;
  "404": IdentityUserClaimUpdateStatus404;
  "500": IdentityUserClaimUpdateStatus500;
  "501": IdentityUserClaimUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type IdentityUserClaimUpdateResponse =
  | IdentityUserClaimUpdateStatus200
  | IdentityUserClaimUpdateStatus400
  | IdentityUserClaimUpdateStatus401
  | IdentityUserClaimUpdateStatus403
  | IdentityUserClaimUpdateStatus404
  | IdentityUserClaimUpdateStatus500
  | IdentityUserClaimUpdateStatus501;
