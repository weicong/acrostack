/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type ChatBlockIsUserBlockedQuery = {
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    userId?: string;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    targetUserId?: string;
};

export type ChatBlockIsUserBlockedStatus200Plain = boolean;

export type ChatBlockIsUserBlockedStatus200Json = boolean;

export type ChatBlockIsUserBlockedStatus200Json2 = boolean;

export type ChatBlockIsUserBlockedStatus200 = (ChatBlockIsUserBlockedStatus200Plain | ChatBlockIsUserBlockedStatus200Json | ChatBlockIsUserBlockedStatus200Json2);

export type ChatBlockIsUserBlockedStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus400 = (ChatBlockIsUserBlockedStatus400Plain | ChatBlockIsUserBlockedStatus400Json | ChatBlockIsUserBlockedStatus400Json2);

export type ChatBlockIsUserBlockedStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus401 = (ChatBlockIsUserBlockedStatus401Plain | ChatBlockIsUserBlockedStatus401Json | ChatBlockIsUserBlockedStatus401Json2);

export type ChatBlockIsUserBlockedStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus403 = (ChatBlockIsUserBlockedStatus403Plain | ChatBlockIsUserBlockedStatus403Json | ChatBlockIsUserBlockedStatus403Json2);

export type ChatBlockIsUserBlockedStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus404 = (ChatBlockIsUserBlockedStatus404Plain | ChatBlockIsUserBlockedStatus404Json | ChatBlockIsUserBlockedStatus404Json2);

export type ChatBlockIsUserBlockedStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus500 = (ChatBlockIsUserBlockedStatus500Plain | ChatBlockIsUserBlockedStatus500Json | ChatBlockIsUserBlockedStatus500Json2);

export type ChatBlockIsUserBlockedStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockIsUserBlockedStatus501 = (ChatBlockIsUserBlockedStatus501Plain | ChatBlockIsUserBlockedStatus501Json | ChatBlockIsUserBlockedStatus501Json2);

export type ChatBlockIsUserBlockedOptions = {
    body?: never;
    path?: never;
    query?: ChatBlockIsUserBlockedQuery;
    headers?: never;
};

export type ChatBlockIsUserBlockedResponses = {
    "200": ({
        contentType: "text/plain";
        data: ChatBlockIsUserBlockedStatus200Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockIsUserBlockedStatus200Json;
    } | {
        contentType: "text/json";
        data: ChatBlockIsUserBlockedStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: ChatBlockIsUserBlockedStatus400Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockIsUserBlockedStatus400Json;
    } | {
        contentType: "text/json";
        data: ChatBlockIsUserBlockedStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: ChatBlockIsUserBlockedStatus401Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockIsUserBlockedStatus401Json;
    } | {
        contentType: "text/json";
        data: ChatBlockIsUserBlockedStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: ChatBlockIsUserBlockedStatus403Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockIsUserBlockedStatus403Json;
    } | {
        contentType: "text/json";
        data: ChatBlockIsUserBlockedStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: ChatBlockIsUserBlockedStatus404Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockIsUserBlockedStatus404Json;
    } | {
        contentType: "text/json";
        data: ChatBlockIsUserBlockedStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: ChatBlockIsUserBlockedStatus500Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockIsUserBlockedStatus500Json;
    } | {
        contentType: "text/json";
        data: ChatBlockIsUserBlockedStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: ChatBlockIsUserBlockedStatus501Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockIsUserBlockedStatus501Json;
    } | {
        contentType: "text/json";
        data: ChatBlockIsUserBlockedStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type ChatBlockIsUserBlockedResponse = (ChatBlockIsUserBlockedStatus200 | ChatBlockIsUserBlockedStatus400 | ChatBlockIsUserBlockedStatus401 | ChatBlockIsUserBlockedStatus403 | ChatBlockIsUserBlockedStatus404 | ChatBlockIsUserBlockedStatus500 | ChatBlockIsUserBlockedStatus501);
