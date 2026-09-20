/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpSettingManagementEmailSettingsDto } from "../volo/abp/settingManagement/EmailSettingsDto";

export type EmailSettingsGetStatus200Plain = VoloAbpSettingManagementEmailSettingsDto;

export type EmailSettingsGetStatus200Json = VoloAbpSettingManagementEmailSettingsDto;

export type EmailSettingsGetStatus200Json2 = VoloAbpSettingManagementEmailSettingsDto;

export type EmailSettingsGetStatus200 =
  | EmailSettingsGetStatus200Plain
  | EmailSettingsGetStatus200Json
  | EmailSettingsGetStatus200Json2;

export type EmailSettingsGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus400 =
  | EmailSettingsGetStatus400Plain
  | EmailSettingsGetStatus400Json
  | EmailSettingsGetStatus400Json2;

export type EmailSettingsGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus401 =
  | EmailSettingsGetStatus401Plain
  | EmailSettingsGetStatus401Json
  | EmailSettingsGetStatus401Json2;

export type EmailSettingsGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus403 =
  | EmailSettingsGetStatus403Plain
  | EmailSettingsGetStatus403Json
  | EmailSettingsGetStatus403Json2;

export type EmailSettingsGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus404 =
  | EmailSettingsGetStatus404Plain
  | EmailSettingsGetStatus404Json
  | EmailSettingsGetStatus404Json2;

export type EmailSettingsGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus500 =
  | EmailSettingsGetStatus500Plain
  | EmailSettingsGetStatus500Json
  | EmailSettingsGetStatus500Json2;

export type EmailSettingsGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsGetStatus501 =
  | EmailSettingsGetStatus501Plain
  | EmailSettingsGetStatus501Json
  | EmailSettingsGetStatus501Json2;

export type EmailSettingsGetOptions = {
  body?: never;
  path?: never;
  query?: never;
  headers?: never;
};

export type EmailSettingsGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: EmailSettingsGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: EmailSettingsGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: EmailSettingsGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: EmailSettingsGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: EmailSettingsGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: EmailSettingsGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: EmailSettingsGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: EmailSettingsGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: EmailSettingsGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: EmailSettingsGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: EmailSettingsGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: EmailSettingsGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: EmailSettingsGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: EmailSettingsGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: EmailSettingsGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: EmailSettingsGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: EmailSettingsGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: EmailSettingsGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: EmailSettingsGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: EmailSettingsGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: EmailSettingsGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type EmailSettingsGetResponse =
  | EmailSettingsGetStatus200
  | EmailSettingsGetStatus400
  | EmailSettingsGetStatus401
  | EmailSettingsGetStatus403
  | EmailSettingsGetStatus404
  | EmailSettingsGetStatus500
  | EmailSettingsGetStatus501;
