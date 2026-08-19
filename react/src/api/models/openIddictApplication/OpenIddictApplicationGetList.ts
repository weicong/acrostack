/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictApplicationDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/openIddictManagement/openIddictApplicationDtoAcroStack/OpenIddictManagementVersion1000CultureneutralPublicKeyTokennull";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type OpenIddictApplicationGetListQuery = {
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

export type OpenIddictApplicationGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictApplicationDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull;

export type OpenIddictApplicationGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictApplicationDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull;

export type OpenIddictApplicationGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictApplicationDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull;

export type OpenIddictApplicationGetListStatus200 =
  | OpenIddictApplicationGetListStatus200Plain
  | OpenIddictApplicationGetListStatus200Json
  | OpenIddictApplicationGetListStatus200Json2;

export type OpenIddictApplicationGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus400 =
  | OpenIddictApplicationGetListStatus400Plain
  | OpenIddictApplicationGetListStatus400Json
  | OpenIddictApplicationGetListStatus400Json2;

export type OpenIddictApplicationGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus401 =
  | OpenIddictApplicationGetListStatus401Plain
  | OpenIddictApplicationGetListStatus401Json
  | OpenIddictApplicationGetListStatus401Json2;

export type OpenIddictApplicationGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus403 =
  | OpenIddictApplicationGetListStatus403Plain
  | OpenIddictApplicationGetListStatus403Json
  | OpenIddictApplicationGetListStatus403Json2;

export type OpenIddictApplicationGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus404 =
  | OpenIddictApplicationGetListStatus404Plain
  | OpenIddictApplicationGetListStatus404Json
  | OpenIddictApplicationGetListStatus404Json2;

export type OpenIddictApplicationGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus500 =
  | OpenIddictApplicationGetListStatus500Plain
  | OpenIddictApplicationGetListStatus500Json
  | OpenIddictApplicationGetListStatus500Json2;

export type OpenIddictApplicationGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus501 =
  | OpenIddictApplicationGetListStatus501Plain
  | OpenIddictApplicationGetListStatus501Json
  | OpenIddictApplicationGetListStatus501Json2;

export type OpenIddictApplicationGetListOptions = {
  body?: never;
  path?: never;
  query?: OpenIddictApplicationGetListQuery;
  headers?: never;
};

export type OpenIddictApplicationGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictApplicationGetListResponse =
  | OpenIddictApplicationGetListStatus200
  | OpenIddictApplicationGetListStatus400
  | OpenIddictApplicationGetListStatus401
  | OpenIddictApplicationGetListStatus403
  | OpenIddictApplicationGetListStatus404
  | OpenIddictApplicationGetListStatus500
  | OpenIddictApplicationGetListStatus501;
