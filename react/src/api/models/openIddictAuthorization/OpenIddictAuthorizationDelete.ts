/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type OpenIddictAuthorizationDeletePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type OpenIddictAuthorizationDeleteStatus200 = unknown;

export type OpenIddictAuthorizationDeleteStatus204 = unknown;

export type OpenIddictAuthorizationDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus400 =
  | OpenIddictAuthorizationDeleteStatus400Plain
  | OpenIddictAuthorizationDeleteStatus400Json
  | OpenIddictAuthorizationDeleteStatus400Json2;

export type OpenIddictAuthorizationDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus401 =
  | OpenIddictAuthorizationDeleteStatus401Plain
  | OpenIddictAuthorizationDeleteStatus401Json
  | OpenIddictAuthorizationDeleteStatus401Json2;

export type OpenIddictAuthorizationDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus403 =
  | OpenIddictAuthorizationDeleteStatus403Plain
  | OpenIddictAuthorizationDeleteStatus403Json
  | OpenIddictAuthorizationDeleteStatus403Json2;

export type OpenIddictAuthorizationDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus404 =
  | OpenIddictAuthorizationDeleteStatus404Plain
  | OpenIddictAuthorizationDeleteStatus404Json
  | OpenIddictAuthorizationDeleteStatus404Json2;

export type OpenIddictAuthorizationDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus500 =
  | OpenIddictAuthorizationDeleteStatus500Plain
  | OpenIddictAuthorizationDeleteStatus500Json
  | OpenIddictAuthorizationDeleteStatus500Json2;

export type OpenIddictAuthorizationDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationDeleteStatus501 =
  | OpenIddictAuthorizationDeleteStatus501Plain
  | OpenIddictAuthorizationDeleteStatus501Json
  | OpenIddictAuthorizationDeleteStatus501Json2;

export type OpenIddictAuthorizationDeleteOptions = {
  body?: never;
  path: OpenIddictAuthorizationDeletePath;
  query?: never;
  headers?: never;
};

export type OpenIddictAuthorizationDeleteResponses = {
  "200": OpenIddictAuthorizationDeleteStatus200;
  "204": OpenIddictAuthorizationDeleteStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationDeleteStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationDeleteStatus400Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationDeleteStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationDeleteStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationDeleteStatus401Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationDeleteStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationDeleteStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationDeleteStatus403Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationDeleteStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationDeleteStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationDeleteStatus404Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationDeleteStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationDeleteStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationDeleteStatus500Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationDeleteStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationDeleteStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationDeleteStatus501Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationDeleteStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictAuthorizationDeleteResponse =
  | OpenIddictAuthorizationDeleteStatus200
  | OpenIddictAuthorizationDeleteStatus204
  | OpenIddictAuthorizationDeleteStatus400
  | OpenIddictAuthorizationDeleteStatus401
  | OpenIddictAuthorizationDeleteStatus403
  | OpenIddictAuthorizationDeleteStatus404
  | OpenIddictAuthorizationDeleteStatus500
  | OpenIddictAuthorizationDeleteStatus501;
