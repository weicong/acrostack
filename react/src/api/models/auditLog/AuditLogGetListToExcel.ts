/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type AuditLogGetListToExcelQueryFilter = string | undefined;

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type AuditLogGetListToExcelQueryUserId = string | undefined;

/**
 * @type string | undefined
 */
export type AuditLogGetListToExcelQueryHttpMethod = string | undefined;

/**
 * @type string | undefined
 */
export type AuditLogGetListToExcelQueryUrl = string | undefined;

/**
 * @description
 * Format: `date-time`
 * @type string | undefined
 */
export type AuditLogGetListToExcelQueryStartTime = string | undefined;

/**
 * @description
 * Format: `date-time`
 * @type string | undefined
 */
export type AuditLogGetListToExcelQueryEndTime = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type AuditLogGetListToExcelQueryHttpStatusCode = number | undefined;

/**
 * @type boolean | undefined
 */
export type AuditLogGetListToExcelQueryHasException = boolean | undefined;

/**
 * @type string | undefined
 */
export type AuditLogGetListToExcelQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type AuditLogGetListToExcelQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type AuditLogGetListToExcelQueryMaxResultCount = number | undefined;

/**
 * @description
 * Format: `binary`
 * @type string
 */
export type AuditLogGetListToExcelStatus200Plain = Blob;

/**
 * @description
 * Format: `binary`
 * @type string
 */
export type AuditLogGetListToExcelStatus200Json = Blob;

/**
 * @description
 * Format: `binary`
 * @type string
 */
export type AuditLogGetListToExcelStatus200Json2 = Blob;

export type AuditLogGetListToExcelStatus200 =
  | AuditLogGetListToExcelStatus200Plain
  | AuditLogGetListToExcelStatus200Json
  | AuditLogGetListToExcelStatus200Json2;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus400 =
  | AuditLogGetListToExcelStatus400Plain
  | AuditLogGetListToExcelStatus400Json
  | AuditLogGetListToExcelStatus400Json2;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus401 =
  | AuditLogGetListToExcelStatus401Plain
  | AuditLogGetListToExcelStatus401Json
  | AuditLogGetListToExcelStatus401Json2;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus403 =
  | AuditLogGetListToExcelStatus403Plain
  | AuditLogGetListToExcelStatus403Json
  | AuditLogGetListToExcelStatus403Json2;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus404 =
  | AuditLogGetListToExcelStatus404Plain
  | AuditLogGetListToExcelStatus404Json
  | AuditLogGetListToExcelStatus404Json2;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus500 =
  | AuditLogGetListToExcelStatus500Plain
  | AuditLogGetListToExcelStatus500Json
  | AuditLogGetListToExcelStatus500Json2;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListToExcelStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus501 =
  | AuditLogGetListToExcelStatus501Plain
  | AuditLogGetListToExcelStatus501Json
  | AuditLogGetListToExcelStatus501Json2;

/**
 * @type object
 */
export type AuditLogGetListToExcelRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: AuditLogGetListToExcelQueryFilter;
    UserId?: AuditLogGetListToExcelQueryUserId;
    HttpMethod?: AuditLogGetListToExcelQueryHttpMethod;
    Url?: AuditLogGetListToExcelQueryUrl;
    StartTime?: AuditLogGetListToExcelQueryStartTime;
    EndTime?: AuditLogGetListToExcelQueryEndTime;
    HttpStatusCode?: AuditLogGetListToExcelQueryHttpStatusCode;
    HasException?: AuditLogGetListToExcelQueryHasException;
    Sorting?: AuditLogGetListToExcelQuerySorting;
    SkipCount?: AuditLogGetListToExcelQuerySkipCount;
    MaxResultCount?: AuditLogGetListToExcelQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/audit-log/to-excel";
};

/**
 * @type object
 */
export type AuditLogGetListToExcelResponses = {
  "200": AuditLogGetListToExcelStatus200;
  "400": AuditLogGetListToExcelStatus400;
  "401": AuditLogGetListToExcelStatus401;
  "403": AuditLogGetListToExcelStatus403;
  "404": AuditLogGetListToExcelStatus404;
  "500": AuditLogGetListToExcelStatus500;
  "501": AuditLogGetListToExcelStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AuditLogGetListToExcelResponse =
  | AuditLogGetListToExcelStatus200
  | AuditLogGetListToExcelStatus400
  | AuditLogGetListToExcelStatus401
  | AuditLogGetListToExcelStatus403
  | AuditLogGetListToExcelStatus404
  | AuditLogGetListToExcelStatus500
  | AuditLogGetListToExcelStatus501;
