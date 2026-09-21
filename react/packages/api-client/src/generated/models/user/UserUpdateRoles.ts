/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpIdentityIdentityUserUpdateRolesDto } from "../volo/abp/identity/IdentityUserUpdateRolesDto";

export type UserUpdateRolesPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type UserUpdateRolesStatus200 = unknown;

export type UserUpdateRolesStatus204 = unknown;

export type UserUpdateRolesStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus400 =
  | UserUpdateRolesStatus400Plain
  | UserUpdateRolesStatus400Json
  | UserUpdateRolesStatus400Json2;

export type UserUpdateRolesStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus401 =
  | UserUpdateRolesStatus401Plain
  | UserUpdateRolesStatus401Json
  | UserUpdateRolesStatus401Json2;

export type UserUpdateRolesStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus403 =
  | UserUpdateRolesStatus403Plain
  | UserUpdateRolesStatus403Json
  | UserUpdateRolesStatus403Json2;

export type UserUpdateRolesStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus404 =
  | UserUpdateRolesStatus404Plain
  | UserUpdateRolesStatus404Json
  | UserUpdateRolesStatus404Json2;

export type UserUpdateRolesStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus500 =
  | UserUpdateRolesStatus500Plain
  | UserUpdateRolesStatus500Json
  | UserUpdateRolesStatus500Json2;

export type UserUpdateRolesStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus501 =
  | UserUpdateRolesStatus501Plain
  | UserUpdateRolesStatus501Json
  | UserUpdateRolesStatus501Json2;

export type UserUpdateRolesBodyJson = VoloAbpIdentityIdentityUserUpdateRolesDto | undefined;

export type UserUpdateRolesBodyJson2 = VoloAbpIdentityIdentityUserUpdateRolesDto | undefined;

export type UserUpdateRolesBodyJson3 = VoloAbpIdentityIdentityUserUpdateRolesDto | undefined;

export type UserUpdateRolesBody =
  | UserUpdateRolesBodyJson
  | UserUpdateRolesBodyJson2
  | UserUpdateRolesBodyJson3;

export type UserUpdateRolesOptions = {
  body: UserUpdateRolesBody;
  path: UserUpdateRolesPath;
  query?: never;
  headers?: never;
};

export type UserUpdateRolesResponses = {
  "200": UserUpdateRolesStatus200;
  "204": UserUpdateRolesStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: UserUpdateRolesStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: UserUpdateRolesStatus400Json;
      }
    | {
        contentType: "text/json";
        data: UserUpdateRolesStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: UserUpdateRolesStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: UserUpdateRolesStatus401Json;
      }
    | {
        contentType: "text/json";
        data: UserUpdateRolesStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: UserUpdateRolesStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: UserUpdateRolesStatus403Json;
      }
    | {
        contentType: "text/json";
        data: UserUpdateRolesStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: UserUpdateRolesStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: UserUpdateRolesStatus404Json;
      }
    | {
        contentType: "text/json";
        data: UserUpdateRolesStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: UserUpdateRolesStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: UserUpdateRolesStatus500Json;
      }
    | {
        contentType: "text/json";
        data: UserUpdateRolesStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: UserUpdateRolesStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: UserUpdateRolesStatus501Json;
      }
    | {
        contentType: "text/json";
        data: UserUpdateRolesStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type UserUpdateRolesResponse =
  | UserUpdateRolesStatus200
  | UserUpdateRolesStatus204
  | UserUpdateRolesStatus400
  | UserUpdateRolesStatus401
  | UserUpdateRolesStatus403
  | UserUpdateRolesStatus404
  | UserUpdateRolesStatus500
  | UserUpdateRolesStatus501;
