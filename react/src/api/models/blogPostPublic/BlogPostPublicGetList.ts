/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloCmsKitContentsBlogPostCommonDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/pagedResultDto1Volo/cmsKit/contents/blogPostCommonDtoVolo/cmsKit/common/application/ContractsVersion10600CultureneutralPublicKeyTokennull'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type BlogPostPublicGetListPath = {
    blogSlug: string;
};

export type BlogPostPublicGetListQuery = {
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
    FilterOnFavorites?: boolean;
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

export type BlogPostPublicGetListStatus200Plain = VoloAbpApplicationDtosPagedResultDto1VoloCmsKitContentsBlogPostCommonDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type BlogPostPublicGetListStatus200Json = VoloAbpApplicationDtosPagedResultDto1VoloCmsKitContentsBlogPostCommonDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type BlogPostPublicGetListStatus200Json2 = VoloAbpApplicationDtosPagedResultDto1VoloCmsKitContentsBlogPostCommonDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type BlogPostPublicGetListStatus200 = (BlogPostPublicGetListStatus200Plain | BlogPostPublicGetListStatus200Json | BlogPostPublicGetListStatus200Json2);

export type BlogPostPublicGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus400 = (BlogPostPublicGetListStatus400Plain | BlogPostPublicGetListStatus400Json | BlogPostPublicGetListStatus400Json2);

export type BlogPostPublicGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus401 = (BlogPostPublicGetListStatus401Plain | BlogPostPublicGetListStatus401Json | BlogPostPublicGetListStatus401Json2);

export type BlogPostPublicGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus403 = (BlogPostPublicGetListStatus403Plain | BlogPostPublicGetListStatus403Json | BlogPostPublicGetListStatus403Json2);

export type BlogPostPublicGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus404 = (BlogPostPublicGetListStatus404Plain | BlogPostPublicGetListStatus404Json | BlogPostPublicGetListStatus404Json2);

export type BlogPostPublicGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus500 = (BlogPostPublicGetListStatus500Plain | BlogPostPublicGetListStatus500Json | BlogPostPublicGetListStatus500Json2);

export type BlogPostPublicGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus501 = (BlogPostPublicGetListStatus501Plain | BlogPostPublicGetListStatus501Json | BlogPostPublicGetListStatus501Json2);

export type BlogPostPublicGetListOptions = {
    body?: never;
    path: BlogPostPublicGetListPath;
    query?: BlogPostPublicGetListQuery;
    headers?: never;
};

export type BlogPostPublicGetListResponses = {
    "200": ({
        contentType: "text/plain";
        data: BlogPostPublicGetListStatus200Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetListStatus200Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetListStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: BlogPostPublicGetListStatus400Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetListStatus400Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetListStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BlogPostPublicGetListStatus401Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetListStatus401Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetListStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BlogPostPublicGetListStatus403Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetListStatus403Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetListStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BlogPostPublicGetListStatus404Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetListStatus404Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetListStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BlogPostPublicGetListStatus500Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetListStatus500Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetListStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BlogPostPublicGetListStatus501Plain;
    } | {
        contentType: "application/json";
        data: BlogPostPublicGetListStatus501Json;
    } | {
        contentType: "text/json";
        data: BlogPostPublicGetListStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BlogPostPublicGetListResponse = (BlogPostPublicGetListStatus200 | BlogPostPublicGetListStatus400 | BlogPostPublicGetListStatus401 | BlogPostPublicGetListStatus403 | BlogPostPublicGetListStatus404 | BlogPostPublicGetListStatus500 | BlogPostPublicGetListStatus501);
