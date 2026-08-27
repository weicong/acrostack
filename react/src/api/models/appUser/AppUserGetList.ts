/* oxlint-disable */

import type { PagedResultDtoOfAcroStackAppUsersAppUserDto } from "../pagedResultDtoOfAcroStack/appUsers/AppUserDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type AppUserGetListQuery = {
  Filter?: string;
  Sorting?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  SkipCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  MaxResultCount?: number;
};

export type AppUserGetListStatus200Plain = PagedResultDtoOfAcroStackAppUsersAppUserDto;

export type AppUserGetListStatus200Json = PagedResultDtoOfAcroStackAppUsersAppUserDto;

export type AppUserGetListStatus200Json2 = PagedResultDtoOfAcroStackAppUsersAppUserDto;

export type AppUserGetListStatus200 =
  | AppUserGetListStatus200Plain
  | AppUserGetListStatus200Json
  | AppUserGetListStatus200Json2;

export type AppUserGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus400 =
  | AppUserGetListStatus400Plain
  | AppUserGetListStatus400Json
  | AppUserGetListStatus400Json2;

export type AppUserGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus401 =
  | AppUserGetListStatus401Plain
  | AppUserGetListStatus401Json
  | AppUserGetListStatus401Json2;

export type AppUserGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus403 =
  | AppUserGetListStatus403Plain
  | AppUserGetListStatus403Json
  | AppUserGetListStatus403Json2;

export type AppUserGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus404 =
  | AppUserGetListStatus404Plain
  | AppUserGetListStatus404Json
  | AppUserGetListStatus404Json2;

export type AppUserGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus500 =
  | AppUserGetListStatus500Plain
  | AppUserGetListStatus500Json
  | AppUserGetListStatus500Json2;

export type AppUserGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus501 =
  | AppUserGetListStatus501Plain
  | AppUserGetListStatus501Json
  | AppUserGetListStatus501Json2;

export type AppUserGetListOptions = {
  body?: never;
  path?: never;
  query?: AppUserGetListQuery;
  headers?: never;
};

export type AppUserGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: AppUserGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: AppUserGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: AppUserGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: AppUserGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: AppUserGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: AppUserGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: AppUserGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: AppUserGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: AppUserGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: AppUserGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: AppUserGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: AppUserGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: AppUserGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: AppUserGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: AppUserGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: AppUserGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: AppUserGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: AppUserGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: AppUserGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: AppUserGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: AppUserGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type AppUserGetListResponse =
  | AppUserGetListStatus200
  | AppUserGetListStatus400
  | AppUserGetListStatus401
  | AppUserGetListStatus403
  | AppUserGetListStatus404
  | AppUserGetListStatus500
  | AppUserGetListStatus501;
