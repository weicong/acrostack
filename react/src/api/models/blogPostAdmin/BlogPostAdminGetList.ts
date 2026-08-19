/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogPostListDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/pagedResultDto1Volo/cmsKit/admin/blogs/blogPostListDtoVolo/cmsKit/admin/application/ContractsVersion10600CultureneutralPublicKeyTokennull'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitBlogsBlogPostStatus } from '../volo/cmsKit/blogs/BlogPostStatus'

export type BlogPostAdminGetListQuery = {
    Filter?: string;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    BlogId?: string;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    AuthorId?: string;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    TagId?: string;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    Status?: VoloCmsKitBlogsBlogPostStatus;
    Sorting?: string;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    SkipCount?: number;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    MaxResultCount?: number;
};

export type BlogPostAdminGetListStatus200Plain = VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogPostListDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type BlogPostAdminGetListStatus200Json = VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogPostListDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type BlogPostAdminGetListStatus200Json2 = VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogPostListDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type BlogPostAdminGetListStatus200 = (BlogPostAdminGetListStatus200Plain | BlogPostAdminGetListStatus200Json | BlogPostAdminGetListStatus200Json2);

export type BlogPostAdminGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus400 = (BlogPostAdminGetListStatus400Plain | BlogPostAdminGetListStatus400Json | BlogPostAdminGetListStatus400Json2);

export type BlogPostAdminGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus401 = (BlogPostAdminGetListStatus401Plain | BlogPostAdminGetListStatus401Json | BlogPostAdminGetListStatus401Json2);

export type BlogPostAdminGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus403 = (BlogPostAdminGetListStatus403Plain | BlogPostAdminGetListStatus403Json | BlogPostAdminGetListStatus403Json2);

export type BlogPostAdminGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus404 = (BlogPostAdminGetListStatus404Plain | BlogPostAdminGetListStatus404Json | BlogPostAdminGetListStatus404Json2);

export type BlogPostAdminGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus500 = (BlogPostAdminGetListStatus500Plain | BlogPostAdminGetListStatus500Json | BlogPostAdminGetListStatus500Json2);

export type BlogPostAdminGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus501 = (BlogPostAdminGetListStatus501Plain | BlogPostAdminGetListStatus501Json | BlogPostAdminGetListStatus501Json2);

export type BlogPostAdminGetListOptions = {
    body?: never;
    path?: never;
    query?: BlogPostAdminGetListQuery;
    headers?: never;
};

export type BlogPostAdminGetListResponses = {
    "200": ({
        contentType: "text/plain";
        data: BlogPostAdminGetListStatus200Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminGetListStatus200Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminGetListStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: BlogPostAdminGetListStatus400Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminGetListStatus400Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminGetListStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BlogPostAdminGetListStatus401Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminGetListStatus401Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminGetListStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BlogPostAdminGetListStatus403Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminGetListStatus403Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminGetListStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BlogPostAdminGetListStatus404Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminGetListStatus404Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminGetListStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BlogPostAdminGetListStatus500Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminGetListStatus500Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminGetListStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BlogPostAdminGetListStatus501Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminGetListStatus501Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminGetListStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BlogPostAdminGetListResponse = (BlogPostAdminGetListStatus200 | BlogPostAdminGetListStatus400 | BlogPostAdminGetListStatus401 | BlogPostAdminGetListStatus403 | BlogPostAdminGetListStatus404 | BlogPostAdminGetListStatus500 | BlogPostAdminGetListStatus501);
