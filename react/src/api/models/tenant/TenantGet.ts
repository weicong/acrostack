/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpTenantManagementTenantDto } from "../volo/abp/tenantManagement/TenantDto";

export type TenantGetPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type TenantGetStatus200Plain = VoloAbpTenantManagementTenantDto;

export type TenantGetStatus200Json = VoloAbpTenantManagementTenantDto;

export type TenantGetStatus200Json2 = VoloAbpTenantManagementTenantDto;

export type TenantGetStatus200 =
  | TenantGetStatus200Plain
  | TenantGetStatus200Json
  | TenantGetStatus200Json2;

export type TenantGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus400 =
  | TenantGetStatus400Plain
  | TenantGetStatus400Json
  | TenantGetStatus400Json2;

export type TenantGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus401 =
  | TenantGetStatus401Plain
  | TenantGetStatus401Json
  | TenantGetStatus401Json2;

export type TenantGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus403 =
  | TenantGetStatus403Plain
  | TenantGetStatus403Json
  | TenantGetStatus403Json2;

export type TenantGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus404 =
  | TenantGetStatus404Plain
  | TenantGetStatus404Json
  | TenantGetStatus404Json2;

export type TenantGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus500 =
  | TenantGetStatus500Plain
  | TenantGetStatus500Json
  | TenantGetStatus500Json2;

export type TenantGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus501 =
  | TenantGetStatus501Plain
  | TenantGetStatus501Json
  | TenantGetStatus501Json2;

export type TenantGetOptions = {
  body?: never;
  path: TenantGetPath;
  query?: never;
  headers?: never;
};

export type TenantGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: TenantGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: TenantGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: TenantGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: TenantGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: TenantGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: TenantGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: TenantGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: TenantGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: TenantGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: TenantGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: TenantGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: TenantGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: TenantGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: TenantGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: TenantGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: TenantGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: TenantGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: TenantGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: TenantGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: TenantGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: TenantGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type TenantGetResponse =
  | TenantGetStatus200
  | TenantGetStatus400
  | TenantGetStatus401
  | TenantGetStatus403
  | TenantGetStatus404
  | TenantGetStatus500
  | TenantGetStatus501;
