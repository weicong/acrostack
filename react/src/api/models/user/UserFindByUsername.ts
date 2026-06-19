/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpIdentityIdentityUserDto } from "../volo/abp/identity/IdentityUserDto.ts";

/**
 * @type string
 */
export type UserFindByUsernamePathUserName = string;

/**
 * @type object
 */
export type UserFindByUsernameStatus200Plain = VoloAbpIdentityIdentityUserDto;

/**
 * @type object
 */
export type UserFindByUsernameStatus200Json = VoloAbpIdentityIdentityUserDto;

/**
 * @type object
 */
export type UserFindByUsernameStatus200Json2 = VoloAbpIdentityIdentityUserDto;

export type UserFindByUsernameStatus200 =
  | UserFindByUsernameStatus200Plain
  | UserFindByUsernameStatus200Json
  | UserFindByUsernameStatus200Json2;

/**
 * @type object
 */
export type UserFindByUsernameStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByUsernameStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByUsernameStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus400 =
  | UserFindByUsernameStatus400Plain
  | UserFindByUsernameStatus400Json
  | UserFindByUsernameStatus400Json2;

/**
 * @type object
 */
export type UserFindByUsernameStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByUsernameStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByUsernameStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus401 =
  | UserFindByUsernameStatus401Plain
  | UserFindByUsernameStatus401Json
  | UserFindByUsernameStatus401Json2;

/**
 * @type object
 */
export type UserFindByUsernameStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByUsernameStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByUsernameStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus403 =
  | UserFindByUsernameStatus403Plain
  | UserFindByUsernameStatus403Json
  | UserFindByUsernameStatus403Json2;

/**
 * @type object
 */
export type UserFindByUsernameStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByUsernameStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByUsernameStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus404 =
  | UserFindByUsernameStatus404Plain
  | UserFindByUsernameStatus404Json
  | UserFindByUsernameStatus404Json2;

/**
 * @type object
 */
export type UserFindByUsernameStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByUsernameStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByUsernameStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus500 =
  | UserFindByUsernameStatus500Plain
  | UserFindByUsernameStatus500Json
  | UserFindByUsernameStatus500Json2;

/**
 * @type object
 */
export type UserFindByUsernameStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByUsernameStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByUsernameStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus501 =
  | UserFindByUsernameStatus501Plain
  | UserFindByUsernameStatus501Json
  | UserFindByUsernameStatus501Json2;

/**
 * @type object
 */
export type UserFindByUsernameRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    userName: UserFindByUsernamePathUserName;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/identity/users/by-username/${string}`;
};

/**
 * @type object
 */
export type UserFindByUsernameResponses = {
  "200": UserFindByUsernameStatus200;
  "400": UserFindByUsernameStatus400;
  "401": UserFindByUsernameStatus401;
  "403": UserFindByUsernameStatus403;
  "404": UserFindByUsernameStatus404;
  "500": UserFindByUsernameStatus500;
  "501": UserFindByUsernameStatus501;
};

/**
 * @description Union of all possible responses
 */
export type UserFindByUsernameResponse =
  | UserFindByUsernameStatus200
  | UserFindByUsernameStatus400
  | UserFindByUsernameStatus401
  | UserFindByUsernameStatus403
  | UserFindByUsernameStatus404
  | UserFindByUsernameStatus500
  | UserFindByUsernameStatus501;
