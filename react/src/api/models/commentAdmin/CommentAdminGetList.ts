/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminCommentsCommentWithAuthorDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/pagedResultDto1Volo/cmsKit/admin/comments/commentWithAuthorDtoVolo/cmsKit/admin/application/ContractsVersion10600CultureneutralPublicKeyTokennull'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitCommentsCommentApproveState } from '../volo/cmsKit/comments/CommentApproveState'

export type CommentAdminGetListQuery = {
    EntityType?: string;
    Text?: string;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    RepliedCommentId?: string;
    Author?: string;
    /**
     * @description
     * Format: `date-time`
     * @type string | undefined
    */
    CreationStartDate?: string;
    /**
     * @description
     * Format: `date-time`
     * @type string | undefined
    */
    CreationEndDate?: string;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    CommentApproveState?: VoloCmsKitCommentsCommentApproveState;
    Sorting?: string;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    SkipCount?: number;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    MaxResultCount?: number;
};

export type CommentAdminGetListStatus200Plain = VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminCommentsCommentWithAuthorDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type CommentAdminGetListStatus200Json = VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminCommentsCommentWithAuthorDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type CommentAdminGetListStatus200Json2 = VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminCommentsCommentWithAuthorDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type CommentAdminGetListStatus200 = (CommentAdminGetListStatus200Plain | CommentAdminGetListStatus200Json | CommentAdminGetListStatus200Json2);

export type CommentAdminGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus400 = (CommentAdminGetListStatus400Plain | CommentAdminGetListStatus400Json | CommentAdminGetListStatus400Json2);

export type CommentAdminGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus401 = (CommentAdminGetListStatus401Plain | CommentAdminGetListStatus401Json | CommentAdminGetListStatus401Json2);

export type CommentAdminGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus403 = (CommentAdminGetListStatus403Plain | CommentAdminGetListStatus403Json | CommentAdminGetListStatus403Json2);

export type CommentAdminGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus404 = (CommentAdminGetListStatus404Plain | CommentAdminGetListStatus404Json | CommentAdminGetListStatus404Json2);

export type CommentAdminGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus500 = (CommentAdminGetListStatus500Plain | CommentAdminGetListStatus500Json | CommentAdminGetListStatus500Json2);

export type CommentAdminGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminGetListStatus501 = (CommentAdminGetListStatus501Plain | CommentAdminGetListStatus501Json | CommentAdminGetListStatus501Json2);

export type CommentAdminGetListOptions = {
    body?: never;
    path?: never;
    query?: CommentAdminGetListQuery;
    headers?: never;
};

export type CommentAdminGetListResponses = {
    "200": ({
        contentType: "text/plain";
        data: CommentAdminGetListStatus200Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetListStatus200Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetListStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: CommentAdminGetListStatus400Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetListStatus400Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetListStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: CommentAdminGetListStatus401Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetListStatus401Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetListStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: CommentAdminGetListStatus403Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetListStatus403Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetListStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: CommentAdminGetListStatus404Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetListStatus404Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetListStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: CommentAdminGetListStatus500Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetListStatus500Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetListStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: CommentAdminGetListStatus501Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminGetListStatus501Json;
    } | {
        contentType: "text/json";
        data: CommentAdminGetListStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type CommentAdminGetListResponse = (CommentAdminGetListStatus200 | CommentAdminGetListStatus400 | CommentAdminGetListStatus401 | CommentAdminGetListStatus403 | CommentAdminGetListStatus404 | CommentAdminGetListStatus500 | CommentAdminGetListStatus501);
