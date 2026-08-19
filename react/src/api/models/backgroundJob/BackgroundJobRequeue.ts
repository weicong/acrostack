/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type BackgroundJobRequeuePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type BackgroundJobRequeueStatus200 = unknown;

export type BackgroundJobRequeueStatus204 = unknown;

export type BackgroundJobRequeueStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus400 = (BackgroundJobRequeueStatus400Plain | BackgroundJobRequeueStatus400Json | BackgroundJobRequeueStatus400Json2);

export type BackgroundJobRequeueStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus401 = (BackgroundJobRequeueStatus401Plain | BackgroundJobRequeueStatus401Json | BackgroundJobRequeueStatus401Json2);

export type BackgroundJobRequeueStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus403 = (BackgroundJobRequeueStatus403Plain | BackgroundJobRequeueStatus403Json | BackgroundJobRequeueStatus403Json2);

export type BackgroundJobRequeueStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus404 = (BackgroundJobRequeueStatus404Plain | BackgroundJobRequeueStatus404Json | BackgroundJobRequeueStatus404Json2);

export type BackgroundJobRequeueStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus500 = (BackgroundJobRequeueStatus500Plain | BackgroundJobRequeueStatus500Json | BackgroundJobRequeueStatus500Json2);

export type BackgroundJobRequeueStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus501 = (BackgroundJobRequeueStatus501Plain | BackgroundJobRequeueStatus501Json | BackgroundJobRequeueStatus501Json2);

export type BackgroundJobRequeueOptions = {
    body?: never;
    path: BackgroundJobRequeuePath;
    query?: never;
    headers?: never;
};

export type BackgroundJobRequeueResponses = {
    "200": BackgroundJobRequeueStatus200;
    "204": BackgroundJobRequeueStatus204;
    "400": ({
        contentType: "text/plain";
        data: BackgroundJobRequeueStatus400Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobRequeueStatus400Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobRequeueStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BackgroundJobRequeueStatus401Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobRequeueStatus401Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobRequeueStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BackgroundJobRequeueStatus403Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobRequeueStatus403Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobRequeueStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BackgroundJobRequeueStatus404Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobRequeueStatus404Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobRequeueStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BackgroundJobRequeueStatus500Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobRequeueStatus500Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobRequeueStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BackgroundJobRequeueStatus501Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobRequeueStatus501Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobRequeueStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BackgroundJobRequeueResponse = (BackgroundJobRequeueStatus200 | BackgroundJobRequeueStatus204 | BackgroundJobRequeueStatus400 | BackgroundJobRequeueStatus401 | BackgroundJobRequeueStatus403 | BackgroundJobRequeueStatus404 | BackgroundJobRequeueStatus500 | BackgroundJobRequeueStatus501);
