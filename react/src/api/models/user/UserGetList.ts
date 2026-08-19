/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/pagedResultDto1Volo/abp/identity/identityUserDtoVolo/abp/identity/application/ContractsVersion10600CultureneutralPublicKeyTokennull'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type UserGetListQuery = {
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

export type UserGetListStatus200Plain = VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type UserGetListStatus200Json = VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type UserGetListStatus200Json2 = VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type UserGetListStatus200 = (UserGetListStatus200Plain | UserGetListStatus200Json | UserGetListStatus200Json2);

export type UserGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus400 = (UserGetListStatus400Plain | UserGetListStatus400Json | UserGetListStatus400Json2);

export type UserGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus401 = (UserGetListStatus401Plain | UserGetListStatus401Json | UserGetListStatus401Json2);

export type UserGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus403 = (UserGetListStatus403Plain | UserGetListStatus403Json | UserGetListStatus403Json2);

export type UserGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus404 = (UserGetListStatus404Plain | UserGetListStatus404Json | UserGetListStatus404Json2);

export type UserGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus500 = (UserGetListStatus500Plain | UserGetListStatus500Json | UserGetListStatus500Json2);

export type UserGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus501 = (UserGetListStatus501Plain | UserGetListStatus501Json | UserGetListStatus501Json2);

export type UserGetListOptions = {
    body?: never;
    path?: never;
    query?: UserGetListQuery;
    headers?: never;
};

export type UserGetListResponses = {
    "200": ({
        contentType: "text/plain";
        data: UserGetListStatus200Plain;
    } | {
        contentType: "application/json";
        data: UserGetListStatus200Json;
    } | {
        contentType: "text/json";
        data: UserGetListStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: UserGetListStatus400Plain;
    } | {
        contentType: "application/json";
        data: UserGetListStatus400Json;
    } | {
        contentType: "text/json";
        data: UserGetListStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: UserGetListStatus401Plain;
    } | {
        contentType: "application/json";
        data: UserGetListStatus401Json;
    } | {
        contentType: "text/json";
        data: UserGetListStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: UserGetListStatus403Plain;
    } | {
        contentType: "application/json";
        data: UserGetListStatus403Json;
    } | {
        contentType: "text/json";
        data: UserGetListStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: UserGetListStatus404Plain;
    } | {
        contentType: "application/json";
        data: UserGetListStatus404Json;
    } | {
        contentType: "text/json";
        data: UserGetListStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: UserGetListStatus500Plain;
    } | {
        contentType: "application/json";
        data: UserGetListStatus500Json;
    } | {
        contentType: "text/json";
        data: UserGetListStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: UserGetListStatus501Plain;
    } | {
        contentType: "application/json";
        data: UserGetListStatus501Json;
    } | {
        contentType: "text/json";
        data: UserGetListStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type UserGetListResponse = (UserGetListStatus200 | UserGetListStatus400 | UserGetListStatus401 | UserGetListStatus403 | UserGetListStatus404 | UserGetListStatus500 | UserGetListStatus501);
