/* oxlint-disable */

import type { AcroStackOpenIddictManagementOpenIddictScopeDto } from "../acroStack/openIddictManagement/OpenIddictScopeDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type OpenIddictScopeGetPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type OpenIddictScopeGetStatus200Plain = AcroStackOpenIddictManagementOpenIddictScopeDto;

export type OpenIddictScopeGetStatus200Json = AcroStackOpenIddictManagementOpenIddictScopeDto;

export type OpenIddictScopeGetStatus200Json2 = AcroStackOpenIddictManagementOpenIddictScopeDto;

export type OpenIddictScopeGetStatus200 =
  | OpenIddictScopeGetStatus200Plain
  | OpenIddictScopeGetStatus200Json
  | OpenIddictScopeGetStatus200Json2;

export type OpenIddictScopeGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus400 =
  | OpenIddictScopeGetStatus400Plain
  | OpenIddictScopeGetStatus400Json
  | OpenIddictScopeGetStatus400Json2;

export type OpenIddictScopeGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus401 =
  | OpenIddictScopeGetStatus401Plain
  | OpenIddictScopeGetStatus401Json
  | OpenIddictScopeGetStatus401Json2;

export type OpenIddictScopeGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus403 =
  | OpenIddictScopeGetStatus403Plain
  | OpenIddictScopeGetStatus403Json
  | OpenIddictScopeGetStatus403Json2;

export type OpenIddictScopeGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus404 =
  | OpenIddictScopeGetStatus404Plain
  | OpenIddictScopeGetStatus404Json
  | OpenIddictScopeGetStatus404Json2;

export type OpenIddictScopeGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus500 =
  | OpenIddictScopeGetStatus500Plain
  | OpenIddictScopeGetStatus500Json
  | OpenIddictScopeGetStatus500Json2;

export type OpenIddictScopeGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetStatus501 =
  | OpenIddictScopeGetStatus501Plain
  | OpenIddictScopeGetStatus501Json
  | OpenIddictScopeGetStatus501Json2;

export type OpenIddictScopeGetOptions = {
  body?: never;
  path: OpenIddictScopeGetPath;
  query?: never;
  headers?: never;
};

export type OpenIddictScopeGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: OpenIddictScopeGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictScopeGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictScopeGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: OpenIddictScopeGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictScopeGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictScopeGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: OpenIddictScopeGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictScopeGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictScopeGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: OpenIddictScopeGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictScopeGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictScopeGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: OpenIddictScopeGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictScopeGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictScopeGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: OpenIddictScopeGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictScopeGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictScopeGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: OpenIddictScopeGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictScopeGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictScopeGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictScopeGetResponse =
  | OpenIddictScopeGetStatus200
  | OpenIddictScopeGetStatus400
  | OpenIddictScopeGetStatus401
  | OpenIddictScopeGetStatus403
  | OpenIddictScopeGetStatus404
  | OpenIddictScopeGetStatus500
  | OpenIddictScopeGetStatus501;
