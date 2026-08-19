/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type AuditLogGetListToExcelQuery = {
  Filter?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  UserId?: string;
  HttpMethod?: string;
  Url?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  StartTime?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  EndTime?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  HttpStatusCode?: number;
  HasException?: boolean;
  Sorting?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  SkipCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  MaxResultCount?: number;
};

export type AuditLogGetListToExcelStatus200Plain = Blob;

export type AuditLogGetListToExcelStatus200Json = Blob;

export type AuditLogGetListToExcelStatus200Json2 = Blob;

export type AuditLogGetListToExcelStatus200 =
  | AuditLogGetListToExcelStatus200Plain
  | AuditLogGetListToExcelStatus200Json
  | AuditLogGetListToExcelStatus200Json2;

export type AuditLogGetListToExcelStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus400 =
  | AuditLogGetListToExcelStatus400Plain
  | AuditLogGetListToExcelStatus400Json
  | AuditLogGetListToExcelStatus400Json2;

export type AuditLogGetListToExcelStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus401 =
  | AuditLogGetListToExcelStatus401Plain
  | AuditLogGetListToExcelStatus401Json
  | AuditLogGetListToExcelStatus401Json2;

export type AuditLogGetListToExcelStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus403 =
  | AuditLogGetListToExcelStatus403Plain
  | AuditLogGetListToExcelStatus403Json
  | AuditLogGetListToExcelStatus403Json2;

export type AuditLogGetListToExcelStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus404 =
  | AuditLogGetListToExcelStatus404Plain
  | AuditLogGetListToExcelStatus404Json
  | AuditLogGetListToExcelStatus404Json2;

export type AuditLogGetListToExcelStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus500 =
  | AuditLogGetListToExcelStatus500Plain
  | AuditLogGetListToExcelStatus500Json
  | AuditLogGetListToExcelStatus500Json2;

export type AuditLogGetListToExcelStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListToExcelStatus501 =
  | AuditLogGetListToExcelStatus501Plain
  | AuditLogGetListToExcelStatus501Json
  | AuditLogGetListToExcelStatus501Json2;

export type AuditLogGetListToExcelOptions = {
  body?: never;
  path?: never;
  query?: AuditLogGetListToExcelQuery;
  headers?: never;
};

export type AuditLogGetListToExcelResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: AuditLogGetListToExcelStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetListToExcelStatus200Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetListToExcelStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: AuditLogGetListToExcelStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetListToExcelStatus400Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetListToExcelStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: AuditLogGetListToExcelStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetListToExcelStatus401Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetListToExcelStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: AuditLogGetListToExcelStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetListToExcelStatus403Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetListToExcelStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: AuditLogGetListToExcelStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetListToExcelStatus404Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetListToExcelStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: AuditLogGetListToExcelStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetListToExcelStatus500Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetListToExcelStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: AuditLogGetListToExcelStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetListToExcelStatus501Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetListToExcelStatus501Json2;
      };
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
