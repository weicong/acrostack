/* oxlint-disable */

import type { VoloAbpNameValue } from "../volo/abp/NameValue.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type array
 */
export type TimeZoneSettingsGetTimezonesStatus200Plain = VoloAbpNameValue[];

/**
 * @type array
 */
export type TimeZoneSettingsGetTimezonesStatus200Json = VoloAbpNameValue[];

/**
 * @type array
 */
export type TimeZoneSettingsGetTimezonesStatus200Json2 = VoloAbpNameValue[];

export type TimeZoneSettingsGetTimezonesStatus200 =
  | TimeZoneSettingsGetTimezonesStatus200Plain
  | TimeZoneSettingsGetTimezonesStatus200Json
  | TimeZoneSettingsGetTimezonesStatus200Json2;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus400 =
  | TimeZoneSettingsGetTimezonesStatus400Plain
  | TimeZoneSettingsGetTimezonesStatus400Json
  | TimeZoneSettingsGetTimezonesStatus400Json2;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus401 =
  | TimeZoneSettingsGetTimezonesStatus401Plain
  | TimeZoneSettingsGetTimezonesStatus401Json
  | TimeZoneSettingsGetTimezonesStatus401Json2;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus403 =
  | TimeZoneSettingsGetTimezonesStatus403Plain
  | TimeZoneSettingsGetTimezonesStatus403Json
  | TimeZoneSettingsGetTimezonesStatus403Json2;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus404 =
  | TimeZoneSettingsGetTimezonesStatus404Plain
  | TimeZoneSettingsGetTimezonesStatus404Json
  | TimeZoneSettingsGetTimezonesStatus404Json2;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus500 =
  | TimeZoneSettingsGetTimezonesStatus500Plain
  | TimeZoneSettingsGetTimezonesStatus500Json
  | TimeZoneSettingsGetTimezonesStatus500Json2;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus501 =
  | TimeZoneSettingsGetTimezonesStatus501Plain
  | TimeZoneSettingsGetTimezonesStatus501Json
  | TimeZoneSettingsGetTimezonesStatus501Json2;

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/setting-management/timezone/timezones";
};

/**
 * @type object
 */
export type TimeZoneSettingsGetTimezonesResponses = {
  "200": TimeZoneSettingsGetTimezonesStatus200;
  "400": TimeZoneSettingsGetTimezonesStatus400;
  "401": TimeZoneSettingsGetTimezonesStatus401;
  "403": TimeZoneSettingsGetTimezonesStatus403;
  "404": TimeZoneSettingsGetTimezonesStatus404;
  "500": TimeZoneSettingsGetTimezonesStatus500;
  "501": TimeZoneSettingsGetTimezonesStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TimeZoneSettingsGetTimezonesResponse =
  | TimeZoneSettingsGetTimezonesStatus200
  | TimeZoneSettingsGetTimezonesStatus400
  | TimeZoneSettingsGetTimezonesStatus401
  | TimeZoneSettingsGetTimezonesStatus403
  | TimeZoneSettingsGetTimezonesStatus404
  | TimeZoneSettingsGetTimezonesStatus500
  | TimeZoneSettingsGetTimezonesStatus501;
