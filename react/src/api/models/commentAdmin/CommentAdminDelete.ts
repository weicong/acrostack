/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type CommentAdminDeletePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type CommentAdminDeleteStatus200 = unknown;

export type CommentAdminDeleteStatus204 = unknown;

export type CommentAdminDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus400 = (CommentAdminDeleteStatus400Plain | CommentAdminDeleteStatus400Json | CommentAdminDeleteStatus400Json2);

export type CommentAdminDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus401 = (CommentAdminDeleteStatus401Plain | CommentAdminDeleteStatus401Json | CommentAdminDeleteStatus401Json2);

export type CommentAdminDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus403 = (CommentAdminDeleteStatus403Plain | CommentAdminDeleteStatus403Json | CommentAdminDeleteStatus403Json2);

export type CommentAdminDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus404 = (CommentAdminDeleteStatus404Plain | CommentAdminDeleteStatus404Json | CommentAdminDeleteStatus404Json2);

export type CommentAdminDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus500 = (CommentAdminDeleteStatus500Plain | CommentAdminDeleteStatus500Json | CommentAdminDeleteStatus500Json2);

export type CommentAdminDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminDeleteStatus501 = (CommentAdminDeleteStatus501Plain | CommentAdminDeleteStatus501Json | CommentAdminDeleteStatus501Json2);

export type CommentAdminDeleteOptions = {
    body?: never;
    path: CommentAdminDeletePath;
    query?: never;
    headers?: never;
};

export type CommentAdminDeleteResponses = {
    "200": CommentAdminDeleteStatus200;
    "204": CommentAdminDeleteStatus204;
    "400": ({
        contentType: "text/plain";
        data: CommentAdminDeleteStatus400Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminDeleteStatus400Json;
    } | {
        contentType: "text/json";
        data: CommentAdminDeleteStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: CommentAdminDeleteStatus401Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminDeleteStatus401Json;
    } | {
        contentType: "text/json";
        data: CommentAdminDeleteStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: CommentAdminDeleteStatus403Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminDeleteStatus403Json;
    } | {
        contentType: "text/json";
        data: CommentAdminDeleteStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: CommentAdminDeleteStatus404Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminDeleteStatus404Json;
    } | {
        contentType: "text/json";
        data: CommentAdminDeleteStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: CommentAdminDeleteStatus500Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminDeleteStatus500Json;
    } | {
        contentType: "text/json";
        data: CommentAdminDeleteStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: CommentAdminDeleteStatus501Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminDeleteStatus501Json;
    } | {
        contentType: "text/json";
        data: CommentAdminDeleteStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type CommentAdminDeleteResponse = (CommentAdminDeleteStatus200 | CommentAdminDeleteStatus204 | CommentAdminDeleteStatus400 | CommentAdminDeleteStatus401 | CommentAdminDeleteStatus403 | CommentAdminDeleteStatus404 | CommentAdminDeleteStatus500 | CommentAdminDeleteStatus501);
