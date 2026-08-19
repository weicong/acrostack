/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackAuditLoggingEntityChangeDetailDtoAcroStackAuditLoggingVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1AcroStack/auditLogging/entityChangeDetailDtoAcroStack/AuditLoggingVersion1000CultureneutralPublicKeyTokennull";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type AuditLogGetEntityChangesPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  auditLogId: string;
};

export type AuditLogGetEntityChangesStatus200Plain =
  VoloAbpApplicationDtosListResultDto1AcroStackAuditLoggingEntityChangeDetailDtoAcroStackAuditLoggingVersion1000CultureneutralPublicKeyTokennull;

export type AuditLogGetEntityChangesStatus200Json =
  VoloAbpApplicationDtosListResultDto1AcroStackAuditLoggingEntityChangeDetailDtoAcroStackAuditLoggingVersion1000CultureneutralPublicKeyTokennull;

export type AuditLogGetEntityChangesStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1AcroStackAuditLoggingEntityChangeDetailDtoAcroStackAuditLoggingVersion1000CultureneutralPublicKeyTokennull;

export type AuditLogGetEntityChangesStatus200 =
  | AuditLogGetEntityChangesStatus200Plain
  | AuditLogGetEntityChangesStatus200Json
  | AuditLogGetEntityChangesStatus200Json2;

export type AuditLogGetEntityChangesStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus400 =
  | AuditLogGetEntityChangesStatus400Plain
  | AuditLogGetEntityChangesStatus400Json
  | AuditLogGetEntityChangesStatus400Json2;

export type AuditLogGetEntityChangesStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus401 =
  | AuditLogGetEntityChangesStatus401Plain
  | AuditLogGetEntityChangesStatus401Json
  | AuditLogGetEntityChangesStatus401Json2;

export type AuditLogGetEntityChangesStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus403 =
  | AuditLogGetEntityChangesStatus403Plain
  | AuditLogGetEntityChangesStatus403Json
  | AuditLogGetEntityChangesStatus403Json2;

export type AuditLogGetEntityChangesStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus404 =
  | AuditLogGetEntityChangesStatus404Plain
  | AuditLogGetEntityChangesStatus404Json
  | AuditLogGetEntityChangesStatus404Json2;

export type AuditLogGetEntityChangesStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus500 =
  | AuditLogGetEntityChangesStatus500Plain
  | AuditLogGetEntityChangesStatus500Json
  | AuditLogGetEntityChangesStatus500Json2;

export type AuditLogGetEntityChangesStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangesStatus501 =
  | AuditLogGetEntityChangesStatus501Plain
  | AuditLogGetEntityChangesStatus501Json
  | AuditLogGetEntityChangesStatus501Json2;

export type AuditLogGetEntityChangesOptions = {
  body?: never;
  path: AuditLogGetEntityChangesPath;
  query?: never;
  headers?: never;
};

export type AuditLogGetEntityChangesResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: AuditLogGetEntityChangesStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetEntityChangesStatus200Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetEntityChangesStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: AuditLogGetEntityChangesStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetEntityChangesStatus400Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetEntityChangesStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: AuditLogGetEntityChangesStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetEntityChangesStatus401Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetEntityChangesStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: AuditLogGetEntityChangesStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetEntityChangesStatus403Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetEntityChangesStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: AuditLogGetEntityChangesStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetEntityChangesStatus404Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetEntityChangesStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: AuditLogGetEntityChangesStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetEntityChangesStatus500Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetEntityChangesStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: AuditLogGetEntityChangesStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: AuditLogGetEntityChangesStatus501Json;
      }
    | {
        contentType: "text/json";
        data: AuditLogGetEntityChangesStatus501Json2;
      };
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
