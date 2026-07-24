/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpIdentityIdentityUserDto } from "../volo/abp/identity/IdentityUserDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type UserFindByIdPathId = string;

/**
 * @type object
 */
export type UserFindByIdStatus200Plain = VoloAbpIdentityIdentityUserDto;

/**
 * @type object
 */
export type UserFindByIdStatus200Json = VoloAbpIdentityIdentityUserDto;

/**
 * @type object
 */
export type UserFindByIdStatus200Json2 = VoloAbpIdentityIdentityUserDto;

export type UserFindByIdStatus200 =
  | UserFindByIdStatus200Plain
  | UserFindByIdStatus200Json
  | UserFindByIdStatus200Json2;

/**
 * @type object
 */
export type UserFindByIdStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByIdStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByIdStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus400 =
  | UserFindByIdStatus400Plain
  | UserFindByIdStatus400Json
  | UserFindByIdStatus400Json2;

/**
 * @type object
 */
export type UserFindByIdStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByIdStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByIdStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus401 =
  | UserFindByIdStatus401Plain
  | UserFindByIdStatus401Json
  | UserFindByIdStatus401Json2;

/**
 * @type object
 */
export type UserFindByIdStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByIdStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByIdStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus403 =
  | UserFindByIdStatus403Plain
  | UserFindByIdStatus403Json
  | UserFindByIdStatus403Json2;

/**
 * @type object
 */
export type UserFindByIdStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByIdStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByIdStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus404 =
  | UserFindByIdStatus404Plain
  | UserFindByIdStatus404Json
  | UserFindByIdStatus404Json2;

/**
 * @type object
 */
export type UserFindByIdStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByIdStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByIdStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus500 =
  | UserFindByIdStatus500Plain
  | UserFindByIdStatus500Json
  | UserFindByIdStatus500Json2;

/**
 * @type object
 */
export type UserFindByIdStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByIdStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserFindByIdStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus501 =
  | UserFindByIdStatus501Plain
  | UserFindByIdStatus501Json
  | UserFindByIdStatus501Json2;

/**
 * @type object
 */
export type UserFindByIdRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: UserFindByIdPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/identity/users/by-id/${string}`;
};

/**
 * @type object
 */
export type UserFindByIdResponses = {
  "200": UserFindByIdStatus200;
  "400": UserFindByIdStatus400;
  "401": UserFindByIdStatus401;
  "403": UserFindByIdStatus403;
  "404": UserFindByIdStatus404;
  "500": UserFindByIdStatus500;
  "501": UserFindByIdStatus501;
};

/**
 * @description Union of all possible responses
 */
export type UserFindByIdResponse =
  | UserFindByIdStatus200
  | UserFindByIdStatus400
  | UserFindByIdStatus401
  | UserFindByIdStatus403
  | UserFindByIdStatus404
  | UserFindByIdStatus500
  | UserFindByIdStatus501;
