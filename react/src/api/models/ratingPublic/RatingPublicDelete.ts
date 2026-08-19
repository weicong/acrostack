/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type RatingPublicDeletePath = {
    entityType: string;
    entityId: string;
};

export type RatingPublicDeleteStatus200 = unknown;

export type RatingPublicDeleteStatus204 = unknown;

export type RatingPublicDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus400 = (RatingPublicDeleteStatus400Plain | RatingPublicDeleteStatus400Json | RatingPublicDeleteStatus400Json2);

export type RatingPublicDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus401 = (RatingPublicDeleteStatus401Plain | RatingPublicDeleteStatus401Json | RatingPublicDeleteStatus401Json2);

export type RatingPublicDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus403 = (RatingPublicDeleteStatus403Plain | RatingPublicDeleteStatus403Json | RatingPublicDeleteStatus403Json2);

export type RatingPublicDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus404 = (RatingPublicDeleteStatus404Plain | RatingPublicDeleteStatus404Json | RatingPublicDeleteStatus404Json2);

export type RatingPublicDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus500 = (RatingPublicDeleteStatus500Plain | RatingPublicDeleteStatus500Json | RatingPublicDeleteStatus500Json2);

export type RatingPublicDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicDeleteStatus501 = (RatingPublicDeleteStatus501Plain | RatingPublicDeleteStatus501Json | RatingPublicDeleteStatus501Json2);

export type RatingPublicDeleteOptions = {
    body?: never;
    path: RatingPublicDeletePath;
    query?: never;
    headers?: never;
};

export type RatingPublicDeleteResponses = {
    "200": RatingPublicDeleteStatus200;
    "204": RatingPublicDeleteStatus204;
    "400": ({
        contentType: "text/plain";
        data: RatingPublicDeleteStatus400Plain;
    } | {
        contentType: "application/json";
        data: RatingPublicDeleteStatus400Json;
    } | {
        contentType: "text/json";
        data: RatingPublicDeleteStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: RatingPublicDeleteStatus401Plain;
    } | {
        contentType: "application/json";
        data: RatingPublicDeleteStatus401Json;
    } | {
        contentType: "text/json";
        data: RatingPublicDeleteStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: RatingPublicDeleteStatus403Plain;
    } | {
        contentType: "application/json";
        data: RatingPublicDeleteStatus403Json;
    } | {
        contentType: "text/json";
        data: RatingPublicDeleteStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: RatingPublicDeleteStatus404Plain;
    } | {
        contentType: "application/json";
        data: RatingPublicDeleteStatus404Json;
    } | {
        contentType: "text/json";
        data: RatingPublicDeleteStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: RatingPublicDeleteStatus500Plain;
    } | {
        contentType: "application/json";
        data: RatingPublicDeleteStatus500Json;
    } | {
        contentType: "text/json";
        data: RatingPublicDeleteStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: RatingPublicDeleteStatus501Plain;
    } | {
        contentType: "application/json";
        data: RatingPublicDeleteStatus501Json;
    } | {
        contentType: "text/json";
        data: RatingPublicDeleteStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type RatingPublicDeleteResponse = (RatingPublicDeleteStatus200 | RatingPublicDeleteStatus204 | RatingPublicDeleteStatus400 | RatingPublicDeleteStatus401 | RatingPublicDeleteStatus403 | RatingPublicDeleteStatus404 | RatingPublicDeleteStatus500 | RatingPublicDeleteStatus501);
