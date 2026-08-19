/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitContentsBlogPostCommonDto } from '../volo/cmsKit/contents/BlogPostCommonDto'

export type BlogPostPublicGetPath = {
    blogSlug: string;
    blogPostSlug: string;
};

export type BlogPostPublicGetStatus200Plain = VoloCmsKitContentsBlogPostCommonDto;

export type BlogPostPublicGetStatus200Json = VoloCmsKitContentsBlogPostCommonDto;

export type BlogPostPublicGetStatus200Json2 = VoloCmsKitContentsBlogPostCommonDto;

export type BlogPostPublicGetStatus200 = (BlogPostPublicGetStatus200Plain | BlogPostPublicGetStatus200Json | BlogPostPublicGetStatus200Json2);

export type BlogPostPublicGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus400 = (BlogPostPublicGetStatus400Plain | BlogPostPublicGetStatus400Json | BlogPostPublicGetStatus400Json2);

export type BlogPostPublicGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus401 = (BlogPostPublicGetStatus401Plain | BlogPostPublicGetStatus401Json | BlogPostPublicGetStatus401Json2);

export type BlogPostPublicGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus403 = (BlogPostPublicGetStatus403Plain | BlogPostPublicGetStatus403Json | BlogPostPublicGetStatus403Json2);

export type BlogPostPublicGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus404 = (BlogPostPublicGetStatus404Plain | BlogPostPublicGetStatus404Json | BlogPostPublicGetStatus404Json2);

export type BlogPostPublicGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus500 = (BlogPostPublicGetStatus500Plain | BlogPostPublicGetStatus500Json | BlogPostPublicGetStatus500Json2);

export type BlogPostPublicGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus501 = (BlogPostPublicGetStatus501Plain | BlogPostPublicGetStatus501Json | BlogPostPublicGetStatus501Json2);

export type BlogPostPublicGetOptions = {
    body?: never;
    path: BlogPostPublicGetPath;
    query?: never;
    headers?: never;
};

export type BlogPostPublicGetResponses = {
    "200": ({
        contentType: "text/plain";
        data: BlogPostPublicGetStatus200Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetStatus200Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: BlogPostPublicGetStatus400Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetStatus400Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BlogPostPublicGetStatus401Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetStatus401Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BlogPostPublicGetStatus403Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetStatus403Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BlogPostPublicGetStatus404Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetStatus404Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BlogPostPublicGetStatus500Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetStatus500Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BlogPostPublicGetStatus501Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetStatus501Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BlogPostPublicGetResponse = (BlogPostPublicGetStatus200 | BlogPostPublicGetStatus400 | BlogPostPublicGetStatus401 | BlogPostPublicGetStatus403 | BlogPostPublicGetStatus404 | BlogPostPublicGetStatus500 | BlogPostPublicGetStatus501);
