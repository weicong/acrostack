/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictScopeDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/openIddictManagement/openIddictScopeDtoAcroStack/OpenIddictManagementVersion1000CultureneutralPublicKeyTokennull";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type OpenIddictScopeGetListQuery = {
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

export type OpenIddictScopeGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictScopeDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull;

export type OpenIddictScopeGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictScopeDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull;

export type OpenIddictScopeGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictScopeDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull;

export type OpenIddictScopeGetListStatus200 =
  | OpenIddictScopeGetListStatus200Plain
  | OpenIddictScopeGetListStatus200Json
  | OpenIddictScopeGetListStatus200Json2;

export type OpenIddictScopeGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus400 =
  | OpenIddictScopeGetListStatus400Plain
  | OpenIddictScopeGetListStatus400Json
  | OpenIddictScopeGetListStatus400Json2;

export type OpenIddictScopeGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus401 =
  | OpenIddictScopeGetListStatus401Plain
  | OpenIddictScopeGetListStatus401Json
  | OpenIddictScopeGetListStatus401Json2;

export type OpenIddictScopeGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus403 =
  | OpenIddictScopeGetListStatus403Plain
  | OpenIddictScopeGetListStatus403Json
  | OpenIddictScopeGetListStatus403Json2;

export type OpenIddictScopeGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus404 =
  | OpenIddictScopeGetListStatus404Plain
  | OpenIddictScopeGetListStatus404Json
  | OpenIddictScopeGetListStatus404Json2;

export type OpenIddictScopeGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus500 =
  | OpenIddictScopeGetListStatus500Plain
  | OpenIddictScopeGetListStatus500Json
  | OpenIddictScopeGetListStatus500Json2;

export type OpenIddictScopeGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus501 =
  | OpenIddictScopeGetListStatus501Plain
  | OpenIddictScopeGetListStatus501Json
  | OpenIddictScopeGetListStatus501Json2;

export type OpenIddictScopeGetListOptions = {
  body?: never;
  path?: never;
  query?: OpenIddictScopeGetListQuery;
  headers?: never;
};

export type OpenIddictScopeGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: OpenIddictScopeGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictScopeGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictScopeGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: OpenIddictScopeGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictScopeGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictScopeGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: OpenIddictScopeGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictScopeGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictScopeGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: OpenIddictScopeGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictScopeGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictScopeGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: OpenIddictScopeGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictScopeGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictScopeGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: OpenIddictScopeGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictScopeGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictScopeGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: OpenIddictScopeGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictScopeGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictScopeGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictScopeGetListResponse =
  | OpenIddictScopeGetListStatus200
  | OpenIddictScopeGetListStatus400
  | OpenIddictScopeGetListStatus401
  | OpenIddictScopeGetListStatus403
  | OpenIddictScopeGetListStatus404
  | OpenIddictScopeGetListStatus500
  | OpenIddictScopeGetListStatus501;
