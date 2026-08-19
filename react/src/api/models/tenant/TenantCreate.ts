/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpTenantManagementTenantCreateDto } from "../volo/abp/tenantManagement/TenantCreateDto";
import type { VoloAbpTenantManagementTenantDto } from "../volo/abp/tenantManagement/TenantDto";

export type TenantCreateStatus200Plain = VoloAbpTenantManagementTenantDto;

export type TenantCreateStatus200Json = VoloAbpTenantManagementTenantDto;

export type TenantCreateStatus200Json2 = VoloAbpTenantManagementTenantDto;

export type TenantCreateStatus200 =
  | TenantCreateStatus200Plain
  | TenantCreateStatus200Json
  | TenantCreateStatus200Json2;

export type TenantCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus400 =
  | TenantCreateStatus400Plain
  | TenantCreateStatus400Json
  | TenantCreateStatus400Json2;

export type TenantCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus401 =
  | TenantCreateStatus401Plain
  | TenantCreateStatus401Json
  | TenantCreateStatus401Json2;

export type TenantCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus403 =
  | TenantCreateStatus403Plain
  | TenantCreateStatus403Json
  | TenantCreateStatus403Json2;

export type TenantCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus404 =
  | TenantCreateStatus404Plain
  | TenantCreateStatus404Json
  | TenantCreateStatus404Json2;

export type TenantCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus500 =
  | TenantCreateStatus500Plain
  | TenantCreateStatus500Json
  | TenantCreateStatus500Json2;

export type TenantCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus501 =
  | TenantCreateStatus501Plain
  | TenantCreateStatus501Json
  | TenantCreateStatus501Json2;

export type TenantCreateBodyJson =
  | Omit<NonNullable<VoloAbpTenantManagementTenantCreateDto>, "extraProperties">
  | undefined;

export type TenantCreateBodyJson2 =
  | Omit<NonNullable<VoloAbpTenantManagementTenantCreateDto>, "extraProperties">
  | undefined;

export type TenantCreateBodyJson3 =
  | Omit<NonNullable<VoloAbpTenantManagementTenantCreateDto>, "extraProperties">
  | undefined;

export type TenantCreateBody = TenantCreateBodyJson | TenantCreateBodyJson2 | TenantCreateBodyJson3;

export type TenantCreateOptions = {
  body: TenantCreateBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type TenantCreateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: TenantCreateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: TenantCreateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: TenantCreateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: TenantCreateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: TenantCreateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: TenantCreateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: TenantCreateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: TenantCreateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: TenantCreateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: TenantCreateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: TenantCreateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: TenantCreateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: TenantCreateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: TenantCreateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: TenantCreateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: TenantCreateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: TenantCreateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: TenantCreateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: TenantCreateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: TenantCreateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: TenantCreateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type TenantCreateResponse =
  | TenantCreateStatus200
  | TenantCreateStatus400
  | TenantCreateStatus401
  | TenantCreateStatus403
  | TenantCreateStatus404
  | TenantCreateStatus500
  | TenantCreateStatus501;
