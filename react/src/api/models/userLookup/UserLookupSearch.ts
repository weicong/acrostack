/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloAbpUsersUserDataVoloAbpUsersAbstractionsVersion10600CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/listResultDto1Volo/abp/users/userDataVolo/abp/users/AbstractionsVersion10600CultureneutralPublicKeyTokennull'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type UserLookupSearchQuery = {
    Filter?: string;
    Sorting?: string;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    SkipCount?: number;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    MaxResultCount?: number;
    ExtraProperties?: {
        [key: string]: unknown;
    };
};

export type UserLookupSearchStatus200Plain = VoloAbpApplicationDtosListResultDto1VoloAbpUsersUserDataVoloAbpUsersAbstractionsVersion10600CultureneutralPublicKeyTokennull;

export type UserLookupSearchStatus200Json = VoloAbpApplicationDtosListResultDto1VoloAbpUsersUserDataVoloAbpUsersAbstractionsVersion10600CultureneutralPublicKeyTokennull;

export type UserLookupSearchStatus200Json2 = VoloAbpApplicationDtosListResultDto1VoloAbpUsersUserDataVoloAbpUsersAbstractionsVersion10600CultureneutralPublicKeyTokennull;

export type UserLookupSearchStatus200 = (UserLookupSearchStatus200Plain | UserLookupSearchStatus200Json | UserLookupSearchStatus200Json2);

export type UserLookupSearchStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus400 = (UserLookupSearchStatus400Plain | UserLookupSearchStatus400Json | UserLookupSearchStatus400Json2);

export type UserLookupSearchStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus401 = (UserLookupSearchStatus401Plain | UserLookupSearchStatus401Json | UserLookupSearchStatus401Json2);

export type UserLookupSearchStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus403 = (UserLookupSearchStatus403Plain | UserLookupSearchStatus403Json | UserLookupSearchStatus403Json2);

export type UserLookupSearchStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus404 = (UserLookupSearchStatus404Plain | UserLookupSearchStatus404Json | UserLookupSearchStatus404Json2);

export type UserLookupSearchStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus500 = (UserLookupSearchStatus500Plain | UserLookupSearchStatus500Json | UserLookupSearchStatus500Json2);

export type UserLookupSearchStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus501 = (UserLookupSearchStatus501Plain | UserLookupSearchStatus501Json | UserLookupSearchStatus501Json2);

export type UserLookupSearchOptions = {
    body?: never;
    path?: never;
    query?: UserLookupSearchQuery;
    headers?: never;
};

export type UserLookupSearchResponses = {
    "200": ({
        contentType: "text/plain";
        data: UserLookupSearchStatus200Plain;
    } | {
        contentType: "application/json";
        data: UserLookupSearchStatus200Json;
    } | {
        contentType: "text/json";
        data: UserLookupSearchStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: UserLookupSearchStatus400Plain;
    } | {
        contentType: "application/json";
        data: UserLookupSearchStatus400Json;
    } | {
        contentType: "text/json";
        data: UserLookupSearchStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: UserLookupSearchStatus401Plain;
    } | {
        contentType: "application/json";
        data: UserLookupSearchStatus401Json;
    } | {
        contentType: "text/json";
        data: UserLookupSearchStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: UserLookupSearchStatus403Plain;
    } | {
        contentType: "application/json";
        data: UserLookupSearchStatus403Json;
    } | {
        contentType: "text/json";
        data: UserLookupSearchStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: UserLookupSearchStatus404Plain;
    } | {
        contentType: "application/json";
        data: UserLookupSearchStatus404Json;
    } | {
        contentType: "text/json";
        data: UserLookupSearchStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: UserLookupSearchStatus500Plain;
    } | {
        contentType: "application/json";
        data: UserLookupSearchStatus500Json;
    } | {
        contentType: "text/json";
        data: UserLookupSearchStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: UserLookupSearchStatus501Plain;
    } | {
        contentType: "application/json";
        data: UserLookupSearchStatus501Json;
    } | {
        contentType: "text/json";
        data: UserLookupSearchStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type UserLookupSearchResponse = (UserLookupSearchStatus200 | UserLookupSearchStatus400 | UserLookupSearchStatus401 | UserLookupSearchStatus403 | UserLookupSearchStatus404 | UserLookupSearchStatus500 | UserLookupSearchStatus501);
