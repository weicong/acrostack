/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpTenantManagementTenantDto } from "../volo/abp/tenantManagement/TenantDto";
import type { VoloAbpTenantManagementTenantUpdateDto } from "../volo/abp/tenantManagement/TenantUpdateDto";

export type TenantUpdatePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type TenantUpdateStatus200Plain = VoloAbpTenantManagementTenantDto;

export type TenantUpdateStatus200Json = VoloAbpTenantManagementTenantDto;

export type TenantUpdateStatus200Json2 = VoloAbpTenantManagementTenantDto;

export type TenantUpdateStatus200 =
  | TenantUpdateStatus200Plain
  | TenantUpdateStatus200Json
  | TenantUpdateStatus200Json2;

export type TenantUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus400 =
  | TenantUpdateStatus400Plain
  | TenantUpdateStatus400Json
  | TenantUpdateStatus400Json2;

export type TenantUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus401 =
  | TenantUpdateStatus401Plain
  | TenantUpdateStatus401Json
  | TenantUpdateStatus401Json2;

export type TenantUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus403 =
  | TenantUpdateStatus403Plain
  | TenantUpdateStatus403Json
  | TenantUpdateStatus403Json2;

export type TenantUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus404 =
  | TenantUpdateStatus404Plain
  | TenantUpdateStatus404Json
  | TenantUpdateStatus404Json2;

export type TenantUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus500 =
  | TenantUpdateStatus500Plain
  | TenantUpdateStatus500Json
  | TenantUpdateStatus500Json2;

export type TenantUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus501 =
  | TenantUpdateStatus501Plain
  | TenantUpdateStatus501Json
  | TenantUpdateStatus501Json2;

export type TenantUpdateBodyJson =
  | Omit<NonNullable<VoloAbpTenantManagementTenantUpdateDto>, "extraProperties">
  | undefined;

export type TenantUpdateBodyJson2 =
  | Omit<NonNullable<VoloAbpTenantManagementTenantUpdateDto>, "extraProperties">
  | undefined;

export type TenantUpdateBodyJson3 =
  | Omit<NonNullable<VoloAbpTenantManagementTenantUpdateDto>, "extraProperties">
  | undefined;

export type TenantUpdateBody = TenantUpdateBodyJson | TenantUpdateBodyJson2 | TenantUpdateBodyJson3;

export type TenantUpdateOptions = {
  body: TenantUpdateBody;
  path: TenantUpdatePath;
  query?: never;
  headers?: never;
};

export type TenantUpdateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: TenantUpdateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: TenantUpdateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: TenantUpdateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: TenantUpdateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: TenantUpdateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: TenantUpdateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: TenantUpdateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: TenantUpdateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: TenantUpdateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: TenantUpdateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: TenantUpdateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: TenantUpdateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: TenantUpdateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: TenantUpdateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: TenantUpdateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: TenantUpdateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: TenantUpdateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: TenantUpdateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: TenantUpdateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: TenantUpdateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: TenantUpdateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type TenantUpdateResponse =
  | TenantUpdateStatus200
  | TenantUpdateStatus400
  | TenantUpdateStatus401
  | TenantUpdateStatus403
  | TenantUpdateStatus404
  | TenantUpdateStatus500
  | TenantUpdateStatus501;
