/* oxlint-disable */

import type { VoloAbpAccountResetPasswordDto } from "../volo/abp/account/ResetPasswordDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type any
 */
export type AccountResetPasswordStatus200 = any;

/**
 * @type any
 */
export type AccountResetPasswordStatus204 = any;

/**
 * @type object
 */
export type AccountResetPasswordStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountResetPasswordStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountResetPasswordStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus400 =
  | AccountResetPasswordStatus400Plain
  | AccountResetPasswordStatus400Json
  | AccountResetPasswordStatus400Json2;

/**
 * @type object
 */
export type AccountResetPasswordStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountResetPasswordStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountResetPasswordStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus401 =
  | AccountResetPasswordStatus401Plain
  | AccountResetPasswordStatus401Json
  | AccountResetPasswordStatus401Json2;

/**
 * @type object
 */
export type AccountResetPasswordStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountResetPasswordStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountResetPasswordStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus403 =
  | AccountResetPasswordStatus403Plain
  | AccountResetPasswordStatus403Json
  | AccountResetPasswordStatus403Json2;

/**
 * @type object
 */
export type AccountResetPasswordStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountResetPasswordStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountResetPasswordStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus404 =
  | AccountResetPasswordStatus404Plain
  | AccountResetPasswordStatus404Json
  | AccountResetPasswordStatus404Json2;

/**
 * @type object
 */
export type AccountResetPasswordStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountResetPasswordStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountResetPasswordStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus500 =
  | AccountResetPasswordStatus500Plain
  | AccountResetPasswordStatus500Json
  | AccountResetPasswordStatus500Json2;

/**
 * @type object
 */
export type AccountResetPasswordStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountResetPasswordStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountResetPasswordStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus501 =
  | AccountResetPasswordStatus501Plain
  | AccountResetPasswordStatus501Json
  | AccountResetPasswordStatus501Json2;

/**
 * @type object | undefined
 */
export type AccountResetPasswordJsonData = VoloAbpAccountResetPasswordDto | undefined;

/**
 * @type object | undefined
 */
export type AccountResetPasswordJson2Data = VoloAbpAccountResetPasswordDto | undefined;

/**
 * @type object | undefined
 */
export type AccountResetPasswordJson3Data = VoloAbpAccountResetPasswordDto | undefined;

export type AccountResetPasswordData =
  | AccountResetPasswordJsonData
  | AccountResetPasswordJson2Data
  | AccountResetPasswordJson3Data;

/**
 * @type object
 */
export type AccountResetPasswordRequestConfig = {
  data?: AccountResetPasswordData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/account/reset-password";
};

/**
 * @type object
 */
export type AccountResetPasswordResponses = {
  "200": AccountResetPasswordStatus200;
  "204": AccountResetPasswordStatus204;
  "400": AccountResetPasswordStatus400;
  "401": AccountResetPasswordStatus401;
  "403": AccountResetPasswordStatus403;
  "404": AccountResetPasswordStatus404;
  "500": AccountResetPasswordStatus500;
  "501": AccountResetPasswordStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AccountResetPasswordResponse =
  | AccountResetPasswordStatus200
  | AccountResetPasswordStatus204
  | AccountResetPasswordStatus400
  | AccountResetPasswordStatus401
  | AccountResetPasswordStatus403
  | AccountResetPasswordStatus404
  | AccountResetPasswordStatus500
  | AccountResetPasswordStatus501;
