/* oxlint-disable */

import type { VoloAbpAccountProfileDto } from "../volo/abp/account/ProfileDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type ProfileGetStatus200Plain = VoloAbpAccountProfileDto;

/**
 * @type object
 */
export type ProfileGetStatus200Json = VoloAbpAccountProfileDto;

/**
 * @type object
 */
export type ProfileGetStatus200Json2 = VoloAbpAccountProfileDto;

export type ProfileGetStatus200 =
  | ProfileGetStatus200Plain
  | ProfileGetStatus200Json
  | ProfileGetStatus200Json2;

/**
 * @type object
 */
export type ProfileGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus400 =
  | ProfileGetStatus400Plain
  | ProfileGetStatus400Json
  | ProfileGetStatus400Json2;

/**
 * @type object
 */
export type ProfileGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus401 =
  | ProfileGetStatus401Plain
  | ProfileGetStatus401Json
  | ProfileGetStatus401Json2;

/**
 * @type object
 */
export type ProfileGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus403 =
  | ProfileGetStatus403Plain
  | ProfileGetStatus403Json
  | ProfileGetStatus403Json2;

/**
 * @type object
 */
export type ProfileGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus404 =
  | ProfileGetStatus404Plain
  | ProfileGetStatus404Json
  | ProfileGetStatus404Json2;

/**
 * @type object
 */
export type ProfileGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus500 =
  | ProfileGetStatus500Plain
  | ProfileGetStatus500Json
  | ProfileGetStatus500Json2;

/**
 * @type object
 */
export type ProfileGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ProfileGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus501 =
  | ProfileGetStatus501Plain
  | ProfileGetStatus501Json
  | ProfileGetStatus501Json2;

/**
 * @type object
 */
export type ProfileGetRequestConfig = {
  data?: never;
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
export type ProfileGetResponses = {
  "200": ProfileGetStatus200;
  "400": ProfileGetStatus400;
  "401": ProfileGetStatus401;
  "403": ProfileGetStatus403;
  "404": ProfileGetStatus404;
  "500": ProfileGetStatus500;
  "501": ProfileGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ProfileGetResponse =
  | ProfileGetStatus200
  | ProfileGetStatus400
  | ProfileGetStatus401
  | ProfileGetStatus403
  | ProfileGetStatus404
  | ProfileGetStatus500
  | ProfileGetStatus501;
