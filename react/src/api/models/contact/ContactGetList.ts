/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackChatContactDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/listResultDto1AcroStack/chat/contactDtoAcroStack/ChatVersion1000CultureneutralPublicKeyTokennull'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type ContactGetListStatus200Plain = VoloAbpApplicationDtosListResultDto1AcroStackChatContactDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ContactGetListStatus200Json = VoloAbpApplicationDtosListResultDto1AcroStackChatContactDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ContactGetListStatus200Json2 = VoloAbpApplicationDtosListResultDto1AcroStackChatContactDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ContactGetListStatus200 = (ContactGetListStatus200Plain | ContactGetListStatus200Json | ContactGetListStatus200Json2);

export type ContactGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus400 = (ContactGetListStatus400Plain | ContactGetListStatus400Json | ContactGetListStatus400Json2);

export type ContactGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus401 = (ContactGetListStatus401Plain | ContactGetListStatus401Json | ContactGetListStatus401Json2);

export type ContactGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus403 = (ContactGetListStatus403Plain | ContactGetListStatus403Json | ContactGetListStatus403Json2);

export type ContactGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus404 = (ContactGetListStatus404Plain | ContactGetListStatus404Json | ContactGetListStatus404Json2);

export type ContactGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus500 = (ContactGetListStatus500Plain | ContactGetListStatus500Json | ContactGetListStatus500Json2);

export type ContactGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus501 = (ContactGetListStatus501Plain | ContactGetListStatus501Json | ContactGetListStatus501Json2);

export type ContactGetListOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type ContactGetListResponses = {
    "200": ({
        contentType: "text/plain";
        data: ContactGetListStatus200Plain;
    } | {
        contentType: "application/json";
        data: ContactGetListStatus200Json;
    } | {
        contentType: "text/json";
        data: ContactGetListStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: ContactGetListStatus400Plain;
    } | {
        contentType: "application/json";
        data: ContactGetListStatus400Json;
    } | {
        contentType: "text/json";
        data: ContactGetListStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: ContactGetListStatus401Plain;
    } | {
        contentType: "application/json";
        data: ContactGetListStatus401Json;
    } | {
        contentType: "text/json";
        data: ContactGetListStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: ContactGetListStatus403Plain;
    } | {
        contentType: "application/json";
        data: ContactGetListStatus403Json;
    } | {
        contentType: "text/json";
        data: ContactGetListStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: ContactGetListStatus404Plain;
    } | {
        contentType: "application/json";
        data: ContactGetListStatus404Json;
    } | {
        contentType: "text/json";
        data: ContactGetListStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: ContactGetListStatus500Plain;
    } | {
        contentType: "application/json";
        data: ContactGetListStatus500Json;
    } | {
        contentType: "text/json";
        data: ContactGetListStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: ContactGetListStatus501Plain;
    } | {
        contentType: "application/json";
        data: ContactGetListStatus501Json;
    } | {
        contentType: "text/json";
        data: ContactGetListStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type ContactGetListResponse = (ContactGetListStatus200 | ContactGetListStatus400 | ContactGetListStatus401 | ContactGetListStatus403 | ContactGetListStatus404 | ContactGetListStatus500 | ContactGetListStatus501);
