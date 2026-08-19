/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type BlogPostPublicDeletePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type BlogPostPublicDeleteStatus200 = unknown;

export type BlogPostPublicDeleteStatus204 = unknown;

export type BlogPostPublicDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus400 = (BlogPostPublicDeleteStatus400Plain | BlogPostPublicDeleteStatus400Json | BlogPostPublicDeleteStatus400Json2);

export type BlogPostPublicDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus401 = (BlogPostPublicDeleteStatus401Plain | BlogPostPublicDeleteStatus401Json | BlogPostPublicDeleteStatus401Json2);

export type BlogPostPublicDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus403 = (BlogPostPublicDeleteStatus403Plain | BlogPostPublicDeleteStatus403Json | BlogPostPublicDeleteStatus403Json2);

export type BlogPostPublicDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus404 = (BlogPostPublicDeleteStatus404Plain | BlogPostPublicDeleteStatus404Json | BlogPostPublicDeleteStatus404Json2);

export type BlogPostPublicDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus500 = (BlogPostPublicDeleteStatus500Plain | BlogPostPublicDeleteStatus500Json | BlogPostPublicDeleteStatus500Json2);

export type BlogPostPublicDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus501 = (BlogPostPublicDeleteStatus501Plain | BlogPostPublicDeleteStatus501Json | BlogPostPublicDeleteStatus501Json2);

export type BlogPostPublicDeleteOptions = {
    body?: never;
    path: BlogPostPublicDeletePath;
    query?: never;
    headers?: never;
};

export type BlogPostPublicDeleteResponses = {
    "200": BlogPostPublicDeleteStatus200;
    "204": BlogPostPublicDeleteStatus204;
    "400": ({
        contentType: "text/plain";
        data: BlogPostPublicDeleteStatus400Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicDeleteStatus400Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicDeleteStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BlogPostPublicDeleteStatus401Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicDeleteStatus401Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicDeleteStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BlogPostPublicDeleteStatus403Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicDeleteStatus403Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicDeleteStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BlogPostPublicDeleteStatus404Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicDeleteStatus404Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicDeleteStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BlogPostPublicDeleteStatus500Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicDeleteStatus500Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicDeleteStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BlogPostPublicDeleteStatus501Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicDeleteStatus501Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicDeleteStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BlogPostPublicDeleteResponse = (BlogPostPublicDeleteStatus200 | BlogPostPublicDeleteStatus204 | BlogPostPublicDeleteStatus400 | BlogPostPublicDeleteStatus401 | BlogPostPublicDeleteStatus403 | BlogPostPublicDeleteStatus404 | BlogPostPublicDeleteStatus500 | BlogPostPublicDeleteStatus501);
