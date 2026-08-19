/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type TagAdminDeletePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type TagAdminDeleteStatus200 = unknown;

export type TagAdminDeleteStatus204 = unknown;

export type TagAdminDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus400 =
  | TagAdminDeleteStatus400Plain
  | TagAdminDeleteStatus400Json
  | TagAdminDeleteStatus400Json2;

export type TagAdminDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus401 =
  | TagAdminDeleteStatus401Plain
  | TagAdminDeleteStatus401Json
  | TagAdminDeleteStatus401Json2;

export type TagAdminDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus403 =
  | TagAdminDeleteStatus403Plain
  | TagAdminDeleteStatus403Json
  | TagAdminDeleteStatus403Json2;

export type TagAdminDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus404 =
  | TagAdminDeleteStatus404Plain
  | TagAdminDeleteStatus404Json
  | TagAdminDeleteStatus404Json2;

export type TagAdminDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus500 =
  | TagAdminDeleteStatus500Plain
  | TagAdminDeleteStatus500Json
  | TagAdminDeleteStatus500Json2;

export type TagAdminDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus501 =
  | TagAdminDeleteStatus501Plain
  | TagAdminDeleteStatus501Json
  | TagAdminDeleteStatus501Json2;

export type TagAdminDeleteOptions = {
  body?: never;
  path: TagAdminDeletePath;
  query?: never;
  headers?: never;
};

export type TagAdminDeleteResponses = {
  "200": TagAdminDeleteStatus200;
  "204": TagAdminDeleteStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: TagAdminDeleteStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminDeleteStatus400Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminDeleteStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: TagAdminDeleteStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminDeleteStatus401Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminDeleteStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: TagAdminDeleteStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminDeleteStatus403Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminDeleteStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: TagAdminDeleteStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminDeleteStatus404Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminDeleteStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: TagAdminDeleteStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminDeleteStatus500Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminDeleteStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: TagAdminDeleteStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminDeleteStatus501Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminDeleteStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type TagAdminDeleteResponse =
  | TagAdminDeleteStatus200
  | TagAdminDeleteStatus204
  | TagAdminDeleteStatus400
  | TagAdminDeleteStatus401
  | TagAdminDeleteStatus403
  | TagAdminDeleteStatus404
  | TagAdminDeleteStatus500
  | TagAdminDeleteStatus501;
