/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type BlogPostAdminDeletePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type BlogPostAdminDeleteStatus200 = unknown;

export type BlogPostAdminDeleteStatus204 = unknown;

export type BlogPostAdminDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus400 = (BlogPostAdminDeleteStatus400Plain | BlogPostAdminDeleteStatus400Json | BlogPostAdminDeleteStatus400Json2);

export type BlogPostAdminDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus401 = (BlogPostAdminDeleteStatus401Plain | BlogPostAdminDeleteStatus401Json | BlogPostAdminDeleteStatus401Json2);

export type BlogPostAdminDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus403 = (BlogPostAdminDeleteStatus403Plain | BlogPostAdminDeleteStatus403Json | BlogPostAdminDeleteStatus403Json2);

export type BlogPostAdminDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus404 = (BlogPostAdminDeleteStatus404Plain | BlogPostAdminDeleteStatus404Json | BlogPostAdminDeleteStatus404Json2);

export type BlogPostAdminDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus500 = (BlogPostAdminDeleteStatus500Plain | BlogPostAdminDeleteStatus500Json | BlogPostAdminDeleteStatus500Json2);

export type BlogPostAdminDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus501 = (BlogPostAdminDeleteStatus501Plain | BlogPostAdminDeleteStatus501Json | BlogPostAdminDeleteStatus501Json2);

export type BlogPostAdminDeleteOptions = {
    body?: never;
    path: BlogPostAdminDeletePath;
    query?: never;
    headers?: never;
};

export type BlogPostAdminDeleteResponses = {
    "200": BlogPostAdminDeleteStatus200;
    "204": BlogPostAdminDeleteStatus204;
    "400": ({
        contentType: "text/plain";
        data: BlogPostAdminDeleteStatus400Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminDeleteStatus400Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminDeleteStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BlogPostAdminDeleteStatus401Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminDeleteStatus401Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminDeleteStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BlogPostAdminDeleteStatus403Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminDeleteStatus403Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminDeleteStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BlogPostAdminDeleteStatus404Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminDeleteStatus404Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminDeleteStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BlogPostAdminDeleteStatus500Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminDeleteStatus500Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminDeleteStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BlogPostAdminDeleteStatus501Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminDeleteStatus501Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminDeleteStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BlogPostAdminDeleteResponse = (BlogPostAdminDeleteStatus200 | BlogPostAdminDeleteStatus204 | BlogPostAdminDeleteStatus400 | BlogPostAdminDeleteStatus401 | BlogPostAdminDeleteStatus403 | BlogPostAdminDeleteStatus404 | BlogPostAdminDeleteStatus500 | BlogPostAdminDeleteStatus501);
