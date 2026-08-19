/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type AppUserDeletePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type AppUserDeleteStatus200 = unknown;

export type AppUserDeleteStatus204 = unknown;

export type AppUserDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus400 =
  | AppUserDeleteStatus400Plain
  | AppUserDeleteStatus400Json
  | AppUserDeleteStatus400Json2;

export type AppUserDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus401 =
  | AppUserDeleteStatus401Plain
  | AppUserDeleteStatus401Json
  | AppUserDeleteStatus401Json2;

export type AppUserDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus403 =
  | AppUserDeleteStatus403Plain
  | AppUserDeleteStatus403Json
  | AppUserDeleteStatus403Json2;

export type AppUserDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus404 =
  | AppUserDeleteStatus404Plain
  | AppUserDeleteStatus404Json
  | AppUserDeleteStatus404Json2;

export type AppUserDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus500 =
  | AppUserDeleteStatus500Plain
  | AppUserDeleteStatus500Json
  | AppUserDeleteStatus500Json2;

export type AppUserDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus501 =
  | AppUserDeleteStatus501Plain
  | AppUserDeleteStatus501Json
  | AppUserDeleteStatus501Json2;

export type AppUserDeleteOptions = {
  body?: never;
  path: AppUserDeletePath;
  query?: never;
  headers?: never;
};

export type AppUserDeleteResponses = {
  "200": AppUserDeleteStatus200;
  "204": AppUserDeleteStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: AppUserDeleteStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: AppUserDeleteStatus400Json;
      }
    | {
        contentType: "text/json";
        data: AppUserDeleteStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: AppUserDeleteStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: AppUserDeleteStatus401Json;
      }
    | {
        contentType: "text/json";
        data: AppUserDeleteStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: AppUserDeleteStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: AppUserDeleteStatus403Json;
      }
    | {
        contentType: "text/json";
        data: AppUserDeleteStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: AppUserDeleteStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: AppUserDeleteStatus404Json;
      }
    | {
        contentType: "text/json";
        data: AppUserDeleteStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: AppUserDeleteStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: AppUserDeleteStatus500Json;
      }
    | {
        contentType: "text/json";
        data: AppUserDeleteStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: AppUserDeleteStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: AppUserDeleteStatus501Json;
      }
    | {
        contentType: "text/json";
        data: AppUserDeleteStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type AppUserDeleteResponse =
  | AppUserDeleteStatus200
  | AppUserDeleteStatus204
  | AppUserDeleteStatus400
  | AppUserDeleteStatus401
  | AppUserDeleteStatus403
  | AppUserDeleteStatus404
  | AppUserDeleteStatus500
  | AppUserDeleteStatus501;
