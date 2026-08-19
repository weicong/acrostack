/* oxlint-disable */

import type { VoloAbpAccountSendPasswordResetCodeDto } from '../volo/abp/account/SendPasswordResetCodeDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type AccountSendPasswordResetCodeStatus200 = unknown;

export type AccountSendPasswordResetCodeStatus204 = unknown;

export type AccountSendPasswordResetCodeStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus400 = (AccountSendPasswordResetCodeStatus400Plain | AccountSendPasswordResetCodeStatus400Json | AccountSendPasswordResetCodeStatus400Json2);

export type AccountSendPasswordResetCodeStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus401 = (AccountSendPasswordResetCodeStatus401Plain | AccountSendPasswordResetCodeStatus401Json | AccountSendPasswordResetCodeStatus401Json2);

export type AccountSendPasswordResetCodeStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus403 = (AccountSendPasswordResetCodeStatus403Plain | AccountSendPasswordResetCodeStatus403Json | AccountSendPasswordResetCodeStatus403Json2);

export type AccountSendPasswordResetCodeStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus404 = (AccountSendPasswordResetCodeStatus404Plain | AccountSendPasswordResetCodeStatus404Json | AccountSendPasswordResetCodeStatus404Json2);

export type AccountSendPasswordResetCodeStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus500 = (AccountSendPasswordResetCodeStatus500Plain | AccountSendPasswordResetCodeStatus500Json | AccountSendPasswordResetCodeStatus500Json2);

export type AccountSendPasswordResetCodeStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountSendPasswordResetCodeStatus501 = (AccountSendPasswordResetCodeStatus501Plain | AccountSendPasswordResetCodeStatus501Json | AccountSendPasswordResetCodeStatus501Json2);

export type AccountSendPasswordResetCodeBodyJson = VoloAbpAccountSendPasswordResetCodeDto | undefined;

export type AccountSendPasswordResetCodeBodyJson2 = VoloAbpAccountSendPasswordResetCodeDto | undefined;

export type AccountSendPasswordResetCodeBodyJson3 = VoloAbpAccountSendPasswordResetCodeDto | undefined;

export type AccountSendPasswordResetCodeBody = (AccountSendPasswordResetCodeBodyJson | AccountSendPasswordResetCodeBodyJson2 | AccountSendPasswordResetCodeBodyJson3);

export type AccountSendPasswordResetCodeOptions = {
    body: AccountSendPasswordResetCodeBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type AccountSendPasswordResetCodeResponses = {
    "200": AccountSendPasswordResetCodeStatus200;
    "204": AccountSendPasswordResetCodeStatus204;
    "400": ({
        contentType: "text/plain";
        data: AccountSendPasswordResetCodeStatus400Plain;
    } | {
        contentType: "application/json";
        data: AccountSendPasswordResetCodeStatus400Json;
    } | {
        contentType: "text/json";
        data: AccountSendPasswordResetCodeStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: AccountSendPasswordResetCodeStatus401Plain;
    } | {
        contentType: "application/json";
        data: AccountSendPasswordResetCodeStatus401Json;
    } | {
        contentType: "text/json";
        data: AccountSendPasswordResetCodeStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: AccountSendPasswordResetCodeStatus403Plain;
    } | {
        contentType: "application/json";
        data: AccountSendPasswordResetCodeStatus403Json;
    } | {
        contentType: "text/json";
        data: AccountSendPasswordResetCodeStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: AccountSendPasswordResetCodeStatus404Plain;
    } | {
        contentType: "application/json";
        data: AccountSendPasswordResetCodeStatus404Json;
    } | {
        contentType: "text/json";
        data: AccountSendPasswordResetCodeStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: AccountSendPasswordResetCodeStatus500Plain;
    } | {
        contentType: "application/json";
        data: AccountSendPasswordResetCodeStatus500Json;
    } | {
        contentType: "text/json";
        data: AccountSendPasswordResetCodeStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: AccountSendPasswordResetCodeStatus501Plain;
    } | {
        contentType: "application/json";
        data: AccountSendPasswordResetCodeStatus501Json;
    } | {
        contentType: "text/json";
        data: AccountSendPasswordResetCodeStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type AccountSendPasswordResetCodeResponse = (AccountSendPasswordResetCodeStatus200 | AccountSendPasswordResetCodeStatus204 | AccountSendPasswordResetCodeStatus400 | AccountSendPasswordResetCodeStatus401 | AccountSendPasswordResetCodeStatus403 | AccountSendPasswordResetCodeStatus404 | AccountSendPasswordResetCodeStatus500 | AccountSendPasswordResetCodeStatus501);
