/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitUsersCmsUserDto } from '../volo/cmsKit/users/CmsUserDto'

export type BlogPostPublicGetAuthorHasBlogPostPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type BlogPostPublicGetAuthorHasBlogPostStatus200Plain = VoloCmsKitUsersCmsUserDto;

export type BlogPostPublicGetAuthorHasBlogPostStatus200Json = VoloCmsKitUsersCmsUserDto;

export type BlogPostPublicGetAuthorHasBlogPostStatus200Json2 = VoloCmsKitUsersCmsUserDto;

export type BlogPostPublicGetAuthorHasBlogPostStatus200 = (BlogPostPublicGetAuthorHasBlogPostStatus200Plain | BlogPostPublicGetAuthorHasBlogPostStatus200Json | BlogPostPublicGetAuthorHasBlogPostStatus200Json2);

export type BlogPostPublicGetAuthorHasBlogPostStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus400 = (BlogPostPublicGetAuthorHasBlogPostStatus400Plain | BlogPostPublicGetAuthorHasBlogPostStatus400Json | BlogPostPublicGetAuthorHasBlogPostStatus400Json2);

export type BlogPostPublicGetAuthorHasBlogPostStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus401 = (BlogPostPublicGetAuthorHasBlogPostStatus401Plain | BlogPostPublicGetAuthorHasBlogPostStatus401Json | BlogPostPublicGetAuthorHasBlogPostStatus401Json2);

export type BlogPostPublicGetAuthorHasBlogPostStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus403 = (BlogPostPublicGetAuthorHasBlogPostStatus403Plain | BlogPostPublicGetAuthorHasBlogPostStatus403Json | BlogPostPublicGetAuthorHasBlogPostStatus403Json2);

export type BlogPostPublicGetAuthorHasBlogPostStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus404 = (BlogPostPublicGetAuthorHasBlogPostStatus404Plain | BlogPostPublicGetAuthorHasBlogPostStatus404Json | BlogPostPublicGetAuthorHasBlogPostStatus404Json2);

export type BlogPostPublicGetAuthorHasBlogPostStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus500 = (BlogPostPublicGetAuthorHasBlogPostStatus500Plain | BlogPostPublicGetAuthorHasBlogPostStatus500Json | BlogPostPublicGetAuthorHasBlogPostStatus500Json2);

export type BlogPostPublicGetAuthorHasBlogPostStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus501 = (BlogPostPublicGetAuthorHasBlogPostStatus501Plain | BlogPostPublicGetAuthorHasBlogPostStatus501Json | BlogPostPublicGetAuthorHasBlogPostStatus501Json2);

export type BlogPostPublicGetAuthorHasBlogPostOptions = {
    body?: never;
    path: BlogPostPublicGetAuthorHasBlogPostPath;
    query?: never;
    headers?: never;
};

export type BlogPostPublicGetAuthorHasBlogPostResponses = {
    "200": ({
        contentType: "text/plain";
        data: BlogPostPublicGetAuthorHasBlogPostStatus200Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetAuthorHasBlogPostStatus200Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetAuthorHasBlogPostStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: BlogPostPublicGetAuthorHasBlogPostStatus400Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetAuthorHasBlogPostStatus400Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetAuthorHasBlogPostStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BlogPostPublicGetAuthorHasBlogPostStatus401Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetAuthorHasBlogPostStatus401Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetAuthorHasBlogPostStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BlogPostPublicGetAuthorHasBlogPostStatus403Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetAuthorHasBlogPostStatus403Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetAuthorHasBlogPostStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BlogPostPublicGetAuthorHasBlogPostStatus404Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetAuthorHasBlogPostStatus404Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetAuthorHasBlogPostStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BlogPostPublicGetAuthorHasBlogPostStatus500Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetAuthorHasBlogPostStatus500Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetAuthorHasBlogPostStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BlogPostPublicGetAuthorHasBlogPostStatus501Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetAuthorHasBlogPostStatus501Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetAuthorHasBlogPostStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BlogPostPublicGetAuthorHasBlogPostResponse = (BlogPostPublicGetAuthorHasBlogPostStatus200 | BlogPostPublicGetAuthorHasBlogPostStatus400 | BlogPostPublicGetAuthorHasBlogPostStatus401 | BlogPostPublicGetAuthorHasBlogPostStatus403 | BlogPostPublicGetAuthorHasBlogPostStatus404 | BlogPostPublicGetAuthorHasBlogPostStatus500 | BlogPostPublicGetAuthorHasBlogPostStatus501);
