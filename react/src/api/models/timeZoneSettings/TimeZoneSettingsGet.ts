/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type TimeZoneSettingsGetStatus200Plain = string;

export type TimeZoneSettingsGetStatus200Json = string;

export type TimeZoneSettingsGetStatus200Json2 = string;

export type TimeZoneSettingsGetStatus200 = (TimeZoneSettingsGetStatus200Plain | TimeZoneSettingsGetStatus200Json | TimeZoneSettingsGetStatus200Json2);

export type TimeZoneSettingsGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus400 = (TimeZoneSettingsGetStatus400Plain | TimeZoneSettingsGetStatus400Json | TimeZoneSettingsGetStatus400Json2);

export type TimeZoneSettingsGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus401 = (TimeZoneSettingsGetStatus401Plain | TimeZoneSettingsGetStatus401Json | TimeZoneSettingsGetStatus401Json2);

export type TimeZoneSettingsGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus403 = (TimeZoneSettingsGetStatus403Plain | TimeZoneSettingsGetStatus403Json | TimeZoneSettingsGetStatus403Json2);

export type TimeZoneSettingsGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus404 = (TimeZoneSettingsGetStatus404Plain | TimeZoneSettingsGetStatus404Json | TimeZoneSettingsGetStatus404Json2);

export type TimeZoneSettingsGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus500 = (TimeZoneSettingsGetStatus500Plain | TimeZoneSettingsGetStatus500Json | TimeZoneSettingsGetStatus500Json2);

export type TimeZoneSettingsGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetStatus501 = (TimeZoneSettingsGetStatus501Plain | TimeZoneSettingsGetStatus501Json | TimeZoneSettingsGetStatus501Json2);

export type TimeZoneSettingsGetOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type TimeZoneSettingsGetResponses = {
    "200": ({
        contentType: "text/plain";
        data: TimeZoneSettingsGetStatus200Plain;
    } | {
        contentType: "application/json";
        data: TimeZoneSettingsGetStatus200Json;
    } | {
        contentType: "text/json";
        data: TimeZoneSettingsGetStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: TimeZoneSettingsGetStatus400Plain;
    } | {
        contentType: "application/json";
        data: TimeZoneSettingsGetStatus400Json;
    } | {
        contentType: "text/json";
        data: TimeZoneSettingsGetStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: TimeZoneSettingsGetStatus401Plain;
    } | {
        contentType: "application/json";
        data: TimeZoneSettingsGetStatus401Json;
    } | {
        contentType: "text/json";
        data: TimeZoneSettingsGetStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: TimeZoneSettingsGetStatus403Plain;
    } | {
        contentType: "application/json";
        data: TimeZoneSettingsGetStatus403Json;
    } | {
        contentType: "text/json";
        data: TimeZoneSettingsGetStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: TimeZoneSettingsGetStatus404Plain;
    } | {
        contentType: "application/json";
        data: TimeZoneSettingsGetStatus404Json;
    } | {
        contentType: "text/json";
        data: TimeZoneSettingsGetStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: TimeZoneSettingsGetStatus500Plain;
    } | {
        contentType: "application/json";
        data: TimeZoneSettingsGetStatus500Json;
    } | {
        contentType: "text/json";
        data: TimeZoneSettingsGetStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: TimeZoneSettingsGetStatus501Plain;
    } | {
        contentType: "application/json";
        data: TimeZoneSettingsGetStatus501Json;
    } | {
        contentType: "text/json";
        data: TimeZoneSettingsGetStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type TimeZoneSettingsGetResponse = (TimeZoneSettingsGetStatus200 | TimeZoneSettingsGetStatus400 | TimeZoneSettingsGetStatus401 | TimeZoneSettingsGetStatus403 | TimeZoneSettingsGetStatus404 | TimeZoneSettingsGetStatus500 | TimeZoneSettingsGetStatus501);
