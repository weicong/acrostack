/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpSettingManagementUpdateEmailSettingsDto } from "../volo/abp/settingManagement/UpdateEmailSettingsDto.ts";

/**
 * @type any
 */
export type EmailSettingsUpdateStatus200 = any;

/**
 * @type any
 */
export type EmailSettingsUpdateStatus204 = any;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus400 =
  | EmailSettingsUpdateStatus400Plain
  | EmailSettingsUpdateStatus400Json
  | EmailSettingsUpdateStatus400Json2;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus401 =
  | EmailSettingsUpdateStatus401Plain
  | EmailSettingsUpdateStatus401Json
  | EmailSettingsUpdateStatus401Json2;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus403 =
  | EmailSettingsUpdateStatus403Plain
  | EmailSettingsUpdateStatus403Json
  | EmailSettingsUpdateStatus403Json2;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus404 =
  | EmailSettingsUpdateStatus404Plain
  | EmailSettingsUpdateStatus404Json
  | EmailSettingsUpdateStatus404Json2;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus500 =
  | EmailSettingsUpdateStatus500Plain
  | EmailSettingsUpdateStatus500Json
  | EmailSettingsUpdateStatus500Json2;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus501 =
  | EmailSettingsUpdateStatus501Plain
  | EmailSettingsUpdateStatus501Json
  | EmailSettingsUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type EmailSettingsUpdateJsonData =
  | VoloAbpSettingManagementUpdateEmailSettingsDto
  | undefined;

/**
 * @type object | undefined
 */
export type EmailSettingsUpdateJson2Data =
  | VoloAbpSettingManagementUpdateEmailSettingsDto
  | undefined;

/**
 * @type object | undefined
 */
export type EmailSettingsUpdateJson3Data =
  | VoloAbpSettingManagementUpdateEmailSettingsDto
  | undefined;

export type EmailSettingsUpdateData =
  | EmailSettingsUpdateJsonData
  | EmailSettingsUpdateJson2Data
  | EmailSettingsUpdateJson3Data;

/**
 * @type object
 */
export type EmailSettingsUpdateRequestConfig = {
  data?: EmailSettingsUpdateData;
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
export type EmailSettingsUpdateResponses = {
  "200": EmailSettingsUpdateStatus200;
  "204": EmailSettingsUpdateStatus204;
  "400": EmailSettingsUpdateStatus400;
  "401": EmailSettingsUpdateStatus401;
  "403": EmailSettingsUpdateStatus403;
  "404": EmailSettingsUpdateStatus404;
  "500": EmailSettingsUpdateStatus500;
  "501": EmailSettingsUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type EmailSettingsUpdateResponse =
  | EmailSettingsUpdateStatus200
  | EmailSettingsUpdateStatus204
  | EmailSettingsUpdateStatus400
  | EmailSettingsUpdateStatus401
  | EmailSettingsUpdateStatus403
  | EmailSettingsUpdateStatus404
  | EmailSettingsUpdateStatus500
  | EmailSettingsUpdateStatus501;
