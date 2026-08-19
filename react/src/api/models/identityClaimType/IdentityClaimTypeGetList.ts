/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackIdentityClaimsIdentityClaimTypeDtoAcroStackIdentityClaimsVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/identityClaims/identityClaimTypeDtoAcroStack/IdentityClaimsVersion1000CultureneutralPublicKeyTokennull";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type IdentityClaimTypeGetListQuery = {
  Name?: string;
  Sorting?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  SkipCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  MaxResultCount?: number;
};

export type IdentityClaimTypeGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackIdentityClaimsIdentityClaimTypeDtoAcroStackIdentityClaimsVersion1000CultureneutralPublicKeyTokennull;

export type IdentityClaimTypeGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackIdentityClaimsIdentityClaimTypeDtoAcroStackIdentityClaimsVersion1000CultureneutralPublicKeyTokennull;

export type IdentityClaimTypeGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackIdentityClaimsIdentityClaimTypeDtoAcroStackIdentityClaimsVersion1000CultureneutralPublicKeyTokennull;

export type IdentityClaimTypeGetListStatus200 =
  | IdentityClaimTypeGetListStatus200Plain
  | IdentityClaimTypeGetListStatus200Json
  | IdentityClaimTypeGetListStatus200Json2;

export type IdentityClaimTypeGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus400 =
  | IdentityClaimTypeGetListStatus400Plain
  | IdentityClaimTypeGetListStatus400Json
  | IdentityClaimTypeGetListStatus400Json2;

export type IdentityClaimTypeGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus401 =
  | IdentityClaimTypeGetListStatus401Plain
  | IdentityClaimTypeGetListStatus401Json
  | IdentityClaimTypeGetListStatus401Json2;

export type IdentityClaimTypeGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus403 =
  | IdentityClaimTypeGetListStatus403Plain
  | IdentityClaimTypeGetListStatus403Json
  | IdentityClaimTypeGetListStatus403Json2;

export type IdentityClaimTypeGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus404 =
  | IdentityClaimTypeGetListStatus404Plain
  | IdentityClaimTypeGetListStatus404Json
  | IdentityClaimTypeGetListStatus404Json2;

export type IdentityClaimTypeGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus500 =
  | IdentityClaimTypeGetListStatus500Plain
  | IdentityClaimTypeGetListStatus500Json
  | IdentityClaimTypeGetListStatus500Json2;

export type IdentityClaimTypeGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetListStatus501 =
  | IdentityClaimTypeGetListStatus501Plain
  | IdentityClaimTypeGetListStatus501Json
  | IdentityClaimTypeGetListStatus501Json2;

export type IdentityClaimTypeGetListOptions = {
  body?: never;
  path?: never;
  query?: IdentityClaimTypeGetListQuery;
  headers?: never;
};

export type IdentityClaimTypeGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: IdentityClaimTypeGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: IdentityClaimTypeGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: IdentityClaimTypeGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type IdentityClaimTypeGetListResponse =
  | IdentityClaimTypeGetListStatus200
  | IdentityClaimTypeGetListStatus400
  | IdentityClaimTypeGetListStatus401
  | IdentityClaimTypeGetListStatus403
  | IdentityClaimTypeGetListStatus404
  | IdentityClaimTypeGetListStatus500
  | IdentityClaimTypeGetListStatus501;
