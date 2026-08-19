/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Volo/abp/identity/identityRoleDtoVolo/abp/identity/application/ContractsVersion10600CultureneutralPublicKeyTokennull";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type RoleGetListQuery = {
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
  ExtraProperties?: {
    [key: string]: unknown;
  };
};

export type RoleGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type RoleGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type RoleGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type RoleGetListStatus200 =
  | RoleGetListStatus200Plain
  | RoleGetListStatus200Json
  | RoleGetListStatus200Json2;

export type RoleGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus400 =
  | RoleGetListStatus400Plain
  | RoleGetListStatus400Json
  | RoleGetListStatus400Json2;

export type RoleGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus401 =
  | RoleGetListStatus401Plain
  | RoleGetListStatus401Json
  | RoleGetListStatus401Json2;

export type RoleGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus403 =
  | RoleGetListStatus403Plain
  | RoleGetListStatus403Json
  | RoleGetListStatus403Json2;

export type RoleGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus404 =
  | RoleGetListStatus404Plain
  | RoleGetListStatus404Json
  | RoleGetListStatus404Json2;

export type RoleGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus500 =
  | RoleGetListStatus500Plain
  | RoleGetListStatus500Json
  | RoleGetListStatus500Json2;

export type RoleGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus501 =
  | RoleGetListStatus501Plain
  | RoleGetListStatus501Json
  | RoleGetListStatus501Json2;

export type RoleGetListOptions = {
  body?: never;
  path?: never;
  query?: RoleGetListQuery;
  headers?: never;
};

export type RoleGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: RoleGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: RoleGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: RoleGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: RoleGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: RoleGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: RoleGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: RoleGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: RoleGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: RoleGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: RoleGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: RoleGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: RoleGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: RoleGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: RoleGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: RoleGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: RoleGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: RoleGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: RoleGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: RoleGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: RoleGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: RoleGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type RoleGetListResponse =
  | RoleGetListStatus200
  | RoleGetListStatus400
  | RoleGetListStatus401
  | RoleGetListStatus403
  | RoleGetListStatus404
  | RoleGetListStatus500
  | RoleGetListStatus501;
