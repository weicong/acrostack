/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitAdminBlogsBlogPostDto } from '../volo/cmsKit/admin/blogs/BlogPostDto'
import type { VoloCmsKitAdminBlogsUpdateBlogPostDto } from '../volo/cmsKit/admin/blogs/UpdateBlogPostDto'

export type BlogPostAdminUpdatePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type BlogPostAdminUpdateStatus200Plain = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminUpdateStatus200Json = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminUpdateStatus200Json2 = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminUpdateStatus200 = (BlogPostAdminUpdateStatus200Plain | BlogPostAdminUpdateStatus200Json | BlogPostAdminUpdateStatus200Json2);

export type BlogPostAdminUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus400 = (BlogPostAdminUpdateStatus400Plain | BlogPostAdminUpdateStatus400Json | BlogPostAdminUpdateStatus400Json2);

export type BlogPostAdminUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus401 = (BlogPostAdminUpdateStatus401Plain | BlogPostAdminUpdateStatus401Json | BlogPostAdminUpdateStatus401Json2);

export type BlogPostAdminUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus403 = (BlogPostAdminUpdateStatus403Plain | BlogPostAdminUpdateStatus403Json | BlogPostAdminUpdateStatus403Json2);

export type BlogPostAdminUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus404 = (BlogPostAdminUpdateStatus404Plain | BlogPostAdminUpdateStatus404Json | BlogPostAdminUpdateStatus404Json2);

export type BlogPostAdminUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus500 = (BlogPostAdminUpdateStatus500Plain | BlogPostAdminUpdateStatus500Json | BlogPostAdminUpdateStatus500Json2);

export type BlogPostAdminUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus501 = (BlogPostAdminUpdateStatus501Plain | BlogPostAdminUpdateStatus501Json | BlogPostAdminUpdateStatus501Json2);

export type BlogPostAdminUpdateBodyJson = Omit<NonNullable<VoloCmsKitAdminBlogsUpdateBlogPostDto>, "extraProperties"> | undefined;

export type BlogPostAdminUpdateBodyJson2 = Omit<NonNullable<VoloCmsKitAdminBlogsUpdateBlogPostDto>, "extraProperties"> | undefined;

export type BlogPostAdminUpdateBodyJson3 = Omit<NonNullable<VoloCmsKitAdminBlogsUpdateBlogPostDto>, "extraProperties"> | undefined;

export type BlogPostAdminUpdateBody = (BlogPostAdminUpdateBodyJson | BlogPostAdminUpdateBodyJson2 | BlogPostAdminUpdateBodyJson3);

export type BlogPostAdminUpdateOptions = {
    body: BlogPostAdminUpdateBody;
    path: BlogPostAdminUpdatePath;
    query?: never;
    headers?: never;
};

export type BlogPostAdminUpdateResponses = {
    "200": ({
        contentType: "text/plain";
        data: BlogPostAdminUpdateStatus200Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminUpdateStatus200Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminUpdateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: BlogPostAdminUpdateStatus400Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminUpdateStatus400Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminUpdateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BlogPostAdminUpdateStatus401Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminUpdateStatus401Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminUpdateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BlogPostAdminUpdateStatus403Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminUpdateStatus403Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminUpdateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BlogPostAdminUpdateStatus404Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminUpdateStatus404Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminUpdateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BlogPostAdminUpdateStatus500Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminUpdateStatus500Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminUpdateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BlogPostAdminUpdateStatus501Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminUpdateStatus501Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminUpdateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BlogPostAdminUpdateResponse = (BlogPostAdminUpdateStatus200 | BlogPostAdminUpdateStatus400 | BlogPostAdminUpdateStatus401 | BlogPostAdminUpdateStatus403 | BlogPostAdminUpdateStatus404 | BlogPostAdminUpdateStatus500 | BlogPostAdminUpdateStatus501);
