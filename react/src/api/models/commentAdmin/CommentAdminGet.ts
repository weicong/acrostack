/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitAdminCommentsCommentWithAuthorDto } from '../volo/cmsKit/admin/comments/CommentWithAuthorDto'

export type CommentAdminGetPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type CommentAdminGetStatus200Plain = VoloCmsKitAdminCommentsCommentWithAuthorDto;

export type CommentAdminGetStatus200Json = VoloCmsKitAdminCommentsCommentWithAuthorDto;

export type CommentAdminGetStatus200Json2 = VoloCmsKitAdminCommentsCommentWithAuthorDto;

export type CommentAdminGetStatus200 = (CommentAdminGetStatus200Plain | CommentAdminGetStatus200Json | CommentAdminGetStatus200Json2);

export type CommentAdminGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus400 = (CommentAdminGetStatus400Plain | CommentAdminGetStatus400Json | CommentAdminGetStatus400Json2);

export type CommentAdminGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus401 = (CommentAdminGetStatus401Plain | CommentAdminGetStatus401Json | CommentAdminGetStatus401Json2);

export type CommentAdminGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus403 = (CommentAdminGetStatus403Plain | CommentAdminGetStatus403Json | CommentAdminGetStatus403Json2);

export type CommentAdminGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus404 = (CommentAdminGetStatus404Plain | CommentAdminGetStatus404Json | CommentAdminGetStatus404Json2);

export type CommentAdminGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus500 = (CommentAdminGetStatus500Plain | CommentAdminGetStatus500Json | CommentAdminGetStatus500Json2);

export type CommentAdminGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetStatus501 = (CommentAdminGetStatus501Plain | CommentAdminGetStatus501Json | CommentAdminGetStatus501Json2);

export type CommentAdminGetOptions = {
    body?: never;
    path: CommentAdminGetPath;
    query?: never;
    headers?: never;
};

export type CommentAdminGetResponses = {
    "200": ({
        contentType: "text/plain";
        data: CommentAdminGetStatus200Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetStatus200Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: CommentAdminGetStatus400Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetStatus400Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: CommentAdminGetStatus401Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetStatus401Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: CommentAdminGetStatus403Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetStatus403Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: CommentAdminGetStatus404Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetStatus404Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: CommentAdminGetStatus500Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetStatus500Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: CommentAdminGetStatus501Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetStatus501Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type CommentAdminGetResponse = (CommentAdminGetStatus200 | CommentAdminGetStatus400 | CommentAdminGetStatus401 | CommentAdminGetStatus403 | CommentAdminGetStatus404 | CommentAdminGetStatus500 | CommentAdminGetStatus501);
