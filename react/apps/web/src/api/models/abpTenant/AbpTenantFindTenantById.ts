/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto } from "../volo/abp/aspNetCore/mvc/multiTenancy/FindTenantResultDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type AbpTenantFindTenantByIdPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type AbpTenantFindTenantByIdStatus200Plain =
  VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto;

export type AbpTenantFindTenantByIdStatus200Json =
  VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto;

export type AbpTenantFindTenantByIdStatus200Json2 =
  VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto;

export type AbpTenantFindTenantByIdStatus200 =
  | AbpTenantFindTenantByIdStatus200Plain
  | AbpTenantFindTenantByIdStatus200Json
  | AbpTenantFindTenantByIdStatus200Json2;

export type AbpTenantFindTenantByIdStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus400 =
  | AbpTenantFindTenantByIdStatus400Plain
  | AbpTenantFindTenantByIdStatus400Json
  | AbpTenantFindTenantByIdStatus400Json2;

export type AbpTenantFindTenantByIdStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus401 =
  | AbpTenantFindTenantByIdStatus401Plain
  | AbpTenantFindTenantByIdStatus401Json
  | AbpTenantFindTenantByIdStatus401Json2;

export type AbpTenantFindTenantByIdStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus403 =
  | AbpTenantFindTenantByIdStatus403Plain
  | AbpTenantFindTenantByIdStatus403Json
  | AbpTenantFindTenantByIdStatus403Json2;

export type AbpTenantFindTenantByIdStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus404 =
  | AbpTenantFindTenantByIdStatus404Plain
  | AbpTenantFindTenantByIdStatus404Json
  | AbpTenantFindTenantByIdStatus404Json2;

export type AbpTenantFindTenantByIdStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus500 =
  | AbpTenantFindTenantByIdStatus500Plain
  | AbpTenantFindTenantByIdStatus500Json
  | AbpTenantFindTenantByIdStatus500Json2;

export type AbpTenantFindTenantByIdStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus501 =
  | AbpTenantFindTenantByIdStatus501Plain
  | AbpTenantFindTenantByIdStatus501Json
  | AbpTenantFindTenantByIdStatus501Json2;

export type AbpTenantFindTenantByIdOptions = {
  body?: never;
  path: AbpTenantFindTenantByIdPath;
  query?: never;
  headers?: never;
};

export type AbpTenantFindTenantByIdResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: AbpTenantFindTenantByIdStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: AbpTenantFindTenantByIdStatus200Json;
      }
    | {
        contentType: "text/json";
        data: AbpTenantFindTenantByIdStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: AbpTenantFindTenantByIdStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: AbpTenantFindTenantByIdStatus400Json;
      }
    | {
        contentType: "text/json";
        data: AbpTenantFindTenantByIdStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: AbpTenantFindTenantByIdStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: AbpTenantFindTenantByIdStatus401Json;
      }
    | {
        contentType: "text/json";
        data: AbpTenantFindTenantByIdStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: AbpTenantFindTenantByIdStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: AbpTenantFindTenantByIdStatus403Json;
      }
    | {
        contentType: "text/json";
        data: AbpTenantFindTenantByIdStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: AbpTenantFindTenantByIdStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: AbpTenantFindTenantByIdStatus404Json;
      }
    | {
        contentType: "text/json";
        data: AbpTenantFindTenantByIdStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: AbpTenantFindTenantByIdStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: AbpTenantFindTenantByIdStatus500Json;
      }
    | {
        contentType: "text/json";
        data: AbpTenantFindTenantByIdStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: AbpTenantFindTenantByIdStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: AbpTenantFindTenantByIdStatus501Json;
      }
    | {
        contentType: "text/json";
        data: AbpTenantFindTenantByIdStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type AbpTenantFindTenantByIdResponse =
  | AbpTenantFindTenantByIdStatus200
  | AbpTenantFindTenantByIdStatus400
  | AbpTenantFindTenantByIdStatus401
  | AbpTenantFindTenantByIdStatus403
  | AbpTenantFindTenantByIdStatus404
  | AbpTenantFindTenantByIdStatus500
  | AbpTenantFindTenantByIdStatus501;
