/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitBlogsBlogFeatureDto } from '../volo/cmsKit/blogs/BlogFeatureDto'

export type BlogFeatureGetOrDefaultPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    blogId: string;
    featureName: string;
};

export type BlogFeatureGetOrDefaultStatus200Plain = VoloCmsKitBlogsBlogFeatureDto;

export type BlogFeatureGetOrDefaultStatus200Json = VoloCmsKitBlogsBlogFeatureDto;

export type BlogFeatureGetOrDefaultStatus200Json2 = VoloCmsKitBlogsBlogFeatureDto;

export type BlogFeatureGetOrDefaultStatus200 = (BlogFeatureGetOrDefaultStatus200Plain | BlogFeatureGetOrDefaultStatus200Json | BlogFeatureGetOrDefaultStatus200Json2);

export type BlogFeatureGetOrDefaultStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus400 = (BlogFeatureGetOrDefaultStatus400Plain | BlogFeatureGetOrDefaultStatus400Json | BlogFeatureGetOrDefaultStatus400Json2);

export type BlogFeatureGetOrDefaultStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus401 = (BlogFeatureGetOrDefaultStatus401Plain | BlogFeatureGetOrDefaultStatus401Json | BlogFeatureGetOrDefaultStatus401Json2);

export type BlogFeatureGetOrDefaultStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus403 = (BlogFeatureGetOrDefaultStatus403Plain | BlogFeatureGetOrDefaultStatus403Json | BlogFeatureGetOrDefaultStatus403Json2);

export type BlogFeatureGetOrDefaultStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus404 = (BlogFeatureGetOrDefaultStatus404Plain | BlogFeatureGetOrDefaultStatus404Json | BlogFeatureGetOrDefaultStatus404Json2);

export type BlogFeatureGetOrDefaultStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus500 = (BlogFeatureGetOrDefaultStatus500Plain | BlogFeatureGetOrDefaultStatus500Json | BlogFeatureGetOrDefaultStatus500Json2);

export type BlogFeatureGetOrDefaultStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus501 = (BlogFeatureGetOrDefaultStatus501Plain | BlogFeatureGetOrDefaultStatus501Json | BlogFeatureGetOrDefaultStatus501Json2);

export type BlogFeatureGetOrDefaultOptions = {
    body?: never;
    path: BlogFeatureGetOrDefaultPath;
    query?: never;
    headers?: never;
};

export type BlogFeatureGetOrDefaultResponses = {
    "200": ({
        contentType: "text/plain";
        data: BlogFeatureGetOrDefaultStatus200Plain;
    } | {
        contentType: "application/json";
        data: BlogFeatureGetOrDefaultStatus200Json;
    } | {
        contentType: "text/json";
        data: BlogFeatureGetOrDefaultStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: BlogFeatureGetOrDefaultStatus400Plain;
    } | {
        contentType: "application/json";
        data: BlogFeatureGetOrDefaultStatus400Json;
    } | {
        contentType: "text/json";
        data: BlogFeatureGetOrDefaultStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BlogFeatureGetOrDefaultStatus401Plain;
    } | {
        contentType: "application/json";
        data: BlogFeatureGetOrDefaultStatus401Json;
    } | {
        contentType: "text/json";
        data: BlogFeatureGetOrDefaultStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BlogFeatureGetOrDefaultStatus403Plain;
    } | {
        contentType: "application/json";
        data: BlogFeatureGetOrDefaultStatus403Json;
    } | {
        contentType: "text/json";
        data: BlogFeatureGetOrDefaultStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BlogFeatureGetOrDefaultStatus404Plain;
    } | {
        contentType: "application/json";
        data: BlogFeatureGetOrDefaultStatus404Json;
    } | {
        contentType: "text/json";
        data: BlogFeatureGetOrDefaultStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BlogFeatureGetOrDefaultStatus500Plain;
    } | {
        contentType: "application/json";
        data: BlogFeatureGetOrDefaultStatus500Json;
    } | {
        contentType: "text/json";
        data: BlogFeatureGetOrDefaultStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BlogFeatureGetOrDefaultStatus501Plain;
    } | {
        contentType: "application/json";
        data: BlogFeatureGetOrDefaultStatus501Json;
    } | {
        contentType: "text/json";
        data: BlogFeatureGetOrDefaultStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BlogFeatureGetOrDefaultResponse = (BlogFeatureGetOrDefaultStatus200 | BlogFeatureGetOrDefaultStatus400 | BlogFeatureGetOrDefaultStatus401 | BlogFeatureGetOrDefaultStatus403 | BlogFeatureGetOrDefaultStatus404 | BlogFeatureGetOrDefaultStatus500 | BlogFeatureGetOrDefaultStatus501);
