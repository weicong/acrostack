/* oxlint-disable */

import type { VoloAbpAccountVerifyPasswordResetTokenInput } from '../volo/abp/account/VerifyPasswordResetTokenInput'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type AccountVerifyPasswordResetTokenStatus200Plain = boolean;

export type AccountVerifyPasswordResetTokenStatus200Json = boolean;

export type AccountVerifyPasswordResetTokenStatus200Json2 = boolean;

export type AccountVerifyPasswordResetTokenStatus200 = (AccountVerifyPasswordResetTokenStatus200Plain | AccountVerifyPasswordResetTokenStatus200Json | AccountVerifyPasswordResetTokenStatus200Json2);

export type AccountVerifyPasswordResetTokenStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus400 = (AccountVerifyPasswordResetTokenStatus400Plain | AccountVerifyPasswordResetTokenStatus400Json | AccountVerifyPasswordResetTokenStatus400Json2);

export type AccountVerifyPasswordResetTokenStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus401 = (AccountVerifyPasswordResetTokenStatus401Plain | AccountVerifyPasswordResetTokenStatus401Json | AccountVerifyPasswordResetTokenStatus401Json2);

export type AccountVerifyPasswordResetTokenStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus403 = (AccountVerifyPasswordResetTokenStatus403Plain | AccountVerifyPasswordResetTokenStatus403Json | AccountVerifyPasswordResetTokenStatus403Json2);

export type AccountVerifyPasswordResetTokenStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus404 = (AccountVerifyPasswordResetTokenStatus404Plain | AccountVerifyPasswordResetTokenStatus404Json | AccountVerifyPasswordResetTokenStatus404Json2);

export type AccountVerifyPasswordResetTokenStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus500 = (AccountVerifyPasswordResetTokenStatus500Plain | AccountVerifyPasswordResetTokenStatus500Json | AccountVerifyPasswordResetTokenStatus500Json2);

export type AccountVerifyPasswordResetTokenStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountVerifyPasswordResetTokenStatus501 = (AccountVerifyPasswordResetTokenStatus501Plain | AccountVerifyPasswordResetTokenStatus501Json | AccountVerifyPasswordResetTokenStatus501Json2);

export type AccountVerifyPasswordResetTokenBodyJson = VoloAbpAccountVerifyPasswordResetTokenInput | undefined;

export type AccountVerifyPasswordResetTokenBodyJson2 = VoloAbpAccountVerifyPasswordResetTokenInput | undefined;

export type AccountVerifyPasswordResetTokenBodyJson3 = VoloAbpAccountVerifyPasswordResetTokenInput | undefined;

export type AccountVerifyPasswordResetTokenBody = (AccountVerifyPasswordResetTokenBodyJson | AccountVerifyPasswordResetTokenBodyJson2 | AccountVerifyPasswordResetTokenBodyJson3);

export type AccountVerifyPasswordResetTokenOptions = {
    body: AccountVerifyPasswordResetTokenBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type AccountVerifyPasswordResetTokenResponses = {
    "200": ({
        contentType: "text/plain";
        data: AccountVerifyPasswordResetTokenStatus200Plain;
    } | {
        contentType: "application/json";
        data: AccountVerifyPasswordResetTokenStatus200Json;
    } | {
        contentType: "text/json";
        data: AccountVerifyPasswordResetTokenStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: AccountVerifyPasswordResetTokenStatus400Plain;
    } | {
        contentType: "application/json";
        data: AccountVerifyPasswordResetTokenStatus400Json;
    } | {
        contentType: "text/json";
        data: AccountVerifyPasswordResetTokenStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: AccountVerifyPasswordResetTokenStatus401Plain;
    } | {
        contentType: "application/json";
        data: AccountVerifyPasswordResetTokenStatus401Json;
    } | {
        contentType: "text/json";
        data: AccountVerifyPasswordResetTokenStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: AccountVerifyPasswordResetTokenStatus403Plain;
    } | {
        contentType: "application/json";
        data: AccountVerifyPasswordResetTokenStatus403Json;
    } | {
        contentType: "text/json";
        data: AccountVerifyPasswordResetTokenStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: AccountVerifyPasswordResetTokenStatus404Plain;
    } | {
        contentType: "application/json";
        data: AccountVerifyPasswordResetTokenStatus404Json;
    } | {
        contentType: "text/json";
        data: AccountVerifyPasswordResetTokenStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: AccountVerifyPasswordResetTokenStatus500Plain;
    } | {
        contentType: "application/json";
        data: AccountVerifyPasswordResetTokenStatus500Json;
    } | {
        contentType: "text/json";
        data: AccountVerifyPasswordResetTokenStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: AccountVerifyPasswordResetTokenStatus501Plain;
    } | {
        contentType: "application/json";
        data: AccountVerifyPasswordResetTokenStatus501Json;
    } | {
        contentType: "text/json";
        data: AccountVerifyPasswordResetTokenStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type AccountVerifyPasswordResetTokenResponse = (AccountVerifyPasswordResetTokenStatus200 | AccountVerifyPasswordResetTokenStatus400 | AccountVerifyPasswordResetTokenStatus401 | AccountVerifyPasswordResetTokenStatus403 | AccountVerifyPasswordResetTokenStatus404 | AccountVerifyPasswordResetTokenStatus500 | AccountVerifyPasswordResetTokenStatus501);
