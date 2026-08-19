/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/listResultDto1Volo/abp/identity/identityRoleDtoVolo/abp/identity/application/ContractsVersion10600CultureneutralPublicKeyTokennull'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type UserGetAssignableRolesStatus200Plain = VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type UserGetAssignableRolesStatus200Json = VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type UserGetAssignableRolesStatus200Json2 = VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type UserGetAssignableRolesStatus200 = (UserGetAssignableRolesStatus200Plain | UserGetAssignableRolesStatus200Json | UserGetAssignableRolesStatus200Json2);

export type UserGetAssignableRolesStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus400 = (UserGetAssignableRolesStatus400Plain | UserGetAssignableRolesStatus400Json | UserGetAssignableRolesStatus400Json2);

export type UserGetAssignableRolesStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus401 = (UserGetAssignableRolesStatus401Plain | UserGetAssignableRolesStatus401Json | UserGetAssignableRolesStatus401Json2);

export type UserGetAssignableRolesStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus403 = (UserGetAssignableRolesStatus403Plain | UserGetAssignableRolesStatus403Json | UserGetAssignableRolesStatus403Json2);

export type UserGetAssignableRolesStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus404 = (UserGetAssignableRolesStatus404Plain | UserGetAssignableRolesStatus404Json | UserGetAssignableRolesStatus404Json2);

export type UserGetAssignableRolesStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus500 = (UserGetAssignableRolesStatus500Plain | UserGetAssignableRolesStatus500Json | UserGetAssignableRolesStatus500Json2);

export type UserGetAssignableRolesStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus501 = (UserGetAssignableRolesStatus501Plain | UserGetAssignableRolesStatus501Json | UserGetAssignableRolesStatus501Json2);

export type UserGetAssignableRolesOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type UserGetAssignableRolesResponses = {
    "200": ({
        contentType: "text/plain";
        data: UserGetAssignableRolesStatus200Plain;
    } | {
        contentType: "application/json";
        data: UserGetAssignableRolesStatus200Json;
    } | {
        contentType: "text/json";
        data: UserGetAssignableRolesStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: UserGetAssignableRolesStatus400Plain;
    } | {
        contentType: "application/json";
        data: UserGetAssignableRolesStatus400Json;
    } | {
        contentType: "text/json";
        data: UserGetAssignableRolesStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: UserGetAssignableRolesStatus401Plain;
    } | {
        contentType: "application/json";
        data: UserGetAssignableRolesStatus401Json;
    } | {
        contentType: "text/json";
        data: UserGetAssignableRolesStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: UserGetAssignableRolesStatus403Plain;
    } | {
        contentType: "application/json";
        data: UserGetAssignableRolesStatus403Json;
    } | {
        contentType: "text/json";
        data: UserGetAssignableRolesStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: UserGetAssignableRolesStatus404Plain;
    } | {
        contentType: "application/json";
        data: UserGetAssignableRolesStatus404Json;
    } | {
        contentType: "text/json";
        data: UserGetAssignableRolesStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: UserGetAssignableRolesStatus500Plain;
    } | {
        contentType: "application/json";
        data: UserGetAssignableRolesStatus500Json;
    } | {
        contentType: "text/json";
        data: UserGetAssignableRolesStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: UserGetAssignableRolesStatus501Plain;
    } | {
        contentType: "application/json";
        data: UserGetAssignableRolesStatus501Json;
    } | {
        contentType: "text/json";
        data: UserGetAssignableRolesStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type UserGetAssignableRolesResponse = (UserGetAssignableRolesStatus200 | UserGetAssignableRolesStatus400 | UserGetAssignableRolesStatus401 | UserGetAssignableRolesStatus403 | UserGetAssignableRolesStatus404 | UserGetAssignableRolesStatus500 | UserGetAssignableRolesStatus501);
