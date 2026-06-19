/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpIdentityIdentityUserDto } from "../volo/abp/identity/IdentityUserDto.ts";
import type { VoloAbpIdentityIdentityUserUpdateDto } from "../volo/abp/identity/IdentityUserUpdateDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type UserUpdatePathId = string;

/**
 * @type object
 */
export type UserUpdateStatus200Plain = VoloAbpIdentityIdentityUserDto;

/**
 * @type object
 */
export type UserUpdateStatus200Json = VoloAbpIdentityIdentityUserDto;

/**
 * @type object
 */
export type UserUpdateStatus200Json2 = VoloAbpIdentityIdentityUserDto;

export type UserUpdateStatus200 =
  | UserUpdateStatus200Plain
  | UserUpdateStatus200Json
  | UserUpdateStatus200Json2;

/**
 * @type object
 */
export type UserUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus400 =
  | UserUpdateStatus400Plain
  | UserUpdateStatus400Json
  | UserUpdateStatus400Json2;

/**
 * @type object
 */
export type UserUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus401 =
  | UserUpdateStatus401Plain
  | UserUpdateStatus401Json
  | UserUpdateStatus401Json2;

/**
 * @type object
 */
export type UserUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus403 =
  | UserUpdateStatus403Plain
  | UserUpdateStatus403Json
  | UserUpdateStatus403Json2;

/**
 * @type object
 */
export type UserUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus404 =
  | UserUpdateStatus404Plain
  | UserUpdateStatus404Json
  | UserUpdateStatus404Json2;

/**
 * @type object
 */
export type UserUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus500 =
  | UserUpdateStatus500Plain
  | UserUpdateStatus500Json
  | UserUpdateStatus500Json2;

/**
 * @type object
 */
export type UserUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus501 =
  | UserUpdateStatus501Plain
  | UserUpdateStatus501Json
  | UserUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type UserUpdateJsonData =
  | Omit<NonNullable<VoloAbpIdentityIdentityUserUpdateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type UserUpdateJson2Data =
  | Omit<NonNullable<VoloAbpIdentityIdentityUserUpdateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type UserUpdateJson3Data =
  | Omit<NonNullable<VoloAbpIdentityIdentityUserUpdateDto>, "extraProperties">
  | undefined;

export type UserUpdateData = UserUpdateJsonData | UserUpdateJson2Data | UserUpdateJson3Data;

/**
 * @type object
 */
export type UserUpdateRequestConfig = {
  data?: UserUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: UserUpdatePathId;
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
export type UserUpdateResponses = {
  "200": UserUpdateStatus200;
  "400": UserUpdateStatus400;
  "401": UserUpdateStatus401;
  "403": UserUpdateStatus403;
  "404": UserUpdateStatus404;
  "500": UserUpdateStatus500;
  "501": UserUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type UserUpdateResponse =
  | UserUpdateStatus200
  | UserUpdateStatus400
  | UserUpdateStatus401
  | UserUpdateStatus403
  | UserUpdateStatus404
  | UserUpdateStatus500
  | UserUpdateStatus501;
