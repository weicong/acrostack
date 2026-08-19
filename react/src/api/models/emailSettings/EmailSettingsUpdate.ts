/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloAbpSettingManagementUpdateEmailSettingsDto } from '../volo/abp/settingManagement/UpdateEmailSettingsDto'

export type EmailSettingsUpdateStatus200 = unknown;

export type EmailSettingsUpdateStatus204 = unknown;

export type EmailSettingsUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus400 = (EmailSettingsUpdateStatus400Plain | EmailSettingsUpdateStatus400Json | EmailSettingsUpdateStatus400Json2);

export type EmailSettingsUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus401 = (EmailSettingsUpdateStatus401Plain | EmailSettingsUpdateStatus401Json | EmailSettingsUpdateStatus401Json2);

export type EmailSettingsUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus403 = (EmailSettingsUpdateStatus403Plain | EmailSettingsUpdateStatus403Json | EmailSettingsUpdateStatus403Json2);

export type EmailSettingsUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus404 = (EmailSettingsUpdateStatus404Plain | EmailSettingsUpdateStatus404Json | EmailSettingsUpdateStatus404Json2);

export type EmailSettingsUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus500 = (EmailSettingsUpdateStatus500Plain | EmailSettingsUpdateStatus500Json | EmailSettingsUpdateStatus500Json2);

export type EmailSettingsUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EmailSettingsUpdateStatus501 = (EmailSettingsUpdateStatus501Plain | EmailSettingsUpdateStatus501Json | EmailSettingsUpdateStatus501Json2);

export type EmailSettingsUpdateBodyJson = VoloAbpSettingManagementUpdateEmailSettingsDto | undefined;

export type EmailSettingsUpdateBodyJson2 = VoloAbpSettingManagementUpdateEmailSettingsDto | undefined;

export type EmailSettingsUpdateBodyJson3 = VoloAbpSettingManagementUpdateEmailSettingsDto | undefined;

export type EmailSettingsUpdateBody = (EmailSettingsUpdateBodyJson | EmailSettingsUpdateBodyJson2 | EmailSettingsUpdateBodyJson3);

export type EmailSettingsUpdateOptions = {
    body: EmailSettingsUpdateBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type EmailSettingsUpdateResponses = {
    "200": EmailSettingsUpdateStatus200;
    "204": EmailSettingsUpdateStatus204;
    "400": ({
        contentType: "text/plain";
        data: EmailSettingsUpdateStatus400Plain;
    } | {
        contentType: "application/json";
        data: EmailSettingsUpdateStatus400Json;
    } | {
        contentType: "text/json";
        data: EmailSettingsUpdateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: EmailSettingsUpdateStatus401Plain;
    } | {
        contentType: "application/json";
        data: EmailSettingsUpdateStatus401Json;
    } | {
        contentType: "text/json";
        data: EmailSettingsUpdateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: EmailSettingsUpdateStatus403Plain;
    } | {
        contentType: "application/json";
        data: EmailSettingsUpdateStatus403Json;
    } | {
        contentType: "text/json";
        data: EmailSettingsUpdateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: EmailSettingsUpdateStatus404Plain;
    } | {
        contentType: "application/json";
        data: EmailSettingsUpdateStatus404Json;
    } | {
        contentType: "text/json";
        data: EmailSettingsUpdateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: EmailSettingsUpdateStatus500Plain;
    } | {
        contentType: "application/json";
        data: EmailSettingsUpdateStatus500Json;
    } | {
        contentType: "text/json";
        data: EmailSettingsUpdateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: EmailSettingsUpdateStatus501Plain;
    } | {
        contentType: "application/json";
        data: EmailSettingsUpdateStatus501Json;
    } | {
        contentType: "text/json";
        data: EmailSettingsUpdateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type EmailSettingsUpdateResponse = (EmailSettingsUpdateStatus200 | EmailSettingsUpdateStatus204 | EmailSettingsUpdateStatus400 | EmailSettingsUpdateStatus401 | EmailSettingsUpdateStatus403 | EmailSettingsUpdateStatus404 | EmailSettingsUpdateStatus500 | EmailSettingsUpdateStatus501);
