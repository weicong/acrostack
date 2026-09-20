/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpIdentityIdentityUserDto } from "../volo/abp/identity/IdentityUserDto";

export type UserGetPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type UserGetStatus200Plain = VoloAbpIdentityIdentityUserDto;

export type UserGetStatus200Json = VoloAbpIdentityIdentityUserDto;

export type UserGetStatus200Json2 = VoloAbpIdentityIdentityUserDto;

export type UserGetStatus200 = UserGetStatus200Plain | UserGetStatus200Json | UserGetStatus200Json2;

export type UserGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus400 = UserGetStatus400Plain | UserGetStatus400Json | UserGetStatus400Json2;

export type UserGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus401 = UserGetStatus401Plain | UserGetStatus401Json | UserGetStatus401Json2;

export type UserGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus403 = UserGetStatus403Plain | UserGetStatus403Json | UserGetStatus403Json2;

export type UserGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus404 = UserGetStatus404Plain | UserGetStatus404Json | UserGetStatus404Json2;

export type UserGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus500 = UserGetStatus500Plain | UserGetStatus500Json | UserGetStatus500Json2;

export type UserGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetStatus501 = UserGetStatus501Plain | UserGetStatus501Json | UserGetStatus501Json2;

export type UserGetOptions = {
  body?: never;
  path: UserGetPath;
  query?: never;
  headers?: never;
};

export type UserGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: UserGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: UserGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: UserGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: UserGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: UserGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: UserGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: UserGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: UserGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: UserGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: UserGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: UserGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: UserGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: UserGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: UserGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: UserGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: UserGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: UserGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: UserGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: UserGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: UserGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: UserGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type UserGetResponse =
  | UserGetStatus200
  | UserGetStatus400
  | UserGetStatus401
  | UserGetStatus403
  | UserGetStatus404
  | UserGetStatus500
  | UserGetStatus501;
