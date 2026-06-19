/* oxlint-disable */

import type { VoloAbpAccountSendPasswordResetCodeDto } from "../volo/abp/account/SendPasswordResetCodeDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type any
 */
export type AccountSendPasswordResetCodeStatus200 = any;

/**
 * @type any
 */
export type AccountSendPasswordResetCodeStatus204 = any;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus400 =
  | AccountSendPasswordResetCodeStatus400Plain
  | AccountSendPasswordResetCodeStatus400Json
  | AccountSendPasswordResetCodeStatus400Json2;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus401 =
  | AccountSendPasswordResetCodeStatus401Plain
  | AccountSendPasswordResetCodeStatus401Json
  | AccountSendPasswordResetCodeStatus401Json2;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus403 =
  | AccountSendPasswordResetCodeStatus403Plain
  | AccountSendPasswordResetCodeStatus403Json
  | AccountSendPasswordResetCodeStatus403Json2;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus404 =
  | AccountSendPasswordResetCodeStatus404Plain
  | AccountSendPasswordResetCodeStatus404Json
  | AccountSendPasswordResetCodeStatus404Json2;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus500 =
  | AccountSendPasswordResetCodeStatus500Plain
  | AccountSendPasswordResetCodeStatus500Json
  | AccountSendPasswordResetCodeStatus500Json2;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus501 =
  | AccountSendPasswordResetCodeStatus501Plain
  | AccountSendPasswordResetCodeStatus501Json
  | AccountSendPasswordResetCodeStatus501Json2;

/**
 * @type object | undefined
 */
export type AccountSendPasswordResetCodeJsonData =
  | VoloAbpAccountSendPasswordResetCodeDto
  | undefined;

/**
 * @type object | undefined
 */
export type AccountSendPasswordResetCodeJson2Data =
  | VoloAbpAccountSendPasswordResetCodeDto
  | undefined;

/**
 * @type object | undefined
 */
export type AccountSendPasswordResetCodeJson3Data =
  | VoloAbpAccountSendPasswordResetCodeDto
  | undefined;

export type AccountSendPasswordResetCodeData =
  | AccountSendPasswordResetCodeJsonData
  | AccountSendPasswordResetCodeJson2Data
  | AccountSendPasswordResetCodeJson3Data;

/**
 * @type object
 */
export type AccountSendPasswordResetCodeRequestConfig = {
  data?: AccountSendPasswordResetCodeData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/account/send-password-reset-code";
};

/**
 * @type object
 */
export type AccountSendPasswordResetCodeResponses = {
  "200": AccountSendPasswordResetCodeStatus200;
  "204": AccountSendPasswordResetCodeStatus204;
  "400": AccountSendPasswordResetCodeStatus400;
  "401": AccountSendPasswordResetCodeStatus401;
  "403": AccountSendPasswordResetCodeStatus403;
  "404": AccountSendPasswordResetCodeStatus404;
  "500": AccountSendPasswordResetCodeStatus500;
  "501": AccountSendPasswordResetCodeStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AccountSendPasswordResetCodeResponse =
  | AccountSendPasswordResetCodeStatus200
  | AccountSendPasswordResetCodeStatus204
  | AccountSendPasswordResetCodeStatus400
  | AccountSendPasswordResetCodeStatus401
  | AccountSendPasswordResetCodeStatus403
  | AccountSendPasswordResetCodeStatus404
  | AccountSendPasswordResetCodeStatus500
  | AccountSendPasswordResetCodeStatus501;
