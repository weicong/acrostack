/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type ConversationDeleteMessagePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    messageId: string;
};

export type ConversationDeleteMessageStatus200 = unknown;

export type ConversationDeleteMessageStatus204 = unknown;

export type ConversationDeleteMessageStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus400 = (ConversationDeleteMessageStatus400Plain | ConversationDeleteMessageStatus400Json | ConversationDeleteMessageStatus400Json2);

export type ConversationDeleteMessageStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus401 = (ConversationDeleteMessageStatus401Plain | ConversationDeleteMessageStatus401Json | ConversationDeleteMessageStatus401Json2);

export type ConversationDeleteMessageStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus403 = (ConversationDeleteMessageStatus403Plain | ConversationDeleteMessageStatus403Json | ConversationDeleteMessageStatus403Json2);

export type ConversationDeleteMessageStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus404 = (ConversationDeleteMessageStatus404Plain | ConversationDeleteMessageStatus404Json | ConversationDeleteMessageStatus404Json2);

export type ConversationDeleteMessageStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus500 = (ConversationDeleteMessageStatus500Plain | ConversationDeleteMessageStatus500Json | ConversationDeleteMessageStatus500Json2);

export type ConversationDeleteMessageStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDeleteMessageStatus501 = (ConversationDeleteMessageStatus501Plain | ConversationDeleteMessageStatus501Json | ConversationDeleteMessageStatus501Json2);

export type ConversationDeleteMessageOptions = {
    body?: never;
    path: ConversationDeleteMessagePath;
    query?: never;
    headers?: never;
};

export type ConversationDeleteMessageResponses = {
    "200": ConversationDeleteMessageStatus200;
    "204": ConversationDeleteMessageStatus204;
    "400": ({
        contentType: "text/plain";
        data: ConversationDeleteMessageStatus400Plain;
    } | {
        contentType: "application/json";
        data: ConversationDeleteMessageStatus400Json;
    } | {
        contentType: "text/json";
        data: ConversationDeleteMessageStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: ConversationDeleteMessageStatus401Plain;
    } | {
        contentType: "application/json";
        data: ConversationDeleteMessageStatus401Json;
    } | {
        contentType: "text/json";
        data: ConversationDeleteMessageStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: ConversationDeleteMessageStatus403Plain;
    } | {
        contentType: "application/json";
        data: ConversationDeleteMessageStatus403Json;
    } | {
        contentType: "text/json";
        data: ConversationDeleteMessageStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: ConversationDeleteMessageStatus404Plain;
    } | {
        contentType: "application/json";
        data: ConversationDeleteMessageStatus404Json;
    } | {
        contentType: "text/json";
        data: ConversationDeleteMessageStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: ConversationDeleteMessageStatus500Plain;
    } | {
        contentType: "application/json";
        data: ConversationDeleteMessageStatus500Json;
    } | {
        contentType: "text/json";
        data: ConversationDeleteMessageStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: ConversationDeleteMessageStatus501Plain;
    } | {
        contentType: "application/json";
        data: ConversationDeleteMessageStatus501Json;
    } | {
        contentType: "text/json";
        data: ConversationDeleteMessageStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type ConversationDeleteMessageResponse = (ConversationDeleteMessageStatus200 | ConversationDeleteMessageStatus204 | ConversationDeleteMessageStatus400 | ConversationDeleteMessageStatus401 | ConversationDeleteMessageStatus403 | ConversationDeleteMessageStatus404 | ConversationDeleteMessageStatus500 | ConversationDeleteMessageStatus501);
