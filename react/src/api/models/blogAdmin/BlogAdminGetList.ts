/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/pagedResultDto1Volo/cmsKit/admin/blogs/blogDtoVolo/cmsKit/admin/application/ContractsVersion10600CultureneutralPublicKeyTokennull'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type BlogAdminGetListQuery = {
    Filter?: string;
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

export type BlogAdminGetListStatus200Plain = VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type BlogAdminGetListStatus200Json = VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type BlogAdminGetListStatus200Json2 = VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type BlogAdminGetListStatus200 = (BlogAdminGetListStatus200Plain | BlogAdminGetListStatus200Json | BlogAdminGetListStatus200Json2);

export type BlogAdminGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus400 = (BlogAdminGetListStatus400Plain | BlogAdminGetListStatus400Json | BlogAdminGetListStatus400Json2);

export type BlogAdminGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus401 = (BlogAdminGetListStatus401Plain | BlogAdminGetListStatus401Json | BlogAdminGetListStatus401Json2);

export type BlogAdminGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus403 = (BlogAdminGetListStatus403Plain | BlogAdminGetListStatus403Json | BlogAdminGetListStatus403Json2);

export type BlogAdminGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus404 = (BlogAdminGetListStatus404Plain | BlogAdminGetListStatus404Json | BlogAdminGetListStatus404Json2);

export type BlogAdminGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus500 = (BlogAdminGetListStatus500Plain | BlogAdminGetListStatus500Json | BlogAdminGetListStatus500Json2);

export type BlogAdminGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus501 = (BlogAdminGetListStatus501Plain | BlogAdminGetListStatus501Json | BlogAdminGetListStatus501Json2);

export type BlogAdminGetListOptions = {
    body?: never;
    path?: never;
    query?: BlogAdminGetListQuery;
    headers?: never;
};

export type BlogAdminGetListResponses = {
    "200": ({
        contentType: "text/plain";
        data: BlogAdminGetListStatus200Plain;
    } | {
        contentType: "application/json";
        data: BlogAdminGetListStatus200Json;
    } | {
        contentType: "text/json";
        data: BlogAdminGetListStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: BlogAdminGetListStatus400Plain;
    } | {
        contentType: "application/json";
        data: BlogAdminGetListStatus400Json;
    } | {
        contentType: "text/json";
        data: BlogAdminGetListStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BlogAdminGetListStatus401Plain;
    } | {
        contentType: "application/json";
        data: BlogAdminGetListStatus401Json;
    } | {
        contentType: "text/json";
        data: BlogAdminGetListStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BlogAdminGetListStatus403Plain;
    } | {
        contentType: "application/json";
        data: BlogAdminGetListStatus403Json;
    } | {
        contentType: "text/json";
        data: BlogAdminGetListStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BlogAdminGetListStatus404Plain;
    } | {
        contentType: "application/json";
        data: BlogAdminGetListStatus404Json;
    } | {
        contentType: "text/json";
        data: BlogAdminGetListStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BlogAdminGetListStatus500Plain;
    } | {
        contentType: "application/json";
        data: BlogAdminGetListStatus500Json;
    } | {
        contentType: "text/json";
        data: BlogAdminGetListStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BlogAdminGetListStatus501Plain;
    } | {
        contentType: "application/json";
        data: BlogAdminGetListStatus501Json;
    } | {
        contentType: "text/json";
        data: BlogAdminGetListStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BlogAdminGetListResponse = (BlogAdminGetListStatus200 | BlogAdminGetListStatus400 | BlogAdminGetListStatus401 | BlogAdminGetListStatus403 | BlogAdminGetListStatus404 | BlogAdminGetListStatus500 | BlogAdminGetListStatus501);
