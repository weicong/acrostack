/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type OpenIddictApplicationDeletePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type OpenIddictApplicationDeleteStatus200 = unknown;

export type OpenIddictApplicationDeleteStatus204 = unknown;

export type OpenIddictApplicationDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus400 =
  | OpenIddictApplicationDeleteStatus400Plain
  | OpenIddictApplicationDeleteStatus400Json
  | OpenIddictApplicationDeleteStatus400Json2;

export type OpenIddictApplicationDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus401 =
  | OpenIddictApplicationDeleteStatus401Plain
  | OpenIddictApplicationDeleteStatus401Json
  | OpenIddictApplicationDeleteStatus401Json2;

export type OpenIddictApplicationDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus403 =
  | OpenIddictApplicationDeleteStatus403Plain
  | OpenIddictApplicationDeleteStatus403Json
  | OpenIddictApplicationDeleteStatus403Json2;

export type OpenIddictApplicationDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus404 =
  | OpenIddictApplicationDeleteStatus404Plain
  | OpenIddictApplicationDeleteStatus404Json
  | OpenIddictApplicationDeleteStatus404Json2;

export type OpenIddictApplicationDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus500 =
  | OpenIddictApplicationDeleteStatus500Plain
  | OpenIddictApplicationDeleteStatus500Json
  | OpenIddictApplicationDeleteStatus500Json2;

export type OpenIddictApplicationDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus501 =
  | OpenIddictApplicationDeleteStatus501Plain
  | OpenIddictApplicationDeleteStatus501Json
  | OpenIddictApplicationDeleteStatus501Json2;

export type OpenIddictApplicationDeleteOptions = {
  body?: never;
  path: OpenIddictApplicationDeletePath;
  query?: never;
  headers?: never;
};

export type OpenIddictApplicationDeleteResponses = {
  "200": OpenIddictApplicationDeleteStatus200;
  "204": OpenIddictApplicationDeleteStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationDeleteStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationDeleteStatus400Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationDeleteStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationDeleteStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationDeleteStatus401Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationDeleteStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationDeleteStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationDeleteStatus403Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationDeleteStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationDeleteStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationDeleteStatus404Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationDeleteStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationDeleteStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationDeleteStatus500Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationDeleteStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationDeleteStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationDeleteStatus501Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationDeleteStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictApplicationDeleteResponse =
  | OpenIddictApplicationDeleteStatus200
  | OpenIddictApplicationDeleteStatus204
  | OpenIddictApplicationDeleteStatus400
  | OpenIddictApplicationDeleteStatus401
  | OpenIddictApplicationDeleteStatus403
  | OpenIddictApplicationDeleteStatus404
  | OpenIddictApplicationDeleteStatus500
  | OpenIddictApplicationDeleteStatus501;
