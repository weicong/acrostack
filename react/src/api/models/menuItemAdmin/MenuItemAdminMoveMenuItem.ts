/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitAdminMenusMenuItemMoveInput } from "../volo/cmsKit/admin/menus/MenuItemMoveInput";

export type MenuItemAdminMoveMenuItemPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type MenuItemAdminMoveMenuItemStatus200 = unknown;

export type MenuItemAdminMoveMenuItemStatus204 = unknown;

export type MenuItemAdminMoveMenuItemStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus400 =
  | MenuItemAdminMoveMenuItemStatus400Plain
  | MenuItemAdminMoveMenuItemStatus400Json
  | MenuItemAdminMoveMenuItemStatus400Json2;

export type MenuItemAdminMoveMenuItemStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus401 =
  | MenuItemAdminMoveMenuItemStatus401Plain
  | MenuItemAdminMoveMenuItemStatus401Json
  | MenuItemAdminMoveMenuItemStatus401Json2;

export type MenuItemAdminMoveMenuItemStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus403 =
  | MenuItemAdminMoveMenuItemStatus403Plain
  | MenuItemAdminMoveMenuItemStatus403Json
  | MenuItemAdminMoveMenuItemStatus403Json2;

export type MenuItemAdminMoveMenuItemStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus404 =
  | MenuItemAdminMoveMenuItemStatus404Plain
  | MenuItemAdminMoveMenuItemStatus404Json
  | MenuItemAdminMoveMenuItemStatus404Json2;

export type MenuItemAdminMoveMenuItemStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus500 =
  | MenuItemAdminMoveMenuItemStatus500Plain
  | MenuItemAdminMoveMenuItemStatus500Json
  | MenuItemAdminMoveMenuItemStatus500Json2;

export type MenuItemAdminMoveMenuItemStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus501 =
  | MenuItemAdminMoveMenuItemStatus501Plain
  | MenuItemAdminMoveMenuItemStatus501Json
  | MenuItemAdminMoveMenuItemStatus501Json2;

export type MenuItemAdminMoveMenuItemBodyJson = VoloCmsKitAdminMenusMenuItemMoveInput | undefined;

export type MenuItemAdminMoveMenuItemBodyJson2 = VoloCmsKitAdminMenusMenuItemMoveInput | undefined;

export type MenuItemAdminMoveMenuItemBodyJson3 = VoloCmsKitAdminMenusMenuItemMoveInput | undefined;

export type MenuItemAdminMoveMenuItemBody =
  | MenuItemAdminMoveMenuItemBodyJson
  | MenuItemAdminMoveMenuItemBodyJson2
  | MenuItemAdminMoveMenuItemBodyJson3;

export type MenuItemAdminMoveMenuItemOptions = {
  body: MenuItemAdminMoveMenuItemBody;
  path: MenuItemAdminMoveMenuItemPath;
  query?: never;
  headers?: never;
};

export type MenuItemAdminMoveMenuItemResponses = {
  "200": MenuItemAdminMoveMenuItemStatus200;
  "204": MenuItemAdminMoveMenuItemStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: MenuItemAdminMoveMenuItemStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminMoveMenuItemStatus400Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminMoveMenuItemStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: MenuItemAdminMoveMenuItemStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminMoveMenuItemStatus401Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminMoveMenuItemStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: MenuItemAdminMoveMenuItemStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminMoveMenuItemStatus403Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminMoveMenuItemStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: MenuItemAdminMoveMenuItemStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminMoveMenuItemStatus404Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminMoveMenuItemStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: MenuItemAdminMoveMenuItemStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminMoveMenuItemStatus500Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminMoveMenuItemStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: MenuItemAdminMoveMenuItemStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminMoveMenuItemStatus501Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminMoveMenuItemStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type MenuItemAdminMoveMenuItemResponse =
  | MenuItemAdminMoveMenuItemStatus200
  | MenuItemAdminMoveMenuItemStatus204
  | MenuItemAdminMoveMenuItemStatus400
  | MenuItemAdminMoveMenuItemStatus401
  | MenuItemAdminMoveMenuItemStatus403
  | MenuItemAdminMoveMenuItemStatus404
  | MenuItemAdminMoveMenuItemStatus500
  | MenuItemAdminMoveMenuItemStatus501;
