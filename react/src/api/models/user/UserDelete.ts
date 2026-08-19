/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type UserDeletePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type UserDeleteStatus200 = unknown;

export type UserDeleteStatus204 = unknown;

export type UserDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus400 = (UserDeleteStatus400Plain | UserDeleteStatus400Json | UserDeleteStatus400Json2);

export type UserDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus401 = (UserDeleteStatus401Plain | UserDeleteStatus401Json | UserDeleteStatus401Json2);

export type UserDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus403 = (UserDeleteStatus403Plain | UserDeleteStatus403Json | UserDeleteStatus403Json2);

export type UserDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus404 = (UserDeleteStatus404Plain | UserDeleteStatus404Json | UserDeleteStatus404Json2);

export type UserDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus500 = (UserDeleteStatus500Plain | UserDeleteStatus500Json | UserDeleteStatus500Json2);

export type UserDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus501 = (UserDeleteStatus501Plain | UserDeleteStatus501Json | UserDeleteStatus501Json2);

export type UserDeleteOptions = {
    body?: never;
    path: UserDeletePath;
    query?: never;
    headers?: never;
};

export type UserDeleteResponses = {
    "200": UserDeleteStatus200;
    "204": UserDeleteStatus204;
    "400": ({
        contentType: "text/plain";
        data: UserDeleteStatus400Plain;
    } | {
        contentType: "application/json";
        data: UserDeleteStatus400Json;
    } | {
        contentType: "text/json";
        data: UserDeleteStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: UserDeleteStatus401Plain;
    } | {
        contentType: "application/json";
        data: UserDeleteStatus401Json;
    } | {
        contentType: "text/json";
        data: UserDeleteStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: UserDeleteStatus403Plain;
    } | {
        contentType: "application/json";
        data: UserDeleteStatus403Json;
    } | {
        contentType: "text/json";
        data: UserDeleteStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: UserDeleteStatus404Plain;
    } | {
        contentType: "application/json";
        data: UserDeleteStatus404Json;
    } | {
        contentType: "text/json";
        data: UserDeleteStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: UserDeleteStatus500Plain;
    } | {
        contentType: "application/json";
        data: UserDeleteStatus500Json;
    } | {
        contentType: "text/json";
        data: UserDeleteStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: UserDeleteStatus501Plain;
    } | {
        contentType: "application/json";
        data: UserDeleteStatus501Json;
    } | {
        contentType: "text/json";
        data: UserDeleteStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type UserDeleteResponse = (UserDeleteStatus200 | UserDeleteStatus204 | UserDeleteStatus400 | UserDeleteStatus401 | UserDeleteStatus403 | UserDeleteStatus404 | UserDeleteStatus500 | UserDeleteStatus501);
