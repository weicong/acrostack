/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type IdentityRoleClaimDeletePathId = string;

/**
 * @type any
 */
export type IdentityRoleClaimDeleteStatus200 = any;

/**
 * @type any
 */
export type IdentityRoleClaimDeleteStatus204 = any;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus400 =
  | IdentityRoleClaimDeleteStatus400Plain
  | IdentityRoleClaimDeleteStatus400Json
  | IdentityRoleClaimDeleteStatus400Json2;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus401 =
  | IdentityRoleClaimDeleteStatus401Plain
  | IdentityRoleClaimDeleteStatus401Json
  | IdentityRoleClaimDeleteStatus401Json2;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus403 =
  | IdentityRoleClaimDeleteStatus403Plain
  | IdentityRoleClaimDeleteStatus403Json
  | IdentityRoleClaimDeleteStatus403Json2;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus404 =
  | IdentityRoleClaimDeleteStatus404Plain
  | IdentityRoleClaimDeleteStatus404Json
  | IdentityRoleClaimDeleteStatus404Json2;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus500 =
  | IdentityRoleClaimDeleteStatus500Plain
  | IdentityRoleClaimDeleteStatus500Json
  | IdentityRoleClaimDeleteStatus500Json2;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus501 =
  | IdentityRoleClaimDeleteStatus501Plain
  | IdentityRoleClaimDeleteStatus501Json
  | IdentityRoleClaimDeleteStatus501Json2;

/**
 * @type object
 */
export type IdentityRoleClaimDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: IdentityRoleClaimDeletePathId;
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
export type IdentityRoleClaimDeleteResponses = {
  "200": IdentityRoleClaimDeleteStatus200;
  "204": IdentityRoleClaimDeleteStatus204;
  "400": IdentityRoleClaimDeleteStatus400;
  "401": IdentityRoleClaimDeleteStatus401;
  "403": IdentityRoleClaimDeleteStatus403;
  "404": IdentityRoleClaimDeleteStatus404;
  "500": IdentityRoleClaimDeleteStatus500;
  "501": IdentityRoleClaimDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type IdentityRoleClaimDeleteResponse =
  | IdentityRoleClaimDeleteStatus200
  | IdentityRoleClaimDeleteStatus204
  | IdentityRoleClaimDeleteStatus400
  | IdentityRoleClaimDeleteStatus401
  | IdentityRoleClaimDeleteStatus403
  | IdentityRoleClaimDeleteStatus404
  | IdentityRoleClaimDeleteStatus500
  | IdentityRoleClaimDeleteStatus501;
