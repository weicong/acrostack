/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type FeaturesDeleteQuery = {
  providerName?: string;
  providerKey?: string;
};

export type FeaturesDeleteStatus200 = unknown;

export type FeaturesDeleteStatus204 = unknown;

export type FeaturesDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus400 =
  | FeaturesDeleteStatus400Plain
  | FeaturesDeleteStatus400Json
  | FeaturesDeleteStatus400Json2;

export type FeaturesDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus401 =
  | FeaturesDeleteStatus401Plain
  | FeaturesDeleteStatus401Json
  | FeaturesDeleteStatus401Json2;

export type FeaturesDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus403 =
  | FeaturesDeleteStatus403Plain
  | FeaturesDeleteStatus403Json
  | FeaturesDeleteStatus403Json2;

export type FeaturesDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus404 =
  | FeaturesDeleteStatus404Plain
  | FeaturesDeleteStatus404Json
  | FeaturesDeleteStatus404Json2;

export type FeaturesDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus500 =
  | FeaturesDeleteStatus500Plain
  | FeaturesDeleteStatus500Json
  | FeaturesDeleteStatus500Json2;

export type FeaturesDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus501 =
  | FeaturesDeleteStatus501Plain
  | FeaturesDeleteStatus501Json
  | FeaturesDeleteStatus501Json2;

export type FeaturesDeleteOptions = {
  body?: never;
  path?: never;
  query?: FeaturesDeleteQuery;
  headers?: never;
};

export type FeaturesDeleteResponses = {
  "200": FeaturesDeleteStatus200;
  "204": FeaturesDeleteStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: FeaturesDeleteStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: FeaturesDeleteStatus400Json;
      }
    | {
        contentType: "text/json";
        data: FeaturesDeleteStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: FeaturesDeleteStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: FeaturesDeleteStatus401Json;
      }
    | {
        contentType: "text/json";
        data: FeaturesDeleteStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: FeaturesDeleteStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: FeaturesDeleteStatus403Json;
      }
    | {
        contentType: "text/json";
        data: FeaturesDeleteStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: FeaturesDeleteStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: FeaturesDeleteStatus404Json;
      }
    | {
        contentType: "text/json";
        data: FeaturesDeleteStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: FeaturesDeleteStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: FeaturesDeleteStatus500Json;
      }
    | {
        contentType: "text/json";
        data: FeaturesDeleteStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: FeaturesDeleteStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: FeaturesDeleteStatus501Json;
      }
    | {
        contentType: "text/json";
        data: FeaturesDeleteStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type FeaturesDeleteResponse =
  | FeaturesDeleteStatus200
  | FeaturesDeleteStatus204
  | FeaturesDeleteStatus400
  | FeaturesDeleteStatus401
  | FeaturesDeleteStatus403
  | FeaturesDeleteStatus404
  | FeaturesDeleteStatus500
  | FeaturesDeleteStatus501;
