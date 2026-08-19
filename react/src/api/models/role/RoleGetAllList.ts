/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/listResultDto1Volo/abp/identity/identityRoleDtoVolo/abp/identity/application/ContractsVersion10600CultureneutralPublicKeyTokennull'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type RoleGetAllListStatus200Plain = VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type RoleGetAllListStatus200Json = VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type RoleGetAllListStatus200Json2 = VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type RoleGetAllListStatus200 = (RoleGetAllListStatus200Plain | RoleGetAllListStatus200Json | RoleGetAllListStatus200Json2);

export type RoleGetAllListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus400 = (RoleGetAllListStatus400Plain | RoleGetAllListStatus400Json | RoleGetAllListStatus400Json2);

export type RoleGetAllListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus401 = (RoleGetAllListStatus401Plain | RoleGetAllListStatus401Json | RoleGetAllListStatus401Json2);

export type RoleGetAllListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus403 = (RoleGetAllListStatus403Plain | RoleGetAllListStatus403Json | RoleGetAllListStatus403Json2);

export type RoleGetAllListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus404 = (RoleGetAllListStatus404Plain | RoleGetAllListStatus404Json | RoleGetAllListStatus404Json2);

export type RoleGetAllListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus500 = (RoleGetAllListStatus500Plain | RoleGetAllListStatus500Json | RoleGetAllListStatus500Json2);

export type RoleGetAllListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus501 = (RoleGetAllListStatus501Plain | RoleGetAllListStatus501Json | RoleGetAllListStatus501Json2);

export type RoleGetAllListOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type RoleGetAllListResponses = {
    "200": ({
        contentType: "text/plain";
        data: RoleGetAllListStatus200Plain;
    } | {
        contentType: "application/json";
        data: RoleGetAllListStatus200Json;
    } | {
        contentType: "text/json";
        data: RoleGetAllListStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: RoleGetAllListStatus400Plain;
    } | {
        contentType: "application/json";
        data: RoleGetAllListStatus400Json;
    } | {
        contentType: "text/json";
        data: RoleGetAllListStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: RoleGetAllListStatus401Plain;
    } | {
        contentType: "application/json";
        data: RoleGetAllListStatus401Json;
    } | {
        contentType: "text/json";
        data: RoleGetAllListStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: RoleGetAllListStatus403Plain;
    } | {
        contentType: "application/json";
        data: RoleGetAllListStatus403Json;
    } | {
        contentType: "text/json";
        data: RoleGetAllListStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: RoleGetAllListStatus404Plain;
    } | {
        contentType: "application/json";
        data: RoleGetAllListStatus404Json;
    } | {
        contentType: "text/json";
        data: RoleGetAllListStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: RoleGetAllListStatus500Plain;
    } | {
        contentType: "application/json";
        data: RoleGetAllListStatus500Json;
    } | {
        contentType: "text/json";
        data: RoleGetAllListStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: RoleGetAllListStatus501Plain;
    } | {
        contentType: "application/json";
        data: RoleGetAllListStatus501Json;
    } | {
        contentType: "text/json";
        data: RoleGetAllListStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type RoleGetAllListResponse = (RoleGetAllListStatus200 | RoleGetAllListStatus400 | RoleGetAllListStatus401 | RoleGetAllListStatus403 | RoleGetAllListStatus404 | RoleGetAllListStatus500 | RoleGetAllListStatus501);
