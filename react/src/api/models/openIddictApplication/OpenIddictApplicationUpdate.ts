/* oxlint-disable */

import type { AcroStackOpenIddictManagementOpenIddictApplicationDto } from "../acroStack/openIddictManagement/OpenIddictApplicationDto";
import type { AcroStackOpenIddictManagementUpdateOpenIddictApplicationDto } from "../acroStack/openIddictManagement/UpdateOpenIddictApplicationDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type OpenIddictApplicationUpdatePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type OpenIddictApplicationUpdateStatus200Plain =
  AcroStackOpenIddictManagementOpenIddictApplicationDto;

export type OpenIddictApplicationUpdateStatus200Json =
  AcroStackOpenIddictManagementOpenIddictApplicationDto;

export type OpenIddictApplicationUpdateStatus200Json2 =
  AcroStackOpenIddictManagementOpenIddictApplicationDto;

export type OpenIddictApplicationUpdateStatus200 =
  | OpenIddictApplicationUpdateStatus200Plain
  | OpenIddictApplicationUpdateStatus200Json
  | OpenIddictApplicationUpdateStatus200Json2;

export type OpenIddictApplicationUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus400 =
  | OpenIddictApplicationUpdateStatus400Plain
  | OpenIddictApplicationUpdateStatus400Json
  | OpenIddictApplicationUpdateStatus400Json2;

export type OpenIddictApplicationUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus401 =
  | OpenIddictApplicationUpdateStatus401Plain
  | OpenIddictApplicationUpdateStatus401Json
  | OpenIddictApplicationUpdateStatus401Json2;

export type OpenIddictApplicationUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus403 =
  | OpenIddictApplicationUpdateStatus403Plain
  | OpenIddictApplicationUpdateStatus403Json
  | OpenIddictApplicationUpdateStatus403Json2;

export type OpenIddictApplicationUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus404 =
  | OpenIddictApplicationUpdateStatus404Plain
  | OpenIddictApplicationUpdateStatus404Json
  | OpenIddictApplicationUpdateStatus404Json2;

export type OpenIddictApplicationUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus500 =
  | OpenIddictApplicationUpdateStatus500Plain
  | OpenIddictApplicationUpdateStatus500Json
  | OpenIddictApplicationUpdateStatus500Json2;

export type OpenIddictApplicationUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationUpdateStatus501 =
  | OpenIddictApplicationUpdateStatus501Plain
  | OpenIddictApplicationUpdateStatus501Json
  | OpenIddictApplicationUpdateStatus501Json2;

/**
 * @description DTO for updating an existing OpenIddict application. `ClientId`\r\nis intentionally omitted — changing it after creation is not supported\r\n(it\'s the identifier clients use to authenticate).
 * @type object | undefined
 */
export type OpenIddictApplicationUpdateBodyJson =
  | AcroStackOpenIddictManagementUpdateOpenIddictApplicationDto
  | undefined;

/**
 * @description DTO for updating an existing OpenIddict application. `ClientId`\r\nis intentionally omitted — changing it after creation is not supported\r\n(it\'s the identifier clients use to authenticate).
 * @type object | undefined
 */
export type OpenIddictApplicationUpdateBodyJson2 =
  | AcroStackOpenIddictManagementUpdateOpenIddictApplicationDto
  | undefined;

/**
 * @description DTO for updating an existing OpenIddict application. `ClientId`\r\nis intentionally omitted — changing it after creation is not supported\r\n(it\'s the identifier clients use to authenticate).
 * @type object | undefined
 */
export type OpenIddictApplicationUpdateBodyJson3 =
  | AcroStackOpenIddictManagementUpdateOpenIddictApplicationDto
  | undefined;

export type OpenIddictApplicationUpdateBody =
  | OpenIddictApplicationUpdateBodyJson
  | OpenIddictApplicationUpdateBodyJson2
  | OpenIddictApplicationUpdateBodyJson3;

export type OpenIddictApplicationUpdateOptions = {
  body: OpenIddictApplicationUpdateBody;
  path: OpenIddictApplicationUpdatePath;
  query?: never;
  headers?: never;
};

export type OpenIddictApplicationUpdateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationUpdateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationUpdateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationUpdateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationUpdateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationUpdateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationUpdateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationUpdateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationUpdateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationUpdateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationUpdateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationUpdateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationUpdateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationUpdateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationUpdateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationUpdateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationUpdateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationUpdateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationUpdateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: OpenIddictApplicationUpdateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: OpenIddictApplicationUpdateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: OpenIddictApplicationUpdateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictApplicationUpdateResponse =
  | OpenIddictApplicationUpdateStatus200
  | OpenIddictApplicationUpdateStatus400
  | OpenIddictApplicationUpdateStatus401
  | OpenIddictApplicationUpdateStatus403
  | OpenIddictApplicationUpdateStatus404
  | OpenIddictApplicationUpdateStatus500
  | OpenIddictApplicationUpdateStatus501;
