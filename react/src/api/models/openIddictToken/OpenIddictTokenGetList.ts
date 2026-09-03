/* oxlint-disable */

import type { PagedResultDtoOfAcroStackOpenIddictManagementDtosOpenIddictTokenDto } from "../pagedResultDtoOfAcroStack/openIddictManagement/dtos/OpenIddictTokenDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type OpenIddictTokenGetListQuery = {
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

export type OpenIddictTokenGetListStatus200Plain =
  PagedResultDtoOfAcroStackOpenIddictManagementDtosOpenIddictTokenDto;

export type OpenIddictTokenGetListStatus200Json =
  PagedResultDtoOfAcroStackOpenIddictManagementDtosOpenIddictTokenDto;

export type OpenIddictTokenGetListStatus200Json2 =
  PagedResultDtoOfAcroStackOpenIddictManagementDtosOpenIddictTokenDto;

export type OpenIddictTokenGetListStatus200 =
  | OpenIddictTokenGetListStatus200Plain
  | OpenIddictTokenGetListStatus200Json
  | OpenIddictTokenGetListStatus200Json2;

export type OpenIddictTokenGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus400 =
  | OpenIddictTokenGetListStatus400Plain
  | OpenIddictTokenGetListStatus400Json
  | OpenIddictTokenGetListStatus400Json2;

export type OpenIddictTokenGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus401 =
  | OpenIddictTokenGetListStatus401Plain
  | OpenIddictTokenGetListStatus401Json
  | OpenIddictTokenGetListStatus401Json2;

export type OpenIddictTokenGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus403 =
  | OpenIddictTokenGetListStatus403Plain
  | OpenIddictTokenGetListStatus403Json
  | OpenIddictTokenGetListStatus403Json2;

export type OpenIddictTokenGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus404 =
  | OpenIddictTokenGetListStatus404Plain
  | OpenIddictTokenGetListStatus404Json
  | OpenIddictTokenGetListStatus404Json2;

export type OpenIddictTokenGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus500 =
  | OpenIddictTokenGetListStatus500Plain
  | OpenIddictTokenGetListStatus500Json
  | OpenIddictTokenGetListStatus500Json2;

export type OpenIddictTokenGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictTokenGetListStatus501 =
  | OpenIddictTokenGetListStatus501Plain
  | OpenIddictTokenGetListStatus501Json
  | OpenIddictTokenGetListStatus501Json2;

export type OpenIddictTokenGetListOptions = {
  body?: never;
  path?: never;
  query?: OpenIddictTokenGetListQuery;
  headers?: never;
};

export type OpenIddictTokenGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: OpenIddictTokenGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictTokenGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictTokenGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictTokenGetListResponse =
  | OpenIddictTokenGetListStatus200
  | OpenIddictTokenGetListStatus400
  | OpenIddictTokenGetListStatus401
  | OpenIddictTokenGetListStatus403
  | OpenIddictTokenGetListStatus404
  | OpenIddictTokenGetListStatus500
  | OpenIddictTokenGetListStatus501;
