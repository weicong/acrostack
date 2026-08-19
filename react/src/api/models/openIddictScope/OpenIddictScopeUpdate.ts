/* oxlint-disable */

import type { AcroStackOpenIddictManagementOpenIddictScopeDto } from '../acroStack/openIddictManagement/OpenIddictScopeDto'
import type { AcroStackOpenIddictManagementUpdateOpenIddictScopeDto } from '../acroStack/openIddictManagement/UpdateOpenIddictScopeDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type OpenIddictScopeUpdatePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type OpenIddictScopeUpdateStatus200Plain = AcroStackOpenIddictManagementOpenIddictScopeDto;

export type OpenIddictScopeUpdateStatus200Json = AcroStackOpenIddictManagementOpenIddictScopeDto;

export type OpenIddictScopeUpdateStatus200Json2 = AcroStackOpenIddictManagementOpenIddictScopeDto;

export type OpenIddictScopeUpdateStatus200 = (OpenIddictScopeUpdateStatus200Plain | OpenIddictScopeUpdateStatus200Json | OpenIddictScopeUpdateStatus200Json2);

export type OpenIddictScopeUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus400 = (OpenIddictScopeUpdateStatus400Plain | OpenIddictScopeUpdateStatus400Json | OpenIddictScopeUpdateStatus400Json2);

export type OpenIddictScopeUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus401 = (OpenIddictScopeUpdateStatus401Plain | OpenIddictScopeUpdateStatus401Json | OpenIddictScopeUpdateStatus401Json2);

export type OpenIddictScopeUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus403 = (OpenIddictScopeUpdateStatus403Plain | OpenIddictScopeUpdateStatus403Json | OpenIddictScopeUpdateStatus403Json2);

export type OpenIddictScopeUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus404 = (OpenIddictScopeUpdateStatus404Plain | OpenIddictScopeUpdateStatus404Json | OpenIddictScopeUpdateStatus404Json2);

export type OpenIddictScopeUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus500 = (OpenIddictScopeUpdateStatus500Plain | OpenIddictScopeUpdateStatus500Json | OpenIddictScopeUpdateStatus500Json2);

export type OpenIddictScopeUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeUpdateStatus501 = (OpenIddictScopeUpdateStatus501Plain | OpenIddictScopeUpdateStatus501Json | OpenIddictScopeUpdateStatus501Json2);

export type OpenIddictScopeUpdateBodyJson = AcroStackOpenIddictManagementUpdateOpenIddictScopeDto | undefined;

export type OpenIddictScopeUpdateBodyJson2 = AcroStackOpenIddictManagementUpdateOpenIddictScopeDto | undefined;

export type OpenIddictScopeUpdateBodyJson3 = AcroStackOpenIddictManagementUpdateOpenIddictScopeDto | undefined;

export type OpenIddictScopeUpdateBody = (OpenIddictScopeUpdateBodyJson | OpenIddictScopeUpdateBodyJson2 | OpenIddictScopeUpdateBodyJson3);

export type OpenIddictScopeUpdateOptions = {
    body: OpenIddictScopeUpdateBody;
    path: OpenIddictScopeUpdatePath;
    query?: never;
    headers?: never;
};

export type OpenIddictScopeUpdateResponses = {
    "200": ({
        contentType: "text/plain";
        data: OpenIddictScopeUpdateStatus200Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeUpdateStatus200Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeUpdateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: OpenIddictScopeUpdateStatus400Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeUpdateStatus400Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeUpdateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: OpenIddictScopeUpdateStatus401Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeUpdateStatus401Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeUpdateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: OpenIddictScopeUpdateStatus403Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeUpdateStatus403Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeUpdateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: OpenIddictScopeUpdateStatus404Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeUpdateStatus404Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeUpdateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: OpenIddictScopeUpdateStatus500Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeUpdateStatus500Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeUpdateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: OpenIddictScopeUpdateStatus501Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeUpdateStatus501Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeUpdateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type OpenIddictScopeUpdateResponse = (OpenIddictScopeUpdateStatus200 | OpenIddictScopeUpdateStatus400 | OpenIddictScopeUpdateStatus401 | OpenIddictScopeUpdateStatus403 | OpenIddictScopeUpdateStatus404 | OpenIddictScopeUpdateStatus500 | OpenIddictScopeUpdateStatus501);
