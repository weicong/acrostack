/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1Volo/cmsKit/admin/blogs/blogDtoVolo/cmsKit/admin/application/ContractsVersion10600CultureneutralPublicKeyTokennull";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type BlogAdminGetAllListStatus200Plain =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type BlogAdminGetAllListStatus200Json =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type BlogAdminGetAllListStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type BlogAdminGetAllListStatus200 =
  | BlogAdminGetAllListStatus200Plain
  | BlogAdminGetAllListStatus200Json
  | BlogAdminGetAllListStatus200Json2;

export type BlogAdminGetAllListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus400 =
  | BlogAdminGetAllListStatus400Plain
  | BlogAdminGetAllListStatus400Json
  | BlogAdminGetAllListStatus400Json2;

export type BlogAdminGetAllListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus401 =
  | BlogAdminGetAllListStatus401Plain
  | BlogAdminGetAllListStatus401Json
  | BlogAdminGetAllListStatus401Json2;

export type BlogAdminGetAllListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus403 =
  | BlogAdminGetAllListStatus403Plain
  | BlogAdminGetAllListStatus403Json
  | BlogAdminGetAllListStatus403Json2;

export type BlogAdminGetAllListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus404 =
  | BlogAdminGetAllListStatus404Plain
  | BlogAdminGetAllListStatus404Json
  | BlogAdminGetAllListStatus404Json2;

export type BlogAdminGetAllListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus500 =
  | BlogAdminGetAllListStatus500Plain
  | BlogAdminGetAllListStatus500Json
  | BlogAdminGetAllListStatus500Json2;

export type BlogAdminGetAllListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus501 =
  | BlogAdminGetAllListStatus501Plain
  | BlogAdminGetAllListStatus501Json
  | BlogAdminGetAllListStatus501Json2;

export type BlogAdminGetAllListOptions = {
  body?: never;
  path?: never;
  query?: never;
  headers?: never;
};

export type BlogAdminGetAllListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: BlogAdminGetAllListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminGetAllListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminGetAllListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: BlogAdminGetAllListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminGetAllListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminGetAllListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BlogAdminGetAllListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminGetAllListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminGetAllListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BlogAdminGetAllListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminGetAllListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminGetAllListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BlogAdminGetAllListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminGetAllListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminGetAllListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BlogAdminGetAllListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminGetAllListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminGetAllListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BlogAdminGetAllListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminGetAllListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminGetAllListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BlogAdminGetAllListResponse =
  | BlogAdminGetAllListStatus200
  | BlogAdminGetAllListStatus400
  | BlogAdminGetAllListStatus401
  | BlogAdminGetAllListStatus403
  | BlogAdminGetAllListStatus404
  | BlogAdminGetAllListStatus500
  | BlogAdminGetAllListStatus501;
