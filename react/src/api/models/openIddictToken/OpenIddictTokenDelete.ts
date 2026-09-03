/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type OpenIddictTokenDeletePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type OpenIddictTokenDeleteStatus200 = unknown;

export type OpenIddictTokenDeleteStatus204 = unknown;

export type OpenIddictTokenDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus400 =
  | OpenIddictTokenDeleteStatus400Plain
  | OpenIddictTokenDeleteStatus400Json
  | OpenIddictTokenDeleteStatus400Json2;

export type OpenIddictTokenDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus401 =
  | OpenIddictTokenDeleteStatus401Plain
  | OpenIddictTokenDeleteStatus401Json
  | OpenIddictTokenDeleteStatus401Json2;

export type OpenIddictTokenDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus403 =
  | OpenIddictTokenDeleteStatus403Plain
  | OpenIddictTokenDeleteStatus403Json
  | OpenIddictTokenDeleteStatus403Json2;

export type OpenIddictTokenDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus404 =
  | OpenIddictTokenDeleteStatus404Plain
  | OpenIddictTokenDeleteStatus404Json
  | OpenIddictTokenDeleteStatus404Json2;

export type OpenIddictTokenDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus500 =
  | OpenIddictTokenDeleteStatus500Plain
  | OpenIddictTokenDeleteStatus500Json
  | OpenIddictTokenDeleteStatus500Json2;

export type OpenIddictTokenDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenDeleteStatus501 =
  | OpenIddictTokenDeleteStatus501Plain
  | OpenIddictTokenDeleteStatus501Json
  | OpenIddictTokenDeleteStatus501Json2;

export type OpenIddictTokenDeleteOptions = {
  body?: never;
  path: OpenIddictTokenDeletePath;
  query?: never;
  headers?: never;
};

export type OpenIddictTokenDeleteResponses = {
  "200": OpenIddictTokenDeleteStatus200;
  "204": OpenIddictTokenDeleteStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenDeleteStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenDeleteStatus400Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenDeleteStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenDeleteStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenDeleteStatus401Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenDeleteStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenDeleteStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenDeleteStatus403Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenDeleteStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenDeleteStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenDeleteStatus404Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenDeleteStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenDeleteStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenDeleteStatus500Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenDeleteStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenDeleteStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenDeleteStatus501Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenDeleteStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictTokenDeleteResponse =
  | OpenIddictTokenDeleteStatus200
  | OpenIddictTokenDeleteStatus204
  | OpenIddictTokenDeleteStatus400
  | OpenIddictTokenDeleteStatus401
  | OpenIddictTokenDeleteStatus403
  | OpenIddictTokenDeleteStatus404
  | OpenIddictTokenDeleteStatus500
  | OpenIddictTokenDeleteStatus501;
