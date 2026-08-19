/* oxlint-disable */

import type { AcroStackAuditLoggingAuditLogStatisticsDto } from "../acroStack/auditLogging/AuditLogStatisticsDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type AuditLogGetStatisticsQuery = {
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
  TopCount?: number;
};

export type AuditLogGetStatisticsStatus200Plain = AcroStackAuditLoggingAuditLogStatisticsDto;

export type AuditLogGetStatisticsStatus200Json = AcroStackAuditLoggingAuditLogStatisticsDto;

export type AuditLogGetStatisticsStatus200Json2 = AcroStackAuditLoggingAuditLogStatisticsDto;

export type AuditLogGetStatisticsStatus200 =
  | AuditLogGetStatisticsStatus200Plain
  | AuditLogGetStatisticsStatus200Json
  | AuditLogGetStatisticsStatus200Json2;

export type AuditLogGetStatisticsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus400 =
  | AuditLogGetStatisticsStatus400Plain
  | AuditLogGetStatisticsStatus400Json
  | AuditLogGetStatisticsStatus400Json2;

export type AuditLogGetStatisticsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus401 =
  | AuditLogGetStatisticsStatus401Plain
  | AuditLogGetStatisticsStatus401Json
  | AuditLogGetStatisticsStatus401Json2;

export type AuditLogGetStatisticsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus403 =
  | AuditLogGetStatisticsStatus403Plain
  | AuditLogGetStatisticsStatus403Json
  | AuditLogGetStatisticsStatus403Json2;

export type AuditLogGetStatisticsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus404 =
  | AuditLogGetStatisticsStatus404Plain
  | AuditLogGetStatisticsStatus404Json
  | AuditLogGetStatisticsStatus404Json2;

export type AuditLogGetStatisticsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus500 =
  | AuditLogGetStatisticsStatus500Plain
  | AuditLogGetStatisticsStatus500Json
  | AuditLogGetStatisticsStatus500Json2;

export type AuditLogGetStatisticsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatisticsStatus501 =
  | AuditLogGetStatisticsStatus501Plain
  | AuditLogGetStatisticsStatus501Json
  | AuditLogGetStatisticsStatus501Json2;

export type AuditLogGetStatisticsOptions = {
  body?: never;
  path?: never;
  query?: AuditLogGetStatisticsQuery;
  headers?: never;
};

export type AuditLogGetStatisticsResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: AuditLogGetStatisticsStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetStatisticsStatus200Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetStatisticsStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: AuditLogGetStatisticsStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetStatisticsStatus400Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetStatisticsStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: AuditLogGetStatisticsStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetStatisticsStatus401Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetStatisticsStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: AuditLogGetStatisticsStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetStatisticsStatus403Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetStatisticsStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: AuditLogGetStatisticsStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetStatisticsStatus404Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetStatisticsStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: AuditLogGetStatisticsStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetStatisticsStatus500Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetStatisticsStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: AuditLogGetStatisticsStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetStatisticsStatus501Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetStatisticsStatus501Json2;
      };
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
