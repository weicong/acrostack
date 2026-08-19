/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitAdminBlogsBlogPostDto } from '../volo/cmsKit/admin/blogs/BlogPostDto'
import type { VoloCmsKitAdminBlogsCreateBlogPostDto } from '../volo/cmsKit/admin/blogs/CreateBlogPostDto'

export type BlogPostAdminCreateStatus200Plain = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminCreateStatus200Json = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminCreateStatus200Json2 = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminCreateStatus200 = (BlogPostAdminCreateStatus200Plain | BlogPostAdminCreateStatus200Json | BlogPostAdminCreateStatus200Json2);

export type BlogPostAdminCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus400 = (BlogPostAdminCreateStatus400Plain | BlogPostAdminCreateStatus400Json | BlogPostAdminCreateStatus400Json2);

export type BlogPostAdminCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus401 = (BlogPostAdminCreateStatus401Plain | BlogPostAdminCreateStatus401Json | BlogPostAdminCreateStatus401Json2);

export type BlogPostAdminCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus403 = (BlogPostAdminCreateStatus403Plain | BlogPostAdminCreateStatus403Json | BlogPostAdminCreateStatus403Json2);

export type BlogPostAdminCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus404 = (BlogPostAdminCreateStatus404Plain | BlogPostAdminCreateStatus404Json | BlogPostAdminCreateStatus404Json2);

export type BlogPostAdminCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus500 = (BlogPostAdminCreateStatus500Plain | BlogPostAdminCreateStatus500Json | BlogPostAdminCreateStatus500Json2);

export type BlogPostAdminCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus501 = (BlogPostAdminCreateStatus501Plain | BlogPostAdminCreateStatus501Json | BlogPostAdminCreateStatus501Json2);

export type BlogPostAdminCreateBodyJson = Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties"> | undefined;

export type BlogPostAdminCreateBodyJson2 = Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties"> | undefined;

export type BlogPostAdminCreateBodyJson3 = Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties"> | undefined;

export type BlogPostAdminCreateBody = (BlogPostAdminCreateBodyJson | BlogPostAdminCreateBodyJson2 | BlogPostAdminCreateBodyJson3);

export type BlogPostAdminCreateOptions = {
    body: BlogPostAdminCreateBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type BlogPostAdminCreateResponses = {
    "200": ({
        contentType: "text/plain";
        data: BlogPostAdminCreateStatus200Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminCreateStatus200Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminCreateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: BlogPostAdminCreateStatus400Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminCreateStatus400Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminCreateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BlogPostAdminCreateStatus401Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminCreateStatus401Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminCreateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BlogPostAdminCreateStatus403Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminCreateStatus403Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminCreateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BlogPostAdminCreateStatus404Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminCreateStatus404Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminCreateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BlogPostAdminCreateStatus500Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminCreateStatus500Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminCreateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BlogPostAdminCreateStatus501Plain;
    } | {
        contentType: "application/json";
        data: BlogPostAdminCreateStatus501Json;
    } | {
        contentType: "text/json";
        data: BlogPostAdminCreateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BlogPostAdminCreateResponse = (BlogPostAdminCreateStatus200 | BlogPostAdminCreateStatus400 | BlogPostAdminCreateStatus401 | BlogPostAdminCreateStatus403 | BlogPostAdminCreateStatus404 | BlogPostAdminCreateStatus500 | BlogPostAdminCreateStatus501);
