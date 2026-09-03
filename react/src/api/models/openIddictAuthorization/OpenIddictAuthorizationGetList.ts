/* oxlint-disable */

import type { PagedResultDtoOfAcroStackOpenIddictManagementDtosOpenIddictAuthorizationDto } from "../pagedResultDtoOfAcroStack/openIddictManagement/dtos/OpenIddictAuthorizationDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type OpenIddictAuthorizationGetListQuery = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  ApplicationId?: string;
  Subject?: string;
  Status?: string;
  Type?: string;
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

export type OpenIddictAuthorizationGetListStatus200Plain =
  PagedResultDtoOfAcroStackOpenIddictManagementDtosOpenIddictAuthorizationDto;

export type OpenIddictAuthorizationGetListStatus200Json =
  PagedResultDtoOfAcroStackOpenIddictManagementDtosOpenIddictAuthorizationDto;

export type OpenIddictAuthorizationGetListStatus200Json2 =
  PagedResultDtoOfAcroStackOpenIddictManagementDtosOpenIddictAuthorizationDto;

export type OpenIddictAuthorizationGetListStatus200 =
  | OpenIddictAuthorizationGetListStatus200Plain
  | OpenIddictAuthorizationGetListStatus200Json
  | OpenIddictAuthorizationGetListStatus200Json2;

export type OpenIddictAuthorizationGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus400 =
  | OpenIddictAuthorizationGetListStatus400Plain
  | OpenIddictAuthorizationGetListStatus400Json
  | OpenIddictAuthorizationGetListStatus400Json2;

export type OpenIddictAuthorizationGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus401 =
  | OpenIddictAuthorizationGetListStatus401Plain
  | OpenIddictAuthorizationGetListStatus401Json
  | OpenIddictAuthorizationGetListStatus401Json2;

export type OpenIddictAuthorizationGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus403 =
  | OpenIddictAuthorizationGetListStatus403Plain
  | OpenIddictAuthorizationGetListStatus403Json
  | OpenIddictAuthorizationGetListStatus403Json2;

export type OpenIddictAuthorizationGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus404 =
  | OpenIddictAuthorizationGetListStatus404Plain
  | OpenIddictAuthorizationGetListStatus404Json
  | OpenIddictAuthorizationGetListStatus404Json2;

export type OpenIddictAuthorizationGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus500 =
  | OpenIddictAuthorizationGetListStatus500Plain
  | OpenIddictAuthorizationGetListStatus500Json
  | OpenIddictAuthorizationGetListStatus500Json2;

export type OpenIddictAuthorizationGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictAuthorizationGetListStatus501 =
  | OpenIddictAuthorizationGetListStatus501Plain
  | OpenIddictAuthorizationGetListStatus501Json
  | OpenIddictAuthorizationGetListStatus501Json2;

export type OpenIddictAuthorizationGetListOptions = {
  body?: never;
  path?: never;
  query?: OpenIddictAuthorizationGetListQuery;
  headers?: never;
};

export type OpenIddictAuthorizationGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: OpenIddictAuthorizationGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictAuthorizationGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictAuthorizationGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictAuthorizationGetListResponse =
  | OpenIddictAuthorizationGetListStatus200
  | OpenIddictAuthorizationGetListStatus400
  | OpenIddictAuthorizationGetListStatus401
  | OpenIddictAuthorizationGetListStatus403
  | OpenIddictAuthorizationGetListStatus404
  | OpenIddictAuthorizationGetListStatus500
  | OpenIddictAuthorizationGetListStatus501;
