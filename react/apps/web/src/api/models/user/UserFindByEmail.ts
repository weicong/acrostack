/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpIdentityIdentityUserDto } from "../volo/abp/identity/IdentityUserDto";

export type UserFindByEmailPath = {
  email: string;
};

export type UserFindByEmailStatus200Plain = VoloAbpIdentityIdentityUserDto;

export type UserFindByEmailStatus200Json = VoloAbpIdentityIdentityUserDto;

export type UserFindByEmailStatus200Json2 = VoloAbpIdentityIdentityUserDto;

export type UserFindByEmailStatus200 =
  | UserFindByEmailStatus200Plain
  | UserFindByEmailStatus200Json
  | UserFindByEmailStatus200Json2;

export type UserFindByEmailStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus400 =
  | UserFindByEmailStatus400Plain
  | UserFindByEmailStatus400Json
  | UserFindByEmailStatus400Json2;

export type UserFindByEmailStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus401 =
  | UserFindByEmailStatus401Plain
  | UserFindByEmailStatus401Json
  | UserFindByEmailStatus401Json2;

export type UserFindByEmailStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus403 =
  | UserFindByEmailStatus403Plain
  | UserFindByEmailStatus403Json
  | UserFindByEmailStatus403Json2;

export type UserFindByEmailStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus404 =
  | UserFindByEmailStatus404Plain
  | UserFindByEmailStatus404Json
  | UserFindByEmailStatus404Json2;

export type UserFindByEmailStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus500 =
  | UserFindByEmailStatus500Plain
  | UserFindByEmailStatus500Json
  | UserFindByEmailStatus500Json2;

export type UserFindByEmailStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByEmailStatus501 =
  | UserFindByEmailStatus501Plain
  | UserFindByEmailStatus501Json
  | UserFindByEmailStatus501Json2;

export type UserFindByEmailOptions = {
  body?: never;
  path: UserFindByEmailPath;
  query?: never;
  headers?: never;
};

export type UserFindByEmailResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: UserFindByEmailStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: UserFindByEmailStatus200Json;
      }
    | {
        contentType: "text/json";
        data: UserFindByEmailStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: UserFindByEmailStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: UserFindByEmailStatus400Json;
      }
    | {
        contentType: "text/json";
        data: UserFindByEmailStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: UserFindByEmailStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: UserFindByEmailStatus401Json;
      }
    | {
        contentType: "text/json";
        data: UserFindByEmailStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: UserFindByEmailStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: UserFindByEmailStatus403Json;
      }
    | {
        contentType: "text/json";
        data: UserFindByEmailStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: UserFindByEmailStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: UserFindByEmailStatus404Json;
      }
    | {
        contentType: "text/json";
        data: UserFindByEmailStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: UserFindByEmailStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: UserFindByEmailStatus500Json;
      }
    | {
        contentType: "text/json";
        data: UserFindByEmailStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: UserFindByEmailStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: UserFindByEmailStatus501Json;
      }
    | {
        contentType: "text/json";
        data: UserFindByEmailStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type UserFindByEmailResponse =
  | UserFindByEmailStatus200
  | UserFindByEmailStatus400
  | UserFindByEmailStatus401
  | UserFindByEmailStatus403
  | UserFindByEmailStatus404
  | UserFindByEmailStatus500
  | UserFindByEmailStatus501;
