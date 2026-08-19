/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitContentsPageDto } from "../volo/cmsKit/contents/PageDto";

export type PagesPublicFindBySlugQuery = {
  slug?: string;
};

export type PagesPublicFindBySlugStatus200Plain = VoloCmsKitContentsPageDto;

export type PagesPublicFindBySlugStatus200Json = VoloCmsKitContentsPageDto;

export type PagesPublicFindBySlugStatus200Json2 = VoloCmsKitContentsPageDto;

export type PagesPublicFindBySlugStatus200 =
  | PagesPublicFindBySlugStatus200Plain
  | PagesPublicFindBySlugStatus200Json
  | PagesPublicFindBySlugStatus200Json2;

export type PagesPublicFindBySlugStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus400 =
  | PagesPublicFindBySlugStatus400Plain
  | PagesPublicFindBySlugStatus400Json
  | PagesPublicFindBySlugStatus400Json2;

export type PagesPublicFindBySlugStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus401 =
  | PagesPublicFindBySlugStatus401Plain
  | PagesPublicFindBySlugStatus401Json
  | PagesPublicFindBySlugStatus401Json2;

export type PagesPublicFindBySlugStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus403 =
  | PagesPublicFindBySlugStatus403Plain
  | PagesPublicFindBySlugStatus403Json
  | PagesPublicFindBySlugStatus403Json2;

export type PagesPublicFindBySlugStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus404 =
  | PagesPublicFindBySlugStatus404Plain
  | PagesPublicFindBySlugStatus404Json
  | PagesPublicFindBySlugStatus404Json2;

export type PagesPublicFindBySlugStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus500 =
  | PagesPublicFindBySlugStatus500Plain
  | PagesPublicFindBySlugStatus500Json
  | PagesPublicFindBySlugStatus500Json2;

export type PagesPublicFindBySlugStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus501 =
  | PagesPublicFindBySlugStatus501Plain
  | PagesPublicFindBySlugStatus501Json
  | PagesPublicFindBySlugStatus501Json2;

export type PagesPublicFindBySlugOptions = {
  body?: never;
  path?: never;
  query?: PagesPublicFindBySlugQuery;
  headers?: never;
};

export type PagesPublicFindBySlugResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: PagesPublicFindBySlugStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: PagesPublicFindBySlugStatus200Json;
      }
    | {
        contentType: "text/json";
        data: PagesPublicFindBySlugStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: PagesPublicFindBySlugStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: PagesPublicFindBySlugStatus400Json;
      }
    | {
        contentType: "text/json";
        data: PagesPublicFindBySlugStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: PagesPublicFindBySlugStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: PagesPublicFindBySlugStatus401Json;
      }
    | {
        contentType: "text/json";
        data: PagesPublicFindBySlugStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: PagesPublicFindBySlugStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: PagesPublicFindBySlugStatus403Json;
      }
    | {
        contentType: "text/json";
        data: PagesPublicFindBySlugStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: PagesPublicFindBySlugStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: PagesPublicFindBySlugStatus404Json;
      }
    | {
        contentType: "text/json";
        data: PagesPublicFindBySlugStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: PagesPublicFindBySlugStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: PagesPublicFindBySlugStatus500Json;
      }
    | {
        contentType: "text/json";
        data: PagesPublicFindBySlugStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: PagesPublicFindBySlugStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: PagesPublicFindBySlugStatus501Json;
      }
    | {
        contentType: "text/json";
        data: PagesPublicFindBySlugStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type PagesPublicFindBySlugResponse =
  | PagesPublicFindBySlugStatus200
  | PagesPublicFindBySlugStatus400
  | PagesPublicFindBySlugStatus401
  | PagesPublicFindBySlugStatus403
  | PagesPublicFindBySlugStatus404
  | PagesPublicFindBySlugStatus500
  | PagesPublicFindBySlugStatus501;
