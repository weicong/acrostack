/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type array | undefined
 */
export type AuditLogDeleteManyQueryIds = string[] | undefined;

/**
 * @type any
 */
export type AuditLogDeleteManyStatus200 = any;

/**
 * @type any
 */
export type AuditLogDeleteManyStatus204 = any;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus400 =
  | AuditLogDeleteManyStatus400Plain
  | AuditLogDeleteManyStatus400Json
  | AuditLogDeleteManyStatus400Json2;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus401 =
  | AuditLogDeleteManyStatus401Plain
  | AuditLogDeleteManyStatus401Json
  | AuditLogDeleteManyStatus401Json2;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus403 =
  | AuditLogDeleteManyStatus403Plain
  | AuditLogDeleteManyStatus403Json
  | AuditLogDeleteManyStatus403Json2;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus404 =
  | AuditLogDeleteManyStatus404Plain
  | AuditLogDeleteManyStatus404Json
  | AuditLogDeleteManyStatus404Json2;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus500 =
  | AuditLogDeleteManyStatus500Plain
  | AuditLogDeleteManyStatus500Json
  | AuditLogDeleteManyStatus500Json2;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AuditLogDeleteManyStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus501 =
  | AuditLogDeleteManyStatus501Plain
  | AuditLogDeleteManyStatus501Json
  | AuditLogDeleteManyStatus501Json2;

/**
 * @type object
 */
export type AuditLogDeleteManyRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    ids?: AuditLogDeleteManyQueryIds;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/audit-log/many";
};

/**
 * @type object
 */
export type AuditLogDeleteManyResponses = {
  "200": AuditLogDeleteManyStatus200;
  "204": AuditLogDeleteManyStatus204;
  "400": AuditLogDeleteManyStatus400;
  "401": AuditLogDeleteManyStatus401;
  "403": AuditLogDeleteManyStatus403;
  "404": AuditLogDeleteManyStatus404;
  "500": AuditLogDeleteManyStatus500;
  "501": AuditLogDeleteManyStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AuditLogDeleteManyResponse =
  | AuditLogDeleteManyStatus200
  | AuditLogDeleteManyStatus204
  | AuditLogDeleteManyStatus400
  | AuditLogDeleteManyStatus401
  | AuditLogDeleteManyStatus403
  | AuditLogDeleteManyStatus404
  | AuditLogDeleteManyStatus500
  | AuditLogDeleteManyStatus501;
