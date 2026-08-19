/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitAdminBlogsBlogPostDto } from '../volo/cmsKit/admin/blogs/BlogPostDto'
import type { VoloCmsKitAdminBlogsCreateBlogPostDto } from '../volo/cmsKit/admin/blogs/CreateBlogPostDto'

export type BlogPostAdminCreateAndPublishStatus200Plain = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminCreateAndPublishStatus200Json = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminCreateAndPublishStatus200Json2 = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminCreateAndPublishStatus200 = (BlogPostAdminCreateAndPublishStatus200Plain | BlogPostAdminCreateAndPublishStatus200Json | BlogPostAdminCreateAndPublishStatus200Json2);

export type BlogPostAdminCreateAndPublishStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus400 = (BlogPostAdminCreateAndPublishStatus400Plain | BlogPostAdminCreateAndPublishStatus400Json | BlogPostAdminCreateAndPublishStatus400Json2);

export type BlogPostAdminCreateAndPublishStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus401 = (BlogPostAdminCreateAndPublishStatus401Plain | BlogPostAdminCreateAndPublishStatus401Json | BlogPostAdminCreateAndPublishStatus401Json2);

export type BlogPostAdminCreateAndPublishStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus403 = (BlogPostAdminCreateAndPublishStatus403Plain | BlogPostAdminCreateAndPublishStatus403Json | BlogPostAdminCreateAndPublishStatus403Json2);

export type BlogPostAdminCreateAndPublishStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus404 = (BlogPostAdminCreateAndPublishStatus404Plain | BlogPostAdminCreateAndPublishStatus404Json | BlogPostAdminCreateAndPublishStatus404Json2);

export type BlogPostAdminCreateAndPublishStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus500 = (BlogPostAdminCreateAndPublishStatus500Plain | BlogPostAdminCreateAndPublishStatus500Json | BlogPostAdminCreateAndPublishStatus500Json2);

export type BlogPostAdminCreateAndPublishStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus501 = (BlogPostAdminCreateAndPublishStatus501Plain | BlogPostAdminCreateAndPublishStatus501Json | BlogPostAdminCreateAndPublishStatus501Json2);

export type BlogPostAdminCreateAndPublishBodyJson = Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties"> | undefined;

export type BlogPostAdminCreateAndPublishBodyJson2 = Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties"> | undefined;

export type BlogPostAdminCreateAndPublishBodyJson3 = Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties"> | undefined;

export type BlogPostAdminCreateAndPublishBody = (BlogPostAdminCreateAndPublishBodyJson | BlogPostAdminCreateAndPublishBodyJson2 | BlogPostAdminCreateAndPublishBodyJson3);

export type BlogPostAdminCreateAndPublishOptions = {
    body: BlogPostAdminCreateAndPublishBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type BlogPostAdminCreateAndPublishResponses = {
    "200": ({
        contentType: "text/plain";
        data: BlogPostAdminCreateAndPublishStatus200Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminCreateAndPublishStatus200Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminCreateAndPublishStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: BlogPostAdminCreateAndPublishStatus400Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminCreateAndPublishStatus400Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminCreateAndPublishStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BlogPostAdminCreateAndPublishStatus401Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminCreateAndPublishStatus401Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminCreateAndPublishStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BlogPostAdminCreateAndPublishStatus403Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminCreateAndPublishStatus403Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminCreateAndPublishStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BlogPostAdminCreateAndPublishStatus404Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminCreateAndPublishStatus404Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminCreateAndPublishStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BlogPostAdminCreateAndPublishStatus500Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminCreateAndPublishStatus500Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminCreateAndPublishStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BlogPostAdminCreateAndPublishStatus501Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminCreateAndPublishStatus501Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminCreateAndPublishStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BlogPostAdminCreateAndPublishResponse = (BlogPostAdminCreateAndPublishStatus200 | BlogPostAdminCreateAndPublishStatus400 | BlogPostAdminCreateAndPublishStatus401 | BlogPostAdminCreateAndPublishStatus403 | BlogPostAdminCreateAndPublishStatus404 | BlogPostAdminCreateAndPublishStatus500 | BlogPostAdminCreateAndPublishStatus501);
