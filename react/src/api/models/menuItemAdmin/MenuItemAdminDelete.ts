/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type MenuItemAdminDeletePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type MenuItemAdminDeleteStatus200 = unknown;

export type MenuItemAdminDeleteStatus204 = unknown;

export type MenuItemAdminDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus400 =
  | MenuItemAdminDeleteStatus400Plain
  | MenuItemAdminDeleteStatus400Json
  | MenuItemAdminDeleteStatus400Json2;

export type MenuItemAdminDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus401 =
  | MenuItemAdminDeleteStatus401Plain
  | MenuItemAdminDeleteStatus401Json
  | MenuItemAdminDeleteStatus401Json2;

export type MenuItemAdminDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus403 =
  | MenuItemAdminDeleteStatus403Plain
  | MenuItemAdminDeleteStatus403Json
  | MenuItemAdminDeleteStatus403Json2;

export type MenuItemAdminDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus404 =
  | MenuItemAdminDeleteStatus404Plain
  | MenuItemAdminDeleteStatus404Json
  | MenuItemAdminDeleteStatus404Json2;

export type MenuItemAdminDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus500 =
  | MenuItemAdminDeleteStatus500Plain
  | MenuItemAdminDeleteStatus500Json
  | MenuItemAdminDeleteStatus500Json2;

export type MenuItemAdminDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus501 =
  | MenuItemAdminDeleteStatus501Plain
  | MenuItemAdminDeleteStatus501Json
  | MenuItemAdminDeleteStatus501Json2;

export type MenuItemAdminDeleteOptions = {
  body?: never;
  path: MenuItemAdminDeletePath;
  query?: never;
  headers?: never;
};

export type MenuItemAdminDeleteResponses = {
  "200": MenuItemAdminDeleteStatus200;
  "204": MenuItemAdminDeleteStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: MenuItemAdminDeleteStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminDeleteStatus400Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminDeleteStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: MenuItemAdminDeleteStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminDeleteStatus401Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminDeleteStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: MenuItemAdminDeleteStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminDeleteStatus403Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminDeleteStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: MenuItemAdminDeleteStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminDeleteStatus404Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminDeleteStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: MenuItemAdminDeleteStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminDeleteStatus500Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminDeleteStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: MenuItemAdminDeleteStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: MenuItemAdminDeleteStatus501Json;
      }
    | {
        contentType: "text/json";
        data: MenuItemAdminDeleteStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type MenuItemAdminDeleteResponse =
  | MenuItemAdminDeleteStatus200
  | MenuItemAdminDeleteStatus204
  | MenuItemAdminDeleteStatus400
  | MenuItemAdminDeleteStatus401
  | MenuItemAdminDeleteStatus403
  | MenuItemAdminDeleteStatus404
  | MenuItemAdminDeleteStatus500
  | MenuItemAdminDeleteStatus501;
