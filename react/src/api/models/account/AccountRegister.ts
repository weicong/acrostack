/* oxlint-disable */

import type { VoloAbpAccountRegisterDto } from "../volo/abp/account/RegisterDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpIdentityIdentityUserDto } from "../volo/abp/identity/IdentityUserDto.ts";

/**
 * @type object
 */
export type AccountRegisterStatus200Plain = VoloAbpIdentityIdentityUserDto;

/**
 * @type object
 */
export type AccountRegisterStatus200Json = VoloAbpIdentityIdentityUserDto;

/**
 * @type object
 */
export type AccountRegisterStatus200Json2 = VoloAbpIdentityIdentityUserDto;

export type AccountRegisterStatus200 =
  | AccountRegisterStatus200Plain
  | AccountRegisterStatus200Json
  | AccountRegisterStatus200Json2;

/**
 * @type object
 */
export type AccountRegisterStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountRegisterStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountRegisterStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus400 =
  | AccountRegisterStatus400Plain
  | AccountRegisterStatus400Json
  | AccountRegisterStatus400Json2;

/**
 * @type object
 */
export type AccountRegisterStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountRegisterStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountRegisterStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus401 =
  | AccountRegisterStatus401Plain
  | AccountRegisterStatus401Json
  | AccountRegisterStatus401Json2;

/**
 * @type object
 */
export type AccountRegisterStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountRegisterStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountRegisterStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus403 =
  | AccountRegisterStatus403Plain
  | AccountRegisterStatus403Json
  | AccountRegisterStatus403Json2;

/**
 * @type object
 */
export type AccountRegisterStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountRegisterStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountRegisterStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus404 =
  | AccountRegisterStatus404Plain
  | AccountRegisterStatus404Json
  | AccountRegisterStatus404Json2;

/**
 * @type object
 */
export type AccountRegisterStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountRegisterStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountRegisterStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus500 =
  | AccountRegisterStatus500Plain
  | AccountRegisterStatus500Json
  | AccountRegisterStatus500Json2;

/**
 * @type object
 */
export type AccountRegisterStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountRegisterStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountRegisterStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus501 =
  | AccountRegisterStatus501Plain
  | AccountRegisterStatus501Json
  | AccountRegisterStatus501Json2;

/**
 * @type object | undefined
 */
export type AccountRegisterJsonData =
  | Omit<NonNullable<VoloAbpAccountRegisterDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type AccountRegisterJson2Data =
  | Omit<NonNullable<VoloAbpAccountRegisterDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type AccountRegisterJson3Data =
  | Omit<NonNullable<VoloAbpAccountRegisterDto>, "extraProperties">
  | undefined;

export type AccountRegisterData =
  | AccountRegisterJsonData
  | AccountRegisterJson2Data
  | AccountRegisterJson3Data;

/**
 * @type object
 */
export type AccountRegisterRequestConfig = {
  data?: AccountRegisterData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/account/register";
};

/**
 * @type object
 */
export type AccountRegisterResponses = {
  "200": AccountRegisterStatus200;
  "400": AccountRegisterStatus400;
  "401": AccountRegisterStatus401;
  "403": AccountRegisterStatus403;
  "404": AccountRegisterStatus404;
  "500": AccountRegisterStatus500;
  "501": AccountRegisterStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AccountRegisterResponse =
  | AccountRegisterStatus200
  | AccountRegisterStatus400
  | AccountRegisterStatus401
  | AccountRegisterStatus403
  | AccountRegisterStatus404
  | AccountRegisterStatus500
  | AccountRegisterStatus501;
