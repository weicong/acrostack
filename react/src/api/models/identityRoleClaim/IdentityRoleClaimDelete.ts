/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type IdentityRoleClaimDeletePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type IdentityRoleClaimDeleteStatus200 = unknown;

export type IdentityRoleClaimDeleteStatus204 = unknown;

export type IdentityRoleClaimDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus400 =
  | IdentityRoleClaimDeleteStatus400Plain
  | IdentityRoleClaimDeleteStatus400Json
  | IdentityRoleClaimDeleteStatus400Json2;

export type IdentityRoleClaimDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus401 =
  | IdentityRoleClaimDeleteStatus401Plain
  | IdentityRoleClaimDeleteStatus401Json
  | IdentityRoleClaimDeleteStatus401Json2;

export type IdentityRoleClaimDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus403 =
  | IdentityRoleClaimDeleteStatus403Plain
  | IdentityRoleClaimDeleteStatus403Json
  | IdentityRoleClaimDeleteStatus403Json2;

export type IdentityRoleClaimDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus404 =
  | IdentityRoleClaimDeleteStatus404Plain
  | IdentityRoleClaimDeleteStatus404Json
  | IdentityRoleClaimDeleteStatus404Json2;

export type IdentityRoleClaimDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus500 =
  | IdentityRoleClaimDeleteStatus500Plain
  | IdentityRoleClaimDeleteStatus500Json
  | IdentityRoleClaimDeleteStatus500Json2;

export type IdentityRoleClaimDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimDeleteStatus501 =
  | IdentityRoleClaimDeleteStatus501Plain
  | IdentityRoleClaimDeleteStatus501Json
  | IdentityRoleClaimDeleteStatus501Json2;

export type IdentityRoleClaimDeleteOptions = {
  body?: never;
  path: IdentityRoleClaimDeletePath;
  query?: never;
  headers?: never;
};

export type IdentityRoleClaimDeleteResponses = {
  "200": IdentityRoleClaimDeleteStatus200;
  "204": IdentityRoleClaimDeleteStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimDeleteStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimDeleteStatus400Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimDeleteStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimDeleteStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimDeleteStatus401Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimDeleteStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimDeleteStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimDeleteStatus403Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimDeleteStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimDeleteStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimDeleteStatus404Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimDeleteStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimDeleteStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimDeleteStatus500Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimDeleteStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimDeleteStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimDeleteStatus501Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimDeleteStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type IdentityRoleClaimDeleteResponse =
  | IdentityRoleClaimDeleteStatus200
  | IdentityRoleClaimDeleteStatus204
  | IdentityRoleClaimDeleteStatus400
  | IdentityRoleClaimDeleteStatus401
  | IdentityRoleClaimDeleteStatus403
  | IdentityRoleClaimDeleteStatus404
  | IdentityRoleClaimDeleteStatus500
  | IdentityRoleClaimDeleteStatus501;
