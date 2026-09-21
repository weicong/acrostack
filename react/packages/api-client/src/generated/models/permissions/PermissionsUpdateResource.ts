/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpPermissionManagementUpdateResourcePermissionsDto } from "../volo/abp/permissionManagement/UpdateResourcePermissionsDto";

export type PermissionsUpdateResourceQuery = {
  resourceName?: string;
  resourceKey?: string;
};

export type PermissionsUpdateResourceStatus200 = unknown;

export type PermissionsUpdateResourceStatus204 = unknown;

export type PermissionsUpdateResourceStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus400 =
  | PermissionsUpdateResourceStatus400Plain
  | PermissionsUpdateResourceStatus400Json
  | PermissionsUpdateResourceStatus400Json2;

export type PermissionsUpdateResourceStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus401 =
  | PermissionsUpdateResourceStatus401Plain
  | PermissionsUpdateResourceStatus401Json
  | PermissionsUpdateResourceStatus401Json2;

export type PermissionsUpdateResourceStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus403 =
  | PermissionsUpdateResourceStatus403Plain
  | PermissionsUpdateResourceStatus403Json
  | PermissionsUpdateResourceStatus403Json2;

export type PermissionsUpdateResourceStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus404 =
  | PermissionsUpdateResourceStatus404Plain
  | PermissionsUpdateResourceStatus404Json
  | PermissionsUpdateResourceStatus404Json2;

export type PermissionsUpdateResourceStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus500 =
  | PermissionsUpdateResourceStatus500Plain
  | PermissionsUpdateResourceStatus500Json
  | PermissionsUpdateResourceStatus500Json2;

export type PermissionsUpdateResourceStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus501 =
  | PermissionsUpdateResourceStatus501Plain
  | PermissionsUpdateResourceStatus501Json
  | PermissionsUpdateResourceStatus501Json2;

export type PermissionsUpdateResourceBodyJson =
  | VoloAbpPermissionManagementUpdateResourcePermissionsDto
  | undefined;

export type PermissionsUpdateResourceBodyJson2 =
  | VoloAbpPermissionManagementUpdateResourcePermissionsDto
  | undefined;

export type PermissionsUpdateResourceBodyJson3 =
  | VoloAbpPermissionManagementUpdateResourcePermissionsDto
  | undefined;

export type PermissionsUpdateResourceBody =
  | PermissionsUpdateResourceBodyJson
  | PermissionsUpdateResourceBodyJson2
  | PermissionsUpdateResourceBodyJson3;

export type PermissionsUpdateResourceOptions = {
  body: PermissionsUpdateResourceBody;
  path?: never;
  query?: PermissionsUpdateResourceQuery;
  headers?: never;
};

export type PermissionsUpdateResourceResponses = {
  "200": PermissionsUpdateResourceStatus200;
  "204": PermissionsUpdateResourceStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: PermissionsUpdateResourceStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsUpdateResourceStatus400Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsUpdateResourceStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: PermissionsUpdateResourceStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsUpdateResourceStatus401Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsUpdateResourceStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: PermissionsUpdateResourceStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsUpdateResourceStatus403Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsUpdateResourceStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: PermissionsUpdateResourceStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsUpdateResourceStatus404Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsUpdateResourceStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: PermissionsUpdateResourceStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsUpdateResourceStatus500Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsUpdateResourceStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: PermissionsUpdateResourceStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsUpdateResourceStatus501Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsUpdateResourceStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type PermissionsUpdateResourceResponse =
  | PermissionsUpdateResourceStatus200
  | PermissionsUpdateResourceStatus204
  | PermissionsUpdateResourceStatus400
  | PermissionsUpdateResourceStatus401
  | PermissionsUpdateResourceStatus403
  | PermissionsUpdateResourceStatus404
  | PermissionsUpdateResourceStatus500
  | PermissionsUpdateResourceStatus501;
