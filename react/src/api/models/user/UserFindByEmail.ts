/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpIdentityIdentityUserDto } from "../volo/abp/identity/IdentityUserDto.ts";

/**
 * @type string
 */
export type UserFindByEmailPathEmail = string;

/**
 * @type object
 */
export type UserFindByEmailStatus200Plain = VoloAbpIdentityIdentityUserDto;

/**
 * @type object
 */
export type UserFindByEmailStatus200Json = VoloAbpIdentityIdentityUserDto;

/**
 * @type object
 */
export type UserFindByEmailStatus200Json2 = VoloAbpIdentityIdentityUserDto;

export type UserFindByEmailStatus200 =
  | UserFindByEmailStatus200Plain
  | UserFindByEmailStatus200Json
  | UserFindByEmailStatus200Json2;

/**
 * @type object
 */
export type UserFindByEmailStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByEmailStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByEmailStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus400 =
  | UserFindByEmailStatus400Plain
  | UserFindByEmailStatus400Json
  | UserFindByEmailStatus400Json2;

/**
 * @type object
 */
export type UserFindByEmailStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByEmailStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByEmailStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus401 =
  | UserFindByEmailStatus401Plain
  | UserFindByEmailStatus401Json
  | UserFindByEmailStatus401Json2;

/**
 * @type object
 */
export type UserFindByEmailStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByEmailStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByEmailStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus403 =
  | UserFindByEmailStatus403Plain
  | UserFindByEmailStatus403Json
  | UserFindByEmailStatus403Json2;

/**
 * @type object
 */
export type UserFindByEmailStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByEmailStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByEmailStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus404 =
  | UserFindByEmailStatus404Plain
  | UserFindByEmailStatus404Json
  | UserFindByEmailStatus404Json2;

/**
 * @type object
 */
export type UserFindByEmailStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByEmailStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByEmailStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus500 =
  | UserFindByEmailStatus500Plain
  | UserFindByEmailStatus500Json
  | UserFindByEmailStatus500Json2;

/**
 * @type object
 */
export type UserFindByEmailStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByEmailStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByEmailStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus501 =
  | UserFindByEmailStatus501Plain
  | UserFindByEmailStatus501Json
  | UserFindByEmailStatus501Json2;

/**
 * @type object
 */
export type UserFindByEmailRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    email: UserFindByEmailPathEmail;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/identity/users/by-email/${string}`;
};

/**
 * @type object
 */
export type UserFindByEmailResponses = {
  "200": UserFindByEmailStatus200;
  "400": UserFindByEmailStatus400;
  "401": UserFindByEmailStatus401;
  "403": UserFindByEmailStatus403;
  "404": UserFindByEmailStatus404;
  "500": UserFindByEmailStatus500;
  "501": UserFindByEmailStatus501;
};

/**
 * @description Union of all possible responses
 */
export type UserFindByEmailResponse =
  | UserFindByEmailStatus200
  | UserFindByEmailStatus400
  | UserFindByEmailStatus401
  | UserFindByEmailStatus403
  | UserFindByEmailStatus404
  | UserFindByEmailStatus500
  | UserFindByEmailStatus501;
