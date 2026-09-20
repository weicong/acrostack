/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpUsersUserData } from "../volo/abp/users/UserData";

export type UserLookupFindByIdPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type UserLookupFindByIdStatus200Plain = VoloAbpUsersUserData;

export type UserLookupFindByIdStatus200Json = VoloAbpUsersUserData;

export type UserLookupFindByIdStatus200Json2 = VoloAbpUsersUserData;

export type UserLookupFindByIdStatus200 =
  | UserLookupFindByIdStatus200Plain
  | UserLookupFindByIdStatus200Json
  | UserLookupFindByIdStatus200Json2;

export type UserLookupFindByIdStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus400 =
  | UserLookupFindByIdStatus400Plain
  | UserLookupFindByIdStatus400Json
  | UserLookupFindByIdStatus400Json2;

export type UserLookupFindByIdStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus401 =
  | UserLookupFindByIdStatus401Plain
  | UserLookupFindByIdStatus401Json
  | UserLookupFindByIdStatus401Json2;

export type UserLookupFindByIdStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus403 =
  | UserLookupFindByIdStatus403Plain
  | UserLookupFindByIdStatus403Json
  | UserLookupFindByIdStatus403Json2;

export type UserLookupFindByIdStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus404 =
  | UserLookupFindByIdStatus404Plain
  | UserLookupFindByIdStatus404Json
  | UserLookupFindByIdStatus404Json2;

export type UserLookupFindByIdStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus500 =
  | UserLookupFindByIdStatus500Plain
  | UserLookupFindByIdStatus500Json
  | UserLookupFindByIdStatus500Json2;

export type UserLookupFindByIdStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus501 =
  | UserLookupFindByIdStatus501Plain
  | UserLookupFindByIdStatus501Json
  | UserLookupFindByIdStatus501Json2;

export type UserLookupFindByIdOptions = {
  body?: never;
  path: UserLookupFindByIdPath;
  query?: never;
  headers?: never;
};

export type UserLookupFindByIdResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: UserLookupFindByIdStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: UserLookupFindByIdStatus200Json;
      }
    | {
        contentType: "text/json";
        data: UserLookupFindByIdStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: UserLookupFindByIdStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: UserLookupFindByIdStatus400Json;
      }
    | {
        contentType: "text/json";
        data: UserLookupFindByIdStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: UserLookupFindByIdStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: UserLookupFindByIdStatus401Json;
      }
    | {
        contentType: "text/json";
        data: UserLookupFindByIdStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: UserLookupFindByIdStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: UserLookupFindByIdStatus403Json;
      }
    | {
        contentType: "text/json";
        data: UserLookupFindByIdStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: UserLookupFindByIdStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: UserLookupFindByIdStatus404Json;
      }
    | {
        contentType: "text/json";
        data: UserLookupFindByIdStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: UserLookupFindByIdStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: UserLookupFindByIdStatus500Json;
      }
    | {
        contentType: "text/json";
        data: UserLookupFindByIdStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: UserLookupFindByIdStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: UserLookupFindByIdStatus501Json;
      }
    | {
        contentType: "text/json";
        data: UserLookupFindByIdStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type UserLookupFindByIdResponse =
  | UserLookupFindByIdStatus200
  | UserLookupFindByIdStatus400
  | UserLookupFindByIdStatus401
  | UserLookupFindByIdStatus403
  | UserLookupFindByIdStatus404
  | UserLookupFindByIdStatus500
  | UserLookupFindByIdStatus501;
