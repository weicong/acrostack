/* oxlint-disable */

import type { AcroStackChatChatMessageDto } from '../acroStack/chat/ChatMessageDto'
import type { AcroStackChatEditMessageInput } from '../acroStack/chat/EditMessageInput'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type ConversationEditMessagePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    messageId: string;
};

export type ConversationEditMessageStatus200Plain = AcroStackChatChatMessageDto;

export type ConversationEditMessageStatus200Json = AcroStackChatChatMessageDto;

export type ConversationEditMessageStatus200Json2 = AcroStackChatChatMessageDto;

export type ConversationEditMessageStatus200 = (ConversationEditMessageStatus200Plain | ConversationEditMessageStatus200Json | ConversationEditMessageStatus200Json2);

export type ConversationEditMessageStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus400 = (ConversationEditMessageStatus400Plain | ConversationEditMessageStatus400Json | ConversationEditMessageStatus400Json2);

export type ConversationEditMessageStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus401 = (ConversationEditMessageStatus401Plain | ConversationEditMessageStatus401Json | ConversationEditMessageStatus401Json2);

export type ConversationEditMessageStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus403 = (ConversationEditMessageStatus403Plain | ConversationEditMessageStatus403Json | ConversationEditMessageStatus403Json2);

export type ConversationEditMessageStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus404 = (ConversationEditMessageStatus404Plain | ConversationEditMessageStatus404Json | ConversationEditMessageStatus404Json2);

export type ConversationEditMessageStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus500 = (ConversationEditMessageStatus500Plain | ConversationEditMessageStatus500Json | ConversationEditMessageStatus500Json2);

export type ConversationEditMessageStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationEditMessageStatus501 = (ConversationEditMessageStatus501Plain | ConversationEditMessageStatus501Json | ConversationEditMessageStatus501Json2);

export type ConversationEditMessageBodyJson = AcroStackChatEditMessageInput | undefined;

export type ConversationEditMessageBodyJson2 = AcroStackChatEditMessageInput | undefined;

export type ConversationEditMessageBodyJson3 = AcroStackChatEditMessageInput | undefined;

export type ConversationEditMessageBody = (ConversationEditMessageBodyJson | ConversationEditMessageBodyJson2 | ConversationEditMessageBodyJson3);

export type ConversationEditMessageOptions = {
    body: ConversationEditMessageBody;
    path: ConversationEditMessagePath;
    query?: never;
    headers?: never;
};

export type ConversationEditMessageResponses = {
    "200": ({
        contentType: "text/plain";
        data: ConversationEditMessageStatus200Plain;
    } | {
        contentType: "application/json";
        data: ConversationEditMessageStatus200Json;
    } | {
        contentType: "text/json";
        data: ConversationEditMessageStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: ConversationEditMessageStatus400Plain;
    } | {
        contentType: "application/json";
        data: ConversationEditMessageStatus400Json;
    } | {
        contentType: "text/json";
        data: ConversationEditMessageStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: ConversationEditMessageStatus401Plain;
    } | {
        contentType: "application/json";
        data: ConversationEditMessageStatus401Json;
    } | {
        contentType: "text/json";
        data: ConversationEditMessageStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: ConversationEditMessageStatus403Plain;
    } | {
        contentType: "application/json";
        data: ConversationEditMessageStatus403Json;
    } | {
        contentType: "text/json";
        data: ConversationEditMessageStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: ConversationEditMessageStatus404Plain;
    } | {
        contentType: "application/json";
        data: ConversationEditMessageStatus404Json;
    } | {
        contentType: "text/json";
        data: ConversationEditMessageStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: ConversationEditMessageStatus500Plain;
    } | {
        contentType: "application/json";
        data: ConversationEditMessageStatus500Json;
    } | {
        contentType: "text/json";
        data: ConversationEditMessageStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: ConversationEditMessageStatus501Plain;
    } | {
        contentType: "application/json";
        data: ConversationEditMessageStatus501Json;
    } | {
        contentType: "text/json";
        data: ConversationEditMessageStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type ConversationEditMessageResponse = (ConversationEditMessageStatus200 | ConversationEditMessageStatus400 | ConversationEditMessageStatus401 | ConversationEditMessageStatus403 | ConversationEditMessageStatus404 | ConversationEditMessageStatus500 | ConversationEditMessageStatus501);
