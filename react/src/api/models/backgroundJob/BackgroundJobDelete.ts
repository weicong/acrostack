/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type BackgroundJobDeletePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type BackgroundJobDeleteStatus200 = unknown;

export type BackgroundJobDeleteStatus204 = unknown;

export type BackgroundJobDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus400 = (BackgroundJobDeleteStatus400Plain | BackgroundJobDeleteStatus400Json | BackgroundJobDeleteStatus400Json2);

export type BackgroundJobDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus401 = (BackgroundJobDeleteStatus401Plain | BackgroundJobDeleteStatus401Json | BackgroundJobDeleteStatus401Json2);

export type BackgroundJobDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus403 = (BackgroundJobDeleteStatus403Plain | BackgroundJobDeleteStatus403Json | BackgroundJobDeleteStatus403Json2);

export type BackgroundJobDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus404 = (BackgroundJobDeleteStatus404Plain | BackgroundJobDeleteStatus404Json | BackgroundJobDeleteStatus404Json2);

export type BackgroundJobDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus500 = (BackgroundJobDeleteStatus500Plain | BackgroundJobDeleteStatus500Json | BackgroundJobDeleteStatus500Json2);

export type BackgroundJobDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus501 = (BackgroundJobDeleteStatus501Plain | BackgroundJobDeleteStatus501Json | BackgroundJobDeleteStatus501Json2);

export type BackgroundJobDeleteOptions = {
    body?: never;
    path: BackgroundJobDeletePath;
    query?: never;
    headers?: never;
};

export type BackgroundJobDeleteResponses = {
    "200": BackgroundJobDeleteStatus200;
    "204": BackgroundJobDeleteStatus204;
    "400": ({
        contentType: "text/plain";
        data: BackgroundJobDeleteStatus400Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobDeleteStatus400Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobDeleteStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BackgroundJobDeleteStatus401Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobDeleteStatus401Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobDeleteStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BackgroundJobDeleteStatus403Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobDeleteStatus403Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobDeleteStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BackgroundJobDeleteStatus404Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobDeleteStatus404Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobDeleteStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BackgroundJobDeleteStatus500Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobDeleteStatus500Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobDeleteStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BackgroundJobDeleteStatus501Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobDeleteStatus501Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobDeleteStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BackgroundJobDeleteResponse = (BackgroundJobDeleteStatus200 | BackgroundJobDeleteStatus204 | BackgroundJobDeleteStatus400 | BackgroundJobDeleteStatus401 | BackgroundJobDeleteStatus403 | BackgroundJobDeleteStatus404 | BackgroundJobDeleteStatus500 | BackgroundJobDeleteStatus501);
