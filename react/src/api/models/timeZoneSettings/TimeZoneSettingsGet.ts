/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string
 */
export type TimeZoneSettingsGetStatus200Plain = string;

/**
 * @type string
 */
export type TimeZoneSettingsGetStatus200Json = string;

/**
 * @type string
 */
export type TimeZoneSettingsGetStatus200Json2 = string;

export type TimeZoneSettingsGetStatus200 =
  | TimeZoneSettingsGetStatus200Plain
  | TimeZoneSettingsGetStatus200Json
  | TimeZoneSettingsGetStatus200Json2;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus400 =
  | TimeZoneSettingsGetStatus400Plain
  | TimeZoneSettingsGetStatus400Json
  | TimeZoneSettingsGetStatus400Json2;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus401 =
  | TimeZoneSettingsGetStatus401Plain
  | TimeZoneSettingsGetStatus401Json
  | TimeZoneSettingsGetStatus401Json2;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus403 =
  | TimeZoneSettingsGetStatus403Plain
  | TimeZoneSettingsGetStatus403Json
  | TimeZoneSettingsGetStatus403Json2;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus404 =
  | TimeZoneSettingsGetStatus404Plain
  | TimeZoneSettingsGetStatus404Json
  | TimeZoneSettingsGetStatus404Json2;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus500 =
  | TimeZoneSettingsGetStatus500Plain
  | TimeZoneSettingsGetStatus500Json
  | TimeZoneSettingsGetStatus500Json2;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus501 =
  | TimeZoneSettingsGetStatus501Plain
  | TimeZoneSettingsGetStatus501Json
  | TimeZoneSettingsGetStatus501Json2;

/**
 * @type object
 */
export type TimeZoneSettingsGetRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/setting-management/timezone";
};

/**
 * @type object
 */
export type TimeZoneSettingsGetResponses = {
  "200": TimeZoneSettingsGetStatus200;
  "400": TimeZoneSettingsGetStatus400;
  "401": TimeZoneSettingsGetStatus401;
  "403": TimeZoneSettingsGetStatus403;
  "404": TimeZoneSettingsGetStatus404;
  "500": TimeZoneSettingsGetStatus500;
  "501": TimeZoneSettingsGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TimeZoneSettingsGetResponse =
  | TimeZoneSettingsGetStatus200
  | TimeZoneSettingsGetStatus400
  | TimeZoneSettingsGetStatus401
  | TimeZoneSettingsGetStatus403
  | TimeZoneSettingsGetStatus404
  | TimeZoneSettingsGetStatus500
  | TimeZoneSettingsGetStatus501;
