/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type TimeZoneSettingsUpdateQueryTimezone = string | undefined;

/**
 * @type any
 */
export type TimeZoneSettingsUpdateStatus200 = any;

/**
 * @type any
 */
export type TimeZoneSettingsUpdateStatus204 = any;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus400 =
  | TimeZoneSettingsUpdateStatus400Plain
  | TimeZoneSettingsUpdateStatus400Json
  | TimeZoneSettingsUpdateStatus400Json2;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus401 =
  | TimeZoneSettingsUpdateStatus401Plain
  | TimeZoneSettingsUpdateStatus401Json
  | TimeZoneSettingsUpdateStatus401Json2;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus403 =
  | TimeZoneSettingsUpdateStatus403Plain
  | TimeZoneSettingsUpdateStatus403Json
  | TimeZoneSettingsUpdateStatus403Json2;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus404 =
  | TimeZoneSettingsUpdateStatus404Plain
  | TimeZoneSettingsUpdateStatus404Json
  | TimeZoneSettingsUpdateStatus404Json2;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus500 =
  | TimeZoneSettingsUpdateStatus500Plain
  | TimeZoneSettingsUpdateStatus500Json
  | TimeZoneSettingsUpdateStatus500Json2;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus501 =
  | TimeZoneSettingsUpdateStatus501Plain
  | TimeZoneSettingsUpdateStatus501Json
  | TimeZoneSettingsUpdateStatus501Json2;

/**
 * @type object
 */
export type TimeZoneSettingsUpdateRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    timezone?: TimeZoneSettingsUpdateQueryTimezone;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/setting-management/timezone";
};

/**
 * @type object
 */
export type TimeZoneSettingsUpdateResponses = {
  "200": TimeZoneSettingsUpdateStatus200;
  "204": TimeZoneSettingsUpdateStatus204;
  "400": TimeZoneSettingsUpdateStatus400;
  "401": TimeZoneSettingsUpdateStatus401;
  "403": TimeZoneSettingsUpdateStatus403;
  "404": TimeZoneSettingsUpdateStatus404;
  "500": TimeZoneSettingsUpdateStatus500;
  "501": TimeZoneSettingsUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TimeZoneSettingsUpdateResponse =
  | TimeZoneSettingsUpdateStatus200
  | TimeZoneSettingsUpdateStatus204
  | TimeZoneSettingsUpdateStatus400
  | TimeZoneSettingsUpdateStatus401
  | TimeZoneSettingsUpdateStatus403
  | TimeZoneSettingsUpdateStatus404
  | TimeZoneSettingsUpdateStatus500
  | TimeZoneSettingsUpdateStatus501;
