/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitAdminBlogsBlogDto } from '../volo/cmsKit/admin/blogs/BlogDto'

export type BlogAdminGetPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type BlogAdminGetStatus200Plain = VoloCmsKitAdminBlogsBlogDto;

export type BlogAdminGetStatus200Json = VoloCmsKitAdminBlogsBlogDto;

export type BlogAdminGetStatus200Json2 = VoloCmsKitAdminBlogsBlogDto;

export type BlogAdminGetStatus200 = (BlogAdminGetStatus200Plain | BlogAdminGetStatus200Json | BlogAdminGetStatus200Json2);

export type BlogAdminGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus400 = (BlogAdminGetStatus400Plain | BlogAdminGetStatus400Json | BlogAdminGetStatus400Json2);

export type BlogAdminGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus401 = (BlogAdminGetStatus401Plain | BlogAdminGetStatus401Json | BlogAdminGetStatus401Json2);

export type BlogAdminGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus403 = (BlogAdminGetStatus403Plain | BlogAdminGetStatus403Json | BlogAdminGetStatus403Json2);

export type BlogAdminGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus404 = (BlogAdminGetStatus404Plain | BlogAdminGetStatus404Json | BlogAdminGetStatus404Json2);

export type BlogAdminGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus500 = (BlogAdminGetStatus500Plain | BlogAdminGetStatus500Json | BlogAdminGetStatus500Json2);

export type BlogAdminGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus501 = (BlogAdminGetStatus501Plain | BlogAdminGetStatus501Json | BlogAdminGetStatus501Json2);

export type BlogAdminGetOptions = {
    body?: never;
    path: BlogAdminGetPath;
    query?: never;
    headers?: never;
};

export type BlogAdminGetResponses = {
    "200": ({
        contentType: "text/plain";
        data: BlogAdminGetStatus200Plain;
    } | {
        contentType: "application/json";
        data: BlogAdminGetStatus200Json;
    } | {
        contentType: "text/json";
        data: BlogAdminGetStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: BlogAdminGetStatus400Plain;
    } | {
        contentType: "application/json";
        data: BlogAdminGetStatus400Json;
    } | {
        contentType: "text/json";
        data: BlogAdminGetStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BlogAdminGetStatus401Plain;
    } | {
        contentType: "application/json";
        data: BlogAdminGetStatus401Json;
    } | {
        contentType: "text/json";
        data: BlogAdminGetStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BlogAdminGetStatus403Plain;
    } | {
        contentType: "application/json";
        data: BlogAdminGetStatus403Json;
    } | {
        contentType: "text/json";
        data: BlogAdminGetStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BlogAdminGetStatus404Plain;
    } | {
        contentType: "application/json";
        data: BlogAdminGetStatus404Json;
    } | {
        contentType: "text/json";
        data: BlogAdminGetStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BlogAdminGetStatus500Plain;
    } | {
        contentType: "application/json";
        data: BlogAdminGetStatus500Json;
    } | {
        contentType: "text/json";
        data: BlogAdminGetStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BlogAdminGetStatus501Plain;
    } | {
        contentType: "application/json";
        data: BlogAdminGetStatus501Json;
    } | {
        contentType: "text/json";
        data: BlogAdminGetStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BlogAdminGetResponse = (BlogAdminGetStatus200 | BlogAdminGetStatus400 | BlogAdminGetStatus401 | BlogAdminGetStatus403 | BlogAdminGetStatus404 | BlogAdminGetStatus500 | BlogAdminGetStatus501);
