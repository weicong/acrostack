/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloAbpTenantManagementTenantDtoVoloAbpTenantManagementApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Volo/abp/tenantManagement/tenantDtoVolo/abp/tenantManagement/application/ContractsVersion10600CultureneutralPublicKeyTokennull";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type TenantGetListQuery = {
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

export type TenantGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1VoloAbpTenantManagementTenantDtoVoloAbpTenantManagementApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type TenantGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1VoloAbpTenantManagementTenantDtoVoloAbpTenantManagementApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type TenantGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1VoloAbpTenantManagementTenantDtoVoloAbpTenantManagementApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type TenantGetListStatus200 =
  | TenantGetListStatus200Plain
  | TenantGetListStatus200Json
  | TenantGetListStatus200Json2;

export type TenantGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus400 =
  | TenantGetListStatus400Plain
  | TenantGetListStatus400Json
  | TenantGetListStatus400Json2;

export type TenantGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus401 =
  | TenantGetListStatus401Plain
  | TenantGetListStatus401Json
  | TenantGetListStatus401Json2;

export type TenantGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus403 =
  | TenantGetListStatus403Plain
  | TenantGetListStatus403Json
  | TenantGetListStatus403Json2;

export type TenantGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus404 =
  | TenantGetListStatus404Plain
  | TenantGetListStatus404Json
  | TenantGetListStatus404Json2;

export type TenantGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus500 =
  | TenantGetListStatus500Plain
  | TenantGetListStatus500Json
  | TenantGetListStatus500Json2;

export type TenantGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus501 =
  | TenantGetListStatus501Plain
  | TenantGetListStatus501Json
  | TenantGetListStatus501Json2;

export type TenantGetListOptions = {
  body?: never;
  path?: never;
  query?: TenantGetListQuery;
  headers?: never;
};

export type TenantGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: TenantGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: TenantGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: TenantGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: TenantGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: TenantGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: TenantGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: TenantGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: TenantGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: TenantGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: TenantGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: TenantGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: TenantGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: TenantGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: TenantGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: TenantGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: TenantGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: TenantGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: TenantGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: TenantGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: TenantGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: TenantGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type TenantGetListResponse =
  | TenantGetListStatus200
  | TenantGetListStatus400
  | TenantGetListStatus401
  | TenantGetListStatus403
  | TenantGetListStatus404
  | TenantGetListStatus500
  | TenantGetListStatus501;
