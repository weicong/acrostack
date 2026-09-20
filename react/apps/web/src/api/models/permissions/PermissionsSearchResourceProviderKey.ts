/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpPermissionManagementSearchProviderKeyListResultDto } from "../volo/abp/permissionManagement/SearchProviderKeyListResultDto";

export type PermissionsSearchResourceProviderKeyQuery = {
  resourceName?: string;
  serviceName?: string;
  filter?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  page?: number;
};

export type PermissionsSearchResourceProviderKeyStatus200Plain =
  VoloAbpPermissionManagementSearchProviderKeyListResultDto;

export type PermissionsSearchResourceProviderKeyStatus200Json =
  VoloAbpPermissionManagementSearchProviderKeyListResultDto;

export type PermissionsSearchResourceProviderKeyStatus200Json2 =
  VoloAbpPermissionManagementSearchProviderKeyListResultDto;

export type PermissionsSearchResourceProviderKeyStatus200 =
  | PermissionsSearchResourceProviderKeyStatus200Plain
  | PermissionsSearchResourceProviderKeyStatus200Json
  | PermissionsSearchResourceProviderKeyStatus200Json2;

export type PermissionsSearchResourceProviderKeyStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus400Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus400 =
  | PermissionsSearchResourceProviderKeyStatus400Plain
  | PermissionsSearchResourceProviderKeyStatus400Json
  | PermissionsSearchResourceProviderKeyStatus400Json2;

export type PermissionsSearchResourceProviderKeyStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus401Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus401 =
  | PermissionsSearchResourceProviderKeyStatus401Plain
  | PermissionsSearchResourceProviderKeyStatus401Json
  | PermissionsSearchResourceProviderKeyStatus401Json2;

export type PermissionsSearchResourceProviderKeyStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus403Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus403 =
  | PermissionsSearchResourceProviderKeyStatus403Plain
  | PermissionsSearchResourceProviderKeyStatus403Json
  | PermissionsSearchResourceProviderKeyStatus403Json2;

export type PermissionsSearchResourceProviderKeyStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus404Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus404 =
  | PermissionsSearchResourceProviderKeyStatus404Plain
  | PermissionsSearchResourceProviderKeyStatus404Json
  | PermissionsSearchResourceProviderKeyStatus404Json2;

export type PermissionsSearchResourceProviderKeyStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus500Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus500 =
  | PermissionsSearchResourceProviderKeyStatus500Plain
  | PermissionsSearchResourceProviderKeyStatus500Json
  | PermissionsSearchResourceProviderKeyStatus500Json2;

export type PermissionsSearchResourceProviderKeyStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus501Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus501 =
  | PermissionsSearchResourceProviderKeyStatus501Plain
  | PermissionsSearchResourceProviderKeyStatus501Json
  | PermissionsSearchResourceProviderKeyStatus501Json2;

export type PermissionsSearchResourceProviderKeyOptions = {
  body?: never;
  path?: never;
  query?: PermissionsSearchResourceProviderKeyQuery;
  headers?: never;
};

export type PermissionsSearchResourceProviderKeyResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: PermissionsSearchResourceProviderKeyStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsSearchResourceProviderKeyStatus200Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsSearchResourceProviderKeyStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: PermissionsSearchResourceProviderKeyStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsSearchResourceProviderKeyStatus400Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsSearchResourceProviderKeyStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: PermissionsSearchResourceProviderKeyStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsSearchResourceProviderKeyStatus401Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsSearchResourceProviderKeyStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: PermissionsSearchResourceProviderKeyStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsSearchResourceProviderKeyStatus403Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsSearchResourceProviderKeyStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: PermissionsSearchResourceProviderKeyStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsSearchResourceProviderKeyStatus404Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsSearchResourceProviderKeyStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: PermissionsSearchResourceProviderKeyStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsSearchResourceProviderKeyStatus500Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsSearchResourceProviderKeyStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: PermissionsSearchResourceProviderKeyStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: PermissionsSearchResourceProviderKeyStatus501Json;
      }
    | {
        contentType: "text/json";
        data: PermissionsSearchResourceProviderKeyStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type PermissionsSearchResourceProviderKeyResponse =
  | PermissionsSearchResourceProviderKeyStatus200
  | PermissionsSearchResourceProviderKeyStatus400
  | PermissionsSearchResourceProviderKeyStatus401
  | PermissionsSearchResourceProviderKeyStatus403
  | PermissionsSearchResourceProviderKeyStatus404
  | PermissionsSearchResourceProviderKeyStatus500
  | PermissionsSearchResourceProviderKeyStatus501;
