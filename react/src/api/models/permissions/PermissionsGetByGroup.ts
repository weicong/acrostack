/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloAbpPermissionManagementGetPermissionListResultDto } from '../volo/abp/permissionManagement/GetPermissionListResultDto'

export type PermissionsGetByGroupQuery = {
    groupName?: string;
    providerName?: string;
    providerKey?: string;
};

export type PermissionsGetByGroupStatus200Plain = VoloAbpPermissionManagementGetPermissionListResultDto;

export type PermissionsGetByGroupStatus200Json = VoloAbpPermissionManagementGetPermissionListResultDto;

export type PermissionsGetByGroupStatus200Json2 = VoloAbpPermissionManagementGetPermissionListResultDto;

export type PermissionsGetByGroupStatus200 = (PermissionsGetByGroupStatus200Plain | PermissionsGetByGroupStatus200Json | PermissionsGetByGroupStatus200Json2);

export type PermissionsGetByGroupStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus400 = (PermissionsGetByGroupStatus400Plain | PermissionsGetByGroupStatus400Json | PermissionsGetByGroupStatus400Json2);

export type PermissionsGetByGroupStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus401 = (PermissionsGetByGroupStatus401Plain | PermissionsGetByGroupStatus401Json | PermissionsGetByGroupStatus401Json2);

export type PermissionsGetByGroupStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus403 = (PermissionsGetByGroupStatus403Plain | PermissionsGetByGroupStatus403Json | PermissionsGetByGroupStatus403Json2);

export type PermissionsGetByGroupStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus404 = (PermissionsGetByGroupStatus404Plain | PermissionsGetByGroupStatus404Json | PermissionsGetByGroupStatus404Json2);

export type PermissionsGetByGroupStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus500 = (PermissionsGetByGroupStatus500Plain | PermissionsGetByGroupStatus500Json | PermissionsGetByGroupStatus500Json2);

export type PermissionsGetByGroupStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus501 = (PermissionsGetByGroupStatus501Plain | PermissionsGetByGroupStatus501Json | PermissionsGetByGroupStatus501Json2);

export type PermissionsGetByGroupOptions = {
    body?: never;
    path?: never;
    query?: PermissionsGetByGroupQuery;
    headers?: never;
};

export type PermissionsGetByGroupResponses = {
    "200": ({
        contentType: "text/plain";
        data: PermissionsGetByGroupStatus200Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetByGroupStatus200Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetByGroupStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: PermissionsGetByGroupStatus400Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetByGroupStatus400Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetByGroupStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: PermissionsGetByGroupStatus401Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetByGroupStatus401Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetByGroupStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: PermissionsGetByGroupStatus403Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetByGroupStatus403Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetByGroupStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: PermissionsGetByGroupStatus404Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetByGroupStatus404Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetByGroupStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: PermissionsGetByGroupStatus500Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetByGroupStatus500Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetByGroupStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: PermissionsGetByGroupStatus501Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetByGroupStatus501Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetByGroupStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type PermissionsGetByGroupResponse = (PermissionsGetByGroupStatus200 | PermissionsGetByGroupStatus400 | PermissionsGetByGroupStatus401 | PermissionsGetByGroupStatus403 | PermissionsGetByGroupStatus404 | PermissionsGetByGroupStatus500 | PermissionsGetByGroupStatus501);
