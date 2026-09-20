/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpIdentityIdentityUserDto } from "../volo/abp/identity/IdentityUserDto";

export type UserFindByUsernamePath = {
  userName: string;
};

export type UserFindByUsernameStatus200Plain = VoloAbpIdentityIdentityUserDto;

export type UserFindByUsernameStatus200Json = VoloAbpIdentityIdentityUserDto;

export type UserFindByUsernameStatus200Json2 = VoloAbpIdentityIdentityUserDto;

export type UserFindByUsernameStatus200 =
  | UserFindByUsernameStatus200Plain
  | UserFindByUsernameStatus200Json
  | UserFindByUsernameStatus200Json2;

export type UserFindByUsernameStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus400 =
  | UserFindByUsernameStatus400Plain
  | UserFindByUsernameStatus400Json
  | UserFindByUsernameStatus400Json2;

export type UserFindByUsernameStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus401 =
  | UserFindByUsernameStatus401Plain
  | UserFindByUsernameStatus401Json
  | UserFindByUsernameStatus401Json2;

export type UserFindByUsernameStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus403 =
  | UserFindByUsernameStatus403Plain
  | UserFindByUsernameStatus403Json
  | UserFindByUsernameStatus403Json2;

export type UserFindByUsernameStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus404 =
  | UserFindByUsernameStatus404Plain
  | UserFindByUsernameStatus404Json
  | UserFindByUsernameStatus404Json2;

export type UserFindByUsernameStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus500 =
  | UserFindByUsernameStatus500Plain
  | UserFindByUsernameStatus500Json
  | UserFindByUsernameStatus500Json2;

export type UserFindByUsernameStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByUsernameStatus501 =
  | UserFindByUsernameStatus501Plain
  | UserFindByUsernameStatus501Json
  | UserFindByUsernameStatus501Json2;

export type UserFindByUsernameOptions = {
  body?: never;
  path: UserFindByUsernamePath;
  query?: never;
  headers?: never;
};

export type UserFindByUsernameResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: UserFindByUsernameStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: UserFindByUsernameStatus200Json;
      }
    | {
        contentType: "text/json";
        data: UserFindByUsernameStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: UserFindByUsernameStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: UserFindByUsernameStatus400Json;
      }
    | {
        contentType: "text/json";
        data: UserFindByUsernameStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: UserFindByUsernameStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: UserFindByUsernameStatus401Json;
      }
    | {
        contentType: "text/json";
        data: UserFindByUsernameStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: UserFindByUsernameStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: UserFindByUsernameStatus403Json;
      }
    | {
        contentType: "text/json";
        data: UserFindByUsernameStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: UserFindByUsernameStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: UserFindByUsernameStatus404Json;
      }
    | {
        contentType: "text/json";
        data: UserFindByUsernameStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: UserFindByUsernameStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: UserFindByUsernameStatus500Json;
      }
    | {
        contentType: "text/json";
        data: UserFindByUsernameStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: UserFindByUsernameStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: UserFindByUsernameStatus501Json;
      }
    | {
        contentType: "text/json";
        data: UserFindByUsernameStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type UserFindByUsernameResponse =
  | UserFindByUsernameStatus200
  | UserFindByUsernameStatus400
  | UserFindByUsernameStatus401
  | UserFindByUsernameStatus403
  | UserFindByUsernameStatus404
  | UserFindByUsernameStatus500
  | UserFindByUsernameStatus501;
