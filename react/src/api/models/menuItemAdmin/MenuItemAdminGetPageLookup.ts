/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminMenusPageLookupDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Volo/cmsKit/admin/menus/pageLookupDtoVolo/cmsKit/admin/application/ContractsVersion10600CultureneutralPublicKeyTokennull";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitPagesPageStatus } from "../volo/cmsKit/pages/PageStatus";

export type MenuItemAdminGetPageLookupQuery = {
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

export type MenuItemAdminGetPageLookupStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminMenusPageLookupDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type MenuItemAdminGetPageLookupStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminMenusPageLookupDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type MenuItemAdminGetPageLookupStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminMenusPageLookupDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type MenuItemAdminGetPageLookupStatus200 =
  | MenuItemAdminGetPageLookupStatus200Plain
  | MenuItemAdminGetPageLookupStatus200Json
  | MenuItemAdminGetPageLookupStatus200Json2;

export type MenuItemAdminGetPageLookupStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus400 =
  | MenuItemAdminGetPageLookupStatus400Plain
  | MenuItemAdminGetPageLookupStatus400Json
  | MenuItemAdminGetPageLookupStatus400Json2;

export type MenuItemAdminGetPageLookupStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus401 =
  | MenuItemAdminGetPageLookupStatus401Plain
  | MenuItemAdminGetPageLookupStatus401Json
  | MenuItemAdminGetPageLookupStatus401Json2;

export type MenuItemAdminGetPageLookupStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus403 =
  | MenuItemAdminGetPageLookupStatus403Plain
  | MenuItemAdminGetPageLookupStatus403Json
  | MenuItemAdminGetPageLookupStatus403Json2;

export type MenuItemAdminGetPageLookupStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus404 =
  | MenuItemAdminGetPageLookupStatus404Plain
  | MenuItemAdminGetPageLookupStatus404Json
  | MenuItemAdminGetPageLookupStatus404Json2;

export type MenuItemAdminGetPageLookupStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus500 =
  | MenuItemAdminGetPageLookupStatus500Plain
  | MenuItemAdminGetPageLookupStatus500Json
  | MenuItemAdminGetPageLookupStatus500Json2;

export type MenuItemAdminGetPageLookupStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus501 =
  | MenuItemAdminGetPageLookupStatus501Plain
  | MenuItemAdminGetPageLookupStatus501Json
  | MenuItemAdminGetPageLookupStatus501Json2;

export type MenuItemAdminGetPageLookupOptions = {
  body?: never;
  path?: never;
  query?: MenuItemAdminGetPageLookupQuery;
  headers?: never;
};

export type MenuItemAdminGetPageLookupResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: MenuItemAdminGetPageLookupStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminGetPageLookupStatus200Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminGetPageLookupStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: MenuItemAdminGetPageLookupStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminGetPageLookupStatus400Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminGetPageLookupStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: MenuItemAdminGetPageLookupStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminGetPageLookupStatus401Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminGetPageLookupStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: MenuItemAdminGetPageLookupStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminGetPageLookupStatus403Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminGetPageLookupStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: MenuItemAdminGetPageLookupStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminGetPageLookupStatus404Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminGetPageLookupStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: MenuItemAdminGetPageLookupStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminGetPageLookupStatus500Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminGetPageLookupStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: MenuItemAdminGetPageLookupStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminGetPageLookupStatus501Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminGetPageLookupStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type MenuItemAdminGetPageLookupResponse =
  | MenuItemAdminGetPageLookupStatus200
  | MenuItemAdminGetPageLookupStatus400
  | MenuItemAdminGetPageLookupStatus401
  | MenuItemAdminGetPageLookupStatus403
  | MenuItemAdminGetPageLookupStatus404
  | MenuItemAdminGetPageLookupStatus500
  | MenuItemAdminGetPageLookupStatus501;
