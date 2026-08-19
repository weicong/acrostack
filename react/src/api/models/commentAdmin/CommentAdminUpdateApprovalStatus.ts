/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitAdminCommentsCommentApprovalDto } from '../volo/cmsKit/admin/comments/CommentApprovalDto'

export type CommentAdminUpdateApprovalStatusPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type CommentAdminUpdateApprovalStatusStatus200 = unknown;

export type CommentAdminUpdateApprovalStatusStatus204 = unknown;

export type CommentAdminUpdateApprovalStatusStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus400 = (CommentAdminUpdateApprovalStatusStatus400Plain | CommentAdminUpdateApprovalStatusStatus400Json | CommentAdminUpdateApprovalStatusStatus400Json2);

export type CommentAdminUpdateApprovalStatusStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus401 = (CommentAdminUpdateApprovalStatusStatus401Plain | CommentAdminUpdateApprovalStatusStatus401Json | CommentAdminUpdateApprovalStatusStatus401Json2);

export type CommentAdminUpdateApprovalStatusStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus403 = (CommentAdminUpdateApprovalStatusStatus403Plain | CommentAdminUpdateApprovalStatusStatus403Json | CommentAdminUpdateApprovalStatusStatus403Json2);

export type CommentAdminUpdateApprovalStatusStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus404 = (CommentAdminUpdateApprovalStatusStatus404Plain | CommentAdminUpdateApprovalStatusStatus404Json | CommentAdminUpdateApprovalStatusStatus404Json2);

export type CommentAdminUpdateApprovalStatusStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus500 = (CommentAdminUpdateApprovalStatusStatus500Plain | CommentAdminUpdateApprovalStatusStatus500Json | CommentAdminUpdateApprovalStatusStatus500Json2);

export type CommentAdminUpdateApprovalStatusStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateApprovalStatusStatus501 = (CommentAdminUpdateApprovalStatusStatus501Plain | CommentAdminUpdateApprovalStatusStatus501Json | CommentAdminUpdateApprovalStatusStatus501Json2);

export type CommentAdminUpdateApprovalStatusBodyJson = VoloCmsKitAdminCommentsCommentApprovalDto | undefined;

export type CommentAdminUpdateApprovalStatusBodyJson2 = VoloCmsKitAdminCommentsCommentApprovalDto | undefined;

export type CommentAdminUpdateApprovalStatusBodyJson3 = VoloCmsKitAdminCommentsCommentApprovalDto | undefined;

export type CommentAdminUpdateApprovalStatusBody = (CommentAdminUpdateApprovalStatusBodyJson | CommentAdminUpdateApprovalStatusBodyJson2 | CommentAdminUpdateApprovalStatusBodyJson3);

export type CommentAdminUpdateApprovalStatusOptions = {
    body: CommentAdminUpdateApprovalStatusBody;
    path: CommentAdminUpdateApprovalStatusPath;
    query?: never;
    headers?: never;
};

export type CommentAdminUpdateApprovalStatusResponses = {
    "200": CommentAdminUpdateApprovalStatusStatus200;
    "204": CommentAdminUpdateApprovalStatusStatus204;
    "400": ({
        contentType: "text/plain";
        data: CommentAdminUpdateApprovalStatusStatus400Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminUpdateApprovalStatusStatus400Json;
    } | {
        contentType: "text/json";
        data: CommentAdminUpdateApprovalStatusStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: CommentAdminUpdateApprovalStatusStatus401Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminUpdateApprovalStatusStatus401Json;
    } | {
        contentType: "text/json";
        data: CommentAdminUpdateApprovalStatusStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: CommentAdminUpdateApprovalStatusStatus403Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminUpdateApprovalStatusStatus403Json;
    } | {
        contentType: "text/json";
        data: CommentAdminUpdateApprovalStatusStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: CommentAdminUpdateApprovalStatusStatus404Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminUpdateApprovalStatusStatus404Json;
    } | {
        contentType: "text/json";
        data: CommentAdminUpdateApprovalStatusStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: CommentAdminUpdateApprovalStatusStatus500Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminUpdateApprovalStatusStatus500Json;
    } | {
        contentType: "text/json";
        data: CommentAdminUpdateApprovalStatusStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: CommentAdminUpdateApprovalStatusStatus501Plain;
    } | {
        contentType: "application/json";
        data: CommentAdminUpdateApprovalStatusStatus501Json;
    } | {
        contentType: "text/json";
        data: CommentAdminUpdateApprovalStatusStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type CommentAdminUpdateApprovalStatusResponse = (CommentAdminUpdateApprovalStatusStatus200 | CommentAdminUpdateApprovalStatusStatus204 | CommentAdminUpdateApprovalStatusStatus400 | CommentAdminUpdateApprovalStatusStatus401 | CommentAdminUpdateApprovalStatusStatus403 | CommentAdminUpdateApprovalStatusStatus404 | CommentAdminUpdateApprovalStatusStatus500 | CommentAdminUpdateApprovalStatusStatus501);
