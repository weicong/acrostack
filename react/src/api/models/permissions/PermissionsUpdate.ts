/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloAbpPermissionManagementUpdatePermissionsDto } from '../volo/abp/permissionManagement/UpdatePermissionsDto'

export type PermissionsUpdateQuery = {
    providerName?: string;
    providerKey?: string;
};

export type PermissionsUpdateStatus200 = unknown;

export type PermissionsUpdateStatus204 = unknown;

export type PermissionsUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus400 = (PermissionsUpdateStatus400Plain | PermissionsUpdateStatus400Json | PermissionsUpdateStatus400Json2);

export type PermissionsUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus401 = (PermissionsUpdateStatus401Plain | PermissionsUpdateStatus401Json | PermissionsUpdateStatus401Json2);

export type PermissionsUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus403 = (PermissionsUpdateStatus403Plain | PermissionsUpdateStatus403Json | PermissionsUpdateStatus403Json2);

export type PermissionsUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus404 = (PermissionsUpdateStatus404Plain | PermissionsUpdateStatus404Json | PermissionsUpdateStatus404Json2);

export type PermissionsUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus500 = (PermissionsUpdateStatus500Plain | PermissionsUpdateStatus500Json | PermissionsUpdateStatus500Json2);

export type PermissionsUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus501 = (PermissionsUpdateStatus501Plain | PermissionsUpdateStatus501Json | PermissionsUpdateStatus501Json2);

export type PermissionsUpdateBodyJson = VoloAbpPermissionManagementUpdatePermissionsDto | undefined;

export type PermissionsUpdateBodyJson2 = VoloAbpPermissionManagementUpdatePermissionsDto | undefined;

export type PermissionsUpdateBodyJson3 = VoloAbpPermissionManagementUpdatePermissionsDto | undefined;

export type PermissionsUpdateBody = (PermissionsUpdateBodyJson | PermissionsUpdateBodyJson2 | PermissionsUpdateBodyJson3);

export type PermissionsUpdateOptions = {
    body: PermissionsUpdateBody;
    path?: never;
    query?: PermissionsUpdateQuery;
    headers?: never;
};

export type PermissionsUpdateResponses = {
    "200": PermissionsUpdateStatus200;
    "204": PermissionsUpdateStatus204;
    "400": ({
        contentType: "text/plain";
        data: PermissionsUpdateStatus400Plain;
    } | {
        contentType: "application/json";
        data: PermissionsUpdateStatus400Json;
    } | {
        contentType: "text/json";
        data: PermissionsUpdateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: PermissionsUpdateStatus401Plain;
    } | {
        contentType: "application/json";
        data: PermissionsUpdateStatus401Json;
    } | {
        contentType: "text/json";
        data: PermissionsUpdateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: PermissionsUpdateStatus403Plain;
    } | {
        contentType: "application/json";
        data: PermissionsUpdateStatus403Json;
    } | {
        contentType: "text/json";
        data: PermissionsUpdateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: PermissionsUpdateStatus404Plain;
    } | {
        contentType: "application/json";
        data: PermissionsUpdateStatus404Json;
    } | {
        contentType: "text/json";
        data: PermissionsUpdateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: PermissionsUpdateStatus500Plain;
    } | {
        contentType: "application/json";
        data: PermissionsUpdateStatus500Json;
    } | {
        contentType: "text/json";
        data: PermissionsUpdateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: PermissionsUpdateStatus501Plain;
    } | {
        contentType: "application/json";
        data: PermissionsUpdateStatus501Json;
    } | {
        contentType: "text/json";
        data: PermissionsUpdateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type PermissionsUpdateResponse = (PermissionsUpdateStatus200 | PermissionsUpdateStatus204 | PermissionsUpdateStatus400 | PermissionsUpdateStatus401 | PermissionsUpdateStatus403 | PermissionsUpdateStatus404 | PermissionsUpdateStatus500 | PermissionsUpdateStatus501);
