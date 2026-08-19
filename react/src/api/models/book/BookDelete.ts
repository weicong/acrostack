/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type BookDeletePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type BookDeleteStatus200 = unknown;

export type BookDeleteStatus204 = unknown;

export type BookDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus400 =
  | BookDeleteStatus400Plain
  | BookDeleteStatus400Json
  | BookDeleteStatus400Json2;

export type BookDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus401 =
  | BookDeleteStatus401Plain
  | BookDeleteStatus401Json
  | BookDeleteStatus401Json2;

export type BookDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus403 =
  | BookDeleteStatus403Plain
  | BookDeleteStatus403Json
  | BookDeleteStatus403Json2;

export type BookDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus404 =
  | BookDeleteStatus404Plain
  | BookDeleteStatus404Json
  | BookDeleteStatus404Json2;

export type BookDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus500 =
  | BookDeleteStatus500Plain
  | BookDeleteStatus500Json
  | BookDeleteStatus500Json2;

export type BookDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus501 =
  | BookDeleteStatus501Plain
  | BookDeleteStatus501Json
  | BookDeleteStatus501Json2;

export type BookDeleteOptions = {
  body?: never;
  path: BookDeletePath;
  query?: never;
  headers?: never;
};

export type BookDeleteResponses = {
  "200": BookDeleteStatus200;
  "204": BookDeleteStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: BookDeleteStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BookDeleteStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BookDeleteStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BookDeleteStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BookDeleteStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BookDeleteStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BookDeleteStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BookDeleteStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BookDeleteStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BookDeleteStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BookDeleteStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BookDeleteStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BookDeleteStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BookDeleteStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BookDeleteStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BookDeleteStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BookDeleteStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BookDeleteStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BookDeleteResponse =
  | BookDeleteStatus200
  | BookDeleteStatus204
  | BookDeleteStatus400
  | BookDeleteStatus401
  | BookDeleteStatus403
  | BookDeleteStatus404
  | BookDeleteStatus500
  | BookDeleteStatus501;
