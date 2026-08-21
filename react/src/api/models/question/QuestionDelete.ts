/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type QuestionDeletePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type QuestionDeleteStatus200 = unknown;

export type QuestionDeleteStatus204 = unknown;

export type QuestionDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus400 =
  | QuestionDeleteStatus400Plain
  | QuestionDeleteStatus400Json
  | QuestionDeleteStatus400Json2;

export type QuestionDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus401 =
  | QuestionDeleteStatus401Plain
  | QuestionDeleteStatus401Json
  | QuestionDeleteStatus401Json2;

export type QuestionDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus403 =
  | QuestionDeleteStatus403Plain
  | QuestionDeleteStatus403Json
  | QuestionDeleteStatus403Json2;

export type QuestionDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus404 =
  | QuestionDeleteStatus404Plain
  | QuestionDeleteStatus404Json
  | QuestionDeleteStatus404Json2;

export type QuestionDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus500 =
  | QuestionDeleteStatus500Plain
  | QuestionDeleteStatus500Json
  | QuestionDeleteStatus500Json2;

export type QuestionDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionDeleteStatus501 =
  | QuestionDeleteStatus501Plain
  | QuestionDeleteStatus501Json
  | QuestionDeleteStatus501Json2;

export type QuestionDeleteOptions = {
  body?: never;
  path: QuestionDeletePath;
  query?: never;
  headers?: never;
};

export type QuestionDeleteResponses = {
  "200": QuestionDeleteStatus200;
  "204": QuestionDeleteStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: QuestionDeleteStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionDeleteStatus400Json;
      }
    | {
        contentType: "text/json";
        data: QuestionDeleteStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: QuestionDeleteStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionDeleteStatus401Json;
      }
    | {
        contentType: "text/json";
        data: QuestionDeleteStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: QuestionDeleteStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionDeleteStatus403Json;
      }
    | {
        contentType: "text/json";
        data: QuestionDeleteStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: QuestionDeleteStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionDeleteStatus404Json;
      }
    | {
        contentType: "text/json";
        data: QuestionDeleteStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: QuestionDeleteStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionDeleteStatus500Json;
      }
    | {
        contentType: "text/json";
        data: QuestionDeleteStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: QuestionDeleteStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionDeleteStatus501Json;
      }
    | {
        contentType: "text/json";
        data: QuestionDeleteStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type QuestionDeleteResponse =
  | QuestionDeleteStatus200
  | QuestionDeleteStatus204
  | QuestionDeleteStatus400
  | QuestionDeleteStatus401
  | QuestionDeleteStatus403
  | QuestionDeleteStatus404
  | QuestionDeleteStatus500
  | QuestionDeleteStatus501;
