/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloAbpIdentityIdentityRoleDto } from '../volo/abp/identity/IdentityRoleDto'
import type { VoloAbpIdentityIdentityRoleUpdateDto } from '../volo/abp/identity/IdentityRoleUpdateDto'

export type RoleUpdatePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type RoleUpdateStatus200Plain = VoloAbpIdentityIdentityRoleDto;

export type RoleUpdateStatus200Json = VoloAbpIdentityIdentityRoleDto;

export type RoleUpdateStatus200Json2 = VoloAbpIdentityIdentityRoleDto;

export type RoleUpdateStatus200 = (RoleUpdateStatus200Plain | RoleUpdateStatus200Json | RoleUpdateStatus200Json2);

export type RoleUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus400 = (RoleUpdateStatus400Plain | RoleUpdateStatus400Json | RoleUpdateStatus400Json2);

export type RoleUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus401 = (RoleUpdateStatus401Plain | RoleUpdateStatus401Json | RoleUpdateStatus401Json2);

export type RoleUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus403 = (RoleUpdateStatus403Plain | RoleUpdateStatus403Json | RoleUpdateStatus403Json2);

export type RoleUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus404 = (RoleUpdateStatus404Plain | RoleUpdateStatus404Json | RoleUpdateStatus404Json2);

export type RoleUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus500 = (RoleUpdateStatus500Plain | RoleUpdateStatus500Json | RoleUpdateStatus500Json2);

export type RoleUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus501 = (RoleUpdateStatus501Plain | RoleUpdateStatus501Json | RoleUpdateStatus501Json2);

export type RoleUpdateBodyJson = Omit<NonNullable<VoloAbpIdentityIdentityRoleUpdateDto>, "extraProperties"> | undefined;

export type RoleUpdateBodyJson2 = Omit<NonNullable<VoloAbpIdentityIdentityRoleUpdateDto>, "extraProperties"> | undefined;

export type RoleUpdateBodyJson3 = Omit<NonNullable<VoloAbpIdentityIdentityRoleUpdateDto>, "extraProperties"> | undefined;

export type RoleUpdateBody = (RoleUpdateBodyJson | RoleUpdateBodyJson2 | RoleUpdateBodyJson3);

export type RoleUpdateOptions = {
    body: RoleUpdateBody;
    path: RoleUpdatePath;
    query?: never;
    headers?: never;
};

export type RoleUpdateResponses = {
    "200": ({
        contentType: "text/plain";
        data: RoleUpdateStatus200Plain;
    } | {
        contentType: "application/json";
        data: RoleUpdateStatus200Json;
    } | {
        contentType: "text/json";
        data: RoleUpdateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: RoleUpdateStatus400Plain;
    } | {
        contentType: "application/json";
        data: RoleUpdateStatus400Json;
    } | {
        contentType: "text/json";
        data: RoleUpdateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: RoleUpdateStatus401Plain;
    } | {
        contentType: "application/json";
        data: RoleUpdateStatus401Json;
    } | {
        contentType: "text/json";
        data: RoleUpdateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: RoleUpdateStatus403Plain;
    } | {
        contentType: "application/json";
        data: RoleUpdateStatus403Json;
    } | {
        contentType: "text/json";
        data: RoleUpdateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: RoleUpdateStatus404Plain;
    } | {
        contentType: "application/json";
        data: RoleUpdateStatus404Json;
    } | {
        contentType: "text/json";
        data: RoleUpdateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: RoleUpdateStatus500Plain;
    } | {
        contentType: "application/json";
        data: RoleUpdateStatus500Json;
    } | {
        contentType: "text/json";
        data: RoleUpdateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: RoleUpdateStatus501Plain;
    } | {
        contentType: "application/json";
        data: RoleUpdateStatus501Json;
    } | {
        contentType: "text/json";
        data: RoleUpdateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type RoleUpdateResponse = (RoleUpdateStatus200 | RoleUpdateStatus400 | RoleUpdateStatus401 | RoleUpdateStatus403 | RoleUpdateStatus404 | RoleUpdateStatus500 | RoleUpdateStatus501);
