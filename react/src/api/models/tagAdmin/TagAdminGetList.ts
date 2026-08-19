/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloCmsKitTagsTagDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Volo/cmsKit/tags/tagDtoVolo/cmsKit/common/application/ContractsVersion10600CultureneutralPublicKeyTokennull";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type TagAdminGetListQuery = {
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

export type TagAdminGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitTagsTagDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type TagAdminGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitTagsTagDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type TagAdminGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitTagsTagDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type TagAdminGetListStatus200 =
  | TagAdminGetListStatus200Plain
  | TagAdminGetListStatus200Json
  | TagAdminGetListStatus200Json2;

export type TagAdminGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus400 =
  | TagAdminGetListStatus400Plain
  | TagAdminGetListStatus400Json
  | TagAdminGetListStatus400Json2;

export type TagAdminGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus401 =
  | TagAdminGetListStatus401Plain
  | TagAdminGetListStatus401Json
  | TagAdminGetListStatus401Json2;

export type TagAdminGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus403 =
  | TagAdminGetListStatus403Plain
  | TagAdminGetListStatus403Json
  | TagAdminGetListStatus403Json2;

export type TagAdminGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus404 =
  | TagAdminGetListStatus404Plain
  | TagAdminGetListStatus404Json
  | TagAdminGetListStatus404Json2;

export type TagAdminGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus500 =
  | TagAdminGetListStatus500Plain
  | TagAdminGetListStatus500Json
  | TagAdminGetListStatus500Json2;

export type TagAdminGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus501 =
  | TagAdminGetListStatus501Plain
  | TagAdminGetListStatus501Json
  | TagAdminGetListStatus501Json2;

export type TagAdminGetListOptions = {
  body?: never;
  path?: never;
  query?: TagAdminGetListQuery;
  headers?: never;
};

export type TagAdminGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: TagAdminGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: TagAdminGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: TagAdminGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: TagAdminGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: TagAdminGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: TagAdminGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: TagAdminGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type TagAdminGetListResponse =
  | TagAdminGetListStatus200
  | TagAdminGetListStatus400
  | TagAdminGetListStatus401
  | TagAdminGetListStatus403
  | TagAdminGetListStatus404
  | TagAdminGetListStatus500
  | TagAdminGetListStatus501;
