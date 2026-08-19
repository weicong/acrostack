/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloAbpPermissionManagementGetResourcePermissionListResultDto } from '../volo/abp/permissionManagement/GetResourcePermissionListResultDto'

export type PermissionsGetResourceQuery = {
    resourceName?: string;
    resourceKey?: string;
};

export type PermissionsGetResourceStatus200Plain = VoloAbpPermissionManagementGetResourcePermissionListResultDto;

export type PermissionsGetResourceStatus200Json = VoloAbpPermissionManagementGetResourcePermissionListResultDto;

export type PermissionsGetResourceStatus200Json2 = VoloAbpPermissionManagementGetResourcePermissionListResultDto;

export type PermissionsGetResourceStatus200 = (PermissionsGetResourceStatus200Plain | PermissionsGetResourceStatus200Json | PermissionsGetResourceStatus200Json2);

export type PermissionsGetResourceStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus400 = (PermissionsGetResourceStatus400Plain | PermissionsGetResourceStatus400Json | PermissionsGetResourceStatus400Json2);

export type PermissionsGetResourceStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus401 = (PermissionsGetResourceStatus401Plain | PermissionsGetResourceStatus401Json | PermissionsGetResourceStatus401Json2);

export type PermissionsGetResourceStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus403 = (PermissionsGetResourceStatus403Plain | PermissionsGetResourceStatus403Json | PermissionsGetResourceStatus403Json2);

export type PermissionsGetResourceStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus404 = (PermissionsGetResourceStatus404Plain | PermissionsGetResourceStatus404Json | PermissionsGetResourceStatus404Json2);

export type PermissionsGetResourceStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus500 = (PermissionsGetResourceStatus500Plain | PermissionsGetResourceStatus500Json | PermissionsGetResourceStatus500Json2);

export type PermissionsGetResourceStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus501 = (PermissionsGetResourceStatus501Plain | PermissionsGetResourceStatus501Json | PermissionsGetResourceStatus501Json2);

export type PermissionsGetResourceOptions = {
    body?: never;
    path?: never;
    query?: PermissionsGetResourceQuery;
    headers?: never;
};

export type PermissionsGetResourceResponses = {
    "200": ({
        contentType: "text/plain";
        data: PermissionsGetResourceStatus200Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceStatus200Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: PermissionsGetResourceStatus400Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceStatus400Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: PermissionsGetResourceStatus401Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceStatus401Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: PermissionsGetResourceStatus403Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceStatus403Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: PermissionsGetResourceStatus404Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceStatus404Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: PermissionsGetResourceStatus500Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceStatus500Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: PermissionsGetResourceStatus501Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceStatus501Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type PermissionsGetResourceResponse = (PermissionsGetResourceStatus200 | PermissionsGetResourceStatus400 | PermissionsGetResourceStatus401 | PermissionsGetResourceStatus403 | PermissionsGetResourceStatus404 | PermissionsGetResourceStatus500 | PermissionsGetResourceStatus501);
