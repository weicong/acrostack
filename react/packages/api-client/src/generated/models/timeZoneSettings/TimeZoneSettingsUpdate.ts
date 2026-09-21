/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type TimeZoneSettingsUpdateQuery = {
  timezone?: string;
};

export type TimeZoneSettingsUpdateStatus200 = unknown;

export type TimeZoneSettingsUpdateStatus204 = unknown;

export type TimeZoneSettingsUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus400 =
  | TimeZoneSettingsUpdateStatus400Plain
  | TimeZoneSettingsUpdateStatus400Json
  | TimeZoneSettingsUpdateStatus400Json2;

export type TimeZoneSettingsUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus401 =
  | TimeZoneSettingsUpdateStatus401Plain
  | TimeZoneSettingsUpdateStatus401Json
  | TimeZoneSettingsUpdateStatus401Json2;

export type TimeZoneSettingsUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus403 =
  | TimeZoneSettingsUpdateStatus403Plain
  | TimeZoneSettingsUpdateStatus403Json
  | TimeZoneSettingsUpdateStatus403Json2;

export type TimeZoneSettingsUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus404 =
  | TimeZoneSettingsUpdateStatus404Plain
  | TimeZoneSettingsUpdateStatus404Json
  | TimeZoneSettingsUpdateStatus404Json2;

export type TimeZoneSettingsUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus500 =
  | TimeZoneSettingsUpdateStatus500Plain
  | TimeZoneSettingsUpdateStatus500Json
  | TimeZoneSettingsUpdateStatus500Json2;

export type TimeZoneSettingsUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsUpdateStatus501 =
  | TimeZoneSettingsUpdateStatus501Plain
  | TimeZoneSettingsUpdateStatus501Json
  | TimeZoneSettingsUpdateStatus501Json2;

export type TimeZoneSettingsUpdateOptions = {
  body?: never;
  path?: never;
  query?: TimeZoneSettingsUpdateQuery;
  headers?: never;
};

export type TimeZoneSettingsUpdateResponses = {
  "200": TimeZoneSettingsUpdateStatus200;
  "204": TimeZoneSettingsUpdateStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: TimeZoneSettingsUpdateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: TimeZoneSettingsUpdateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: TimeZoneSettingsUpdateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: TimeZoneSettingsUpdateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: TimeZoneSettingsUpdateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: TimeZoneSettingsUpdateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: TimeZoneSettingsUpdateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: TimeZoneSettingsUpdateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: TimeZoneSettingsUpdateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: TimeZoneSettingsUpdateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: TimeZoneSettingsUpdateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: TimeZoneSettingsUpdateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: TimeZoneSettingsUpdateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: TimeZoneSettingsUpdateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: TimeZoneSettingsUpdateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: TimeZoneSettingsUpdateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: TimeZoneSettingsUpdateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: TimeZoneSettingsUpdateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type TimeZoneSettingsUpdateResponse =
  | TimeZoneSettingsUpdateStatus200
  | TimeZoneSettingsUpdateStatus204
  | TimeZoneSettingsUpdateStatus400
  | TimeZoneSettingsUpdateStatus401
  | TimeZoneSettingsUpdateStatus403
  | TimeZoneSettingsUpdateStatus404
  | TimeZoneSettingsUpdateStatus500
  | TimeZoneSettingsUpdateStatus501;
