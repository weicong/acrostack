/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ImpersonationSessionRevokePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type ImpersonationSessionRevokeStatus200 = unknown;

export type ImpersonationSessionRevokeStatus204 = unknown;

export type ImpersonationSessionRevokeStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus400 =
  | ImpersonationSessionRevokeStatus400Plain
  | ImpersonationSessionRevokeStatus400Json
  | ImpersonationSessionRevokeStatus400Json2;

export type ImpersonationSessionRevokeStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus401 =
  | ImpersonationSessionRevokeStatus401Plain
  | ImpersonationSessionRevokeStatus401Json
  | ImpersonationSessionRevokeStatus401Json2;

export type ImpersonationSessionRevokeStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus403 =
  | ImpersonationSessionRevokeStatus403Plain
  | ImpersonationSessionRevokeStatus403Json
  | ImpersonationSessionRevokeStatus403Json2;

export type ImpersonationSessionRevokeStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus404 =
  | ImpersonationSessionRevokeStatus404Plain
  | ImpersonationSessionRevokeStatus404Json
  | ImpersonationSessionRevokeStatus404Json2;

export type ImpersonationSessionRevokeStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus500 =
  | ImpersonationSessionRevokeStatus500Plain
  | ImpersonationSessionRevokeStatus500Json
  | ImpersonationSessionRevokeStatus500Json2;

export type ImpersonationSessionRevokeStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionRevokeStatus501 =
  | ImpersonationSessionRevokeStatus501Plain
  | ImpersonationSessionRevokeStatus501Json
  | ImpersonationSessionRevokeStatus501Json2;

export type ImpersonationSessionRevokeOptions = {
  body?: never;
  path: ImpersonationSessionRevokePath;
  query?: never;
  headers?: never;
};

export type ImpersonationSessionRevokeResponses = {
  "200": ImpersonationSessionRevokeStatus200;
  "204": ImpersonationSessionRevokeStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: ImpersonationSessionRevokeStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ImpersonationSessionRevokeStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ImpersonationSessionRevokeStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ImpersonationSessionRevokeStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ImpersonationSessionRevokeStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ImpersonationSessionRevokeStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ImpersonationSessionRevokeStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ImpersonationSessionRevokeStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ImpersonationSessionRevokeStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ImpersonationSessionRevokeStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ImpersonationSessionRevokeStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ImpersonationSessionRevokeStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ImpersonationSessionRevokeStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ImpersonationSessionRevokeStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ImpersonationSessionRevokeStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ImpersonationSessionRevokeStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ImpersonationSessionRevokeStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ImpersonationSessionRevokeStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ImpersonationSessionRevokeResponse =
  | ImpersonationSessionRevokeStatus200
  | ImpersonationSessionRevokeStatus204
  | ImpersonationSessionRevokeStatus400
  | ImpersonationSessionRevokeStatus401
  | ImpersonationSessionRevokeStatus403
  | ImpersonationSessionRevokeStatus404
  | ImpersonationSessionRevokeStatus500
  | ImpersonationSessionRevokeStatus501;
