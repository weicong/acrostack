/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpIdentityIdentityRoleDto } from "../volo/abp/identity/IdentityRoleDto";

export type RoleGetPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type RoleGetStatus200Plain = VoloAbpIdentityIdentityRoleDto;

export type RoleGetStatus200Json = VoloAbpIdentityIdentityRoleDto;

export type RoleGetStatus200Json2 = VoloAbpIdentityIdentityRoleDto;

export type RoleGetStatus200 = RoleGetStatus200Plain | RoleGetStatus200Json | RoleGetStatus200Json2;

export type RoleGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus400 = RoleGetStatus400Plain | RoleGetStatus400Json | RoleGetStatus400Json2;

export type RoleGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus401 = RoleGetStatus401Plain | RoleGetStatus401Json | RoleGetStatus401Json2;

export type RoleGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus403 = RoleGetStatus403Plain | RoleGetStatus403Json | RoleGetStatus403Json2;

export type RoleGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus404 = RoleGetStatus404Plain | RoleGetStatus404Json | RoleGetStatus404Json2;

export type RoleGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus500 = RoleGetStatus500Plain | RoleGetStatus500Json | RoleGetStatus500Json2;

export type RoleGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus501 = RoleGetStatus501Plain | RoleGetStatus501Json | RoleGetStatus501Json2;

export type RoleGetOptions = {
  body?: never;
  path: RoleGetPath;
  query?: never;
  headers?: never;
};

export type RoleGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: RoleGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: RoleGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: RoleGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: RoleGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: RoleGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: RoleGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: RoleGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: RoleGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: RoleGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: RoleGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: RoleGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: RoleGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: RoleGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: RoleGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: RoleGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: RoleGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: RoleGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: RoleGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: RoleGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: RoleGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: RoleGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type RoleGetResponse =
  | RoleGetStatus200
  | RoleGetStatus400
  | RoleGetStatus401
  | RoleGetStatus403
  | RoleGetStatus404
  | RoleGetStatus500
  | RoleGetStatus501;
