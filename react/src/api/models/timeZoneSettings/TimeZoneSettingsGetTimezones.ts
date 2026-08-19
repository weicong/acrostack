/* oxlint-disable */

import type { VoloAbpNameValue } from '../volo/abp/NameValue'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type TimeZoneSettingsGetTimezonesStatus200Plain = VoloAbpNameValue[];

export type TimeZoneSettingsGetTimezonesStatus200Json = VoloAbpNameValue[];

export type TimeZoneSettingsGetTimezonesStatus200Json2 = VoloAbpNameValue[];

export type TimeZoneSettingsGetTimezonesStatus200 = (TimeZoneSettingsGetTimezonesStatus200Plain | TimeZoneSettingsGetTimezonesStatus200Json | TimeZoneSettingsGetTimezonesStatus200Json2);

export type TimeZoneSettingsGetTimezonesStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus400 = (TimeZoneSettingsGetTimezonesStatus400Plain | TimeZoneSettingsGetTimezonesStatus400Json | TimeZoneSettingsGetTimezonesStatus400Json2);

export type TimeZoneSettingsGetTimezonesStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus401 = (TimeZoneSettingsGetTimezonesStatus401Plain | TimeZoneSettingsGetTimezonesStatus401Json | TimeZoneSettingsGetTimezonesStatus401Json2);

export type TimeZoneSettingsGetTimezonesStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus403 = (TimeZoneSettingsGetTimezonesStatus403Plain | TimeZoneSettingsGetTimezonesStatus403Json | TimeZoneSettingsGetTimezonesStatus403Json2);

export type TimeZoneSettingsGetTimezonesStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus404 = (TimeZoneSettingsGetTimezonesStatus404Plain | TimeZoneSettingsGetTimezonesStatus404Json | TimeZoneSettingsGetTimezonesStatus404Json2);

export type TimeZoneSettingsGetTimezonesStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus500 = (TimeZoneSettingsGetTimezonesStatus500Plain | TimeZoneSettingsGetTimezonesStatus500Json | TimeZoneSettingsGetTimezonesStatus500Json2);

export type TimeZoneSettingsGetTimezonesStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TimeZoneSettingsGetTimezonesStatus501 = (TimeZoneSettingsGetTimezonesStatus501Plain | TimeZoneSettingsGetTimezonesStatus501Json | TimeZoneSettingsGetTimezonesStatus501Json2);

export type TimeZoneSettingsGetTimezonesOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type TimeZoneSettingsGetTimezonesResponses = {
    "200": ({
        contentType: "text/plain";
        data: TimeZoneSettingsGetTimezonesStatus200Plain;
    } | {
        contentType: "application/json";
        data: TimeZoneSettingsGetTimezonesStatus200Json;
    } | {
        contentType: "text/json";
        data: TimeZoneSettingsGetTimezonesStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: TimeZoneSettingsGetTimezonesStatus400Plain;
    } | {
        contentType: "application/json";
        data: TimeZoneSettingsGetTimezonesStatus400Json;
    } | {
        contentType: "text/json";
        data: TimeZoneSettingsGetTimezonesStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: TimeZoneSettingsGetTimezonesStatus401Plain;
    } | {
        contentType: "application/json";
        data: TimeZoneSettingsGetTimezonesStatus401Json;
    } | {
        contentType: "text/json";
        data: TimeZoneSettingsGetTimezonesStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: TimeZoneSettingsGetTimezonesStatus403Plain;
    } | {
        contentType: "application/json";
        data: TimeZoneSettingsGetTimezonesStatus403Json;
    } | {
        contentType: "text/json";
        data: TimeZoneSettingsGetTimezonesStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: TimeZoneSettingsGetTimezonesStatus404Plain;
    } | {
        contentType: "application/json";
        data: TimeZoneSettingsGetTimezonesStatus404Json;
    } | {
        contentType: "text/json";
        data: TimeZoneSettingsGetTimezonesStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: TimeZoneSettingsGetTimezonesStatus500Plain;
    } | {
        contentType: "application/json";
        data: TimeZoneSettingsGetTimezonesStatus500Json;
    } | {
        contentType: "text/json";
        data: TimeZoneSettingsGetTimezonesStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: TimeZoneSettingsGetTimezonesStatus501Plain;
    } | {
        contentType: "application/json";
        data: TimeZoneSettingsGetTimezonesStatus501Json;
    } | {
        contentType: "text/json";
        data: TimeZoneSettingsGetTimezonesStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type TimeZoneSettingsGetTimezonesResponse = (TimeZoneSettingsGetTimezonesStatus200 | TimeZoneSettingsGetTimezonesStatus400 | TimeZoneSettingsGetTimezonesStatus401 | TimeZoneSettingsGetTimezonesStatus403 | TimeZoneSettingsGetTimezonesStatus404 | TimeZoneSettingsGetTimezonesStatus500 | TimeZoneSettingsGetTimezonesStatus501);
