/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type ChatBlockUnblockUserPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    blockedUserId: string;
};

export type ChatBlockUnblockUserStatus200 = unknown;

export type ChatBlockUnblockUserStatus204 = unknown;

export type ChatBlockUnblockUserStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus400 = (ChatBlockUnblockUserStatus400Plain | ChatBlockUnblockUserStatus400Json | ChatBlockUnblockUserStatus400Json2);

export type ChatBlockUnblockUserStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus401 = (ChatBlockUnblockUserStatus401Plain | ChatBlockUnblockUserStatus401Json | ChatBlockUnblockUserStatus401Json2);

export type ChatBlockUnblockUserStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus403 = (ChatBlockUnblockUserStatus403Plain | ChatBlockUnblockUserStatus403Json | ChatBlockUnblockUserStatus403Json2);

export type ChatBlockUnblockUserStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus404 = (ChatBlockUnblockUserStatus404Plain | ChatBlockUnblockUserStatus404Json | ChatBlockUnblockUserStatus404Json2);

export type ChatBlockUnblockUserStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus500 = (ChatBlockUnblockUserStatus500Plain | ChatBlockUnblockUserStatus500Json | ChatBlockUnblockUserStatus500Json2);

export type ChatBlockUnblockUserStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockUnblockUserStatus501 = (ChatBlockUnblockUserStatus501Plain | ChatBlockUnblockUserStatus501Json | ChatBlockUnblockUserStatus501Json2);

export type ChatBlockUnblockUserOptions = {
    body?: never;
    path: ChatBlockUnblockUserPath;
    query?: never;
    headers?: never;
};

export type ChatBlockUnblockUserResponses = {
    "200": ChatBlockUnblockUserStatus200;
    "204": ChatBlockUnblockUserStatus204;
    "400": ({
        contentType: "text/plain";
        data: ChatBlockUnblockUserStatus400Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockUnblockUserStatus400Json;
    } | {
        contentType: "text/json";
        data: ChatBlockUnblockUserStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: ChatBlockUnblockUserStatus401Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockUnblockUserStatus401Json;
    } | {
        contentType: "text/json";
        data: ChatBlockUnblockUserStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: ChatBlockUnblockUserStatus403Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockUnblockUserStatus403Json;
    } | {
        contentType: "text/json";
        data: ChatBlockUnblockUserStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: ChatBlockUnblockUserStatus404Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockUnblockUserStatus404Json;
    } | {
        contentType: "text/json";
        data: ChatBlockUnblockUserStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: ChatBlockUnblockUserStatus500Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockUnblockUserStatus500Json;
    } | {
        contentType: "text/json";
        data: ChatBlockUnblockUserStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: ChatBlockUnblockUserStatus501Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockUnblockUserStatus501Json;
    } | {
        contentType: "text/json";
        data: ChatBlockUnblockUserStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type ChatBlockUnblockUserResponse = (ChatBlockUnblockUserStatus200 | ChatBlockUnblockUserStatus204 | ChatBlockUnblockUserStatus400 | ChatBlockUnblockUserStatus401 | ChatBlockUnblockUserStatus403 | ChatBlockUnblockUserStatus404 | ChatBlockUnblockUserStatus500 | ChatBlockUnblockUserStatus501);
