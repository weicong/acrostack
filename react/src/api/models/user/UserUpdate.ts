/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpIdentityIdentityUserDto } from "../volo/abp/identity/IdentityUserDto";
import type { VoloAbpIdentityIdentityUserUpdateDto } from "../volo/abp/identity/IdentityUserUpdateDto";

export type UserUpdatePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type UserUpdateStatus200Plain = VoloAbpIdentityIdentityUserDto;

export type UserUpdateStatus200Json = VoloAbpIdentityIdentityUserDto;

export type UserUpdateStatus200Json2 = VoloAbpIdentityIdentityUserDto;

export type UserUpdateStatus200 =
  | UserUpdateStatus200Plain
  | UserUpdateStatus200Json
  | UserUpdateStatus200Json2;

export type UserUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus400 =
  | UserUpdateStatus400Plain
  | UserUpdateStatus400Json
  | UserUpdateStatus400Json2;

export type UserUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus401 =
  | UserUpdateStatus401Plain
  | UserUpdateStatus401Json
  | UserUpdateStatus401Json2;

export type UserUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus403 =
  | UserUpdateStatus403Plain
  | UserUpdateStatus403Json
  | UserUpdateStatus403Json2;

export type UserUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus404 =
  | UserUpdateStatus404Plain
  | UserUpdateStatus404Json
  | UserUpdateStatus404Json2;

export type UserUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus500 =
  | UserUpdateStatus500Plain
  | UserUpdateStatus500Json
  | UserUpdateStatus500Json2;

export type UserUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateStatus501 =
  | UserUpdateStatus501Plain
  | UserUpdateStatus501Json
  | UserUpdateStatus501Json2;

export type UserUpdateBodyJson =
  | Omit<NonNullable<VoloAbpIdentityIdentityUserUpdateDto>, "extraProperties">
  | undefined;

export type UserUpdateBodyJson2 =
  | Omit<NonNullable<VoloAbpIdentityIdentityUserUpdateDto>, "extraProperties">
  | undefined;

export type UserUpdateBodyJson3 =
  | Omit<NonNullable<VoloAbpIdentityIdentityUserUpdateDto>, "extraProperties">
  | undefined;

export type UserUpdateBody = UserUpdateBodyJson | UserUpdateBodyJson2 | UserUpdateBodyJson3;

export type UserUpdateOptions = {
  body: UserUpdateBody;
  path: UserUpdatePath;
  query?: never;
  headers?: never;
};

export type UserUpdateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: UserUpdateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: UserUpdateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: UserUpdateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: UserUpdateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: UserUpdateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: UserUpdateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: UserUpdateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: UserUpdateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: UserUpdateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: UserUpdateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: UserUpdateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: UserUpdateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: UserUpdateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: UserUpdateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: UserUpdateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: UserUpdateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: UserUpdateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: UserUpdateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: UserUpdateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: UserUpdateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: UserUpdateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type UserUpdateResponse =
  | UserUpdateStatus200
  | UserUpdateStatus400
  | UserUpdateStatus401
  | UserUpdateStatus403
  | UserUpdateStatus404
  | UserUpdateStatus500
  | UserUpdateStatus501;
