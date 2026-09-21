/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpPermissionManagementGetPermissionListResultDto } from "../volo/abp/permissionManagement/GetPermissionListResultDto";

export type PermissionsGetQuery = {
  providerName?: string;
  providerKey?: string;
};

export type PermissionsGetStatus200Plain = VoloAbpPermissionManagementGetPermissionListResultDto;

export type PermissionsGetStatus200Json = VoloAbpPermissionManagementGetPermissionListResultDto;

export type PermissionsGetStatus200Json2 = VoloAbpPermissionManagementGetPermissionListResultDto;

export type PermissionsGetStatus200 =
  | PermissionsGetStatus200Plain
  | PermissionsGetStatus200Json
  | PermissionsGetStatus200Json2;

export type PermissionsGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus400 =
  | PermissionsGetStatus400Plain
  | PermissionsGetStatus400Json
  | PermissionsGetStatus400Json2;

export type PermissionsGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus401 =
  | PermissionsGetStatus401Plain
  | PermissionsGetStatus401Json
  | PermissionsGetStatus401Json2;

export type PermissionsGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus403 =
  | PermissionsGetStatus403Plain
  | PermissionsGetStatus403Json
  | PermissionsGetStatus403Json2;

export type PermissionsGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus404 =
  | PermissionsGetStatus404Plain
  | PermissionsGetStatus404Json
  | PermissionsGetStatus404Json2;

export type PermissionsGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus500 =
  | PermissionsGetStatus500Plain
  | PermissionsGetStatus500Json
  | PermissionsGetStatus500Json2;

export type PermissionsGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus501 =
  | PermissionsGetStatus501Plain
  | PermissionsGetStatus501Json
  | PermissionsGetStatus501Json2;

export type PermissionsGetOptions = {
  body?: never;
  path?: never;
  query?: PermissionsGetQuery;
  headers?: never;
};

export type PermissionsGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: PermissionsGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: PermissionsGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: PermissionsGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: PermissionsGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: PermissionsGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: PermissionsGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: PermissionsGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type PermissionsGetResponse =
  | PermissionsGetStatus200
  | PermissionsGetStatus400
  | PermissionsGetStatus401
  | PermissionsGetStatus403
  | PermissionsGetStatus404
  | PermissionsGetStatus500
  | PermissionsGetStatus501;
