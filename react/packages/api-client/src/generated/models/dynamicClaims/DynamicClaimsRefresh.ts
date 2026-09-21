/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type DynamicClaimsRefreshStatus200 = unknown;

export type DynamicClaimsRefreshStatus204 = unknown;

export type DynamicClaimsRefreshStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus400 =
  | DynamicClaimsRefreshStatus400Plain
  | DynamicClaimsRefreshStatus400Json
  | DynamicClaimsRefreshStatus400Json2;

export type DynamicClaimsRefreshStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus401 =
  | DynamicClaimsRefreshStatus401Plain
  | DynamicClaimsRefreshStatus401Json
  | DynamicClaimsRefreshStatus401Json2;

export type DynamicClaimsRefreshStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus403 =
  | DynamicClaimsRefreshStatus403Plain
  | DynamicClaimsRefreshStatus403Json
  | DynamicClaimsRefreshStatus403Json2;

export type DynamicClaimsRefreshStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus404 =
  | DynamicClaimsRefreshStatus404Plain
  | DynamicClaimsRefreshStatus404Json
  | DynamicClaimsRefreshStatus404Json2;

export type DynamicClaimsRefreshStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus500 =
  | DynamicClaimsRefreshStatus500Plain
  | DynamicClaimsRefreshStatus500Json
  | DynamicClaimsRefreshStatus500Json2;

export type DynamicClaimsRefreshStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus501 =
  | DynamicClaimsRefreshStatus501Plain
  | DynamicClaimsRefreshStatus501Json
  | DynamicClaimsRefreshStatus501Json2;

export type DynamicClaimsRefreshOptions = {
  body?: never;
  path?: never;
  query?: never;
  headers?: never;
};

export type DynamicClaimsRefreshResponses = {
  "200": DynamicClaimsRefreshStatus200;
  "204": DynamicClaimsRefreshStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: DynamicClaimsRefreshStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: DynamicClaimsRefreshStatus400Json;
      }
    | {
        contentType: "text/json";
        data: DynamicClaimsRefreshStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: DynamicClaimsRefreshStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: DynamicClaimsRefreshStatus401Json;
      }
    | {
        contentType: "text/json";
        data: DynamicClaimsRefreshStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: DynamicClaimsRefreshStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: DynamicClaimsRefreshStatus403Json;
      }
    | {
        contentType: "text/json";
        data: DynamicClaimsRefreshStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: DynamicClaimsRefreshStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: DynamicClaimsRefreshStatus404Json;
      }
    | {
        contentType: "text/json";
        data: DynamicClaimsRefreshStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: DynamicClaimsRefreshStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: DynamicClaimsRefreshStatus500Json;
      }
    | {
        contentType: "text/json";
        data: DynamicClaimsRefreshStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: DynamicClaimsRefreshStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: DynamicClaimsRefreshStatus501Json;
      }
    | {
        contentType: "text/json";
        data: DynamicClaimsRefreshStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type DynamicClaimsRefreshResponse =
  | DynamicClaimsRefreshStatus200
  | DynamicClaimsRefreshStatus204
  | DynamicClaimsRefreshStatus400
  | DynamicClaimsRefreshStatus401
  | DynamicClaimsRefreshStatus403
  | DynamicClaimsRefreshStatus404
  | DynamicClaimsRefreshStatus500
  | DynamicClaimsRefreshStatus501;
