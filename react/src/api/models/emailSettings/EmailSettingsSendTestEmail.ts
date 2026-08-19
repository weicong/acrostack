/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpSettingManagementSendTestEmailInput } from "../volo/abp/settingManagement/SendTestEmailInput";

export type EmailSettingsSendTestEmailStatus200 = unknown;

export type EmailSettingsSendTestEmailStatus204 = unknown;

export type EmailSettingsSendTestEmailStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus400 =
  | EmailSettingsSendTestEmailStatus400Plain
  | EmailSettingsSendTestEmailStatus400Json
  | EmailSettingsSendTestEmailStatus400Json2;

export type EmailSettingsSendTestEmailStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus401 =
  | EmailSettingsSendTestEmailStatus401Plain
  | EmailSettingsSendTestEmailStatus401Json
  | EmailSettingsSendTestEmailStatus401Json2;

export type EmailSettingsSendTestEmailStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus403 =
  | EmailSettingsSendTestEmailStatus403Plain
  | EmailSettingsSendTestEmailStatus403Json
  | EmailSettingsSendTestEmailStatus403Json2;

export type EmailSettingsSendTestEmailStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus404 =
  | EmailSettingsSendTestEmailStatus404Plain
  | EmailSettingsSendTestEmailStatus404Json
  | EmailSettingsSendTestEmailStatus404Json2;

export type EmailSettingsSendTestEmailStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus500 =
  | EmailSettingsSendTestEmailStatus500Plain
  | EmailSettingsSendTestEmailStatus500Json
  | EmailSettingsSendTestEmailStatus500Json2;

export type EmailSettingsSendTestEmailStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsSendTestEmailStatus501 =
  | EmailSettingsSendTestEmailStatus501Plain
  | EmailSettingsSendTestEmailStatus501Json
  | EmailSettingsSendTestEmailStatus501Json2;

export type EmailSettingsSendTestEmailBodyJson =
  | VoloAbpSettingManagementSendTestEmailInput
  | undefined;

export type EmailSettingsSendTestEmailBodyJson2 =
  | VoloAbpSettingManagementSendTestEmailInput
  | undefined;

export type EmailSettingsSendTestEmailBodyJson3 =
  | VoloAbpSettingManagementSendTestEmailInput
  | undefined;

export type EmailSettingsSendTestEmailBody =
  | EmailSettingsSendTestEmailBodyJson
  | EmailSettingsSendTestEmailBodyJson2
  | EmailSettingsSendTestEmailBodyJson3;

export type EmailSettingsSendTestEmailOptions = {
  body: EmailSettingsSendTestEmailBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type EmailSettingsSendTestEmailResponses = {
  "200": EmailSettingsSendTestEmailStatus200;
  "204": EmailSettingsSendTestEmailStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: EmailSettingsSendTestEmailStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: EmailSettingsSendTestEmailStatus400Json;
      }
    | {
        contentType: "text/json";
        data: EmailSettingsSendTestEmailStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: EmailSettingsSendTestEmailStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: EmailSettingsSendTestEmailStatus401Json;
      }
    | {
        contentType: "text/json";
        data: EmailSettingsSendTestEmailStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: EmailSettingsSendTestEmailStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: EmailSettingsSendTestEmailStatus403Json;
      }
    | {
        contentType: "text/json";
        data: EmailSettingsSendTestEmailStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: EmailSettingsSendTestEmailStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: EmailSettingsSendTestEmailStatus404Json;
      }
    | {
        contentType: "text/json";
        data: EmailSettingsSendTestEmailStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: EmailSettingsSendTestEmailStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: EmailSettingsSendTestEmailStatus500Json;
      }
    | {
        contentType: "text/json";
        data: EmailSettingsSendTestEmailStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: EmailSettingsSendTestEmailStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: EmailSettingsSendTestEmailStatus501Json;
      }
    | {
        contentType: "text/json";
        data: EmailSettingsSendTestEmailStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type EmailSettingsSendTestEmailResponse =
  | EmailSettingsSendTestEmailStatus200
  | EmailSettingsSendTestEmailStatus204
  | EmailSettingsSendTestEmailStatus400
  | EmailSettingsSendTestEmailStatus401
  | EmailSettingsSendTestEmailStatus403
  | EmailSettingsSendTestEmailStatus404
  | EmailSettingsSendTestEmailStatus500
  | EmailSettingsSendTestEmailStatus501;
