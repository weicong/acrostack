/* oxlint-disable */

import type { AcroStackServicesDtosAuditLoggingEntityChangeDto } from "../acroStack/services/dtos/auditLogging/EntityChangeDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type AuditLogGetEntityChangePathEntityChangeId = string;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus200Plain =
  AcroStackServicesDtosAuditLoggingEntityChangeDto;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus200Json = AcroStackServicesDtosAuditLoggingEntityChangeDto;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus200Json2 =
  AcroStackServicesDtosAuditLoggingEntityChangeDto;

export type AuditLogGetEntityChangeStatus200 =
  | AuditLogGetEntityChangeStatus200Plain
  | AuditLogGetEntityChangeStatus200Json
  | AuditLogGetEntityChangeStatus200Json2;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus400 =
  | AuditLogGetEntityChangeStatus400Plain
  | AuditLogGetEntityChangeStatus400Json
  | AuditLogGetEntityChangeStatus400Json2;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus401 =
  | AuditLogGetEntityChangeStatus401Plain
  | AuditLogGetEntityChangeStatus401Json
  | AuditLogGetEntityChangeStatus401Json2;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus403 =
  | AuditLogGetEntityChangeStatus403Plain
  | AuditLogGetEntityChangeStatus403Json
  | AuditLogGetEntityChangeStatus403Json2;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus404 =
  | AuditLogGetEntityChangeStatus404Plain
  | AuditLogGetEntityChangeStatus404Json
  | AuditLogGetEntityChangeStatus404Json2;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus500 =
  | AuditLogGetEntityChangeStatus500Plain
  | AuditLogGetEntityChangeStatus500Json
  | AuditLogGetEntityChangeStatus500Json2;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangeStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus501 =
  | AuditLogGetEntityChangeStatus501Plain
  | AuditLogGetEntityChangeStatus501Json
  | AuditLogGetEntityChangeStatus501Json2;

/**
 * @type object
 */
export type AuditLogGetEntityChangeRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    entityChangeId: AuditLogGetEntityChangePathEntityChangeId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/audit-log/entity-change/${string}`;
};

/**
 * @type object
 */
export type AuditLogGetEntityChangeResponses = {
  "200": AuditLogGetEntityChangeStatus200;
  "400": AuditLogGetEntityChangeStatus400;
  "401": AuditLogGetEntityChangeStatus401;
  "403": AuditLogGetEntityChangeStatus403;
  "404": AuditLogGetEntityChangeStatus404;
  "500": AuditLogGetEntityChangeStatus500;
  "501": AuditLogGetEntityChangeStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AuditLogGetEntityChangeResponse =
  | AuditLogGetEntityChangeStatus200
  | AuditLogGetEntityChangeStatus400
  | AuditLogGetEntityChangeStatus401
  | AuditLogGetEntityChangeStatus403
  | AuditLogGetEntityChangeStatus404
  | AuditLogGetEntityChangeStatus500
  | AuditLogGetEntityChangeStatus501;
