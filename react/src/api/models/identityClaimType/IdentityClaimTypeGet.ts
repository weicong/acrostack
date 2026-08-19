/* oxlint-disable */

import type { AcroStackIdentityClaimsIdentityClaimTypeDto } from "../acroStack/identityClaims/IdentityClaimTypeDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type IdentityClaimTypeGetPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type IdentityClaimTypeGetStatus200Plain = AcroStackIdentityClaimsIdentityClaimTypeDto;

export type IdentityClaimTypeGetStatus200Json = AcroStackIdentityClaimsIdentityClaimTypeDto;

export type IdentityClaimTypeGetStatus200Json2 = AcroStackIdentityClaimsIdentityClaimTypeDto;

export type IdentityClaimTypeGetStatus200 =
  | IdentityClaimTypeGetStatus200Plain
  | IdentityClaimTypeGetStatus200Json
  | IdentityClaimTypeGetStatus200Json2;

export type IdentityClaimTypeGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus400 =
  | IdentityClaimTypeGetStatus400Plain
  | IdentityClaimTypeGetStatus400Json
  | IdentityClaimTypeGetStatus400Json2;

export type IdentityClaimTypeGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus401 =
  | IdentityClaimTypeGetStatus401Plain
  | IdentityClaimTypeGetStatus401Json
  | IdentityClaimTypeGetStatus401Json2;

export type IdentityClaimTypeGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus403 =
  | IdentityClaimTypeGetStatus403Plain
  | IdentityClaimTypeGetStatus403Json
  | IdentityClaimTypeGetStatus403Json2;

export type IdentityClaimTypeGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus404 =
  | IdentityClaimTypeGetStatus404Plain
  | IdentityClaimTypeGetStatus404Json
  | IdentityClaimTypeGetStatus404Json2;

export type IdentityClaimTypeGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus500 =
  | IdentityClaimTypeGetStatus500Plain
  | IdentityClaimTypeGetStatus500Json
  | IdentityClaimTypeGetStatus500Json2;

export type IdentityClaimTypeGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetStatus501 =
  | IdentityClaimTypeGetStatus501Plain
  | IdentityClaimTypeGetStatus501Json
  | IdentityClaimTypeGetStatus501Json2;

export type IdentityClaimTypeGetOptions = {
  body?: never;
  path: IdentityClaimTypeGetPath;
  query?: never;
  headers?: never;
};

export type IdentityClaimTypeGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type IdentityClaimTypeGetResponse =
  | IdentityClaimTypeGetStatus200
  | IdentityClaimTypeGetStatus400
  | IdentityClaimTypeGetStatus401
  | IdentityClaimTypeGetStatus403
  | IdentityClaimTypeGetStatus404
  | IdentityClaimTypeGetStatus500
  | IdentityClaimTypeGetStatus501;
