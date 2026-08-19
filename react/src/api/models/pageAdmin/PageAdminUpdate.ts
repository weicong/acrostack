/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitAdminPagesPageDto } from "../volo/cmsKit/admin/pages/PageDto";
import type { VoloCmsKitAdminPagesUpdatePageInputDto } from "../volo/cmsKit/admin/pages/UpdatePageInputDto";

export type PageAdminUpdatePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type PageAdminUpdateStatus200Plain = VoloCmsKitAdminPagesPageDto;

export type PageAdminUpdateStatus200Json = VoloCmsKitAdminPagesPageDto;

export type PageAdminUpdateStatus200Json2 = VoloCmsKitAdminPagesPageDto;

export type PageAdminUpdateStatus200 =
  | PageAdminUpdateStatus200Plain
  | PageAdminUpdateStatus200Json
  | PageAdminUpdateStatus200Json2;

export type PageAdminUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus400 =
  | PageAdminUpdateStatus400Plain
  | PageAdminUpdateStatus400Json
  | PageAdminUpdateStatus400Json2;

export type PageAdminUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus401 =
  | PageAdminUpdateStatus401Plain
  | PageAdminUpdateStatus401Json
  | PageAdminUpdateStatus401Json2;

export type PageAdminUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus403 =
  | PageAdminUpdateStatus403Plain
  | PageAdminUpdateStatus403Json
  | PageAdminUpdateStatus403Json2;

export type PageAdminUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus404 =
  | PageAdminUpdateStatus404Plain
  | PageAdminUpdateStatus404Json
  | PageAdminUpdateStatus404Json2;

export type PageAdminUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus500 =
  | PageAdminUpdateStatus500Plain
  | PageAdminUpdateStatus500Json
  | PageAdminUpdateStatus500Json2;

export type PageAdminUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminUpdateStatus501 =
  | PageAdminUpdateStatus501Plain
  | PageAdminUpdateStatus501Json
  | PageAdminUpdateStatus501Json2;

export type PageAdminUpdateBodyJson =
  | Omit<NonNullable<VoloCmsKitAdminPagesUpdatePageInputDto>, "extraProperties">
  | undefined;

export type PageAdminUpdateBodyJson2 =
  | Omit<NonNullable<VoloCmsKitAdminPagesUpdatePageInputDto>, "extraProperties">
  | undefined;

export type PageAdminUpdateBodyJson3 =
  | Omit<NonNullable<VoloCmsKitAdminPagesUpdatePageInputDto>, "extraProperties">
  | undefined;

export type PageAdminUpdateBody =
  | PageAdminUpdateBodyJson
  | PageAdminUpdateBodyJson2
  | PageAdminUpdateBodyJson3;

export type PageAdminUpdateOptions = {
  body: PageAdminUpdateBody;
  path: PageAdminUpdatePath;
  query?: never;
  headers?: never;
};

export type PageAdminUpdateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: PageAdminUpdateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminUpdateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminUpdateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: PageAdminUpdateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminUpdateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminUpdateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: PageAdminUpdateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminUpdateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminUpdateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: PageAdminUpdateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminUpdateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminUpdateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: PageAdminUpdateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminUpdateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminUpdateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: PageAdminUpdateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminUpdateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminUpdateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: PageAdminUpdateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminUpdateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminUpdateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type PageAdminUpdateResponse =
  | PageAdminUpdateStatus200
  | PageAdminUpdateStatus400
  | PageAdminUpdateStatus401
  | PageAdminUpdateStatus403
  | PageAdminUpdateStatus404
  | PageAdminUpdateStatus500
  | PageAdminUpdateStatus501;
