/* oxlint-disable */

import type { AcroStackIdentityClaimsIdentityClaimDto } from "../acroStack/identityClaims/IdentityClaimDto";
import type { AcroStackIdentityClaimsUpdateIdentityClaimDto } from "../acroStack/identityClaims/UpdateIdentityClaimDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type IdentityRoleClaimUpdatePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type IdentityRoleClaimUpdateStatus200Plain = AcroStackIdentityClaimsIdentityClaimDto;

export type IdentityRoleClaimUpdateStatus200Json = AcroStackIdentityClaimsIdentityClaimDto;

export type IdentityRoleClaimUpdateStatus200Json2 = AcroStackIdentityClaimsIdentityClaimDto;

export type IdentityRoleClaimUpdateStatus200 =
  | IdentityRoleClaimUpdateStatus200Plain
  | IdentityRoleClaimUpdateStatus200Json
  | IdentityRoleClaimUpdateStatus200Json2;

export type IdentityRoleClaimUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus400 =
  | IdentityRoleClaimUpdateStatus400Plain
  | IdentityRoleClaimUpdateStatus400Json
  | IdentityRoleClaimUpdateStatus400Json2;

export type IdentityRoleClaimUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus401 =
  | IdentityRoleClaimUpdateStatus401Plain
  | IdentityRoleClaimUpdateStatus401Json
  | IdentityRoleClaimUpdateStatus401Json2;

export type IdentityRoleClaimUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus403 =
  | IdentityRoleClaimUpdateStatus403Plain
  | IdentityRoleClaimUpdateStatus403Json
  | IdentityRoleClaimUpdateStatus403Json2;

export type IdentityRoleClaimUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus404 =
  | IdentityRoleClaimUpdateStatus404Plain
  | IdentityRoleClaimUpdateStatus404Json
  | IdentityRoleClaimUpdateStatus404Json2;

export type IdentityRoleClaimUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus500 =
  | IdentityRoleClaimUpdateStatus500Plain
  | IdentityRoleClaimUpdateStatus500Json
  | IdentityRoleClaimUpdateStatus500Json2;

export type IdentityRoleClaimUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimUpdateStatus501 =
  | IdentityRoleClaimUpdateStatus501Plain
  | IdentityRoleClaimUpdateStatus501Json
  | IdentityRoleClaimUpdateStatus501Json2;

export type IdentityRoleClaimUpdateBodyJson =
  | AcroStackIdentityClaimsUpdateIdentityClaimDto
  | undefined;

export type IdentityRoleClaimUpdateBodyJson2 =
  | AcroStackIdentityClaimsUpdateIdentityClaimDto
  | undefined;

export type IdentityRoleClaimUpdateBodyJson3 =
  | AcroStackIdentityClaimsUpdateIdentityClaimDto
  | undefined;

export type IdentityRoleClaimUpdateBody =
  | IdentityRoleClaimUpdateBodyJson
  | IdentityRoleClaimUpdateBodyJson2
  | IdentityRoleClaimUpdateBodyJson3;

export type IdentityRoleClaimUpdateOptions = {
  body: IdentityRoleClaimUpdateBody;
  path: IdentityRoleClaimUpdatePath;
  query?: never;
  headers?: never;
};

export type IdentityRoleClaimUpdateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimUpdateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimUpdateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimUpdateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimUpdateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimUpdateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimUpdateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimUpdateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimUpdateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimUpdateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimUpdateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimUpdateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimUpdateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimUpdateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimUpdateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimUpdateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimUpdateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimUpdateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimUpdateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: IdentityRoleClaimUpdateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityRoleClaimUpdateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: IdentityRoleClaimUpdateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type IdentityRoleClaimUpdateResponse =
  | IdentityRoleClaimUpdateStatus200
  | IdentityRoleClaimUpdateStatus400
  | IdentityRoleClaimUpdateStatus401
  | IdentityRoleClaimUpdateStatus403
  | IdentityRoleClaimUpdateStatus404
  | IdentityRoleClaimUpdateStatus500
  | IdentityRoleClaimUpdateStatus501;
