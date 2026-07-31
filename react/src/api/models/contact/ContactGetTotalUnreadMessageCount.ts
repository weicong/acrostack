/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `int32`
 * @type integer
 */
export type ContactGetTotalUnreadMessageCountStatus200Plain = number;

/**
 * @description
 * Format: `int32`
 * @type integer
 */
export type ContactGetTotalUnreadMessageCountStatus200Json = number;

/**
 * @description
 * Format: `int32`
 * @type integer
 */
export type ContactGetTotalUnreadMessageCountStatus200Json2 = number;

export type ContactGetTotalUnreadMessageCountStatus200 =
  | ContactGetTotalUnreadMessageCountStatus200Plain
  | ContactGetTotalUnreadMessageCountStatus200Json
  | ContactGetTotalUnreadMessageCountStatus200Json2;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus400 =
  | ContactGetTotalUnreadMessageCountStatus400Plain
  | ContactGetTotalUnreadMessageCountStatus400Json
  | ContactGetTotalUnreadMessageCountStatus400Json2;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus401 =
  | ContactGetTotalUnreadMessageCountStatus401Plain
  | ContactGetTotalUnreadMessageCountStatus401Json
  | ContactGetTotalUnreadMessageCountStatus401Json2;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus403 =
  | ContactGetTotalUnreadMessageCountStatus403Plain
  | ContactGetTotalUnreadMessageCountStatus403Json
  | ContactGetTotalUnreadMessageCountStatus403Json2;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus404 =
  | ContactGetTotalUnreadMessageCountStatus404Plain
  | ContactGetTotalUnreadMessageCountStatus404Json
  | ContactGetTotalUnreadMessageCountStatus404Json2;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus500 =
  | ContactGetTotalUnreadMessageCountStatus500Plain
  | ContactGetTotalUnreadMessageCountStatus500Json
  | ContactGetTotalUnreadMessageCountStatus500Json2;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus501 =
  | ContactGetTotalUnreadMessageCountStatus501Plain
  | ContactGetTotalUnreadMessageCountStatus501Json
  | ContactGetTotalUnreadMessageCountStatus501Json2;

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/contact/total-unread-message-count";
};

/**
 * @type object
 */
export type ContactGetTotalUnreadMessageCountResponses = {
  "200": ContactGetTotalUnreadMessageCountStatus200;
  "400": ContactGetTotalUnreadMessageCountStatus400;
  "401": ContactGetTotalUnreadMessageCountStatus401;
  "403": ContactGetTotalUnreadMessageCountStatus403;
  "404": ContactGetTotalUnreadMessageCountStatus404;
  "500": ContactGetTotalUnreadMessageCountStatus500;
  "501": ContactGetTotalUnreadMessageCountStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ContactGetTotalUnreadMessageCountResponse =
  | ContactGetTotalUnreadMessageCountStatus200
  | ContactGetTotalUnreadMessageCountStatus400
  | ContactGetTotalUnreadMessageCountStatus401
  | ContactGetTotalUnreadMessageCountStatus403
  | ContactGetTotalUnreadMessageCountStatus404
  | ContactGetTotalUnreadMessageCountStatus500
  | ContactGetTotalUnreadMessageCountStatus501;
