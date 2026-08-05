/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type IdentityClaimTypeDeletePathId = string;

/**
 * @type any
 */
export type IdentityClaimTypeDeleteStatus200 = any;

/**
 * @type any
 */
export type IdentityClaimTypeDeleteStatus204 = any;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus400 =
  | IdentityClaimTypeDeleteStatus400Plain
  | IdentityClaimTypeDeleteStatus400Json
  | IdentityClaimTypeDeleteStatus400Json2;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus401 =
  | IdentityClaimTypeDeleteStatus401Plain
  | IdentityClaimTypeDeleteStatus401Json
  | IdentityClaimTypeDeleteStatus401Json2;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus403 =
  | IdentityClaimTypeDeleteStatus403Plain
  | IdentityClaimTypeDeleteStatus403Json
  | IdentityClaimTypeDeleteStatus403Json2;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus404 =
  | IdentityClaimTypeDeleteStatus404Plain
  | IdentityClaimTypeDeleteStatus404Json
  | IdentityClaimTypeDeleteStatus404Json2;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus500 =
  | IdentityClaimTypeDeleteStatus500Plain
  | IdentityClaimTypeDeleteStatus500Json
  | IdentityClaimTypeDeleteStatus500Json2;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus501 =
  | IdentityClaimTypeDeleteStatus501Plain
  | IdentityClaimTypeDeleteStatus501Json
  | IdentityClaimTypeDeleteStatus501Json2;

/**
 * @type object
 */
export type IdentityClaimTypeDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: IdentityClaimTypeDeletePathId;
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
export type IdentityClaimTypeDeleteResponses = {
  "200": IdentityClaimTypeDeleteStatus200;
  "204": IdentityClaimTypeDeleteStatus204;
  "400": IdentityClaimTypeDeleteStatus400;
  "401": IdentityClaimTypeDeleteStatus401;
  "403": IdentityClaimTypeDeleteStatus403;
  "404": IdentityClaimTypeDeleteStatus404;
  "500": IdentityClaimTypeDeleteStatus500;
  "501": IdentityClaimTypeDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type IdentityClaimTypeDeleteResponse =
  | IdentityClaimTypeDeleteStatus200
  | IdentityClaimTypeDeleteStatus204
  | IdentityClaimTypeDeleteStatus400
  | IdentityClaimTypeDeleteStatus401
  | IdentityClaimTypeDeleteStatus403
  | IdentityClaimTypeDeleteStatus404
  | IdentityClaimTypeDeleteStatus500
  | IdentityClaimTypeDeleteStatus501;
