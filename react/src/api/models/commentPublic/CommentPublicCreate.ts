/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitPublicCommentsCommentDto } from '../volo/cmsKit/public/comments/CommentDto'
import type { VoloCmsKitPublicCommentsCreateCommentInput } from '../volo/cmsKit/public/comments/CreateCommentInput'

export type CommentPublicCreatePath = {
    entityType: string;
    entityId: string;
};

export type CommentPublicCreateStatus200Plain = VoloCmsKitPublicCommentsCommentDto;

export type CommentPublicCreateStatus200Json = VoloCmsKitPublicCommentsCommentDto;

export type CommentPublicCreateStatus200Json2 = VoloCmsKitPublicCommentsCommentDto;

export type CommentPublicCreateStatus200 = (CommentPublicCreateStatus200Plain | CommentPublicCreateStatus200Json | CommentPublicCreateStatus200Json2);

export type CommentPublicCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus400 = (CommentPublicCreateStatus400Plain | CommentPublicCreateStatus400Json | CommentPublicCreateStatus400Json2);

export type CommentPublicCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus401 = (CommentPublicCreateStatus401Plain | CommentPublicCreateStatus401Json | CommentPublicCreateStatus401Json2);

export type CommentPublicCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus403 = (CommentPublicCreateStatus403Plain | CommentPublicCreateStatus403Json | CommentPublicCreateStatus403Json2);

export type CommentPublicCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus404 = (CommentPublicCreateStatus404Plain | CommentPublicCreateStatus404Json | CommentPublicCreateStatus404Json2);

export type CommentPublicCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus500 = (CommentPublicCreateStatus500Plain | CommentPublicCreateStatus500Json | CommentPublicCreateStatus500Json2);

export type CommentPublicCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicCreateStatus501 = (CommentPublicCreateStatus501Plain | CommentPublicCreateStatus501Json | CommentPublicCreateStatus501Json2);

export type CommentPublicCreateBodyJson = Omit<NonNullable<VoloCmsKitPublicCommentsCreateCommentInput>, "extraProperties"> | undefined;

export type CommentPublicCreateBodyJson2 = Omit<NonNullable<VoloCmsKitPublicCommentsCreateCommentInput>, "extraProperties"> | undefined;

export type CommentPublicCreateBodyJson3 = Omit<NonNullable<VoloCmsKitPublicCommentsCreateCommentInput>, "extraProperties"> | undefined;

export type CommentPublicCreateBody = (CommentPublicCreateBodyJson | CommentPublicCreateBodyJson2 | CommentPublicCreateBodyJson3);

export type CommentPublicCreateOptions = {
    body: CommentPublicCreateBody;
    path: CommentPublicCreatePath;
    query?: never;
    headers?: never;
};

export type CommentPublicCreateResponses = {
    "200": ({
        contentType: "text/plain";
        data: CommentPublicCreateStatus200Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicCreateStatus200Json;
    } | {
        contentType: "text/json";
        data: CommentPublicCreateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: CommentPublicCreateStatus400Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicCreateStatus400Json;
    } | {
        contentType: "text/json";
        data: CommentPublicCreateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: CommentPublicCreateStatus401Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicCreateStatus401Json;
    } | {
        contentType: "text/json";
        data: CommentPublicCreateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: CommentPublicCreateStatus403Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicCreateStatus403Json;
    } | {
        contentType: "text/json";
        data: CommentPublicCreateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: CommentPublicCreateStatus404Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicCreateStatus404Json;
    } | {
        contentType: "text/json";
        data: CommentPublicCreateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: CommentPublicCreateStatus500Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicCreateStatus500Json;
    } | {
        contentType: "text/json";
        data: CommentPublicCreateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: CommentPublicCreateStatus501Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicCreateStatus501Json;
    } | {
        contentType: "text/json";
        data: CommentPublicCreateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type CommentPublicCreateResponse = (CommentPublicCreateStatus200 | CommentPublicCreateStatus400 | CommentPublicCreateStatus401 | CommentPublicCreateStatus403 | CommentPublicCreateStatus404 | CommentPublicCreateStatus500 | CommentPublicCreateStatus501);
