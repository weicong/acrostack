/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

/**
 * @description
 * Format: `int32`
 * @type integer
*/
export type CommentAdminGetWaitingCountStatus200Plain = number;

/**
 * @description
 * Format: `int32`
 * @type integer
*/
export type CommentAdminGetWaitingCountStatus200Json = number;

/**
 * @description
 * Format: `int32`
 * @type integer
*/
export type CommentAdminGetWaitingCountStatus200Json2 = number;

export type CommentAdminGetWaitingCountStatus200 = (CommentAdminGetWaitingCountStatus200Plain | CommentAdminGetWaitingCountStatus200Json | CommentAdminGetWaitingCountStatus200Json2);

export type CommentAdminGetWaitingCountStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus400 = (CommentAdminGetWaitingCountStatus400Plain | CommentAdminGetWaitingCountStatus400Json | CommentAdminGetWaitingCountStatus400Json2);

export type CommentAdminGetWaitingCountStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus401 = (CommentAdminGetWaitingCountStatus401Plain | CommentAdminGetWaitingCountStatus401Json | CommentAdminGetWaitingCountStatus401Json2);

export type CommentAdminGetWaitingCountStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus403 = (CommentAdminGetWaitingCountStatus403Plain | CommentAdminGetWaitingCountStatus403Json | CommentAdminGetWaitingCountStatus403Json2);

export type CommentAdminGetWaitingCountStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus404 = (CommentAdminGetWaitingCountStatus404Plain | CommentAdminGetWaitingCountStatus404Json | CommentAdminGetWaitingCountStatus404Json2);

export type CommentAdminGetWaitingCountStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus500 = (CommentAdminGetWaitingCountStatus500Plain | CommentAdminGetWaitingCountStatus500Json | CommentAdminGetWaitingCountStatus500Json2);

export type CommentAdminGetWaitingCountStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetWaitingCountStatus501 = (CommentAdminGetWaitingCountStatus501Plain | CommentAdminGetWaitingCountStatus501Json | CommentAdminGetWaitingCountStatus501Json2);

export type CommentAdminGetWaitingCountOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type CommentAdminGetWaitingCountResponses = {
    "200": ({
        contentType: "text/plain";
        data: CommentAdminGetWaitingCountStatus200Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetWaitingCountStatus200Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetWaitingCountStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: CommentAdminGetWaitingCountStatus400Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetWaitingCountStatus400Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetWaitingCountStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: CommentAdminGetWaitingCountStatus401Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetWaitingCountStatus401Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetWaitingCountStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: CommentAdminGetWaitingCountStatus403Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetWaitingCountStatus403Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetWaitingCountStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: CommentAdminGetWaitingCountStatus404Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetWaitingCountStatus404Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetWaitingCountStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: CommentAdminGetWaitingCountStatus500Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetWaitingCountStatus500Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetWaitingCountStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: CommentAdminGetWaitingCountStatus501Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetWaitingCountStatus501Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetWaitingCountStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type CommentAdminGetWaitingCountResponse = (CommentAdminGetWaitingCountStatus200 | CommentAdminGetWaitingCountStatus400 | CommentAdminGetWaitingCountStatus401 | CommentAdminGetWaitingCountStatus403 | CommentAdminGetWaitingCountStatus404 | CommentAdminGetWaitingCountStatus500 | CommentAdminGetWaitingCountStatus501);
