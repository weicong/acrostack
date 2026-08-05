/* oxlint-disable */

import type { AcroStackServicesDtosAuditLoggingAuditLogStatisticsDto } from "../acroStack/services/dtos/auditLogging/AuditLogStatisticsDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `date-time`
 * @type string | undefined
 */
export type AuditLogGetStatisticsQueryStartTime = string | undefined;

/**
 * @description
 * Format: `date-time`
 * @type string | undefined
 */
export type AuditLogGetStatisticsQueryEndTime = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type AuditLogGetStatisticsQueryTopCount = number | undefined;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus200Plain =
  AcroStackServicesDtosAuditLoggingAuditLogStatisticsDto;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus200Json =
  AcroStackServicesDtosAuditLoggingAuditLogStatisticsDto;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus200Json2 =
  AcroStackServicesDtosAuditLoggingAuditLogStatisticsDto;

export type AuditLogGetStatisticsStatus200 =
  | AuditLogGetStatisticsStatus200Plain
  | AuditLogGetStatisticsStatus200Json
  | AuditLogGetStatisticsStatus200Json2;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus400 =
  | AuditLogGetStatisticsStatus400Plain
  | AuditLogGetStatisticsStatus400Json
  | AuditLogGetStatisticsStatus400Json2;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus401 =
  | AuditLogGetStatisticsStatus401Plain
  | AuditLogGetStatisticsStatus401Json
  | AuditLogGetStatisticsStatus401Json2;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus403 =
  | AuditLogGetStatisticsStatus403Plain
  | AuditLogGetStatisticsStatus403Json
  | AuditLogGetStatisticsStatus403Json2;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus404 =
  | AuditLogGetStatisticsStatus404Plain
  | AuditLogGetStatisticsStatus404Json
  | AuditLogGetStatisticsStatus404Json2;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus500 =
  | AuditLogGetStatisticsStatus500Plain
  | AuditLogGetStatisticsStatus500Json
  | AuditLogGetStatisticsStatus500Json2;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatisticsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus501 =
  | AuditLogGetStatisticsStatus501Plain
  | AuditLogGetStatisticsStatus501Json
  | AuditLogGetStatisticsStatus501Json2;

/**
 * @type object
 */
export type AuditLogGetStatisticsRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    StartTime?: AuditLogGetStatisticsQueryStartTime;
    EndTime?: AuditLogGetStatisticsQueryEndTime;
    TopCount?: AuditLogGetStatisticsQueryTopCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/audit-log/statistics";
};

/**
 * @type object
 */
export type AuditLogGetStatisticsResponses = {
  "200": AuditLogGetStatisticsStatus200;
  "400": AuditLogGetStatisticsStatus400;
  "401": AuditLogGetStatisticsStatus401;
  "403": AuditLogGetStatisticsStatus403;
  "404": AuditLogGetStatisticsStatus404;
  "500": AuditLogGetStatisticsStatus500;
  "501": AuditLogGetStatisticsStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AuditLogGetStatisticsResponse =
  | AuditLogGetStatisticsStatus200
  | AuditLogGetStatisticsStatus400
  | AuditLogGetStatisticsStatus401
  | AuditLogGetStatisticsStatus403
  | AuditLogGetStatisticsStatus404
  | AuditLogGetStatisticsStatus500
  | AuditLogGetStatisticsStatus501;
