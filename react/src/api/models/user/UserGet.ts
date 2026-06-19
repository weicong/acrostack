/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpIdentityIdentityUserDto } from "../volo/abp/identity/IdentityUserDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type UserGetPathId = string;

/**
 * @type object
 */
export type UserGetStatus200Plain = VoloAbpIdentityIdentityUserDto;

/**
 * @type object
 */
export type UserGetStatus200Json = VoloAbpIdentityIdentityUserDto;

/**
 * @type object
 */
export type UserGetStatus200Json2 = VoloAbpIdentityIdentityUserDto;

export type UserGetStatus200 = UserGetStatus200Plain | UserGetStatus200Json | UserGetStatus200Json2;

/**
 * @type object
 */
export type UserGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus400 = UserGetStatus400Plain | UserGetStatus400Json | UserGetStatus400Json2;

/**
 * @type object
 */
export type UserGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus401 = UserGetStatus401Plain | UserGetStatus401Json | UserGetStatus401Json2;

/**
 * @type object
 */
export type UserGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus403 = UserGetStatus403Plain | UserGetStatus403Json | UserGetStatus403Json2;

/**
 * @type object
 */
export type UserGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus404 = UserGetStatus404Plain | UserGetStatus404Json | UserGetStatus404Json2;

/**
 * @type object
 */
export type UserGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus500 = UserGetStatus500Plain | UserGetStatus500Json | UserGetStatus500Json2;

/**
 * @type object
 */
export type UserGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus501 = UserGetStatus501Plain | UserGetStatus501Json | UserGetStatus501Json2;

/**
 * @type object
 */
export type UserGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: UserGetPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/identity/users/${string}`;
};

/**
 * @type object
 */
export type UserGetResponses = {
  "200": UserGetStatus200;
  "400": UserGetStatus400;
  "401": UserGetStatus401;
  "403": UserGetStatus403;
  "404": UserGetStatus404;
  "500": UserGetStatus500;
  "501": UserGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type UserGetResponse =
  | UserGetStatus200
  | UserGetStatus400
  | UserGetStatus401
  | UserGetStatus403
  | UserGetStatus404
  | UserGetStatus500
  | UserGetStatus501;
