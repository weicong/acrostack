/* oxlint-disable */

import type { ListResultDtoOfVoloAbpIdentityIdentityRoleDto } from "../listResultDtoOfVolo/abp/identity/IdentityRoleDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type UserGetRolesPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type UserGetRolesStatus200Plain = ListResultDtoOfVoloAbpIdentityIdentityRoleDto;

export type UserGetRolesStatus200Json = ListResultDtoOfVoloAbpIdentityIdentityRoleDto;

export type UserGetRolesStatus200Json2 = ListResultDtoOfVoloAbpIdentityIdentityRoleDto;

export type UserGetRolesStatus200 =
  | UserGetRolesStatus200Plain
  | UserGetRolesStatus200Json
  | UserGetRolesStatus200Json2;

export type UserGetRolesStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus400 =
  | UserGetRolesStatus400Plain
  | UserGetRolesStatus400Json
  | UserGetRolesStatus400Json2;

export type UserGetRolesStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus401 =
  | UserGetRolesStatus401Plain
  | UserGetRolesStatus401Json
  | UserGetRolesStatus401Json2;

export type UserGetRolesStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus403 =
  | UserGetRolesStatus403Plain
  | UserGetRolesStatus403Json
  | UserGetRolesStatus403Json2;

export type UserGetRolesStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus404 =
  | UserGetRolesStatus404Plain
  | UserGetRolesStatus404Json
  | UserGetRolesStatus404Json2;

export type UserGetRolesStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus500 =
  | UserGetRolesStatus500Plain
  | UserGetRolesStatus500Json
  | UserGetRolesStatus500Json2;

export type UserGetRolesStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus501 =
  | UserGetRolesStatus501Plain
  | UserGetRolesStatus501Json
  | UserGetRolesStatus501Json2;

export type UserGetRolesOptions = {
  body?: never;
  path: UserGetRolesPath;
  query?: never;
  headers?: never;
};

export type UserGetRolesResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: UserGetRolesStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: UserGetRolesStatus200Json;
      }
    | {
        contentType: "text/json";
        data: UserGetRolesStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: UserGetRolesStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: UserGetRolesStatus400Json;
      }
    | {
        contentType: "text/json";
        data: UserGetRolesStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: UserGetRolesStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: UserGetRolesStatus401Json;
      }
    | {
        contentType: "text/json";
        data: UserGetRolesStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: UserGetRolesStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: UserGetRolesStatus403Json;
      }
    | {
        contentType: "text/json";
        data: UserGetRolesStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: UserGetRolesStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: UserGetRolesStatus404Json;
      }
    | {
        contentType: "text/json";
        data: UserGetRolesStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: UserGetRolesStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: UserGetRolesStatus500Json;
      }
    | {
        contentType: "text/json";
        data: UserGetRolesStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: UserGetRolesStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: UserGetRolesStatus501Json;
      }
    | {
        contentType: "text/json";
        data: UserGetRolesStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type UserGetRolesResponse =
  | UserGetRolesStatus200
  | UserGetRolesStatus400
  | UserGetRolesStatus401
  | UserGetRolesStatus403
  | UserGetRolesStatus404
  | UserGetRolesStatus500
  | UserGetRolesStatus501;
