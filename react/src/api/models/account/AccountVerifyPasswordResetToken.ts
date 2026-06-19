/* oxlint-disable */

import type { VoloAbpAccountVerifyPasswordResetTokenInput } from "../volo/abp/account/VerifyPasswordResetTokenInput.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type boolean
 */
export type AccountVerifyPasswordResetTokenStatus200Plain = boolean;

/**
 * @type boolean
 */
export type AccountVerifyPasswordResetTokenStatus200Json = boolean;

/**
 * @type boolean
 */
export type AccountVerifyPasswordResetTokenStatus200Json2 = boolean;

export type AccountVerifyPasswordResetTokenStatus200 =
  | AccountVerifyPasswordResetTokenStatus200Plain
  | AccountVerifyPasswordResetTokenStatus200Json
  | AccountVerifyPasswordResetTokenStatus200Json2;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus400 =
  | AccountVerifyPasswordResetTokenStatus400Plain
  | AccountVerifyPasswordResetTokenStatus400Json
  | AccountVerifyPasswordResetTokenStatus400Json2;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus401 =
  | AccountVerifyPasswordResetTokenStatus401Plain
  | AccountVerifyPasswordResetTokenStatus401Json
  | AccountVerifyPasswordResetTokenStatus401Json2;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus403 =
  | AccountVerifyPasswordResetTokenStatus403Plain
  | AccountVerifyPasswordResetTokenStatus403Json
  | AccountVerifyPasswordResetTokenStatus403Json2;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus404 =
  | AccountVerifyPasswordResetTokenStatus404Plain
  | AccountVerifyPasswordResetTokenStatus404Json
  | AccountVerifyPasswordResetTokenStatus404Json2;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus500 =
  | AccountVerifyPasswordResetTokenStatus500Plain
  | AccountVerifyPasswordResetTokenStatus500Json
  | AccountVerifyPasswordResetTokenStatus500Json2;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus501 =
  | AccountVerifyPasswordResetTokenStatus501Plain
  | AccountVerifyPasswordResetTokenStatus501Json
  | AccountVerifyPasswordResetTokenStatus501Json2;

/**
 * @type object | undefined
 */
export type AccountVerifyPasswordResetTokenJsonData =
  | VoloAbpAccountVerifyPasswordResetTokenInput
  | undefined;

/**
 * @type object | undefined
 */
export type AccountVerifyPasswordResetTokenJson2Data =
  | VoloAbpAccountVerifyPasswordResetTokenInput
  | undefined;

/**
 * @type object | undefined
 */
export type AccountVerifyPasswordResetTokenJson3Data =
  | VoloAbpAccountVerifyPasswordResetTokenInput
  | undefined;

export type AccountVerifyPasswordResetTokenData =
  | AccountVerifyPasswordResetTokenJsonData
  | AccountVerifyPasswordResetTokenJson2Data
  | AccountVerifyPasswordResetTokenJson3Data;

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenRequestConfig = {
  data?: AccountVerifyPasswordResetTokenData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/account/verify-password-reset-token";
};

/**
 * @type object
 */
export type AccountVerifyPasswordResetTokenResponses = {
  "200": AccountVerifyPasswordResetTokenStatus200;
  "400": AccountVerifyPasswordResetTokenStatus400;
  "401": AccountVerifyPasswordResetTokenStatus401;
  "403": AccountVerifyPasswordResetTokenStatus403;
  "404": AccountVerifyPasswordResetTokenStatus404;
  "500": AccountVerifyPasswordResetTokenStatus500;
  "501": AccountVerifyPasswordResetTokenStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AccountVerifyPasswordResetTokenResponse =
  | AccountVerifyPasswordResetTokenStatus200
  | AccountVerifyPasswordResetTokenStatus400
  | AccountVerifyPasswordResetTokenStatus401
  | AccountVerifyPasswordResetTokenStatus403
  | AccountVerifyPasswordResetTokenStatus404
  | AccountVerifyPasswordResetTokenStatus500
  | AccountVerifyPasswordResetTokenStatus501;
