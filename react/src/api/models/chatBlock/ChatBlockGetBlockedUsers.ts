/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackChatBlockedUserDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/listResultDto1AcroStack/chat/blockedUserDtoAcroStack/ChatVersion1000CultureneutralPublicKeyTokennull'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type ChatBlockGetBlockedUsersStatus200Plain = VoloAbpApplicationDtosListResultDto1AcroStackChatBlockedUserDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ChatBlockGetBlockedUsersStatus200Json = VoloAbpApplicationDtosListResultDto1AcroStackChatBlockedUserDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ChatBlockGetBlockedUsersStatus200Json2 = VoloAbpApplicationDtosListResultDto1AcroStackChatBlockedUserDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ChatBlockGetBlockedUsersStatus200 = (ChatBlockGetBlockedUsersStatus200Plain | ChatBlockGetBlockedUsersStatus200Json | ChatBlockGetBlockedUsersStatus200Json2);

export type ChatBlockGetBlockedUsersStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus400 = (ChatBlockGetBlockedUsersStatus400Plain | ChatBlockGetBlockedUsersStatus400Json | ChatBlockGetBlockedUsersStatus400Json2);

export type ChatBlockGetBlockedUsersStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus401 = (ChatBlockGetBlockedUsersStatus401Plain | ChatBlockGetBlockedUsersStatus401Json | ChatBlockGetBlockedUsersStatus401Json2);

export type ChatBlockGetBlockedUsersStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus403 = (ChatBlockGetBlockedUsersStatus403Plain | ChatBlockGetBlockedUsersStatus403Json | ChatBlockGetBlockedUsersStatus403Json2);

export type ChatBlockGetBlockedUsersStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus404 = (ChatBlockGetBlockedUsersStatus404Plain | ChatBlockGetBlockedUsersStatus404Json | ChatBlockGetBlockedUsersStatus404Json2);

export type ChatBlockGetBlockedUsersStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus500 = (ChatBlockGetBlockedUsersStatus500Plain | ChatBlockGetBlockedUsersStatus500Json | ChatBlockGetBlockedUsersStatus500Json2);

export type ChatBlockGetBlockedUsersStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ChatBlockGetBlockedUsersStatus501 = (ChatBlockGetBlockedUsersStatus501Plain | ChatBlockGetBlockedUsersStatus501Json | ChatBlockGetBlockedUsersStatus501Json2);

export type ChatBlockGetBlockedUsersOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type ChatBlockGetBlockedUsersResponses = {
    "200": ({
        contentType: "text/plain";
        data: ChatBlockGetBlockedUsersStatus200Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockGetBlockedUsersStatus200Json;
    } | {
        contentType: "text/json";
        data: ChatBlockGetBlockedUsersStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: ChatBlockGetBlockedUsersStatus400Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockGetBlockedUsersStatus400Json;
    } | {
        contentType: "text/json";
        data: ChatBlockGetBlockedUsersStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: ChatBlockGetBlockedUsersStatus401Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockGetBlockedUsersStatus401Json;
    } | {
        contentType: "text/json";
        data: ChatBlockGetBlockedUsersStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: ChatBlockGetBlockedUsersStatus403Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockGetBlockedUsersStatus403Json;
    } | {
        contentType: "text/json";
        data: ChatBlockGetBlockedUsersStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: ChatBlockGetBlockedUsersStatus404Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockGetBlockedUsersStatus404Json;
    } | {
        contentType: "text/json";
        data: ChatBlockGetBlockedUsersStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: ChatBlockGetBlockedUsersStatus500Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockGetBlockedUsersStatus500Json;
    } | {
        contentType: "text/json";
        data: ChatBlockGetBlockedUsersStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: ChatBlockGetBlockedUsersStatus501Plain;
    } | {
        contentType: "application/json";
        data: ChatBlockGetBlockedUsersStatus501Json;
    } | {
        contentType: "text/json";
        data: ChatBlockGetBlockedUsersStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type ChatBlockGetBlockedUsersResponse = (ChatBlockGetBlockedUsersStatus200 | ChatBlockGetBlockedUsersStatus400 | ChatBlockGetBlockedUsersStatus401 | ChatBlockGetBlockedUsersStatus403 | ChatBlockGetBlockedUsersStatus404 | ChatBlockGetBlockedUsersStatus500 | ChatBlockGetBlockedUsersStatus501);
