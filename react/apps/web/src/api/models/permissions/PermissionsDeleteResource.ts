/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type PermissionsDeleteResourceQuery = {
  resourceName?: string;
  resourceKey?: string;
  providerName?: string;
  providerKey?: string;
};

export type PermissionsDeleteResourceStatus200 = unknown;

export type PermissionsDeleteResourceStatus204 = unknown;

export type PermissionsDeleteResourceStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus400 =
  | PermissionsDeleteResourceStatus400Plain
  | PermissionsDeleteResourceStatus400Json
  | PermissionsDeleteResourceStatus400Json2;

export type PermissionsDeleteResourceStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus401 =
  | PermissionsDeleteResourceStatus401Plain
  | PermissionsDeleteResourceStatus401Json
  | PermissionsDeleteResourceStatus401Json2;

export type PermissionsDeleteResourceStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus403 =
  | PermissionsDeleteResourceStatus403Plain
  | PermissionsDeleteResourceStatus403Json
  | PermissionsDeleteResourceStatus403Json2;

export type PermissionsDeleteResourceStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus404 =
  | PermissionsDeleteResourceStatus404Plain
  | PermissionsDeleteResourceStatus404Json
  | PermissionsDeleteResourceStatus404Json2;

export type PermissionsDeleteResourceStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus500 =
  | PermissionsDeleteResourceStatus500Plain
  | PermissionsDeleteResourceStatus500Json
  | PermissionsDeleteResourceStatus500Json2;

export type PermissionsDeleteResourceStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus501 =
  | PermissionsDeleteResourceStatus501Plain
  | PermissionsDeleteResourceStatus501Json
  | PermissionsDeleteResourceStatus501Json2;

export type PermissionsDeleteResourceOptions = {
  body?: never;
  path?: never;
  query?: PermissionsDeleteResourceQuery;
  headers?: never;
};

export type PermissionsDeleteResourceResponses = {
  "200": PermissionsDeleteResourceStatus200;
  "204": PermissionsDeleteResourceStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: PermissionsDeleteResourceStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsDeleteResourceStatus400Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsDeleteResourceStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: PermissionsDeleteResourceStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsDeleteResourceStatus401Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsDeleteResourceStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: PermissionsDeleteResourceStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsDeleteResourceStatus403Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsDeleteResourceStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: PermissionsDeleteResourceStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsDeleteResourceStatus404Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsDeleteResourceStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: PermissionsDeleteResourceStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsDeleteResourceStatus500Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsDeleteResourceStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: PermissionsDeleteResourceStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsDeleteResourceStatus501Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsDeleteResourceStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type PermissionsDeleteResourceResponse =
  | PermissionsDeleteResourceStatus200
  | PermissionsDeleteResourceStatus204
  | PermissionsDeleteResourceStatus400
  | PermissionsDeleteResourceStatus401
  | PermissionsDeleteResourceStatus403
  | PermissionsDeleteResourceStatus404
  | PermissionsDeleteResourceStatus500
  | PermissionsDeleteResourceStatus501;
