/* oxlint-disable */

import type { AcroStackIdentityClaimsCreateIdentityUserClaimDto } from "../acroStack/identityClaims/CreateIdentityUserClaimDto";
import type { AcroStackIdentityClaimsIdentityClaimDto } from "../acroStack/identityClaims/IdentityClaimDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type IdentityUserClaimCreateStatus200Plain = AcroStackIdentityClaimsIdentityClaimDto;

export type IdentityUserClaimCreateStatus200Json = AcroStackIdentityClaimsIdentityClaimDto;

export type IdentityUserClaimCreateStatus200Json2 = AcroStackIdentityClaimsIdentityClaimDto;

export type IdentityUserClaimCreateStatus200 =
  | IdentityUserClaimCreateStatus200Plain
  | IdentityUserClaimCreateStatus200Json
  | IdentityUserClaimCreateStatus200Json2;

export type IdentityUserClaimCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus400 =
  | IdentityUserClaimCreateStatus400Plain
  | IdentityUserClaimCreateStatus400Json
  | IdentityUserClaimCreateStatus400Json2;

export type IdentityUserClaimCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus401 =
  | IdentityUserClaimCreateStatus401Plain
  | IdentityUserClaimCreateStatus401Json
  | IdentityUserClaimCreateStatus401Json2;

export type IdentityUserClaimCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus403 =
  | IdentityUserClaimCreateStatus403Plain
  | IdentityUserClaimCreateStatus403Json
  | IdentityUserClaimCreateStatus403Json2;

export type IdentityUserClaimCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus404 =
  | IdentityUserClaimCreateStatus404Plain
  | IdentityUserClaimCreateStatus404Json
  | IdentityUserClaimCreateStatus404Json2;

export type IdentityUserClaimCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus500 =
  | IdentityUserClaimCreateStatus500Plain
  | IdentityUserClaimCreateStatus500Json
  | IdentityUserClaimCreateStatus500Json2;

export type IdentityUserClaimCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimCreateStatus501 =
  | IdentityUserClaimCreateStatus501Plain
  | IdentityUserClaimCreateStatus501Json
  | IdentityUserClaimCreateStatus501Json2;

export type IdentityUserClaimCreateBodyJson =
  | AcroStackIdentityClaimsCreateIdentityUserClaimDto
  | undefined;

export type IdentityUserClaimCreateBodyJson2 =
  | AcroStackIdentityClaimsCreateIdentityUserClaimDto
  | undefined;

export type IdentityUserClaimCreateBodyJson3 =
  | AcroStackIdentityClaimsCreateIdentityUserClaimDto
  | undefined;

export type IdentityUserClaimCreateBody =
  | IdentityUserClaimCreateBodyJson
  | IdentityUserClaimCreateBodyJson2
  | IdentityUserClaimCreateBodyJson3;

export type IdentityUserClaimCreateOptions = {
  body: IdentityUserClaimCreateBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type IdentityUserClaimCreateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: IdentityUserClaimCreateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityUserClaimCreateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: IdentityUserClaimCreateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: IdentityUserClaimCreateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityUserClaimCreateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: IdentityUserClaimCreateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: IdentityUserClaimCreateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityUserClaimCreateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: IdentityUserClaimCreateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: IdentityUserClaimCreateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityUserClaimCreateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: IdentityUserClaimCreateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: IdentityUserClaimCreateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityUserClaimCreateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: IdentityUserClaimCreateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: IdentityUserClaimCreateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityUserClaimCreateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: IdentityUserClaimCreateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: IdentityUserClaimCreateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityUserClaimCreateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: IdentityUserClaimCreateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type IdentityUserClaimCreateResponse =
  | IdentityUserClaimCreateStatus200
  | IdentityUserClaimCreateStatus400
  | IdentityUserClaimCreateStatus401
  | IdentityUserClaimCreateStatus403
  | IdentityUserClaimCreateStatus404
  | IdentityUserClaimCreateStatus500
  | IdentityUserClaimCreateStatus501;
