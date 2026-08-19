/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type BlogPostAdminPublishPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type BlogPostAdminPublishStatus200 = unknown;

export type BlogPostAdminPublishStatus204 = unknown;

export type BlogPostAdminPublishStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus400 = (BlogPostAdminPublishStatus400Plain | BlogPostAdminPublishStatus400Json | BlogPostAdminPublishStatus400Json2);

export type BlogPostAdminPublishStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus401 = (BlogPostAdminPublishStatus401Plain | BlogPostAdminPublishStatus401Json | BlogPostAdminPublishStatus401Json2);

export type BlogPostAdminPublishStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus403 = (BlogPostAdminPublishStatus403Plain | BlogPostAdminPublishStatus403Json | BlogPostAdminPublishStatus403Json2);

export type BlogPostAdminPublishStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus404 = (BlogPostAdminPublishStatus404Plain | BlogPostAdminPublishStatus404Json | BlogPostAdminPublishStatus404Json2);

export type BlogPostAdminPublishStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus500 = (BlogPostAdminPublishStatus500Plain | BlogPostAdminPublishStatus500Json | BlogPostAdminPublishStatus500Json2);

export type BlogPostAdminPublishStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus501 = (BlogPostAdminPublishStatus501Plain | BlogPostAdminPublishStatus501Json | BlogPostAdminPublishStatus501Json2);

export type BlogPostAdminPublishOptions = {
    body?: never;
    path: BlogPostAdminPublishPath;
    query?: never;
    headers?: never;
};

export type BlogPostAdminPublishResponses = {
    "200": BlogPostAdminPublishStatus200;
    "204": BlogPostAdminPublishStatus204;
    "400": ({
        contentType: "text/plain";
        data: BlogPostAdminPublishStatus400Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminPublishStatus400Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminPublishStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BlogPostAdminPublishStatus401Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminPublishStatus401Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminPublishStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BlogPostAdminPublishStatus403Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminPublishStatus403Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminPublishStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BlogPostAdminPublishStatus404Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminPublishStatus404Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminPublishStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BlogPostAdminPublishStatus500Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminPublishStatus500Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminPublishStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BlogPostAdminPublishStatus501Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminPublishStatus501Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminPublishStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BlogPostAdminPublishResponse = (BlogPostAdminPublishStatus200 | BlogPostAdminPublishStatus204 | BlogPostAdminPublishStatus400 | BlogPostAdminPublishStatus401 | BlogPostAdminPublishStatus403 | BlogPostAdminPublishStatus404 | BlogPostAdminPublishStatus500 | BlogPostAdminPublishStatus501);
