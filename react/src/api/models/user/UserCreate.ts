/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloAbpIdentityIdentityUserCreateDto } from '../volo/abp/identity/IdentityUserCreateDto'
import type { VoloAbpIdentityIdentityUserDto } from '../volo/abp/identity/IdentityUserDto'

export type UserCreateStatus200Plain = VoloAbpIdentityIdentityUserDto;

export type UserCreateStatus200Json = VoloAbpIdentityIdentityUserDto;

export type UserCreateStatus200Json2 = VoloAbpIdentityIdentityUserDto;

export type UserCreateStatus200 = (UserCreateStatus200Plain | UserCreateStatus200Json | UserCreateStatus200Json2);

export type UserCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus400 = (UserCreateStatus400Plain | UserCreateStatus400Json | UserCreateStatus400Json2);

export type UserCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus401 = (UserCreateStatus401Plain | UserCreateStatus401Json | UserCreateStatus401Json2);

export type UserCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus403 = (UserCreateStatus403Plain | UserCreateStatus403Json | UserCreateStatus403Json2);

export type UserCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus404 = (UserCreateStatus404Plain | UserCreateStatus404Json | UserCreateStatus404Json2);

export type UserCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus500 = (UserCreateStatus500Plain | UserCreateStatus500Json | UserCreateStatus500Json2);

export type UserCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserCreateStatus501 = (UserCreateStatus501Plain | UserCreateStatus501Json | UserCreateStatus501Json2);

export type UserCreateBodyJson = Omit<NonNullable<VoloAbpIdentityIdentityUserCreateDto>, "extraProperties"> | undefined;

export type UserCreateBodyJson2 = Omit<NonNullable<VoloAbpIdentityIdentityUserCreateDto>, "extraProperties"> | undefined;

export type UserCreateBodyJson3 = Omit<NonNullable<VoloAbpIdentityIdentityUserCreateDto>, "extraProperties"> | undefined;

export type UserCreateBody = (UserCreateBodyJson | UserCreateBodyJson2 | UserCreateBodyJson3);

export type UserCreateOptions = {
    body: UserCreateBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type UserCreateResponses = {
    "200": ({
        contentType: "text/plain";
        data: UserCreateStatus200Plain;
    } | {
        contentType: "application/json";
        data: UserCreateStatus200Json;
    } | {
        contentType: "text/json";
        data: UserCreateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: UserCreateStatus400Plain;
    } | {
        contentType: "application/json";
        data: UserCreateStatus400Json;
    } | {
        contentType: "text/json";
        data: UserCreateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: UserCreateStatus401Plain;
    } | {
        contentType: "application/json";
        data: UserCreateStatus401Json;
    } | {
        contentType: "text/json";
        data: UserCreateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: UserCreateStatus403Plain;
    } | {
        contentType: "application/json";
        data: UserCreateStatus403Json;
    } | {
        contentType: "text/json";
        data: UserCreateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: UserCreateStatus404Plain;
    } | {
        contentType: "application/json";
        data: UserCreateStatus404Json;
    } | {
        contentType: "text/json";
        data: UserCreateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: UserCreateStatus500Plain;
    } | {
        contentType: "application/json";
        data: UserCreateStatus500Json;
    } | {
        contentType: "text/json";
        data: UserCreateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: UserCreateStatus501Plain;
    } | {
        contentType: "application/json";
        data: UserCreateStatus501Json;
    } | {
        contentType: "text/json";
        data: UserCreateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type UserCreateResponse = (UserCreateStatus200 | UserCreateStatus400 | UserCreateStatus401 | UserCreateStatus403 | UserCreateStatus404 | UserCreateStatus500 | UserCreateStatus501);
