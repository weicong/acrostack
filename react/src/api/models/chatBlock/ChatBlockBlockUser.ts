/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type ChatBlockBlockUserPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    blockedUserId: string;
};

export type ChatBlockBlockUserStatus200 = unknown;

export type ChatBlockBlockUserStatus204 = unknown;

export type ChatBlockBlockUserStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus400 = (ChatBlockBlockUserStatus400Plain | ChatBlockBlockUserStatus400Json | ChatBlockBlockUserStatus400Json2);

export type ChatBlockBlockUserStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus401 = (ChatBlockBlockUserStatus401Plain | ChatBlockBlockUserStatus401Json | ChatBlockBlockUserStatus401Json2);

export type ChatBlockBlockUserStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus403 = (ChatBlockBlockUserStatus403Plain | ChatBlockBlockUserStatus403Json | ChatBlockBlockUserStatus403Json2);

export type ChatBlockBlockUserStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus404 = (ChatBlockBlockUserStatus404Plain | ChatBlockBlockUserStatus404Json | ChatBlockBlockUserStatus404Json2);

export type ChatBlockBlockUserStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus500 = (ChatBlockBlockUserStatus500Plain | ChatBlockBlockUserStatus500Json | ChatBlockBlockUserStatus500Json2);

export type ChatBlockBlockUserStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockBlockUserStatus501 = (ChatBlockBlockUserStatus501Plain | ChatBlockBlockUserStatus501Json | ChatBlockBlockUserStatus501Json2);

export type ChatBlockBlockUserOptions = {
    body?: never;
    path: ChatBlockBlockUserPath;
    query?: never;
    headers?: never;
};

export type ChatBlockBlockUserResponses = {
    "200": ChatBlockBlockUserStatus200;
    "204": ChatBlockBlockUserStatus204;
    "400": ({
        contentType: "text/plain";
        data: ChatBlockBlockUserStatus400Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockBlockUserStatus400Json;
    } | {
        contentType: "text/json";
        data: ChatBlockBlockUserStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: ChatBlockBlockUserStatus401Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockBlockUserStatus401Json;
    } | {
        contentType: "text/json";
        data: ChatBlockBlockUserStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: ChatBlockBlockUserStatus403Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockBlockUserStatus403Json;
    } | {
        contentType: "text/json";
        data: ChatBlockBlockUserStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: ChatBlockBlockUserStatus404Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockBlockUserStatus404Json;
    } | {
        contentType: "text/json";
        data: ChatBlockBlockUserStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: ChatBlockBlockUserStatus500Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockBlockUserStatus500Json;
    } | {
        contentType: "text/json";
        data: ChatBlockBlockUserStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: ChatBlockBlockUserStatus501Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockBlockUserStatus501Json;
    } | {
        contentType: "text/json";
        data: ChatBlockBlockUserStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type ChatBlockBlockUserResponse = (ChatBlockBlockUserStatus200 | ChatBlockBlockUserStatus204 | ChatBlockBlockUserStatus400 | ChatBlockBlockUserStatus401 | ChatBlockBlockUserStatus403 | ChatBlockBlockUserStatus404 | ChatBlockBlockUserStatus500 | ChatBlockBlockUserStatus501);
