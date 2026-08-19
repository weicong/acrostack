/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloAbpUsersUserData } from '../volo/abp/users/UserData'

export type UserLookupFindByUserNamePath = {
    userName: string;
};

export type UserLookupFindByUserNameStatus200Plain = VoloAbpUsersUserData;

export type UserLookupFindByUserNameStatus200Json = VoloAbpUsersUserData;

export type UserLookupFindByUserNameStatus200Json2 = VoloAbpUsersUserData;

export type UserLookupFindByUserNameStatus200 = (UserLookupFindByUserNameStatus200Plain | UserLookupFindByUserNameStatus200Json | UserLookupFindByUserNameStatus200Json2);

export type UserLookupFindByUserNameStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus400 = (UserLookupFindByUserNameStatus400Plain | UserLookupFindByUserNameStatus400Json | UserLookupFindByUserNameStatus400Json2);

export type UserLookupFindByUserNameStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus401 = (UserLookupFindByUserNameStatus401Plain | UserLookupFindByUserNameStatus401Json | UserLookupFindByUserNameStatus401Json2);

export type UserLookupFindByUserNameStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus403 = (UserLookupFindByUserNameStatus403Plain | UserLookupFindByUserNameStatus403Json | UserLookupFindByUserNameStatus403Json2);

export type UserLookupFindByUserNameStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus404 = (UserLookupFindByUserNameStatus404Plain | UserLookupFindByUserNameStatus404Json | UserLookupFindByUserNameStatus404Json2);

export type UserLookupFindByUserNameStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus500 = (UserLookupFindByUserNameStatus500Plain | UserLookupFindByUserNameStatus500Json | UserLookupFindByUserNameStatus500Json2);

export type UserLookupFindByUserNameStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus501 = (UserLookupFindByUserNameStatus501Plain | UserLookupFindByUserNameStatus501Json | UserLookupFindByUserNameStatus501Json2);

export type UserLookupFindByUserNameOptions = {
    body?: never;
    path: UserLookupFindByUserNamePath;
    query?: never;
    headers?: never;
};

export type UserLookupFindByUserNameResponses = {
    "200": ({
        contentType: "text/plain";
        data: UserLookupFindByUserNameStatus200Plain;
    } | {
        contentType: "application/json";
        data: UserLookupFindByUserNameStatus200Json;
    } | {
        contentType: "text/json";
        data: UserLookupFindByUserNameStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: UserLookupFindByUserNameStatus400Plain;
    } | {
        contentType: "application/json";
        data: UserLookupFindByUserNameStatus400Json;
    } | {
        contentType: "text/json";
        data: UserLookupFindByUserNameStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: UserLookupFindByUserNameStatus401Plain;
    } | {
        contentType: "application/json";
        data: UserLookupFindByUserNameStatus401Json;
    } | {
        contentType: "text/json";
        data: UserLookupFindByUserNameStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: UserLookupFindByUserNameStatus403Plain;
    } | {
        contentType: "application/json";
        data: UserLookupFindByUserNameStatus403Json;
    } | {
        contentType: "text/json";
        data: UserLookupFindByUserNameStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: UserLookupFindByUserNameStatus404Plain;
    } | {
        contentType: "application/json";
        data: UserLookupFindByUserNameStatus404Json;
    } | {
        contentType: "text/json";
        data: UserLookupFindByUserNameStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: UserLookupFindByUserNameStatus500Plain;
    } | {
        contentType: "application/json";
        data: UserLookupFindByUserNameStatus500Json;
    } | {
        contentType: "text/json";
        data: UserLookupFindByUserNameStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: UserLookupFindByUserNameStatus501Plain;
    } | {
        contentType: "application/json";
        data: UserLookupFindByUserNameStatus501Json;
    } | {
        contentType: "text/json";
        data: UserLookupFindByUserNameStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type UserLookupFindByUserNameResponse = (UserLookupFindByUserNameStatus200 | UserLookupFindByUserNameStatus400 | UserLookupFindByUserNameStatus401 | UserLookupFindByUserNameStatus403 | UserLookupFindByUserNameStatus404 | UserLookupFindByUserNameStatus500 | UserLookupFindByUserNameStatus501);
