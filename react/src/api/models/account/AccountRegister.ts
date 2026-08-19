/* oxlint-disable */

import type { VoloAbpAccountRegisterDto } from '../volo/abp/account/RegisterDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloAbpIdentityIdentityUserDto } from '../volo/abp/identity/IdentityUserDto'

export type AccountRegisterStatus200Plain = VoloAbpIdentityIdentityUserDto;

export type AccountRegisterStatus200Json = VoloAbpIdentityIdentityUserDto;

export type AccountRegisterStatus200Json2 = VoloAbpIdentityIdentityUserDto;

export type AccountRegisterStatus200 = (AccountRegisterStatus200Plain | AccountRegisterStatus200Json | AccountRegisterStatus200Json2);

export type AccountRegisterStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus400 = (AccountRegisterStatus400Plain | AccountRegisterStatus400Json | AccountRegisterStatus400Json2);

export type AccountRegisterStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus401 = (AccountRegisterStatus401Plain | AccountRegisterStatus401Json | AccountRegisterStatus401Json2);

export type AccountRegisterStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus403 = (AccountRegisterStatus403Plain | AccountRegisterStatus403Json | AccountRegisterStatus403Json2);

export type AccountRegisterStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus404 = (AccountRegisterStatus404Plain | AccountRegisterStatus404Json | AccountRegisterStatus404Json2);

export type AccountRegisterStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus500 = (AccountRegisterStatus500Plain | AccountRegisterStatus500Json | AccountRegisterStatus500Json2);

export type AccountRegisterStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AccountRegisterStatus501 = (AccountRegisterStatus501Plain | AccountRegisterStatus501Json | AccountRegisterStatus501Json2);

export type AccountRegisterBodyJson = Omit<NonNullable<VoloAbpAccountRegisterDto>, "extraProperties"> | undefined;

export type AccountRegisterBodyJson2 = Omit<NonNullable<VoloAbpAccountRegisterDto>, "extraProperties"> | undefined;

export type AccountRegisterBodyJson3 = Omit<NonNullable<VoloAbpAccountRegisterDto>, "extraProperties"> | undefined;

export type AccountRegisterBody = (AccountRegisterBodyJson | AccountRegisterBodyJson2 | AccountRegisterBodyJson3);

export type AccountRegisterOptions = {
    body: AccountRegisterBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type AccountRegisterResponses = {
    "200": ({
        contentType: "text/plain";
        data: AccountRegisterStatus200Plain;
    } | {
        contentType: "application/json";
        data: AccountRegisterStatus200Json;
    } | {
        contentType: "text/json";
        data: AccountRegisterStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: AccountRegisterStatus400Plain;
    } | {
        contentType: "application/json";
        data: AccountRegisterStatus400Json;
    } | {
        contentType: "text/json";
        data: AccountRegisterStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: AccountRegisterStatus401Plain;
    } | {
        contentType: "application/json";
        data: AccountRegisterStatus401Json;
    } | {
        contentType: "text/json";
        data: AccountRegisterStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: AccountRegisterStatus403Plain;
    } | {
        contentType: "application/json";
        data: AccountRegisterStatus403Json;
    } | {
        contentType: "text/json";
        data: AccountRegisterStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: AccountRegisterStatus404Plain;
    } | {
        contentType: "application/json";
        data: AccountRegisterStatus404Json;
    } | {
        contentType: "text/json";
        data: AccountRegisterStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: AccountRegisterStatus500Plain;
    } | {
        contentType: "application/json";
        data: AccountRegisterStatus500Json;
    } | {
        contentType: "text/json";
        data: AccountRegisterStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: AccountRegisterStatus501Plain;
    } | {
        contentType: "application/json";
        data: AccountRegisterStatus501Json;
    } | {
        contentType: "text/json";
        data: AccountRegisterStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type AccountRegisterResponse = (AccountRegisterStatus200 | AccountRegisterStatus400 | AccountRegisterStatus401 | AccountRegisterStatus403 | AccountRegisterStatus404 | AccountRegisterStatus500 | AccountRegisterStatus501);
