/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicCommentsCommentWithDetailsDtoVoloCmsKitPublicApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/listResultDto1Volo/cmsKit/public/comments/commentWithDetailsDtoVolo/cmsKit/public/application/ContractsVersion10600CultureneutralPublicKeyTokennull'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type CommentPublicGetListPath = {
    entityType: string;
    entityId: string;
};

export type CommentPublicGetListStatus200Plain = VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicCommentsCommentWithDetailsDtoVoloCmsKitPublicApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type CommentPublicGetListStatus200Json = VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicCommentsCommentWithDetailsDtoVoloCmsKitPublicApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type CommentPublicGetListStatus200Json2 = VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicCommentsCommentWithDetailsDtoVoloCmsKitPublicApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type CommentPublicGetListStatus200 = (CommentPublicGetListStatus200Plain | CommentPublicGetListStatus200Json | CommentPublicGetListStatus200Json2);

export type CommentPublicGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus400 = (CommentPublicGetListStatus400Plain | CommentPublicGetListStatus400Json | CommentPublicGetListStatus400Json2);

export type CommentPublicGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus401 = (CommentPublicGetListStatus401Plain | CommentPublicGetListStatus401Json | CommentPublicGetListStatus401Json2);

export type CommentPublicGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus403 = (CommentPublicGetListStatus403Plain | CommentPublicGetListStatus403Json | CommentPublicGetListStatus403Json2);

export type CommentPublicGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus404 = (CommentPublicGetListStatus404Plain | CommentPublicGetListStatus404Json | CommentPublicGetListStatus404Json2);

export type CommentPublicGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus500 = (CommentPublicGetListStatus500Plain | CommentPublicGetListStatus500Json | CommentPublicGetListStatus500Json2);

export type CommentPublicGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentPublicGetListStatus501 = (CommentPublicGetListStatus501Plain | CommentPublicGetListStatus501Json | CommentPublicGetListStatus501Json2);

export type CommentPublicGetListOptions = {
    body?: never;
    path: CommentPublicGetListPath;
    query?: never;
    headers?: never;
};

export type CommentPublicGetListResponses = {
    "200": ({
        contentType: "text/plain";
        data: CommentPublicGetListStatus200Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicGetListStatus200Json;
    } | {
        contentType: "text/json";
        data: CommentPublicGetListStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: CommentPublicGetListStatus400Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicGetListStatus400Json;
    } | {
        contentType: "text/json";
        data: CommentPublicGetListStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: CommentPublicGetListStatus401Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicGetListStatus401Json;
    } | {
        contentType: "text/json";
        data: CommentPublicGetListStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: CommentPublicGetListStatus403Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicGetListStatus403Json;
    } | {
        contentType: "text/json";
        data: CommentPublicGetListStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: CommentPublicGetListStatus404Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicGetListStatus404Json;
    } | {
        contentType: "text/json";
        data: CommentPublicGetListStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: CommentPublicGetListStatus500Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicGetListStatus500Json;
    } | {
        contentType: "text/json";
        data: CommentPublicGetListStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: CommentPublicGetListStatus501Plain;
    } | {
        contentType: "application/json";
        data: CommentPublicGetListStatus501Json;
    } | {
        contentType: "text/json";
        data: CommentPublicGetListStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type CommentPublicGetListResponse = (CommentPublicGetListStatus200 | CommentPublicGetListStatus400 | CommentPublicGetListStatus401 | CommentPublicGetListStatus403 | CommentPublicGetListStatus404 | CommentPublicGetListStatus500 | CommentPublicGetListStatus501);
