/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type BlogAdminDeletePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type BlogAdminDeleteStatus200 = unknown;

export type BlogAdminDeleteStatus204 = unknown;

export type BlogAdminDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus400 =
  | BlogAdminDeleteStatus400Plain
  | BlogAdminDeleteStatus400Json
  | BlogAdminDeleteStatus400Json2;

export type BlogAdminDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus401 =
  | BlogAdminDeleteStatus401Plain
  | BlogAdminDeleteStatus401Json
  | BlogAdminDeleteStatus401Json2;

export type BlogAdminDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus403 =
  | BlogAdminDeleteStatus403Plain
  | BlogAdminDeleteStatus403Json
  | BlogAdminDeleteStatus403Json2;

export type BlogAdminDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus404 =
  | BlogAdminDeleteStatus404Plain
  | BlogAdminDeleteStatus404Json
  | BlogAdminDeleteStatus404Json2;

export type BlogAdminDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus500 =
  | BlogAdminDeleteStatus500Plain
  | BlogAdminDeleteStatus500Json
  | BlogAdminDeleteStatus500Json2;

export type BlogAdminDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus501 =
  | BlogAdminDeleteStatus501Plain
  | BlogAdminDeleteStatus501Json
  | BlogAdminDeleteStatus501Json2;

export type BlogAdminDeleteOptions = {
  body?: never;
  path: BlogAdminDeletePath;
  query?: never;
  headers?: never;
};

export type BlogAdminDeleteResponses = {
  "200": BlogAdminDeleteStatus200;
  "204": BlogAdminDeleteStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: BlogAdminDeleteStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminDeleteStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminDeleteStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BlogAdminDeleteStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminDeleteStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminDeleteStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BlogAdminDeleteStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminDeleteStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminDeleteStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BlogAdminDeleteStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminDeleteStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminDeleteStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BlogAdminDeleteStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminDeleteStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminDeleteStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BlogAdminDeleteStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminDeleteStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminDeleteStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BlogAdminDeleteResponse =
  | BlogAdminDeleteStatus200
  | BlogAdminDeleteStatus204
  | BlogAdminDeleteStatus400
  | BlogAdminDeleteStatus401
  | BlogAdminDeleteStatus403
  | BlogAdminDeleteStatus404
  | BlogAdminDeleteStatus500
  | BlogAdminDeleteStatus501;
