/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitPublicCommentsCommentDto } from '../volo/cmsKit/public/comments/CommentDto'
import type { VoloCmsKitPublicCommentsUpdateCommentInput } from '../volo/cmsKit/public/comments/UpdateCommentInput'

export type CommentPublicUpdatePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type CommentPublicUpdateStatus200Plain = VoloCmsKitPublicCommentsCommentDto;

export type CommentPublicUpdateStatus200Json = VoloCmsKitPublicCommentsCommentDto;

export type CommentPublicUpdateStatus200Json2 = VoloCmsKitPublicCommentsCommentDto;

export type CommentPublicUpdateStatus200 = (CommentPublicUpdateStatus200Plain | CommentPublicUpdateStatus200Json | CommentPublicUpdateStatus200Json2);

export type CommentPublicUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus400 = (CommentPublicUpdateStatus400Plain | CommentPublicUpdateStatus400Json | CommentPublicUpdateStatus400Json2);

export type CommentPublicUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus401 = (CommentPublicUpdateStatus401Plain | CommentPublicUpdateStatus401Json | CommentPublicUpdateStatus401Json2);

export type CommentPublicUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus403 = (CommentPublicUpdateStatus403Plain | CommentPublicUpdateStatus403Json | CommentPublicUpdateStatus403Json2);

export type CommentPublicUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus404 = (CommentPublicUpdateStatus404Plain | CommentPublicUpdateStatus404Json | CommentPublicUpdateStatus404Json2);

export type CommentPublicUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus500 = (CommentPublicUpdateStatus500Plain | CommentPublicUpdateStatus500Json | CommentPublicUpdateStatus500Json2);

export type CommentPublicUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicUpdateStatus501 = (CommentPublicUpdateStatus501Plain | CommentPublicUpdateStatus501Json | CommentPublicUpdateStatus501Json2);

export type CommentPublicUpdateBodyJson = Omit<NonNullable<VoloCmsKitPublicCommentsUpdateCommentInput>, "extraProperties"> | undefined;

export type CommentPublicUpdateBodyJson2 = Omit<NonNullable<VoloCmsKitPublicCommentsUpdateCommentInput>, "extraProperties"> | undefined;

export type CommentPublicUpdateBodyJson3 = Omit<NonNullable<VoloCmsKitPublicCommentsUpdateCommentInput>, "extraProperties"> | undefined;

export type CommentPublicUpdateBody = (CommentPublicUpdateBodyJson | CommentPublicUpdateBodyJson2 | CommentPublicUpdateBodyJson3);

export type CommentPublicUpdateOptions = {
    body: CommentPublicUpdateBody;
    path: CommentPublicUpdatePath;
    query?: never;
    headers?: never;
};

export type CommentPublicUpdateResponses = {
    "200": ({
        contentType: "text/plain";
        data: CommentPublicUpdateStatus200Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicUpdateStatus200Json;
    } | {
        contentType: "text/json";
        data: CommentPublicUpdateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: CommentPublicUpdateStatus400Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicUpdateStatus400Json;
    } | {
        contentType: "text/json";
        data: CommentPublicUpdateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: CommentPublicUpdateStatus401Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicUpdateStatus401Json;
    } | {
        contentType: "text/json";
        data: CommentPublicUpdateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: CommentPublicUpdateStatus403Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicUpdateStatus403Json;
    } | {
        contentType: "text/json";
        data: CommentPublicUpdateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: CommentPublicUpdateStatus404Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicUpdateStatus404Json;
    } | {
        contentType: "text/json";
        data: CommentPublicUpdateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: CommentPublicUpdateStatus500Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicUpdateStatus500Json;
    } | {
        contentType: "text/json";
        data: CommentPublicUpdateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: CommentPublicUpdateStatus501Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicUpdateStatus501Json;
    } | {
        contentType: "text/json";
        data: CommentPublicUpdateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type CommentPublicUpdateResponse = (CommentPublicUpdateStatus200 | CommentPublicUpdateStatus400 | CommentPublicUpdateStatus401 | CommentPublicUpdateStatus403 | CommentPublicUpdateStatus404 | CommentPublicUpdateStatus500 | CommentPublicUpdateStatus501);
