/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ReactionPublicDeletePath = {
  entityType: string;
  entityId: string;
  reaction: string;
};

export type ReactionPublicDeleteStatus200 = unknown;

export type ReactionPublicDeleteStatus204 = unknown;

export type ReactionPublicDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus400 =
  | ReactionPublicDeleteStatus400Plain
  | ReactionPublicDeleteStatus400Json
  | ReactionPublicDeleteStatus400Json2;

export type ReactionPublicDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus401 =
  | ReactionPublicDeleteStatus401Plain
  | ReactionPublicDeleteStatus401Json
  | ReactionPublicDeleteStatus401Json2;

export type ReactionPublicDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus403 =
  | ReactionPublicDeleteStatus403Plain
  | ReactionPublicDeleteStatus403Json
  | ReactionPublicDeleteStatus403Json2;

export type ReactionPublicDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus404 =
  | ReactionPublicDeleteStatus404Plain
  | ReactionPublicDeleteStatus404Json
  | ReactionPublicDeleteStatus404Json2;

export type ReactionPublicDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus500 =
  | ReactionPublicDeleteStatus500Plain
  | ReactionPublicDeleteStatus500Json
  | ReactionPublicDeleteStatus500Json2;

export type ReactionPublicDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicDeleteStatus501 =
  | ReactionPublicDeleteStatus501Plain
  | ReactionPublicDeleteStatus501Json
  | ReactionPublicDeleteStatus501Json2;

export type ReactionPublicDeleteOptions = {
  body?: never;
  path: ReactionPublicDeletePath;
  query?: never;
  headers?: never;
};

export type ReactionPublicDeleteResponses = {
  "200": ReactionPublicDeleteStatus200;
  "204": ReactionPublicDeleteStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: ReactionPublicDeleteStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicDeleteStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicDeleteStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ReactionPublicDeleteStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicDeleteStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicDeleteStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ReactionPublicDeleteStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicDeleteStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicDeleteStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ReactionPublicDeleteStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicDeleteStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicDeleteStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ReactionPublicDeleteStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicDeleteStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicDeleteStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ReactionPublicDeleteStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicDeleteStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicDeleteStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ReactionPublicDeleteResponse =
  | ReactionPublicDeleteStatus200
  | ReactionPublicDeleteStatus204
  | ReactionPublicDeleteStatus400
  | ReactionPublicDeleteStatus401
  | ReactionPublicDeleteStatus403
  | ReactionPublicDeleteStatus404
  | ReactionPublicDeleteStatus500
  | ReactionPublicDeleteStatus501;
