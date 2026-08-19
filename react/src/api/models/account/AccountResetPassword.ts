/* oxlint-disable */

import type { VoloAbpAccountResetPasswordDto } from '../volo/abp/account/ResetPasswordDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type AccountResetPasswordStatus200 = unknown;

export type AccountResetPasswordStatus204 = unknown;

export type AccountResetPasswordStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus400 = (AccountResetPasswordStatus400Plain | AccountResetPasswordStatus400Json | AccountResetPasswordStatus400Json2);

export type AccountResetPasswordStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus401 = (AccountResetPasswordStatus401Plain | AccountResetPasswordStatus401Json | AccountResetPasswordStatus401Json2);

export type AccountResetPasswordStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus403 = (AccountResetPasswordStatus403Plain | AccountResetPasswordStatus403Json | AccountResetPasswordStatus403Json2);

export type AccountResetPasswordStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus404 = (AccountResetPasswordStatus404Plain | AccountResetPasswordStatus404Json | AccountResetPasswordStatus404Json2);

export type AccountResetPasswordStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus500 = (AccountResetPasswordStatus500Plain | AccountResetPasswordStatus500Json | AccountResetPasswordStatus500Json2);

export type AccountResetPasswordStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountResetPasswordStatus501 = (AccountResetPasswordStatus501Plain | AccountResetPasswordStatus501Json | AccountResetPasswordStatus501Json2);

export type AccountResetPasswordBodyJson = VoloAbpAccountResetPasswordDto | undefined;

export type AccountResetPasswordBodyJson2 = VoloAbpAccountResetPasswordDto | undefined;

export type AccountResetPasswordBodyJson3 = VoloAbpAccountResetPasswordDto | undefined;

export type AccountResetPasswordBody = (AccountResetPasswordBodyJson | AccountResetPasswordBodyJson2 | AccountResetPasswordBodyJson3);

export type AccountResetPasswordOptions = {
    body: AccountResetPasswordBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type AccountResetPasswordResponses = {
    "200": AccountResetPasswordStatus200;
    "204": AccountResetPasswordStatus204;
    "400": ({
        contentType: "text/plain";
        data: AccountResetPasswordStatus400Plain;
    } | {
        contentType: "application/json";
        data: AccountResetPasswordStatus400Json;
    } | {
        contentType: "text/json";
        data: AccountResetPasswordStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: AccountResetPasswordStatus401Plain;
    } | {
        contentType: "application/json";
        data: AccountResetPasswordStatus401Json;
    } | {
        contentType: "text/json";
        data: AccountResetPasswordStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: AccountResetPasswordStatus403Plain;
    } | {
        contentType: "application/json";
        data: AccountResetPasswordStatus403Json;
    } | {
        contentType: "text/json";
        data: AccountResetPasswordStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: AccountResetPasswordStatus404Plain;
    } | {
        contentType: "application/json";
        data: AccountResetPasswordStatus404Json;
    } | {
        contentType: "text/json";
        data: AccountResetPasswordStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: AccountResetPasswordStatus500Plain;
    } | {
        contentType: "application/json";
        data: AccountResetPasswordStatus500Json;
    } | {
        contentType: "text/json";
        data: AccountResetPasswordStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: AccountResetPasswordStatus501Plain;
    } | {
        contentType: "application/json";
        data: AccountResetPasswordStatus501Json;
    } | {
        contentType: "text/json";
        data: AccountResetPasswordStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type AccountResetPasswordResponse = (AccountResetPasswordStatus200 | AccountResetPasswordStatus204 | AccountResetPasswordStatus400 | AccountResetPasswordStatus401 | AccountResetPasswordStatus403 | AccountResetPasswordStatus404 | AccountResetPasswordStatus500 | AccountResetPasswordStatus501);
