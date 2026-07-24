/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosAuditLoggingAuditLogDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/services/dtos/auditLogging/AuditLogDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type AuditLogGetListQueryFilter = string | undefined;

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type AuditLogGetListQueryUserId = string | undefined;

/**
 * @type string | undefined
 */
export type AuditLogGetListQueryHttpMethod = string | undefined;

/**
 * @type string | undefined
 */
export type AuditLogGetListQueryUrl = string | undefined;

/**
 * @description
 * Format: `date-time`
 * @type string | undefined
 */
export type AuditLogGetListQueryStartTime = string | undefined;

/**
 * @description
 * Format: `date-time`
 * @type string | undefined
 */
export type AuditLogGetListQueryEndTime = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type AuditLogGetListQueryHttpStatusCode = number | undefined;

/**
 * @type boolean | undefined
 */
export type AuditLogGetListQueryHasException = boolean | undefined;

/**
 * @type string | undefined
 */
export type AuditLogGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type AuditLogGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type AuditLogGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type AuditLogGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosAuditLoggingAuditLogDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type AuditLogGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosAuditLoggingAuditLogDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type AuditLogGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosAuditLoggingAuditLogDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type AuditLogGetListStatus200 =
  | AuditLogGetListStatus200Plain
  | AuditLogGetListStatus200Json
  | AuditLogGetListStatus200Json2;

/**
 * @type object
 */
export type AuditLogGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus400 =
  | AuditLogGetListStatus400Plain
  | AuditLogGetListStatus400Json
  | AuditLogGetListStatus400Json2;

/**
 * @type object
 */
export type AuditLogGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus401 =
  | AuditLogGetListStatus401Plain
  | AuditLogGetListStatus401Json
  | AuditLogGetListStatus401Json2;

/**
 * @type object
 */
export type AuditLogGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus403 =
  | AuditLogGetListStatus403Plain
  | AuditLogGetListStatus403Json
  | AuditLogGetListStatus403Json2;

/**
 * @type object
 */
export type AuditLogGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus404 =
  | AuditLogGetListStatus404Plain
  | AuditLogGetListStatus404Json
  | AuditLogGetListStatus404Json2;

/**
 * @type object
 */
export type AuditLogGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus500 =
  | AuditLogGetListStatus500Plain
  | AuditLogGetListStatus500Json
  | AuditLogGetListStatus500Json2;

/**
 * @type object
 */
export type AuditLogGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus501 =
  | AuditLogGetListStatus501Plain
  | AuditLogGetListStatus501Json
  | AuditLogGetListStatus501Json2;

/**
 * @type object
 */
export type AuditLogGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: AuditLogGetListQueryFilter;
    UserId?: AuditLogGetListQueryUserId;
    HttpMethod?: AuditLogGetListQueryHttpMethod;
    Url?: AuditLogGetListQueryUrl;
    StartTime?: AuditLogGetListQueryStartTime;
    EndTime?: AuditLogGetListQueryEndTime;
    HttpStatusCode?: AuditLogGetListQueryHttpStatusCode;
    HasException?: AuditLogGetListQueryHasException;
    Sorting?: AuditLogGetListQuerySorting;
    SkipCount?: AuditLogGetListQuerySkipCount;
    MaxResultCount?: AuditLogGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/audit-log";
};

/**
 * @type object
 */
export type AuditLogGetListResponses = {
  "200": AuditLogGetListStatus200;
  "400": AuditLogGetListStatus400;
  "401": AuditLogGetListStatus401;
  "403": AuditLogGetListStatus403;
  "404": AuditLogGetListStatus404;
  "500": AuditLogGetListStatus500;
  "501": AuditLogGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AuditLogGetListResponse =
  | AuditLogGetListStatus200
  | AuditLogGetListStatus400
  | AuditLogGetListStatus401
  | AuditLogGetListStatus403
  | AuditLogGetListStatus404
  | AuditLogGetListStatus500
  | AuditLogGetListStatus501;
