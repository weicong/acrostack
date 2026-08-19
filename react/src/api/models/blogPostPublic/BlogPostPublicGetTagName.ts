/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type BlogPostPublicGetTagNamePath = {
    id: string;
};

export type BlogPostPublicGetTagNameQuery = {
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    tagId?: string;
};

export type BlogPostPublicGetTagNameStatus200Plain = string;

export type BlogPostPublicGetTagNameStatus200Json = string;

export type BlogPostPublicGetTagNameStatus200Json2 = string;

export type BlogPostPublicGetTagNameStatus200 = (BlogPostPublicGetTagNameStatus200Plain | BlogPostPublicGetTagNameStatus200Json | BlogPostPublicGetTagNameStatus200Json2);

export type BlogPostPublicGetTagNameStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus400 = (BlogPostPublicGetTagNameStatus400Plain | BlogPostPublicGetTagNameStatus400Json | BlogPostPublicGetTagNameStatus400Json2);

export type BlogPostPublicGetTagNameStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus401 = (BlogPostPublicGetTagNameStatus401Plain | BlogPostPublicGetTagNameStatus401Json | BlogPostPublicGetTagNameStatus401Json2);

export type BlogPostPublicGetTagNameStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus403 = (BlogPostPublicGetTagNameStatus403Plain | BlogPostPublicGetTagNameStatus403Json | BlogPostPublicGetTagNameStatus403Json2);

export type BlogPostPublicGetTagNameStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus404 = (BlogPostPublicGetTagNameStatus404Plain | BlogPostPublicGetTagNameStatus404Json | BlogPostPublicGetTagNameStatus404Json2);

export type BlogPostPublicGetTagNameStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus500 = (BlogPostPublicGetTagNameStatus500Plain | BlogPostPublicGetTagNameStatus500Json | BlogPostPublicGetTagNameStatus500Json2);

export type BlogPostPublicGetTagNameStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus501 = (BlogPostPublicGetTagNameStatus501Plain | BlogPostPublicGetTagNameStatus501Json | BlogPostPublicGetTagNameStatus501Json2);

export type BlogPostPublicGetTagNameOptions = {
    body?: never;
    path: BlogPostPublicGetTagNamePath;
    query?: BlogPostPublicGetTagNameQuery;
    headers?: never;
};

export type BlogPostPublicGetTagNameResponses = {
    "200": ({
        contentType: "text/plain";
        data: BlogPostPublicGetTagNameStatus200Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetTagNameStatus200Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetTagNameStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: BlogPostPublicGetTagNameStatus400Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetTagNameStatus400Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetTagNameStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BlogPostPublicGetTagNameStatus401Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetTagNameStatus401Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetTagNameStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BlogPostPublicGetTagNameStatus403Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetTagNameStatus403Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetTagNameStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BlogPostPublicGetTagNameStatus404Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetTagNameStatus404Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetTagNameStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BlogPostPublicGetTagNameStatus500Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetTagNameStatus500Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetTagNameStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BlogPostPublicGetTagNameStatus501Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetTagNameStatus501Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetTagNameStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BlogPostPublicGetTagNameResponse = (BlogPostPublicGetTagNameStatus200 | BlogPostPublicGetTagNameStatus400 | BlogPostPublicGetTagNameStatus401 | BlogPostPublicGetTagNameStatus403 | BlogPostPublicGetTagNameStatus404 | BlogPostPublicGetTagNameStatus500 | BlogPostPublicGetTagNameStatus501);
