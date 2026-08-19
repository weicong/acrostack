/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitAdminMenusMenuItemWithDetailsDto } from "../volo/cmsKit/admin/menus/MenuItemWithDetailsDto";

export type MenuItemAdminGetPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type MenuItemAdminGetStatus200Plain = VoloCmsKitAdminMenusMenuItemWithDetailsDto;

export type MenuItemAdminGetStatus200Json = VoloCmsKitAdminMenusMenuItemWithDetailsDto;

export type MenuItemAdminGetStatus200Json2 = VoloCmsKitAdminMenusMenuItemWithDetailsDto;

export type MenuItemAdminGetStatus200 =
  | MenuItemAdminGetStatus200Plain
  | MenuItemAdminGetStatus200Json
  | MenuItemAdminGetStatus200Json2;

export type MenuItemAdminGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus400 =
  | MenuItemAdminGetStatus400Plain
  | MenuItemAdminGetStatus400Json
  | MenuItemAdminGetStatus400Json2;

export type MenuItemAdminGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus401 =
  | MenuItemAdminGetStatus401Plain
  | MenuItemAdminGetStatus401Json
  | MenuItemAdminGetStatus401Json2;

export type MenuItemAdminGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus403 =
  | MenuItemAdminGetStatus403Plain
  | MenuItemAdminGetStatus403Json
  | MenuItemAdminGetStatus403Json2;

export type MenuItemAdminGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus404 =
  | MenuItemAdminGetStatus404Plain
  | MenuItemAdminGetStatus404Json
  | MenuItemAdminGetStatus404Json2;

export type MenuItemAdminGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus500 =
  | MenuItemAdminGetStatus500Plain
  | MenuItemAdminGetStatus500Json
  | MenuItemAdminGetStatus500Json2;

export type MenuItemAdminGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus501 =
  | MenuItemAdminGetStatus501Plain
  | MenuItemAdminGetStatus501Json
  | MenuItemAdminGetStatus501Json2;

export type MenuItemAdminGetOptions = {
  body?: never;
  path: MenuItemAdminGetPath;
  query?: never;
  headers?: never;
};

export type MenuItemAdminGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: MenuItemAdminGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: MenuItemAdminGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: MenuItemAdminGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: MenuItemAdminGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: MenuItemAdminGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: MenuItemAdminGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: MenuItemAdminGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type MenuItemAdminGetResponse =
  | MenuItemAdminGetStatus200
  | MenuItemAdminGetStatus400
  | MenuItemAdminGetStatus401
  | MenuItemAdminGetStatus403
  | MenuItemAdminGetStatus404
  | MenuItemAdminGetStatus500
  | MenuItemAdminGetStatus501;
