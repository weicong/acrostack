/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpPermissionManagementGetResourceProviderListResultDto } from "../volo/abp/permissionManagement/GetResourceProviderListResultDto";

export type PermissionsGetResourceProviderKeyLookupServicesQuery = {
  resourceName?: string;
};

export type PermissionsGetResourceProviderKeyLookupServicesStatus200Plain =
  VoloAbpPermissionManagementGetResourceProviderListResultDto;

export type PermissionsGetResourceProviderKeyLookupServicesStatus200Json =
  VoloAbpPermissionManagementGetResourceProviderListResultDto;

export type PermissionsGetResourceProviderKeyLookupServicesStatus200Json2 =
  VoloAbpPermissionManagementGetResourceProviderListResultDto;

export type PermissionsGetResourceProviderKeyLookupServicesStatus200 =
  | PermissionsGetResourceProviderKeyLookupServicesStatus200Plain
  | PermissionsGetResourceProviderKeyLookupServicesStatus200Json
  | PermissionsGetResourceProviderKeyLookupServicesStatus200Json2;

export type PermissionsGetResourceProviderKeyLookupServicesStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus400Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus400 =
  | PermissionsGetResourceProviderKeyLookupServicesStatus400Plain
  | PermissionsGetResourceProviderKeyLookupServicesStatus400Json
  | PermissionsGetResourceProviderKeyLookupServicesStatus400Json2;

export type PermissionsGetResourceProviderKeyLookupServicesStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus401Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus401 =
  | PermissionsGetResourceProviderKeyLookupServicesStatus401Plain
  | PermissionsGetResourceProviderKeyLookupServicesStatus401Json
  | PermissionsGetResourceProviderKeyLookupServicesStatus401Json2;

export type PermissionsGetResourceProviderKeyLookupServicesStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus403Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus403 =
  | PermissionsGetResourceProviderKeyLookupServicesStatus403Plain
  | PermissionsGetResourceProviderKeyLookupServicesStatus403Json
  | PermissionsGetResourceProviderKeyLookupServicesStatus403Json2;

export type PermissionsGetResourceProviderKeyLookupServicesStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus404Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus404 =
  | PermissionsGetResourceProviderKeyLookupServicesStatus404Plain
  | PermissionsGetResourceProviderKeyLookupServicesStatus404Json
  | PermissionsGetResourceProviderKeyLookupServicesStatus404Json2;

export type PermissionsGetResourceProviderKeyLookupServicesStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus500Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus500 =
  | PermissionsGetResourceProviderKeyLookupServicesStatus500Plain
  | PermissionsGetResourceProviderKeyLookupServicesStatus500Json
  | PermissionsGetResourceProviderKeyLookupServicesStatus500Json2;

export type PermissionsGetResourceProviderKeyLookupServicesStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus501Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus501 =
  | PermissionsGetResourceProviderKeyLookupServicesStatus501Plain
  | PermissionsGetResourceProviderKeyLookupServicesStatus501Json
  | PermissionsGetResourceProviderKeyLookupServicesStatus501Json2;

export type PermissionsGetResourceProviderKeyLookupServicesOptions = {
  body?: never;
  path?: never;
  query?: PermissionsGetResourceProviderKeyLookupServicesQuery;
  headers?: never;
};

export type PermissionsGetResourceProviderKeyLookupServicesResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus200Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus400Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus401Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus403Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus404Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus500Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus501Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsGetResourceProviderKeyLookupServicesStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type PermissionsGetResourceProviderKeyLookupServicesResponse =
  | PermissionsGetResourceProviderKeyLookupServicesStatus200
  | PermissionsGetResourceProviderKeyLookupServicesStatus400
  | PermissionsGetResourceProviderKeyLookupServicesStatus401
  | PermissionsGetResourceProviderKeyLookupServicesStatus403
  | PermissionsGetResourceProviderKeyLookupServicesStatus404
  | PermissionsGetResourceProviderKeyLookupServicesStatus500
  | PermissionsGetResourceProviderKeyLookupServicesStatus501;
