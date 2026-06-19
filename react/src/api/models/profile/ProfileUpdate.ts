/* oxlint-disable */

import type { VoloAbpAccountProfileDto } from "../volo/abp/account/ProfileDto.ts";
import type { VoloAbpAccountUpdateProfileDto } from "../volo/abp/account/UpdateProfileDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type ProfileUpdateStatus200Plain = VoloAbpAccountProfileDto;

/**
 * @type object
 */
export type ProfileUpdateStatus200Json = VoloAbpAccountProfileDto;

/**
 * @type object
 */
export type ProfileUpdateStatus200Json2 = VoloAbpAccountProfileDto;

export type ProfileUpdateStatus200 =
  | ProfileUpdateStatus200Plain
  | ProfileUpdateStatus200Json
  | ProfileUpdateStatus200Json2;

/**
 * @type object
 */
export type ProfileUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus400 =
  | ProfileUpdateStatus400Plain
  | ProfileUpdateStatus400Json
  | ProfileUpdateStatus400Json2;

/**
 * @type object
 */
export type ProfileUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus401 =
  | ProfileUpdateStatus401Plain
  | ProfileUpdateStatus401Json
  | ProfileUpdateStatus401Json2;

/**
 * @type object
 */
export type ProfileUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus403 =
  | ProfileUpdateStatus403Plain
  | ProfileUpdateStatus403Json
  | ProfileUpdateStatus403Json2;

/**
 * @type object
 */
export type ProfileUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus404 =
  | ProfileUpdateStatus404Plain
  | ProfileUpdateStatus404Json
  | ProfileUpdateStatus404Json2;

/**
 * @type object
 */
export type ProfileUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus500 =
  | ProfileUpdateStatus500Plain
  | ProfileUpdateStatus500Json
  | ProfileUpdateStatus500Json2;

/**
 * @type object
 */
export type ProfileUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus501 =
  | ProfileUpdateStatus501Plain
  | ProfileUpdateStatus501Json
  | ProfileUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type ProfileUpdateJsonData =
  | Omit<NonNullable<VoloAbpAccountUpdateProfileDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type ProfileUpdateJson2Data =
  | Omit<NonNullable<VoloAbpAccountUpdateProfileDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type ProfileUpdateJson3Data =
  | Omit<NonNullable<VoloAbpAccountUpdateProfileDto>, "extraProperties">
  | undefined;

export type ProfileUpdateData =
  | ProfileUpdateJsonData
  | ProfileUpdateJson2Data
  | ProfileUpdateJson3Data;

/**
 * @type object
 */
export type ProfileUpdateRequestConfig = {
  data?: ProfileUpdateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/account/my-profile";
};

/**
 * @type object
 */
export type ProfileUpdateResponses = {
  "200": ProfileUpdateStatus200;
  "400": ProfileUpdateStatus400;
  "401": ProfileUpdateStatus401;
  "403": ProfileUpdateStatus403;
  "404": ProfileUpdateStatus404;
  "500": ProfileUpdateStatus500;
  "501": ProfileUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ProfileUpdateResponse =
  | ProfileUpdateStatus200
  | ProfileUpdateStatus400
  | ProfileUpdateStatus401
  | ProfileUpdateStatus403
  | ProfileUpdateStatus404
  | ProfileUpdateStatus500
  | ProfileUpdateStatus501;
