/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpIdentityIdentityRoleCreateDto } from "../volo/abp/identity/IdentityRoleCreateDto";
import type { VoloAbpIdentityIdentityRoleDto } from "../volo/abp/identity/IdentityRoleDto";

export type RoleCreateStatus200Plain = VoloAbpIdentityIdentityRoleDto;

export type RoleCreateStatus200Json = VoloAbpIdentityIdentityRoleDto;

export type RoleCreateStatus200Json2 = VoloAbpIdentityIdentityRoleDto;

export type RoleCreateStatus200 =
  | RoleCreateStatus200Plain
  | RoleCreateStatus200Json
  | RoleCreateStatus200Json2;

export type RoleCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus400 =
  | RoleCreateStatus400Plain
  | RoleCreateStatus400Json
  | RoleCreateStatus400Json2;

export type RoleCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus401 =
  | RoleCreateStatus401Plain
  | RoleCreateStatus401Json
  | RoleCreateStatus401Json2;

export type RoleCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus403 =
  | RoleCreateStatus403Plain
  | RoleCreateStatus403Json
  | RoleCreateStatus403Json2;

export type RoleCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus404 =
  | RoleCreateStatus404Plain
  | RoleCreateStatus404Json
  | RoleCreateStatus404Json2;

export type RoleCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus500 =
  | RoleCreateStatus500Plain
  | RoleCreateStatus500Json
  | RoleCreateStatus500Json2;

export type RoleCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus501 =
  | RoleCreateStatus501Plain
  | RoleCreateStatus501Json
  | RoleCreateStatus501Json2;

export type RoleCreateBodyJson =
  | Omit<NonNullable<VoloAbpIdentityIdentityRoleCreateDto>, "extraProperties">
  | undefined;

export type RoleCreateBodyJson2 =
  | Omit<NonNullable<VoloAbpIdentityIdentityRoleCreateDto>, "extraProperties">
  | undefined;

export type RoleCreateBodyJson3 =
  | Omit<NonNullable<VoloAbpIdentityIdentityRoleCreateDto>, "extraProperties">
  | undefined;

export type RoleCreateBody = RoleCreateBodyJson | RoleCreateBodyJson2 | RoleCreateBodyJson3;

export type RoleCreateOptions = {
  body: RoleCreateBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type RoleCreateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: RoleCreateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: RoleCreateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: RoleCreateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: RoleCreateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: RoleCreateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: RoleCreateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: RoleCreateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: RoleCreateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: RoleCreateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: RoleCreateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: RoleCreateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: RoleCreateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: RoleCreateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: RoleCreateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: RoleCreateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: RoleCreateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: RoleCreateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: RoleCreateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: RoleCreateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: RoleCreateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: RoleCreateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type RoleCreateResponse =
  | RoleCreateStatus200
  | RoleCreateStatus400
  | RoleCreateStatus401
  | RoleCreateStatus403
  | RoleCreateStatus404
  | RoleCreateStatus500
  | RoleCreateStatus501;
