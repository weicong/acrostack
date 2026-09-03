/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type OpenIddictTokenRevokePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type OpenIddictTokenRevokeStatus200 = unknown;

export type OpenIddictTokenRevokeStatus204 = unknown;

export type OpenIddictTokenRevokeStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus400 =
  | OpenIddictTokenRevokeStatus400Plain
  | OpenIddictTokenRevokeStatus400Json
  | OpenIddictTokenRevokeStatus400Json2;

export type OpenIddictTokenRevokeStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus401 =
  | OpenIddictTokenRevokeStatus401Plain
  | OpenIddictTokenRevokeStatus401Json
  | OpenIddictTokenRevokeStatus401Json2;

export type OpenIddictTokenRevokeStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus403 =
  | OpenIddictTokenRevokeStatus403Plain
  | OpenIddictTokenRevokeStatus403Json
  | OpenIddictTokenRevokeStatus403Json2;

export type OpenIddictTokenRevokeStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus404 =
  | OpenIddictTokenRevokeStatus404Plain
  | OpenIddictTokenRevokeStatus404Json
  | OpenIddictTokenRevokeStatus404Json2;

export type OpenIddictTokenRevokeStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus500 =
  | OpenIddictTokenRevokeStatus500Plain
  | OpenIddictTokenRevokeStatus500Json
  | OpenIddictTokenRevokeStatus500Json2;

export type OpenIddictTokenRevokeStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenRevokeStatus501 =
  | OpenIddictTokenRevokeStatus501Plain
  | OpenIddictTokenRevokeStatus501Json
  | OpenIddictTokenRevokeStatus501Json2;

export type OpenIddictTokenRevokeOptions = {
  body?: never;
  path: OpenIddictTokenRevokePath;
  query?: never;
  headers?: never;
};

export type OpenIddictTokenRevokeResponses = {
  "200": OpenIddictTokenRevokeStatus200;
  "204": OpenIddictTokenRevokeStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenRevokeStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenRevokeStatus400Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenRevokeStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenRevokeStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenRevokeStatus401Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenRevokeStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenRevokeStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenRevokeStatus403Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenRevokeStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenRevokeStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenRevokeStatus404Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenRevokeStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenRevokeStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenRevokeStatus500Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenRevokeStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenRevokeStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenRevokeStatus501Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenRevokeStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictTokenRevokeResponse =
  | OpenIddictTokenRevokeStatus200
  | OpenIddictTokenRevokeStatus204
  | OpenIddictTokenRevokeStatus400
  | OpenIddictTokenRevokeStatus401
  | OpenIddictTokenRevokeStatus403
  | OpenIddictTokenRevokeStatus404
  | OpenIddictTokenRevokeStatus500
  | OpenIddictTokenRevokeStatus501;
