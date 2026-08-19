/* oxlint-disable */

import type { AcroStackChatChatMessageDto } from '../acroStack/chat/ChatMessageDto'
import type { AcroStackChatSendMessageInput } from '../acroStack/chat/SendMessageInput'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type ConversationSendMessageWithAttachmentStatus200Plain = AcroStackChatChatMessageDto;

export type ConversationSendMessageWithAttachmentStatus200Json = AcroStackChatChatMessageDto;

export type ConversationSendMessageWithAttachmentStatus200Json2 = AcroStackChatChatMessageDto;

export type ConversationSendMessageWithAttachmentStatus200 = (ConversationSendMessageWithAttachmentStatus200Plain | ConversationSendMessageWithAttachmentStatus200Json | ConversationSendMessageWithAttachmentStatus200Json2);

export type ConversationSendMessageWithAttachmentStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus400 = (ConversationSendMessageWithAttachmentStatus400Plain | ConversationSendMessageWithAttachmentStatus400Json | ConversationSendMessageWithAttachmentStatus400Json2);

export type ConversationSendMessageWithAttachmentStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus401 = (ConversationSendMessageWithAttachmentStatus401Plain | ConversationSendMessageWithAttachmentStatus401Json | ConversationSendMessageWithAttachmentStatus401Json2);

export type ConversationSendMessageWithAttachmentStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus403 = (ConversationSendMessageWithAttachmentStatus403Plain | ConversationSendMessageWithAttachmentStatus403Json | ConversationSendMessageWithAttachmentStatus403Json2);

export type ConversationSendMessageWithAttachmentStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus404 = (ConversationSendMessageWithAttachmentStatus404Plain | ConversationSendMessageWithAttachmentStatus404Json | ConversationSendMessageWithAttachmentStatus404Json2);

export type ConversationSendMessageWithAttachmentStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus500 = (ConversationSendMessageWithAttachmentStatus500Plain | ConversationSendMessageWithAttachmentStatus500Json | ConversationSendMessageWithAttachmentStatus500Json2);

export type ConversationSendMessageWithAttachmentStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationSendMessageWithAttachmentStatus501 = (ConversationSendMessageWithAttachmentStatus501Plain | ConversationSendMessageWithAttachmentStatus501Json | ConversationSendMessageWithAttachmentStatus501Json2);

export type ConversationSendMessageWithAttachmentBodyJson = AcroStackChatSendMessageInput | undefined;

export type ConversationSendMessageWithAttachmentBodyJson2 = AcroStackChatSendMessageInput | undefined;

export type ConversationSendMessageWithAttachmentBodyJson3 = AcroStackChatSendMessageInput | undefined;

export type ConversationSendMessageWithAttachmentBody = (ConversationSendMessageWithAttachmentBodyJson | ConversationSendMessageWithAttachmentBodyJson2 | ConversationSendMessageWithAttachmentBodyJson3);

export type ConversationSendMessageWithAttachmentOptions = {
    body: ConversationSendMessageWithAttachmentBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type ConversationSendMessageWithAttachmentResponses = {
    "200": ({
        contentType: "text/plain";
        data: ConversationSendMessageWithAttachmentStatus200Plain;
    } | {
        contentType: "application/json";
        data: ConversationSendMessageWithAttachmentStatus200Json;
    } | {
        contentType: "text/json";
        data: ConversationSendMessageWithAttachmentStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: ConversationSendMessageWithAttachmentStatus400Plain;
    } | {
        contentType: "application/json";
        data: ConversationSendMessageWithAttachmentStatus400Json;
    } | {
        contentType: "text/json";
        data: ConversationSendMessageWithAttachmentStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: ConversationSendMessageWithAttachmentStatus401Plain;
    } | {
        contentType: "application/json";
        data: ConversationSendMessageWithAttachmentStatus401Json;
    } | {
        contentType: "text/json";
        data: ConversationSendMessageWithAttachmentStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: ConversationSendMessageWithAttachmentStatus403Plain;
    } | {
        contentType: "application/json";
        data: ConversationSendMessageWithAttachmentStatus403Json;
    } | {
        contentType: "text/json";
        data: ConversationSendMessageWithAttachmentStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: ConversationSendMessageWithAttachmentStatus404Plain;
    } | {
        contentType: "application/json";
        data: ConversationSendMessageWithAttachmentStatus404Json;
    } | {
        contentType: "text/json";
        data: ConversationSendMessageWithAttachmentStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: ConversationSendMessageWithAttachmentStatus500Plain;
    } | {
        contentType: "application/json";
        data: ConversationSendMessageWithAttachmentStatus500Json;
    } | {
        contentType: "text/json";
        data: ConversationSendMessageWithAttachmentStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: ConversationSendMessageWithAttachmentStatus501Plain;
    } | {
        contentType: "application/json";
        data: ConversationSendMessageWithAttachmentStatus501Json;
    } | {
        contentType: "text/json";
        data: ConversationSendMessageWithAttachmentStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type ConversationSendMessageWithAttachmentResponse = (ConversationSendMessageWithAttachmentStatus200 | ConversationSendMessageWithAttachmentStatus400 | ConversationSendMessageWithAttachmentStatus401 | ConversationSendMessageWithAttachmentStatus403 | ConversationSendMessageWithAttachmentStatus404 | ConversationSendMessageWithAttachmentStatus500 | ConversationSendMessageWithAttachmentStatus501);
