/* oxlint-disable */

import type { AcroStackAuditLoggingAuditLogDto } from "../acroStack/auditLogging/AuditLogDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type AuditLogGetPathId = string;

/**
 * @type object
 */
export type AuditLogGetStatus200Plain = AcroStackAuditLoggingAuditLogDto;

/**
 * @type object
 */
export type AuditLogGetStatus200Json = AcroStackAuditLoggingAuditLogDto;

/**
 * @type object
 */
export type AuditLogGetStatus200Json2 = AcroStackAuditLoggingAuditLogDto;

export type AuditLogGetStatus200 =
  | AuditLogGetStatus200Plain
  | AuditLogGetStatus200Json
  | AuditLogGetStatus200Json2;

/**
 * @type object
 */
export type AuditLogGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus400 =
  | AuditLogGetStatus400Plain
  | AuditLogGetStatus400Json
  | AuditLogGetStatus400Json2;

/**
 * @type object
 */
export type AuditLogGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus401 =
  | AuditLogGetStatus401Plain
  | AuditLogGetStatus401Json
  | AuditLogGetStatus401Json2;

/**
 * @type object
 */
export type AuditLogGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus403 =
  | AuditLogGetStatus403Plain
  | AuditLogGetStatus403Json
  | AuditLogGetStatus403Json2;

/**
 * @type object
 */
export type AuditLogGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus404 =
  | AuditLogGetStatus404Plain
  | AuditLogGetStatus404Json
  | AuditLogGetStatus404Json2;

/**
 * @type object
 */
export type AuditLogGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus500 =
  | AuditLogGetStatus500Plain
  | AuditLogGetStatus500Json
  | AuditLogGetStatus500Json2;

/**
 * @type object
 */
export type AuditLogGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus501 =
  | AuditLogGetStatus501Plain
  | AuditLogGetStatus501Json
  | AuditLogGetStatus501Json2;

/**
 * @type object
 */
export type AuditLogGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: AuditLogGetPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/audit-log/${string}`;
};

/**
 * @type object
 */
export type AuditLogGetResponses = {
  "200": AuditLogGetStatus200;
  "400": AuditLogGetStatus400;
  "401": AuditLogGetStatus401;
  "403": AuditLogGetStatus403;
  "404": AuditLogGetStatus404;
  "500": AuditLogGetStatus500;
  "501": AuditLogGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AuditLogGetResponse =
  | AuditLogGetStatus200
  | AuditLogGetStatus400
  | AuditLogGetStatus401
  | AuditLogGetStatus403
  | AuditLogGetStatus404
  | AuditLogGetStatus500
  | AuditLogGetStatus501;
