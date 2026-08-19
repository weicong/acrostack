/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type TenantUpdateDefaultConnectionStringPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type TenantUpdateDefaultConnectionStringQuery = {
  defaultConnectionString?: string;
};

export type TenantUpdateDefaultConnectionStringStatus200 = unknown;

export type TenantUpdateDefaultConnectionStringStatus204 = unknown;

export type TenantUpdateDefaultConnectionStringStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus400Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus400 =
  | TenantUpdateDefaultConnectionStringStatus400Plain
  | TenantUpdateDefaultConnectionStringStatus400Json
  | TenantUpdateDefaultConnectionStringStatus400Json2;

export type TenantUpdateDefaultConnectionStringStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus401Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus401 =
  | TenantUpdateDefaultConnectionStringStatus401Plain
  | TenantUpdateDefaultConnectionStringStatus401Json
  | TenantUpdateDefaultConnectionStringStatus401Json2;

export type TenantUpdateDefaultConnectionStringStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus403Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus403 =
  | TenantUpdateDefaultConnectionStringStatus403Plain
  | TenantUpdateDefaultConnectionStringStatus403Json
  | TenantUpdateDefaultConnectionStringStatus403Json2;

export type TenantUpdateDefaultConnectionStringStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus404Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus404 =
  | TenantUpdateDefaultConnectionStringStatus404Plain
  | TenantUpdateDefaultConnectionStringStatus404Json
  | TenantUpdateDefaultConnectionStringStatus404Json2;

export type TenantUpdateDefaultConnectionStringStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus500Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus500 =
  | TenantUpdateDefaultConnectionStringStatus500Plain
  | TenantUpdateDefaultConnectionStringStatus500Json
  | TenantUpdateDefaultConnectionStringStatus500Json2;

export type TenantUpdateDefaultConnectionStringStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus501Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus501 =
  | TenantUpdateDefaultConnectionStringStatus501Plain
  | TenantUpdateDefaultConnectionStringStatus501Json
  | TenantUpdateDefaultConnectionStringStatus501Json2;

export type TenantUpdateDefaultConnectionStringOptions = {
  body?: never;
  path: TenantUpdateDefaultConnectionStringPath;
  query?: TenantUpdateDefaultConnectionStringQuery;
  headers?: never;
};

export type TenantUpdateDefaultConnectionStringResponses = {
  "200": TenantUpdateDefaultConnectionStringStatus200;
  "204": TenantUpdateDefaultConnectionStringStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: TenantUpdateDefaultConnectionStringStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: TenantUpdateDefaultConnectionStringStatus400Json;
      }
    | {
        contentType: "text/json";
        data: TenantUpdateDefaultConnectionStringStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: TenantUpdateDefaultConnectionStringStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: TenantUpdateDefaultConnectionStringStatus401Json;
      }
    | {
        contentType: "text/json";
        data: TenantUpdateDefaultConnectionStringStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: TenantUpdateDefaultConnectionStringStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: TenantUpdateDefaultConnectionStringStatus403Json;
      }
    | {
        contentType: "text/json";
        data: TenantUpdateDefaultConnectionStringStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: TenantUpdateDefaultConnectionStringStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: TenantUpdateDefaultConnectionStringStatus404Json;
      }
    | {
        contentType: "text/json";
        data: TenantUpdateDefaultConnectionStringStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: TenantUpdateDefaultConnectionStringStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: TenantUpdateDefaultConnectionStringStatus500Json;
      }
    | {
        contentType: "text/json";
        data: TenantUpdateDefaultConnectionStringStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: TenantUpdateDefaultConnectionStringStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: TenantUpdateDefaultConnectionStringStatus501Json;
      }
    | {
        contentType: "text/json";
        data: TenantUpdateDefaultConnectionStringStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type TenantUpdateDefaultConnectionStringResponse =
  | TenantUpdateDefaultConnectionStringStatus200
  | TenantUpdateDefaultConnectionStringStatus204
  | TenantUpdateDefaultConnectionStringStatus400
  | TenantUpdateDefaultConnectionStringStatus401
  | TenantUpdateDefaultConnectionStringStatus403
  | TenantUpdateDefaultConnectionStringStatus404
  | TenantUpdateDefaultConnectionStringStatus500
  | TenantUpdateDefaultConnectionStringStatus501;
