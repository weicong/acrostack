/* oxlint-disable */

import type { AcroStackIdentityClaimsIdentityClaimTypeDto } from "../acroStack/identityClaims/IdentityClaimTypeDto";
import type { AcroStackIdentityClaimsUpdateIdentityClaimTypeDto } from "../acroStack/identityClaims/UpdateIdentityClaimTypeDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type IdentityClaimTypeUpdatePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type IdentityClaimTypeUpdateStatus200Plain = AcroStackIdentityClaimsIdentityClaimTypeDto;

export type IdentityClaimTypeUpdateStatus200Json = AcroStackIdentityClaimsIdentityClaimTypeDto;

export type IdentityClaimTypeUpdateStatus200Json2 = AcroStackIdentityClaimsIdentityClaimTypeDto;

export type IdentityClaimTypeUpdateStatus200 =
  | IdentityClaimTypeUpdateStatus200Plain
  | IdentityClaimTypeUpdateStatus200Json
  | IdentityClaimTypeUpdateStatus200Json2;

export type IdentityClaimTypeUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus400 =
  | IdentityClaimTypeUpdateStatus400Plain
  | IdentityClaimTypeUpdateStatus400Json
  | IdentityClaimTypeUpdateStatus400Json2;

export type IdentityClaimTypeUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus401 =
  | IdentityClaimTypeUpdateStatus401Plain
  | IdentityClaimTypeUpdateStatus401Json
  | IdentityClaimTypeUpdateStatus401Json2;

export type IdentityClaimTypeUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus403 =
  | IdentityClaimTypeUpdateStatus403Plain
  | IdentityClaimTypeUpdateStatus403Json
  | IdentityClaimTypeUpdateStatus403Json2;

export type IdentityClaimTypeUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus404 =
  | IdentityClaimTypeUpdateStatus404Plain
  | IdentityClaimTypeUpdateStatus404Json
  | IdentityClaimTypeUpdateStatus404Json2;

export type IdentityClaimTypeUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus500 =
  | IdentityClaimTypeUpdateStatus500Plain
  | IdentityClaimTypeUpdateStatus500Json
  | IdentityClaimTypeUpdateStatus500Json2;

export type IdentityClaimTypeUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeUpdateStatus501 =
  | IdentityClaimTypeUpdateStatus501Plain
  | IdentityClaimTypeUpdateStatus501Json
  | IdentityClaimTypeUpdateStatus501Json2;

export type IdentityClaimTypeUpdateBodyJson =
  | AcroStackIdentityClaimsUpdateIdentityClaimTypeDto
  | undefined;

export type IdentityClaimTypeUpdateBodyJson2 =
  | AcroStackIdentityClaimsUpdateIdentityClaimTypeDto
  | undefined;

export type IdentityClaimTypeUpdateBodyJson3 =
  | AcroStackIdentityClaimsUpdateIdentityClaimTypeDto
  | undefined;

export type IdentityClaimTypeUpdateBody =
  | IdentityClaimTypeUpdateBodyJson
  | IdentityClaimTypeUpdateBodyJson2
  | IdentityClaimTypeUpdateBodyJson3;

export type IdentityClaimTypeUpdateOptions = {
  body: IdentityClaimTypeUpdateBody;
  path: IdentityClaimTypeUpdatePath;
  query?: never;
  headers?: never;
};

export type IdentityClaimTypeUpdateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeUpdateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeUpdateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeUpdateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeUpdateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeUpdateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeUpdateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeUpdateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeUpdateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeUpdateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeUpdateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeUpdateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeUpdateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeUpdateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeUpdateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeUpdateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeUpdateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeUpdateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeUpdateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeUpdateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeUpdateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeUpdateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type IdentityClaimTypeUpdateResponse =
  | IdentityClaimTypeUpdateStatus200
  | IdentityClaimTypeUpdateStatus400
  | IdentityClaimTypeUpdateStatus401
  | IdentityClaimTypeUpdateStatus403
  | IdentityClaimTypeUpdateStatus404
  | IdentityClaimTypeUpdateStatus500
  | IdentityClaimTypeUpdateStatus501;
