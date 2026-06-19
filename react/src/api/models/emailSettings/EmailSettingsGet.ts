/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpSettingManagementEmailSettingsDto } from "../volo/abp/settingManagement/EmailSettingsDto.ts";

/**
 * @type object
 */
export type EmailSettingsGetStatus200Plain = VoloAbpSettingManagementEmailSettingsDto;

/**
 * @type object
 */
export type EmailSettingsGetStatus200Json = VoloAbpSettingManagementEmailSettingsDto;

/**
 * @type object
 */
export type EmailSettingsGetStatus200Json2 = VoloAbpSettingManagementEmailSettingsDto;

export type EmailSettingsGetStatus200 =
  | EmailSettingsGetStatus200Plain
  | EmailSettingsGetStatus200Json
  | EmailSettingsGetStatus200Json2;

/**
 * @type object
 */
export type EmailSettingsGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus400 =
  | EmailSettingsGetStatus400Plain
  | EmailSettingsGetStatus400Json
  | EmailSettingsGetStatus400Json2;

/**
 * @type object
 */
export type EmailSettingsGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus401 =
  | EmailSettingsGetStatus401Plain
  | EmailSettingsGetStatus401Json
  | EmailSettingsGetStatus401Json2;

/**
 * @type object
 */
export type EmailSettingsGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus403 =
  | EmailSettingsGetStatus403Plain
  | EmailSettingsGetStatus403Json
  | EmailSettingsGetStatus403Json2;

/**
 * @type object
 */
export type EmailSettingsGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus404 =
  | EmailSettingsGetStatus404Plain
  | EmailSettingsGetStatus404Json
  | EmailSettingsGetStatus404Json2;

/**
 * @type object
 */
export type EmailSettingsGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus500 =
  | EmailSettingsGetStatus500Plain
  | EmailSettingsGetStatus500Json
  | EmailSettingsGetStatus500Json2;

/**
 * @type object
 */
export type EmailSettingsGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus501 =
  | EmailSettingsGetStatus501Plain
  | EmailSettingsGetStatus501Json
  | EmailSettingsGetStatus501Json2;

/**
 * @type object
 */
export type EmailSettingsGetRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/setting-management/emailing";
};

/**
 * @type object
 */
export type EmailSettingsGetResponses = {
  "200": EmailSettingsGetStatus200;
  "400": EmailSettingsGetStatus400;
  "401": EmailSettingsGetStatus401;
  "403": EmailSettingsGetStatus403;
  "404": EmailSettingsGetStatus404;
  "500": EmailSettingsGetStatus500;
  "501": EmailSettingsGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type EmailSettingsGetResponse =
  | EmailSettingsGetStatus200
  | EmailSettingsGetStatus400
  | EmailSettingsGetStatus401
  | EmailSettingsGetStatus403
  | EmailSettingsGetStatus404
  | EmailSettingsGetStatus500
  | EmailSettingsGetStatus501;
