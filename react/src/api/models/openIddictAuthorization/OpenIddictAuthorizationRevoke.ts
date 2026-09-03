/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type OpenIddictAuthorizationRevokePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type OpenIddictAuthorizationRevokeStatus200 = unknown;

export type OpenIddictAuthorizationRevokeStatus204 = unknown;

export type OpenIddictAuthorizationRevokeStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus400 =
  | OpenIddictAuthorizationRevokeStatus400Plain
  | OpenIddictAuthorizationRevokeStatus400Json
  | OpenIddictAuthorizationRevokeStatus400Json2;

export type OpenIddictAuthorizationRevokeStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus401 =
  | OpenIddictAuthorizationRevokeStatus401Plain
  | OpenIddictAuthorizationRevokeStatus401Json
  | OpenIddictAuthorizationRevokeStatus401Json2;

export type OpenIddictAuthorizationRevokeStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus403 =
  | OpenIddictAuthorizationRevokeStatus403Plain
  | OpenIddictAuthorizationRevokeStatus403Json
  | OpenIddictAuthorizationRevokeStatus403Json2;

export type OpenIddictAuthorizationRevokeStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus404 =
  | OpenIddictAuthorizationRevokeStatus404Plain
  | OpenIddictAuthorizationRevokeStatus404Json
  | OpenIddictAuthorizationRevokeStatus404Json2;

export type OpenIddictAuthorizationRevokeStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus500 =
  | OpenIddictAuthorizationRevokeStatus500Plain
  | OpenIddictAuthorizationRevokeStatus500Json
  | OpenIddictAuthorizationRevokeStatus500Json2;

export type OpenIddictAuthorizationRevokeStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationRevokeStatus501 =
  | OpenIddictAuthorizationRevokeStatus501Plain
  | OpenIddictAuthorizationRevokeStatus501Json
  | OpenIddictAuthorizationRevokeStatus501Json2;

export type OpenIddictAuthorizationRevokeOptions = {
  body?: never;
  path: OpenIddictAuthorizationRevokePath;
  query?: never;
  headers?: never;
};

export type OpenIddictAuthorizationRevokeResponses = {
  "200": OpenIddictAuthorizationRevokeStatus200;
  "204": OpenIddictAuthorizationRevokeStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationRevokeStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationRevokeStatus400Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationRevokeStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationRevokeStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationRevokeStatus401Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationRevokeStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationRevokeStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationRevokeStatus403Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationRevokeStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationRevokeStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationRevokeStatus404Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationRevokeStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationRevokeStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationRevokeStatus500Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationRevokeStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationRevokeStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationRevokeStatus501Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationRevokeStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictAuthorizationRevokeResponse =
  | OpenIddictAuthorizationRevokeStatus200
  | OpenIddictAuthorizationRevokeStatus204
  | OpenIddictAuthorizationRevokeStatus400
  | OpenIddictAuthorizationRevokeStatus401
  | OpenIddictAuthorizationRevokeStatus403
  | OpenIddictAuthorizationRevokeStatus404
  | OpenIddictAuthorizationRevokeStatus500
  | OpenIddictAuthorizationRevokeStatus501;
