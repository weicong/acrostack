/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackIdentityClaimsIdentityClaimTypeDtoAcroStackIdentityClaimsVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/identityClaims/identityClaimTypeDtoAcroStack/IdentityClaimsVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type IdentityClaimTypeGetListQueryName = string | undefined;

/**
 * @type string | undefined
 */
export type IdentityClaimTypeGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type IdentityClaimTypeGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type IdentityClaimTypeGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackIdentityClaimsIdentityClaimTypeDtoAcroStackIdentityClaimsVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackIdentityClaimsIdentityClaimTypeDtoAcroStackIdentityClaimsVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackIdentityClaimsIdentityClaimTypeDtoAcroStackIdentityClaimsVersion1000CultureneutralPublicKeyTokennull;

export type IdentityClaimTypeGetListStatus200 =
  | IdentityClaimTypeGetListStatus200Plain
  | IdentityClaimTypeGetListStatus200Json
  | IdentityClaimTypeGetListStatus200Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus400 =
  | IdentityClaimTypeGetListStatus400Plain
  | IdentityClaimTypeGetListStatus400Json
  | IdentityClaimTypeGetListStatus400Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus401 =
  | IdentityClaimTypeGetListStatus401Plain
  | IdentityClaimTypeGetListStatus401Json
  | IdentityClaimTypeGetListStatus401Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus403 =
  | IdentityClaimTypeGetListStatus403Plain
  | IdentityClaimTypeGetListStatus403Json
  | IdentityClaimTypeGetListStatus403Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus404 =
  | IdentityClaimTypeGetListStatus404Plain
  | IdentityClaimTypeGetListStatus404Json
  | IdentityClaimTypeGetListStatus404Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus500 =
  | IdentityClaimTypeGetListStatus500Plain
  | IdentityClaimTypeGetListStatus500Json
  | IdentityClaimTypeGetListStatus500Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus501 =
  | IdentityClaimTypeGetListStatus501Plain
  | IdentityClaimTypeGetListStatus501Json
  | IdentityClaimTypeGetListStatus501Json2;

/**
 * @type object
 */
export type IdentityClaimTypeGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Name?: IdentityClaimTypeGetListQueryName;
    Sorting?: IdentityClaimTypeGetListQuerySorting;
    SkipCount?: IdentityClaimTypeGetListQuerySkipCount;
    MaxResultCount?: IdentityClaimTypeGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/identity-claim-type";
};

/**
 * @type object
 */
export type IdentityClaimTypeGetListResponses = {
  "200": IdentityClaimTypeGetListStatus200;
  "400": IdentityClaimTypeGetListStatus400;
  "401": IdentityClaimTypeGetListStatus401;
  "403": IdentityClaimTypeGetListStatus403;
  "404": IdentityClaimTypeGetListStatus404;
  "500": IdentityClaimTypeGetListStatus500;
  "501": IdentityClaimTypeGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type IdentityClaimTypeGetListResponse =
  | IdentityClaimTypeGetListStatus200
  | IdentityClaimTypeGetListStatus400
  | IdentityClaimTypeGetListStatus401
  | IdentityClaimTypeGetListStatus403
  | IdentityClaimTypeGetListStatus404
  | IdentityClaimTypeGetListStatus500
  | IdentityClaimTypeGetListStatus501;
