/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpIdentityIdentityUserCreateDto } from "../volo/abp/identity/IdentityUserCreateDto.ts";
import type { VoloAbpIdentityIdentityUserDto } from "../volo/abp/identity/IdentityUserDto.ts";

/**
 * @type object
 */
export type UserCreateStatus200Plain = VoloAbpIdentityIdentityUserDto;

/**
 * @type object
 */
export type UserCreateStatus200Json = VoloAbpIdentityIdentityUserDto;

/**
 * @type object
 */
export type UserCreateStatus200Json2 = VoloAbpIdentityIdentityUserDto;

export type UserCreateStatus200 =
  | UserCreateStatus200Plain
  | UserCreateStatus200Json
  | UserCreateStatus200Json2;

/**
 * @type object
 */
export type UserCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus400 =
  | UserCreateStatus400Plain
  | UserCreateStatus400Json
  | UserCreateStatus400Json2;

/**
 * @type object
 */
export type UserCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus401 =
  | UserCreateStatus401Plain
  | UserCreateStatus401Json
  | UserCreateStatus401Json2;

/**
 * @type object
 */
export type UserCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus403 =
  | UserCreateStatus403Plain
  | UserCreateStatus403Json
  | UserCreateStatus403Json2;

/**
 * @type object
 */
export type UserCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus404 =
  | UserCreateStatus404Plain
  | UserCreateStatus404Json
  | UserCreateStatus404Json2;

/**
 * @type object
 */
export type UserCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus500 =
  | UserCreateStatus500Plain
  | UserCreateStatus500Json
  | UserCreateStatus500Json2;

/**
 * @type object
 */
export type UserCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus501 =
  | UserCreateStatus501Plain
  | UserCreateStatus501Json
  | UserCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type UserCreateJsonData =
  | Omit<NonNullable<VoloAbpIdentityIdentityUserCreateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type UserCreateJson2Data =
  | Omit<NonNullable<VoloAbpIdentityIdentityUserCreateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type UserCreateJson3Data =
  | Omit<NonNullable<VoloAbpIdentityIdentityUserCreateDto>, "extraProperties">
  | undefined;

export type UserCreateData = UserCreateJsonData | UserCreateJson2Data | UserCreateJson3Data;

/**
 * @type object
 */
export type UserCreateRequestConfig = {
  data?: UserCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/identity/users";
};

/**
 * @type object
 */
export type UserCreateResponses = {
  "200": UserCreateStatus200;
  "400": UserCreateStatus400;
  "401": UserCreateStatus401;
  "403": UserCreateStatus403;
  "404": UserCreateStatus404;
  "500": UserCreateStatus500;
  "501": UserCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type UserCreateResponse =
  | UserCreateStatus200
  | UserCreateStatus400
  | UserCreateStatus401
  | UserCreateStatus403
  | UserCreateStatus404
  | UserCreateStatus500
  | UserCreateStatus501;
