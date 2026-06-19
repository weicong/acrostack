/* oxlint-disable */

import type { VoloAbpAccountChangePasswordInput } from "../volo/abp/account/ChangePasswordInput.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type any
 */
export type ProfileChangePasswordStatus200 = any;

/**
 * @type any
 */
export type ProfileChangePasswordStatus204 = any;

/**
 * @type object
 */
export type ProfileChangePasswordStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileChangePasswordStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileChangePasswordStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus400 =
  | ProfileChangePasswordStatus400Plain
  | ProfileChangePasswordStatus400Json
  | ProfileChangePasswordStatus400Json2;

/**
 * @type object
 */
export type ProfileChangePasswordStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileChangePasswordStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileChangePasswordStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus401 =
  | ProfileChangePasswordStatus401Plain
  | ProfileChangePasswordStatus401Json
  | ProfileChangePasswordStatus401Json2;

/**
 * @type object
 */
export type ProfileChangePasswordStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileChangePasswordStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileChangePasswordStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus403 =
  | ProfileChangePasswordStatus403Plain
  | ProfileChangePasswordStatus403Json
  | ProfileChangePasswordStatus403Json2;

/**
 * @type object
 */
export type ProfileChangePasswordStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileChangePasswordStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileChangePasswordStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus404 =
  | ProfileChangePasswordStatus404Plain
  | ProfileChangePasswordStatus404Json
  | ProfileChangePasswordStatus404Json2;

/**
 * @type object
 */
export type ProfileChangePasswordStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileChangePasswordStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileChangePasswordStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus500 =
  | ProfileChangePasswordStatus500Plain
  | ProfileChangePasswordStatus500Json
  | ProfileChangePasswordStatus500Json2;

/**
 * @type object
 */
export type ProfileChangePasswordStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileChangePasswordStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileChangePasswordStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus501 =
  | ProfileChangePasswordStatus501Plain
  | ProfileChangePasswordStatus501Json
  | ProfileChangePasswordStatus501Json2;

/**
 * @type object | undefined
 */
export type ProfileChangePasswordJsonData = VoloAbpAccountChangePasswordInput | undefined;

/**
 * @type object | undefined
 */
export type ProfileChangePasswordJson2Data = VoloAbpAccountChangePasswordInput | undefined;

/**
 * @type object | undefined
 */
export type ProfileChangePasswordJson3Data = VoloAbpAccountChangePasswordInput | undefined;

export type ProfileChangePasswordData =
  | ProfileChangePasswordJsonData
  | ProfileChangePasswordJson2Data
  | ProfileChangePasswordJson3Data;

/**
 * @type object
 */
export type ProfileChangePasswordRequestConfig = {
  data?: ProfileChangePasswordData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/account/my-profile/change-password";
};

/**
 * @type object
 */
export type ProfileChangePasswordResponses = {
  "200": ProfileChangePasswordStatus200;
  "204": ProfileChangePasswordStatus204;
  "400": ProfileChangePasswordStatus400;
  "401": ProfileChangePasswordStatus401;
  "403": ProfileChangePasswordStatus403;
  "404": ProfileChangePasswordStatus404;
  "500": ProfileChangePasswordStatus500;
  "501": ProfileChangePasswordStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ProfileChangePasswordResponse =
  | ProfileChangePasswordStatus200
  | ProfileChangePasswordStatus204
  | ProfileChangePasswordStatus400
  | ProfileChangePasswordStatus401
  | ProfileChangePasswordStatus403
  | ProfileChangePasswordStatus404
  | ProfileChangePasswordStatus500
  | ProfileChangePasswordStatus501;
