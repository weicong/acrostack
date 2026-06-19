/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpSettingManagementSendTestEmailInput } from "../volo/abp/settingManagement/SendTestEmailInput.ts";

/**
 * @type any
 */
export type EmailSettingsSendTestEmailStatus200 = any;

/**
 * @type any
 */
export type EmailSettingsSendTestEmailStatus204 = any;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus400 =
  | EmailSettingsSendTestEmailStatus400Plain
  | EmailSettingsSendTestEmailStatus400Json
  | EmailSettingsSendTestEmailStatus400Json2;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus401 =
  | EmailSettingsSendTestEmailStatus401Plain
  | EmailSettingsSendTestEmailStatus401Json
  | EmailSettingsSendTestEmailStatus401Json2;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus403 =
  | EmailSettingsSendTestEmailStatus403Plain
  | EmailSettingsSendTestEmailStatus403Json
  | EmailSettingsSendTestEmailStatus403Json2;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus404 =
  | EmailSettingsSendTestEmailStatus404Plain
  | EmailSettingsSendTestEmailStatus404Json
  | EmailSettingsSendTestEmailStatus404Json2;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus500 =
  | EmailSettingsSendTestEmailStatus500Plain
  | EmailSettingsSendTestEmailStatus500Json
  | EmailSettingsSendTestEmailStatus500Json2;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus501 =
  | EmailSettingsSendTestEmailStatus501Plain
  | EmailSettingsSendTestEmailStatus501Json
  | EmailSettingsSendTestEmailStatus501Json2;

/**
 * @type object | undefined
 */
export type EmailSettingsSendTestEmailJsonData =
  | VoloAbpSettingManagementSendTestEmailInput
  | undefined;

/**
 * @type object | undefined
 */
export type EmailSettingsSendTestEmailJson2Data =
  | VoloAbpSettingManagementSendTestEmailInput
  | undefined;

/**
 * @type object | undefined
 */
export type EmailSettingsSendTestEmailJson3Data =
  | VoloAbpSettingManagementSendTestEmailInput
  | undefined;

export type EmailSettingsSendTestEmailData =
  | EmailSettingsSendTestEmailJsonData
  | EmailSettingsSendTestEmailJson2Data
  | EmailSettingsSendTestEmailJson3Data;

/**
 * @type object
 */
export type EmailSettingsSendTestEmailRequestConfig = {
  data?: EmailSettingsSendTestEmailData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/setting-management/emailing/send-test-email";
};

/**
 * @type object
 */
export type EmailSettingsSendTestEmailResponses = {
  "200": EmailSettingsSendTestEmailStatus200;
  "204": EmailSettingsSendTestEmailStatus204;
  "400": EmailSettingsSendTestEmailStatus400;
  "401": EmailSettingsSendTestEmailStatus401;
  "403": EmailSettingsSendTestEmailStatus403;
  "404": EmailSettingsSendTestEmailStatus404;
  "500": EmailSettingsSendTestEmailStatus500;
  "501": EmailSettingsSendTestEmailStatus501;
};

/**
 * @description Union of all possible responses
 */
export type EmailSettingsSendTestEmailResponse =
  | EmailSettingsSendTestEmailStatus200
  | EmailSettingsSendTestEmailStatus204
  | EmailSettingsSendTestEmailStatus400
  | EmailSettingsSendTestEmailStatus401
  | EmailSettingsSendTestEmailStatus403
  | EmailSettingsSendTestEmailStatus404
  | EmailSettingsSendTestEmailStatus500
  | EmailSettingsSendTestEmailStatus501;
