/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type CommentPublicDeletePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type CommentPublicDeleteStatus200 = unknown;

export type CommentPublicDeleteStatus204 = unknown;

export type CommentPublicDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus400 =
  | CommentPublicDeleteStatus400Plain
  | CommentPublicDeleteStatus400Json
  | CommentPublicDeleteStatus400Json2;

export type CommentPublicDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus401 =
  | CommentPublicDeleteStatus401Plain
  | CommentPublicDeleteStatus401Json
  | CommentPublicDeleteStatus401Json2;

export type CommentPublicDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus403 =
  | CommentPublicDeleteStatus403Plain
  | CommentPublicDeleteStatus403Json
  | CommentPublicDeleteStatus403Json2;

export type CommentPublicDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus404 =
  | CommentPublicDeleteStatus404Plain
  | CommentPublicDeleteStatus404Json
  | CommentPublicDeleteStatus404Json2;

export type CommentPublicDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus500 =
  | CommentPublicDeleteStatus500Plain
  | CommentPublicDeleteStatus500Json
  | CommentPublicDeleteStatus500Json2;

export type CommentPublicDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicDeleteStatus501 =
  | CommentPublicDeleteStatus501Plain
  | CommentPublicDeleteStatus501Json
  | CommentPublicDeleteStatus501Json2;

export type CommentPublicDeleteOptions = {
  body?: never;
  path: CommentPublicDeletePath;
  query?: never;
  headers?: never;
};

export type CommentPublicDeleteResponses = {
  "200": CommentPublicDeleteStatus200;
  "204": CommentPublicDeleteStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: CommentPublicDeleteStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: CommentPublicDeleteStatus400Json;
      }
    | {
        contentType: "text/json";
        data: CommentPublicDeleteStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: CommentPublicDeleteStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: CommentPublicDeleteStatus401Json;
      }
    | {
        contentType: "text/json";
        data: CommentPublicDeleteStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: CommentPublicDeleteStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: CommentPublicDeleteStatus403Json;
      }
    | {
        contentType: "text/json";
        data: CommentPublicDeleteStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: CommentPublicDeleteStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: CommentPublicDeleteStatus404Json;
      }
    | {
        contentType: "text/json";
        data: CommentPublicDeleteStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: CommentPublicDeleteStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: CommentPublicDeleteStatus500Json;
      }
    | {
        contentType: "text/json";
        data: CommentPublicDeleteStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: CommentPublicDeleteStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: CommentPublicDeleteStatus501Json;
      }
    | {
        contentType: "text/json";
        data: CommentPublicDeleteStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type CommentPublicDeleteResponse =
  | CommentPublicDeleteStatus200
  | CommentPublicDeleteStatus204
  | CommentPublicDeleteStatus400
  | CommentPublicDeleteStatus401
  | CommentPublicDeleteStatus403
  | CommentPublicDeleteStatus404
  | CommentPublicDeleteStatus500
  | CommentPublicDeleteStatus501;
