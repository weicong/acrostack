/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type UserLookupGetCountQuery = {
    Filter?: string;
};

/**
 * @description
 * Format: `int64`
 * @type integer
*/
export type UserLookupGetCountStatus200Plain = bigint;

/**
 * @description
 * Format: `int64`
 * @type integer
*/
export type UserLookupGetCountStatus200Json = bigint;

/**
 * @description
 * Format: `int64`
 * @type integer
*/
export type UserLookupGetCountStatus200Json2 = bigint;

export type UserLookupGetCountStatus200 = (UserLookupGetCountStatus200Plain | UserLookupGetCountStatus200Json | UserLookupGetCountStatus200Json2);

export type UserLookupGetCountStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus400 = (UserLookupGetCountStatus400Plain | UserLookupGetCountStatus400Json | UserLookupGetCountStatus400Json2);

export type UserLookupGetCountStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus401 = (UserLookupGetCountStatus401Plain | UserLookupGetCountStatus401Json | UserLookupGetCountStatus401Json2);

export type UserLookupGetCountStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus403 = (UserLookupGetCountStatus403Plain | UserLookupGetCountStatus403Json | UserLookupGetCountStatus403Json2);

export type UserLookupGetCountStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus404 = (UserLookupGetCountStatus404Plain | UserLookupGetCountStatus404Json | UserLookupGetCountStatus404Json2);

export type UserLookupGetCountStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus500 = (UserLookupGetCountStatus500Plain | UserLookupGetCountStatus500Json | UserLookupGetCountStatus500Json2);

export type UserLookupGetCountStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus501 = (UserLookupGetCountStatus501Plain | UserLookupGetCountStatus501Json | UserLookupGetCountStatus501Json2);

export type UserLookupGetCountOptions = {
    body?: never;
    path?: never;
    query?: UserLookupGetCountQuery;
    headers?: never;
};

export type UserLookupGetCountResponses = {
    "200": ({
        contentType: "text/plain";
        data: UserLookupGetCountStatus200Plain;
    } | {
        contentType: "application/json";
        data: UserLookupGetCountStatus200Json;
    } | {
        contentType: "text/json";
        data: UserLookupGetCountStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: UserLookupGetCountStatus400Plain;
    } | {
        contentType: "application/json";
        data: UserLookupGetCountStatus400Json;
    } | {
        contentType: "text/json";
        data: UserLookupGetCountStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: UserLookupGetCountStatus401Plain;
    } | {
        contentType: "application/json";
        data: UserLookupGetCountStatus401Json;
    } | {
        contentType: "text/json";
        data: UserLookupGetCountStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: UserLookupGetCountStatus403Plain;
    } | {
        contentType: "application/json";
        data: UserLookupGetCountStatus403Json;
    } | {
        contentType: "text/json";
        data: UserLookupGetCountStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: UserLookupGetCountStatus404Plain;
    } | {
        contentType: "application/json";
        data: UserLookupGetCountStatus404Json;
    } | {
        contentType: "text/json";
        data: UserLookupGetCountStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: UserLookupGetCountStatus500Plain;
    } | {
        contentType: "application/json";
        data: UserLookupGetCountStatus500Json;
    } | {
        contentType: "text/json";
        data: UserLookupGetCountStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: UserLookupGetCountStatus501Plain;
    } | {
        contentType: "application/json";
        data: UserLookupGetCountStatus501Json;
    } | {
        contentType: "text/json";
        data: UserLookupGetCountStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type UserLookupGetCountResponse = (UserLookupGetCountStatus200 | UserLookupGetCountStatus400 | UserLookupGetCountStatus401 | UserLookupGetCountStatus403 | UserLookupGetCountStatus404 | UserLookupGetCountStatus500 | UserLookupGetCountStatus501);
