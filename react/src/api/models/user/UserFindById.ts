/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloAbpIdentityIdentityUserDto } from '../volo/abp/identity/IdentityUserDto'

export type UserFindByIdPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type UserFindByIdStatus200Plain = VoloAbpIdentityIdentityUserDto;

export type UserFindByIdStatus200Json = VoloAbpIdentityIdentityUserDto;

export type UserFindByIdStatus200Json2 = VoloAbpIdentityIdentityUserDto;

export type UserFindByIdStatus200 = (UserFindByIdStatus200Plain | UserFindByIdStatus200Json | UserFindByIdStatus200Json2);

export type UserFindByIdStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus400 = (UserFindByIdStatus400Plain | UserFindByIdStatus400Json | UserFindByIdStatus400Json2);

export type UserFindByIdStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus401 = (UserFindByIdStatus401Plain | UserFindByIdStatus401Json | UserFindByIdStatus401Json2);

export type UserFindByIdStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus403 = (UserFindByIdStatus403Plain | UserFindByIdStatus403Json | UserFindByIdStatus403Json2);

export type UserFindByIdStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus404 = (UserFindByIdStatus404Plain | UserFindByIdStatus404Json | UserFindByIdStatus404Json2);

export type UserFindByIdStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus500 = (UserFindByIdStatus500Plain | UserFindByIdStatus500Json | UserFindByIdStatus500Json2);

export type UserFindByIdStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserFindByIdStatus501 = (UserFindByIdStatus501Plain | UserFindByIdStatus501Json | UserFindByIdStatus501Json2);

export type UserFindByIdOptions = {
    body?: never;
    path: UserFindByIdPath;
    query?: never;
    headers?: never;
};

export type UserFindByIdResponses = {
    "200": ({
        contentType: "text/plain";
        data: UserFindByIdStatus200Plain;
    } | {
        contentType: "application/json";
        data: UserFindByIdStatus200Json;
    } | {
        contentType: "text/json";
        data: UserFindByIdStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: UserFindByIdStatus400Plain;
    } | {
        contentType: "application/json";
        data: UserFindByIdStatus400Json;
    } | {
        contentType: "text/json";
        data: UserFindByIdStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: UserFindByIdStatus401Plain;
    } | {
        contentType: "application/json";
        data: UserFindByIdStatus401Json;
    } | {
        contentType: "text/json";
        data: UserFindByIdStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: UserFindByIdStatus403Plain;
    } | {
        contentType: "application/json";
        data: UserFindByIdStatus403Json;
    } | {
        contentType: "text/json";
        data: UserFindByIdStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: UserFindByIdStatus404Plain;
    } | {
        contentType: "application/json";
        data: UserFindByIdStatus404Json;
    } | {
        contentType: "text/json";
        data: UserFindByIdStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: UserFindByIdStatus500Plain;
    } | {
        contentType: "application/json";
        data: UserFindByIdStatus500Json;
    } | {
        contentType: "text/json";
        data: UserFindByIdStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: UserFindByIdStatus501Plain;
    } | {
        contentType: "application/json";
        data: UserFindByIdStatus501Json;
    } | {
        contentType: "text/json";
        data: UserFindByIdStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type UserFindByIdResponse = (UserFindByIdStatus200 | UserFindByIdStatus400 | UserFindByIdStatus401 | UserFindByIdStatus403 | UserFindByIdStatus404 | UserFindByIdStatus500 | UserFindByIdStatus501);
