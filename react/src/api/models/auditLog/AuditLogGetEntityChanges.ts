/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosAuditLoggingEntityChangeDetailDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1AcroStack/services/dtos/auditLogging/EntityChangeDetailDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type AuditLogGetEntityChangesPathAuditLogId = string;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus200Plain =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosAuditLoggingEntityChangeDetailDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus200Json =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosAuditLoggingEntityChangeDetailDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosAuditLoggingEntityChangeDetailDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type AuditLogGetEntityChangesStatus200 =
  | AuditLogGetEntityChangesStatus200Plain
  | AuditLogGetEntityChangesStatus200Json
  | AuditLogGetEntityChangesStatus200Json2;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus400 =
  | AuditLogGetEntityChangesStatus400Plain
  | AuditLogGetEntityChangesStatus400Json
  | AuditLogGetEntityChangesStatus400Json2;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus401 =
  | AuditLogGetEntityChangesStatus401Plain
  | AuditLogGetEntityChangesStatus401Json
  | AuditLogGetEntityChangesStatus401Json2;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus403 =
  | AuditLogGetEntityChangesStatus403Plain
  | AuditLogGetEntityChangesStatus403Json
  | AuditLogGetEntityChangesStatus403Json2;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus404 =
  | AuditLogGetEntityChangesStatus404Plain
  | AuditLogGetEntityChangesStatus404Json
  | AuditLogGetEntityChangesStatus404Json2;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus500 =
  | AuditLogGetEntityChangesStatus500Plain
  | AuditLogGetEntityChangesStatus500Json
  | AuditLogGetEntityChangesStatus500Json2;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogGetEntityChangesStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus501 =
  | AuditLogGetEntityChangesStatus501Plain
  | AuditLogGetEntityChangesStatus501Json
  | AuditLogGetEntityChangesStatus501Json2;

/**
 * @type object
 */
export type AuditLogGetEntityChangesRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    auditLogId: AuditLogGetEntityChangesPathAuditLogId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/audit-log/entity-changes/${string}`;
};

/**
 * @type object
 */
export type AuditLogGetEntityChangesResponses = {
  "200": AuditLogGetEntityChangesStatus200;
  "400": AuditLogGetEntityChangesStatus400;
  "401": AuditLogGetEntityChangesStatus401;
  "403": AuditLogGetEntityChangesStatus403;
  "404": AuditLogGetEntityChangesStatus404;
  "500": AuditLogGetEntityChangesStatus500;
  "501": AuditLogGetEntityChangesStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AuditLogGetEntityChangesResponse =
  | AuditLogGetEntityChangesStatus200
  | AuditLogGetEntityChangesStatus400
  | AuditLogGetEntityChangesStatus401
  | AuditLogGetEntityChangesStatus403
  | AuditLogGetEntityChangesStatus404
  | AuditLogGetEntityChangesStatus500
  | AuditLogGetEntityChangesStatus501;
