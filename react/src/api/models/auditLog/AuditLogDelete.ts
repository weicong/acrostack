/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type AuditLogDeletePathId = string;

/**
 * @type any
 */
export type AuditLogDeleteStatus200 = any;

/**
 * @type any
 */
export type AuditLogDeleteStatus204 = any;

/**
 * @type object
 */
export type AuditLogDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus400 =
  | AuditLogDeleteStatus400Plain
  | AuditLogDeleteStatus400Json
  | AuditLogDeleteStatus400Json2;

/**
 * @type object
 */
export type AuditLogDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus401 =
  | AuditLogDeleteStatus401Plain
  | AuditLogDeleteStatus401Json
  | AuditLogDeleteStatus401Json2;

/**
 * @type object
 */
export type AuditLogDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus403 =
  | AuditLogDeleteStatus403Plain
  | AuditLogDeleteStatus403Json
  | AuditLogDeleteStatus403Json2;

/**
 * @type object
 */
export type AuditLogDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus404 =
  | AuditLogDeleteStatus404Plain
  | AuditLogDeleteStatus404Json
  | AuditLogDeleteStatus404Json2;

/**
 * @type object
 */
export type AuditLogDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus500 =
  | AuditLogDeleteStatus500Plain
  | AuditLogDeleteStatus500Json
  | AuditLogDeleteStatus500Json2;

/**
 * @type object
 */
export type AuditLogDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus501 =
  | AuditLogDeleteStatus501Plain
  | AuditLogDeleteStatus501Json
  | AuditLogDeleteStatus501Json2;

/**
 * @type object
 */
export type AuditLogDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: AuditLogDeletePathId;
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
export type AuditLogDeleteResponses = {
  "200": AuditLogDeleteStatus200;
  "204": AuditLogDeleteStatus204;
  "400": AuditLogDeleteStatus400;
  "401": AuditLogDeleteStatus401;
  "403": AuditLogDeleteStatus403;
  "404": AuditLogDeleteStatus404;
  "500": AuditLogDeleteStatus500;
  "501": AuditLogDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AuditLogDeleteResponse =
  | AuditLogDeleteStatus200
  | AuditLogDeleteStatus204
  | AuditLogDeleteStatus400
  | AuditLogDeleteStatus401
  | AuditLogDeleteStatus403
  | AuditLogDeleteStatus404
  | AuditLogDeleteStatus500
  | AuditLogDeleteStatus501;
