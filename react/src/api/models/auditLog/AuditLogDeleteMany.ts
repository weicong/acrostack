/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type AuditLogDeleteManyQuery = {
  ids?: string[];
};

export type AuditLogDeleteManyStatus200 = unknown;

export type AuditLogDeleteManyStatus204 = unknown;

export type AuditLogDeleteManyStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus400 =
  | AuditLogDeleteManyStatus400Plain
  | AuditLogDeleteManyStatus400Json
  | AuditLogDeleteManyStatus400Json2;

export type AuditLogDeleteManyStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus401 =
  | AuditLogDeleteManyStatus401Plain
  | AuditLogDeleteManyStatus401Json
  | AuditLogDeleteManyStatus401Json2;

export type AuditLogDeleteManyStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus403 =
  | AuditLogDeleteManyStatus403Plain
  | AuditLogDeleteManyStatus403Json
  | AuditLogDeleteManyStatus403Json2;

export type AuditLogDeleteManyStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus404 =
  | AuditLogDeleteManyStatus404Plain
  | AuditLogDeleteManyStatus404Json
  | AuditLogDeleteManyStatus404Json2;

export type AuditLogDeleteManyStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus500 =
  | AuditLogDeleteManyStatus500Plain
  | AuditLogDeleteManyStatus500Json
  | AuditLogDeleteManyStatus500Json2;

export type AuditLogDeleteManyStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteManyStatus501 =
  | AuditLogDeleteManyStatus501Plain
  | AuditLogDeleteManyStatus501Json
  | AuditLogDeleteManyStatus501Json2;

export type AuditLogDeleteManyOptions = {
  body?: never;
  path?: never;
  query?: AuditLogDeleteManyQuery;
  headers?: never;
};

export type AuditLogDeleteManyResponses = {
  "200": AuditLogDeleteManyStatus200;
  "204": AuditLogDeleteManyStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: AuditLogDeleteManyStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogDeleteManyStatus400Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogDeleteManyStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: AuditLogDeleteManyStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogDeleteManyStatus401Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogDeleteManyStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: AuditLogDeleteManyStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogDeleteManyStatus403Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogDeleteManyStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: AuditLogDeleteManyStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogDeleteManyStatus404Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogDeleteManyStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: AuditLogDeleteManyStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogDeleteManyStatus500Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogDeleteManyStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: AuditLogDeleteManyStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogDeleteManyStatus501Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogDeleteManyStatus501Json2;
      };
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
