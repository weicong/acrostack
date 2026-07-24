/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type IdentityUserClaimDeletePathId = string;

/**
 * @type any
 */
export type IdentityUserClaimDeleteStatus200 = any;

/**
 * @type any
 */
export type IdentityUserClaimDeleteStatus204 = any;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus400 =
  | IdentityUserClaimDeleteStatus400Plain
  | IdentityUserClaimDeleteStatus400Json
  | IdentityUserClaimDeleteStatus400Json2;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus401 =
  | IdentityUserClaimDeleteStatus401Plain
  | IdentityUserClaimDeleteStatus401Json
  | IdentityUserClaimDeleteStatus401Json2;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus403 =
  | IdentityUserClaimDeleteStatus403Plain
  | IdentityUserClaimDeleteStatus403Json
  | IdentityUserClaimDeleteStatus403Json2;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus404 =
  | IdentityUserClaimDeleteStatus404Plain
  | IdentityUserClaimDeleteStatus404Json
  | IdentityUserClaimDeleteStatus404Json2;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus500 =
  | IdentityUserClaimDeleteStatus500Plain
  | IdentityUserClaimDeleteStatus500Json
  | IdentityUserClaimDeleteStatus500Json2;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityUserClaimDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus501 =
  | IdentityUserClaimDeleteStatus501Plain
  | IdentityUserClaimDeleteStatus501Json
  | IdentityUserClaimDeleteStatus501Json2;

/**
 * @type object
 */
export type IdentityUserClaimDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: IdentityUserClaimDeletePathId;
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
export type IdentityUserClaimDeleteResponses = {
  "200": IdentityUserClaimDeleteStatus200;
  "204": IdentityUserClaimDeleteStatus204;
  "400": IdentityUserClaimDeleteStatus400;
  "401": IdentityUserClaimDeleteStatus401;
  "403": IdentityUserClaimDeleteStatus403;
  "404": IdentityUserClaimDeleteStatus404;
  "500": IdentityUserClaimDeleteStatus500;
  "501": IdentityUserClaimDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type IdentityUserClaimDeleteResponse =
  | IdentityUserClaimDeleteStatus200
  | IdentityUserClaimDeleteStatus204
  | IdentityUserClaimDeleteStatus400
  | IdentityUserClaimDeleteStatus401
  | IdentityUserClaimDeleteStatus403
  | IdentityUserClaimDeleteStatus404
  | IdentityUserClaimDeleteStatus500
  | IdentityUserClaimDeleteStatus501;
