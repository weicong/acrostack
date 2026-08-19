/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitBlogsBlogFeatureDto } from '../volo/cmsKit/blogs/BlogFeatureDto'

export type BlogFeatureAdminGetListPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    blogId: string;
};

export type BlogFeatureAdminGetListStatus200Plain = VoloCmsKitBlogsBlogFeatureDto[];

export type BlogFeatureAdminGetListStatus200Json = VoloCmsKitBlogsBlogFeatureDto[];

export type BlogFeatureAdminGetListStatus200Json2 = VoloCmsKitBlogsBlogFeatureDto[];

export type BlogFeatureAdminGetListStatus200 = (BlogFeatureAdminGetListStatus200Plain | BlogFeatureAdminGetListStatus200Json | BlogFeatureAdminGetListStatus200Json2);

export type BlogFeatureAdminGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus400 = (BlogFeatureAdminGetListStatus400Plain | BlogFeatureAdminGetListStatus400Json | BlogFeatureAdminGetListStatus400Json2);

export type BlogFeatureAdminGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus401 = (BlogFeatureAdminGetListStatus401Plain | BlogFeatureAdminGetListStatus401Json | BlogFeatureAdminGetListStatus401Json2);

export type BlogFeatureAdminGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus403 = (BlogFeatureAdminGetListStatus403Plain | BlogFeatureAdminGetListStatus403Json | BlogFeatureAdminGetListStatus403Json2);

export type BlogFeatureAdminGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus404 = (BlogFeatureAdminGetListStatus404Plain | BlogFeatureAdminGetListStatus404Json | BlogFeatureAdminGetListStatus404Json2);

export type BlogFeatureAdminGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus500 = (BlogFeatureAdminGetListStatus500Plain | BlogFeatureAdminGetListStatus500Json | BlogFeatureAdminGetListStatus500Json2);

export type BlogFeatureAdminGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus501 = (BlogFeatureAdminGetListStatus501Plain | BlogFeatureAdminGetListStatus501Json | BlogFeatureAdminGetListStatus501Json2);

export type BlogFeatureAdminGetListOptions = {
    body?: never;
    path: BlogFeatureAdminGetListPath;
    query?: never;
    headers?: never;
};

export type BlogFeatureAdminGetListResponses = {
    "200": ({
        contentType: "text/plain";
        data: BlogFeatureAdminGetListStatus200Plain;
    } | {
        contentType: "application/json";
        data: BlogFeatureAdminGetListStatus200Json;
    } | {
        contentType: "text/json";
        data: BlogFeatureAdminGetListStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: BlogFeatureAdminGetListStatus400Plain;
    } | {
        contentType: "application/json";
        data: BlogFeatureAdminGetListStatus400Json;
    } | {
        contentType: "text/json";
        data: BlogFeatureAdminGetListStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BlogFeatureAdminGetListStatus401Plain;
    } | {
        contentType: "application/json";
        data: BlogFeatureAdminGetListStatus401Json;
    } | {
        contentType: "text/json";
        data: BlogFeatureAdminGetListStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BlogFeatureAdminGetListStatus403Plain;
    } | {
        contentType: "application/json";
        data: BlogFeatureAdminGetListStatus403Json;
    } | {
        contentType: "text/json";
        data: BlogFeatureAdminGetListStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BlogFeatureAdminGetListStatus404Plain;
    } | {
        contentType: "application/json";
        data: BlogFeatureAdminGetListStatus404Json;
    } | {
        contentType: "text/json";
        data: BlogFeatureAdminGetListStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BlogFeatureAdminGetListStatus500Plain;
    } | {
        contentType: "application/json";
        data: BlogFeatureAdminGetListStatus500Json;
    } | {
        contentType: "text/json";
        data: BlogFeatureAdminGetListStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BlogFeatureAdminGetListStatus501Plain;
    } | {
        contentType: "application/json";
        data: BlogFeatureAdminGetListStatus501Json;
    } | {
        contentType: "text/json";
        data: BlogFeatureAdminGetListStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BlogFeatureAdminGetListResponse = (BlogFeatureAdminGetListStatus200 | BlogFeatureAdminGetListStatus400 | BlogFeatureAdminGetListStatus401 | BlogFeatureAdminGetListStatus403 | BlogFeatureAdminGetListStatus404 | BlogFeatureAdminGetListStatus500 | BlogFeatureAdminGetListStatus501);
