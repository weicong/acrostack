/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type BackgroundJobAbandonPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type BackgroundJobAbandonStatus200 = unknown;

export type BackgroundJobAbandonStatus204 = unknown;

export type BackgroundJobAbandonStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus400 =
  | BackgroundJobAbandonStatus400Plain
  | BackgroundJobAbandonStatus400Json
  | BackgroundJobAbandonStatus400Json2;

export type BackgroundJobAbandonStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus401 =
  | BackgroundJobAbandonStatus401Plain
  | BackgroundJobAbandonStatus401Json
  | BackgroundJobAbandonStatus401Json2;

export type BackgroundJobAbandonStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus403 =
  | BackgroundJobAbandonStatus403Plain
  | BackgroundJobAbandonStatus403Json
  | BackgroundJobAbandonStatus403Json2;

export type BackgroundJobAbandonStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus404 =
  | BackgroundJobAbandonStatus404Plain
  | BackgroundJobAbandonStatus404Json
  | BackgroundJobAbandonStatus404Json2;

export type BackgroundJobAbandonStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus500 =
  | BackgroundJobAbandonStatus500Plain
  | BackgroundJobAbandonStatus500Json
  | BackgroundJobAbandonStatus500Json2;

export type BackgroundJobAbandonStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus501 =
  | BackgroundJobAbandonStatus501Plain
  | BackgroundJobAbandonStatus501Json
  | BackgroundJobAbandonStatus501Json2;

export type BackgroundJobAbandonOptions = {
  body?: never;
  path: BackgroundJobAbandonPath;
  query?: never;
  headers?: never;
};

export type BackgroundJobAbandonResponses = {
  "200": BackgroundJobAbandonStatus200;
  "204": BackgroundJobAbandonStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: BackgroundJobAbandonStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BackgroundJobAbandonStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BackgroundJobAbandonStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BackgroundJobAbandonStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BackgroundJobAbandonStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BackgroundJobAbandonStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BackgroundJobAbandonStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BackgroundJobAbandonStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BackgroundJobAbandonStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BackgroundJobAbandonStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BackgroundJobAbandonStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BackgroundJobAbandonStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BackgroundJobAbandonStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BackgroundJobAbandonStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BackgroundJobAbandonStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BackgroundJobAbandonStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BackgroundJobAbandonStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BackgroundJobAbandonStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BackgroundJobAbandonResponse =
  | BackgroundJobAbandonStatus200
  | BackgroundJobAbandonStatus204
  | BackgroundJobAbandonStatus400
  | BackgroundJobAbandonStatus401
  | BackgroundJobAbandonStatus403
  | BackgroundJobAbandonStatus404
  | BackgroundJobAbandonStatus500
  | BackgroundJobAbandonStatus501;
