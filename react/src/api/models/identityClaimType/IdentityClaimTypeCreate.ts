/* oxlint-disable */

import type { AcroStackIdentityClaimsCreateIdentityClaimTypeDto } from "../acroStack/identityClaims/CreateIdentityClaimTypeDto";
import type { AcroStackIdentityClaimsIdentityClaimTypeDto } from "../acroStack/identityClaims/IdentityClaimTypeDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type IdentityClaimTypeCreateStatus200Plain = AcroStackIdentityClaimsIdentityClaimTypeDto;

export type IdentityClaimTypeCreateStatus200Json = AcroStackIdentityClaimsIdentityClaimTypeDto;

export type IdentityClaimTypeCreateStatus200Json2 = AcroStackIdentityClaimsIdentityClaimTypeDto;

export type IdentityClaimTypeCreateStatus200 =
  | IdentityClaimTypeCreateStatus200Plain
  | IdentityClaimTypeCreateStatus200Json
  | IdentityClaimTypeCreateStatus200Json2;

export type IdentityClaimTypeCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus400 =
  | IdentityClaimTypeCreateStatus400Plain
  | IdentityClaimTypeCreateStatus400Json
  | IdentityClaimTypeCreateStatus400Json2;

export type IdentityClaimTypeCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus401 =
  | IdentityClaimTypeCreateStatus401Plain
  | IdentityClaimTypeCreateStatus401Json
  | IdentityClaimTypeCreateStatus401Json2;

export type IdentityClaimTypeCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus403 =
  | IdentityClaimTypeCreateStatus403Plain
  | IdentityClaimTypeCreateStatus403Json
  | IdentityClaimTypeCreateStatus403Json2;

export type IdentityClaimTypeCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus404 =
  | IdentityClaimTypeCreateStatus404Plain
  | IdentityClaimTypeCreateStatus404Json
  | IdentityClaimTypeCreateStatus404Json2;

export type IdentityClaimTypeCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus500 =
  | IdentityClaimTypeCreateStatus500Plain
  | IdentityClaimTypeCreateStatus500Json
  | IdentityClaimTypeCreateStatus500Json2;

export type IdentityClaimTypeCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeCreateStatus501 =
  | IdentityClaimTypeCreateStatus501Plain
  | IdentityClaimTypeCreateStatus501Json
  | IdentityClaimTypeCreateStatus501Json2;

export type IdentityClaimTypeCreateBodyJson =
  | AcroStackIdentityClaimsCreateIdentityClaimTypeDto
  | undefined;

export type IdentityClaimTypeCreateBodyJson2 =
  | AcroStackIdentityClaimsCreateIdentityClaimTypeDto
  | undefined;

export type IdentityClaimTypeCreateBodyJson3 =
  | AcroStackIdentityClaimsCreateIdentityClaimTypeDto
  | undefined;

export type IdentityClaimTypeCreateBody =
  | IdentityClaimTypeCreateBodyJson
  | IdentityClaimTypeCreateBodyJson2
  | IdentityClaimTypeCreateBodyJson3;

export type IdentityClaimTypeCreateOptions = {
  body: IdentityClaimTypeCreateBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type IdentityClaimTypeCreateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeCreateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeCreateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeCreateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeCreateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeCreateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeCreateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeCreateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeCreateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeCreateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeCreateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeCreateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeCreateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeCreateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeCreateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeCreateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeCreateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeCreateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeCreateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeCreateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeCreateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeCreateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type IdentityClaimTypeCreateResponse =
  | IdentityClaimTypeCreateStatus200
  | IdentityClaimTypeCreateStatus400
  | IdentityClaimTypeCreateStatus401
  | IdentityClaimTypeCreateStatus403
  | IdentityClaimTypeCreateStatus404
  | IdentityClaimTypeCreateStatus500
  | IdentityClaimTypeCreateStatus501;
