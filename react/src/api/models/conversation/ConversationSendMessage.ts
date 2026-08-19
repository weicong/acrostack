/* oxlint-disable */

import type { AcroStackChatChatMessageDto } from '../acroStack/chat/ChatMessageDto'
import type { AcroStackChatSendMessageInput } from '../acroStack/chat/SendMessageInput'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type ConversationSendMessageStatus200Plain = AcroStackChatChatMessageDto;

export type ConversationSendMessageStatus200Json = AcroStackChatChatMessageDto;

export type ConversationSendMessageStatus200Json2 = AcroStackChatChatMessageDto;

export type ConversationSendMessageStatus200 = (ConversationSendMessageStatus200Plain | ConversationSendMessageStatus200Json | ConversationSendMessageStatus200Json2);

export type ConversationSendMessageStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus400 = (ConversationSendMessageStatus400Plain | ConversationSendMessageStatus400Json | ConversationSendMessageStatus400Json2);

export type ConversationSendMessageStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus401 = (ConversationSendMessageStatus401Plain | ConversationSendMessageStatus401Json | ConversationSendMessageStatus401Json2);

export type ConversationSendMessageStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus403 = (ConversationSendMessageStatus403Plain | ConversationSendMessageStatus403Json | ConversationSendMessageStatus403Json2);

export type ConversationSendMessageStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus404 = (ConversationSendMessageStatus404Plain | ConversationSendMessageStatus404Json | ConversationSendMessageStatus404Json2);

export type ConversationSendMessageStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus500 = (ConversationSendMessageStatus500Plain | ConversationSendMessageStatus500Json | ConversationSendMessageStatus500Json2);

export type ConversationSendMessageStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageStatus501 = (ConversationSendMessageStatus501Plain | ConversationSendMessageStatus501Json | ConversationSendMessageStatus501Json2);

export type ConversationSendMessageBodyJson = AcroStackChatSendMessageInput | undefined;

export type ConversationSendMessageBodyJson2 = AcroStackChatSendMessageInput | undefined;

export type ConversationSendMessageBodyJson3 = AcroStackChatSendMessageInput | undefined;

export type ConversationSendMessageBody = (ConversationSendMessageBodyJson | ConversationSendMessageBodyJson2 | ConversationSendMessageBodyJson3);

export type ConversationSendMessageOptions = {
    body: ConversationSendMessageBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type ConversationSendMessageResponses = {
    "200": ({
        contentType: "text/plain";
        data: ConversationSendMessageStatus200Plain;
    } | {
        contentType: "application/json";
        data: ConversationSendMessageStatus200Json;
    } | {
        contentType: "text/json";
        data: ConversationSendMessageStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: ConversationSendMessageStatus400Plain;
    } | {
        contentType: "application/json";
        data: ConversationSendMessageStatus400Json;
    } | {
        contentType: "text/json";
        data: ConversationSendMessageStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: ConversationSendMessageStatus401Plain;
    } | {
        contentType: "application/json";
        data: ConversationSendMessageStatus401Json;
    } | {
        contentType: "text/json";
        data: ConversationSendMessageStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: ConversationSendMessageStatus403Plain;
    } | {
        contentType: "application/json";
        data: ConversationSendMessageStatus403Json;
    } | {
        contentType: "text/json";
        data: ConversationSendMessageStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: ConversationSendMessageStatus404Plain;
    } | {
        contentType: "application/json";
        data: ConversationSendMessageStatus404Json;
    } | {
        contentType: "text/json";
        data: ConversationSendMessageStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: ConversationSendMessageStatus500Plain;
    } | {
        contentType: "application/json";
        data: ConversationSendMessageStatus500Json;
    } | {
        contentType: "text/json";
        data: ConversationSendMessageStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: ConversationSendMessageStatus501Plain;
    } | {
        contentType: "application/json";
        data: ConversationSendMessageStatus501Json;
    } | {
        contentType: "text/json";
        data: ConversationSendMessageStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type ConversationSendMessageResponse = (ConversationSendMessageStatus200 | ConversationSendMessageStatus400 | ConversationSendMessageStatus401 | ConversationSendMessageStatus403 | ConversationSendMessageStatus404 | ConversationSendMessageStatus500 | ConversationSendMessageStatus501);
