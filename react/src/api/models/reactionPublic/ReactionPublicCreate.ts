/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ReactionPublicCreatePath = {
  entityType: string;
  entityId: string;
  reaction: string;
};

export type ReactionPublicCreateStatus200 = unknown;

export type ReactionPublicCreateStatus204 = unknown;

export type ReactionPublicCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus400 =
  | ReactionPublicCreateStatus400Plain
  | ReactionPublicCreateStatus400Json
  | ReactionPublicCreateStatus400Json2;

export type ReactionPublicCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus401 =
  | ReactionPublicCreateStatus401Plain
  | ReactionPublicCreateStatus401Json
  | ReactionPublicCreateStatus401Json2;

export type ReactionPublicCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus403 =
  | ReactionPublicCreateStatus403Plain
  | ReactionPublicCreateStatus403Json
  | ReactionPublicCreateStatus403Json2;

export type ReactionPublicCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus404 =
  | ReactionPublicCreateStatus404Plain
  | ReactionPublicCreateStatus404Json
  | ReactionPublicCreateStatus404Json2;

export type ReactionPublicCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus500 =
  | ReactionPublicCreateStatus500Plain
  | ReactionPublicCreateStatus500Json
  | ReactionPublicCreateStatus500Json2;

export type ReactionPublicCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicCreateStatus501 =
  | ReactionPublicCreateStatus501Plain
  | ReactionPublicCreateStatus501Json
  | ReactionPublicCreateStatus501Json2;

export type ReactionPublicCreateOptions = {
  body?: never;
  path: ReactionPublicCreatePath;
  query?: never;
  headers?: never;
};

export type ReactionPublicCreateResponses = {
  "200": ReactionPublicCreateStatus200;
  "204": ReactionPublicCreateStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: ReactionPublicCreateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicCreateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicCreateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ReactionPublicCreateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicCreateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicCreateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ReactionPublicCreateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicCreateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicCreateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ReactionPublicCreateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicCreateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicCreateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ReactionPublicCreateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicCreateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicCreateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ReactionPublicCreateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicCreateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicCreateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ReactionPublicCreateResponse =
  | ReactionPublicCreateStatus200
  | ReactionPublicCreateStatus204
  | ReactionPublicCreateStatus400
  | ReactionPublicCreateStatus401
  | ReactionPublicCreateStatus403
  | ReactionPublicCreateStatus404
  | ReactionPublicCreateStatus500
  | ReactionPublicCreateStatus501;
