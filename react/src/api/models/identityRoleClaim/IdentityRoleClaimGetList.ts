/* oxlint-disable */

import type { AcroStackIdentityClaimsIdentityClaimDto } from "../acroStack/identityClaims/IdentityClaimDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type IdentityRoleClaimGetListQuery = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  roleId?: string;
};

export type IdentityRoleClaimGetListStatus200Plain = AcroStackIdentityClaimsIdentityClaimDto[];

export type IdentityRoleClaimGetListStatus200Json = AcroStackIdentityClaimsIdentityClaimDto[];

export type IdentityRoleClaimGetListStatus200Json2 = AcroStackIdentityClaimsIdentityClaimDto[];

export type IdentityRoleClaimGetListStatus200 =
  | IdentityRoleClaimGetListStatus200Plain
  | IdentityRoleClaimGetListStatus200Json
  | IdentityRoleClaimGetListStatus200Json2;

export type IdentityRoleClaimGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus400 =
  | IdentityRoleClaimGetListStatus400Plain
  | IdentityRoleClaimGetListStatus400Json
  | IdentityRoleClaimGetListStatus400Json2;

export type IdentityRoleClaimGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus401 =
  | IdentityRoleClaimGetListStatus401Plain
  | IdentityRoleClaimGetListStatus401Json
  | IdentityRoleClaimGetListStatus401Json2;

export type IdentityRoleClaimGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus403 =
  | IdentityRoleClaimGetListStatus403Plain
  | IdentityRoleClaimGetListStatus403Json
  | IdentityRoleClaimGetListStatus403Json2;

export type IdentityRoleClaimGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus404 =
  | IdentityRoleClaimGetListStatus404Plain
  | IdentityRoleClaimGetListStatus404Json
  | IdentityRoleClaimGetListStatus404Json2;

export type IdentityRoleClaimGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus500 =
  | IdentityRoleClaimGetListStatus500Plain
  | IdentityRoleClaimGetListStatus500Json
  | IdentityRoleClaimGetListStatus500Json2;

export type IdentityRoleClaimGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimGetListStatus501 =
  | IdentityRoleClaimGetListStatus501Plain
  | IdentityRoleClaimGetListStatus501Json
  | IdentityRoleClaimGetListStatus501Json2;

export type IdentityRoleClaimGetListOptions = {
  body?: never;
  path?: never;
  query?: IdentityRoleClaimGetListQuery;
  headers?: never;
};

export type IdentityRoleClaimGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type IdentityRoleClaimGetListResponse =
  | IdentityRoleClaimGetListStatus200
  | IdentityRoleClaimGetListStatus400
  | IdentityRoleClaimGetListStatus401
  | IdentityRoleClaimGetListStatus403
  | IdentityRoleClaimGetListStatus404
  | IdentityRoleClaimGetListStatus500
  | IdentityRoleClaimGetListStatus501;
