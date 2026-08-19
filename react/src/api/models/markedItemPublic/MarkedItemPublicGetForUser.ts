/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitPublicMarkedItemsMarkedItemWithToggleDto } from "../volo/cmsKit/public/markedItems/MarkedItemWithToggleDto";

export type MarkedItemPublicGetForUserPath = {
  entityType: string;
  entityId: string;
};

export type MarkedItemPublicGetForUserStatus200Plain =
  VoloCmsKitPublicMarkedItemsMarkedItemWithToggleDto;

export type MarkedItemPublicGetForUserStatus200Json =
  VoloCmsKitPublicMarkedItemsMarkedItemWithToggleDto;

export type MarkedItemPublicGetForUserStatus200Json2 =
  VoloCmsKitPublicMarkedItemsMarkedItemWithToggleDto;

export type MarkedItemPublicGetForUserStatus200 =
  | MarkedItemPublicGetForUserStatus200Plain
  | MarkedItemPublicGetForUserStatus200Json
  | MarkedItemPublicGetForUserStatus200Json2;

export type MarkedItemPublicGetForUserStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus400 =
  | MarkedItemPublicGetForUserStatus400Plain
  | MarkedItemPublicGetForUserStatus400Json
  | MarkedItemPublicGetForUserStatus400Json2;

export type MarkedItemPublicGetForUserStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus401 =
  | MarkedItemPublicGetForUserStatus401Plain
  | MarkedItemPublicGetForUserStatus401Json
  | MarkedItemPublicGetForUserStatus401Json2;

export type MarkedItemPublicGetForUserStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus403 =
  | MarkedItemPublicGetForUserStatus403Plain
  | MarkedItemPublicGetForUserStatus403Json
  | MarkedItemPublicGetForUserStatus403Json2;

export type MarkedItemPublicGetForUserStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus404 =
  | MarkedItemPublicGetForUserStatus404Plain
  | MarkedItemPublicGetForUserStatus404Json
  | MarkedItemPublicGetForUserStatus404Json2;

export type MarkedItemPublicGetForUserStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus500 =
  | MarkedItemPublicGetForUserStatus500Plain
  | MarkedItemPublicGetForUserStatus500Json
  | MarkedItemPublicGetForUserStatus500Json2;

export type MarkedItemPublicGetForUserStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus501 =
  | MarkedItemPublicGetForUserStatus501Plain
  | MarkedItemPublicGetForUserStatus501Json
  | MarkedItemPublicGetForUserStatus501Json2;

export type MarkedItemPublicGetForUserOptions = {
  body?: never;
  path: MarkedItemPublicGetForUserPath;
  query?: never;
  headers?: never;
};

export type MarkedItemPublicGetForUserResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: MarkedItemPublicGetForUserStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: MarkedItemPublicGetForUserStatus200Json;
      }
    | {
        contentType: "text/json";
        data: MarkedItemPublicGetForUserStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: MarkedItemPublicGetForUserStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: MarkedItemPublicGetForUserStatus400Json;
      }
    | {
        contentType: "text/json";
        data: MarkedItemPublicGetForUserStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: MarkedItemPublicGetForUserStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: MarkedItemPublicGetForUserStatus401Json;
      }
    | {
        contentType: "text/json";
        data: MarkedItemPublicGetForUserStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: MarkedItemPublicGetForUserStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: MarkedItemPublicGetForUserStatus403Json;
      }
    | {
        contentType: "text/json";
        data: MarkedItemPublicGetForUserStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: MarkedItemPublicGetForUserStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: MarkedItemPublicGetForUserStatus404Json;
      }
    | {
        contentType: "text/json";
        data: MarkedItemPublicGetForUserStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: MarkedItemPublicGetForUserStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: MarkedItemPublicGetForUserStatus500Json;
      }
    | {
        contentType: "text/json";
        data: MarkedItemPublicGetForUserStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: MarkedItemPublicGetForUserStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: MarkedItemPublicGetForUserStatus501Json;
      }
    | {
        contentType: "text/json";
        data: MarkedItemPublicGetForUserStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type MarkedItemPublicGetForUserResponse =
  | MarkedItemPublicGetForUserStatus200
  | MarkedItemPublicGetForUserStatus400
  | MarkedItemPublicGetForUserStatus401
  | MarkedItemPublicGetForUserStatus403
  | MarkedItemPublicGetForUserStatus404
  | MarkedItemPublicGetForUserStatus500
  | MarkedItemPublicGetForUserStatus501;
