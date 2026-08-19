/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminPagesPageDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Volo/cmsKit/admin/pages/pageDtoVolo/cmsKit/admin/application/ContractsVersion10600CultureneutralPublicKeyTokennull";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitPagesPageStatus } from "../volo/cmsKit/pages/PageStatus";

export type PageAdminGetListQuery = {
  Filter?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  Status?: VoloCmsKitPagesPageStatus;
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

export type PageAdminGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminPagesPageDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type PageAdminGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminPagesPageDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type PageAdminGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminPagesPageDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type PageAdminGetListStatus200 =
  | PageAdminGetListStatus200Plain
  | PageAdminGetListStatus200Json
  | PageAdminGetListStatus200Json2;

export type PageAdminGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus400 =
  | PageAdminGetListStatus400Plain
  | PageAdminGetListStatus400Json
  | PageAdminGetListStatus400Json2;

export type PageAdminGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus401 =
  | PageAdminGetListStatus401Plain
  | PageAdminGetListStatus401Json
  | PageAdminGetListStatus401Json2;

export type PageAdminGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus403 =
  | PageAdminGetListStatus403Plain
  | PageAdminGetListStatus403Json
  | PageAdminGetListStatus403Json2;

export type PageAdminGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus404 =
  | PageAdminGetListStatus404Plain
  | PageAdminGetListStatus404Json
  | PageAdminGetListStatus404Json2;

export type PageAdminGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus500 =
  | PageAdminGetListStatus500Plain
  | PageAdminGetListStatus500Json
  | PageAdminGetListStatus500Json2;

export type PageAdminGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus501 =
  | PageAdminGetListStatus501Plain
  | PageAdminGetListStatus501Json
  | PageAdminGetListStatus501Json2;

export type PageAdminGetListOptions = {
  body?: never;
  path?: never;
  query?: PageAdminGetListQuery;
  headers?: never;
};

export type PageAdminGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: PageAdminGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: PageAdminGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: PageAdminGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: PageAdminGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: PageAdminGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: PageAdminGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: PageAdminGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type PageAdminGetListResponse =
  | PageAdminGetListStatus200
  | PageAdminGetListStatus400
  | PageAdminGetListStatus401
  | PageAdminGetListStatus403
  | PageAdminGetListStatus404
  | PageAdminGetListStatus500
  | PageAdminGetListStatus501;
