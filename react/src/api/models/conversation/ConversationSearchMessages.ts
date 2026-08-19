/* oxlint-disable */

import type { AcroStackChatSearchMessagesInput } from '../acroStack/chat/SearchMessagesInput'
import type { VoloAbpApplicationDtosPagedResultDto1AcroStackChatChatMessageDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/pagedResultDto1AcroStack/chat/chatMessageDtoAcroStack/ChatVersion1000CultureneutralPublicKeyTokennull'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type ConversationSearchMessagesStatus200Plain = VoloAbpApplicationDtosPagedResultDto1AcroStackChatChatMessageDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ConversationSearchMessagesStatus200Json = VoloAbpApplicationDtosPagedResultDto1AcroStackChatChatMessageDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ConversationSearchMessagesStatus200Json2 = VoloAbpApplicationDtosPagedResultDto1AcroStackChatChatMessageDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ConversationSearchMessagesStatus200 = (ConversationSearchMessagesStatus200Plain | ConversationSearchMessagesStatus200Json | ConversationSearchMessagesStatus200Json2);

export type ConversationSearchMessagesStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus400 = (ConversationSearchMessagesStatus400Plain | ConversationSearchMessagesStatus400Json | ConversationSearchMessagesStatus400Json2);

export type ConversationSearchMessagesStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus401 = (ConversationSearchMessagesStatus401Plain | ConversationSearchMessagesStatus401Json | ConversationSearchMessagesStatus401Json2);

export type ConversationSearchMessagesStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus403 = (ConversationSearchMessagesStatus403Plain | ConversationSearchMessagesStatus403Json | ConversationSearchMessagesStatus403Json2);

export type ConversationSearchMessagesStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus404 = (ConversationSearchMessagesStatus404Plain | ConversationSearchMessagesStatus404Json | ConversationSearchMessagesStatus404Json2);

export type ConversationSearchMessagesStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus500 = (ConversationSearchMessagesStatus500Plain | ConversationSearchMessagesStatus500Json | ConversationSearchMessagesStatus500Json2);

export type ConversationSearchMessagesStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSearchMessagesStatus501 = (ConversationSearchMessagesStatus501Plain | ConversationSearchMessagesStatus501Json | ConversationSearchMessagesStatus501Json2);

export type ConversationSearchMessagesBodyJson = AcroStackChatSearchMessagesInput | undefined;

export type ConversationSearchMessagesBodyJson2 = AcroStackChatSearchMessagesInput | undefined;

export type ConversationSearchMessagesBodyJson3 = AcroStackChatSearchMessagesInput | undefined;

export type ConversationSearchMessagesBody = (ConversationSearchMessagesBodyJson | ConversationSearchMessagesBodyJson2 | ConversationSearchMessagesBodyJson3);

export type ConversationSearchMessagesOptions = {
    body: ConversationSearchMessagesBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type ConversationSearchMessagesResponses = {
    "200": ({
        contentType: "text/plain";
        data: ConversationSearchMessagesStatus200Plain;
    } | {
        contentType: "application/json";
        data: ConversationSearchMessagesStatus200Json;
    } | {
        contentType: "text/json";
        data: ConversationSearchMessagesStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: ConversationSearchMessagesStatus400Plain;
    } | {
        contentType: "application/json";
        data: ConversationSearchMessagesStatus400Json;
    } | {
        contentType: "text/json";
        data: ConversationSearchMessagesStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: ConversationSearchMessagesStatus401Plain;
    } | {
        contentType: "application/json";
        data: ConversationSearchMessagesStatus401Json;
    } | {
        contentType: "text/json";
        data: ConversationSearchMessagesStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: ConversationSearchMessagesStatus403Plain;
    } | {
        contentType: "application/json";
        data: ConversationSearchMessagesStatus403Json;
    } | {
        contentType: "text/json";
        data: ConversationSearchMessagesStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: ConversationSearchMessagesStatus404Plain;
    } | {
        contentType: "application/json";
        data: ConversationSearchMessagesStatus404Json;
    } | {
        contentType: "text/json";
        data: ConversationSearchMessagesStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: ConversationSearchMessagesStatus500Plain;
    } | {
        contentType: "application/json";
        data: ConversationSearchMessagesStatus500Json;
    } | {
        contentType: "text/json";
        data: ConversationSearchMessagesStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: ConversationSearchMessagesStatus501Plain;
    } | {
        contentType: "application/json";
        data: ConversationSearchMessagesStatus501Json;
    } | {
        contentType: "text/json";
        data: ConversationSearchMessagesStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type ConversationSearchMessagesResponse = (ConversationSearchMessagesStatus200 | ConversationSearchMessagesStatus400 | ConversationSearchMessagesStatus401 | ConversationSearchMessagesStatus403 | ConversationSearchMessagesStatus404 | ConversationSearchMessagesStatus500 | ConversationSearchMessagesStatus501);
