/* oxlint-disable */

import type { AcroStackOpenIddictManagementOpenIddictApplicationDto } from '../acroStack/openIddictManagement/OpenIddictApplicationDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type OpenIddictApplicationGetPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type OpenIddictApplicationGetStatus200Plain = AcroStackOpenIddictManagementOpenIddictApplicationDto;

export type OpenIddictApplicationGetStatus200Json = AcroStackOpenIddictManagementOpenIddictApplicationDto;

export type OpenIddictApplicationGetStatus200Json2 = AcroStackOpenIddictManagementOpenIddictApplicationDto;

export type OpenIddictApplicationGetStatus200 = (OpenIddictApplicationGetStatus200Plain | OpenIddictApplicationGetStatus200Json | OpenIddictApplicationGetStatus200Json2);

export type OpenIddictApplicationGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus400 = (OpenIddictApplicationGetStatus400Plain | OpenIddictApplicationGetStatus400Json | OpenIddictApplicationGetStatus400Json2);

export type OpenIddictApplicationGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus401 = (OpenIddictApplicationGetStatus401Plain | OpenIddictApplicationGetStatus401Json | OpenIddictApplicationGetStatus401Json2);

export type OpenIddictApplicationGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus403 = (OpenIddictApplicationGetStatus403Plain | OpenIddictApplicationGetStatus403Json | OpenIddictApplicationGetStatus403Json2);

export type OpenIddictApplicationGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus404 = (OpenIddictApplicationGetStatus404Plain | OpenIddictApplicationGetStatus404Json | OpenIddictApplicationGetStatus404Json2);

export type OpenIddictApplicationGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus500 = (OpenIddictApplicationGetStatus500Plain | OpenIddictApplicationGetStatus500Json | OpenIddictApplicationGetStatus500Json2);

export type OpenIddictApplicationGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetStatus501 = (OpenIddictApplicationGetStatus501Plain | OpenIddictApplicationGetStatus501Json | OpenIddictApplicationGetStatus501Json2);

export type OpenIddictApplicationGetOptions = {
    body?: never;
    path: OpenIddictApplicationGetPath;
    query?: never;
    headers?: never;
};

export type OpenIddictApplicationGetResponses = {
    "200": ({
        contentType: "text/plain";
        data: OpenIddictApplicationGetStatus200Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictApplicationGetStatus200Json;
    } | {
        contentType: "text/json";
        data: OpenIddictApplicationGetStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: OpenIddictApplicationGetStatus400Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictApplicationGetStatus400Json;
    } | {
        contentType: "text/json";
        data: OpenIddictApplicationGetStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: OpenIddictApplicationGetStatus401Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictApplicationGetStatus401Json;
    } | {
        contentType: "text/json";
        data: OpenIddictApplicationGetStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: OpenIddictApplicationGetStatus403Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictApplicationGetStatus403Json;
    } | {
        contentType: "text/json";
        data: OpenIddictApplicationGetStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: OpenIddictApplicationGetStatus404Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictApplicationGetStatus404Json;
    } | {
        contentType: "text/json";
        data: OpenIddictApplicationGetStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: OpenIddictApplicationGetStatus500Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictApplicationGetStatus500Json;
    } | {
        contentType: "text/json";
        data: OpenIddictApplicationGetStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: OpenIddictApplicationGetStatus501Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictApplicationGetStatus501Json;
    } | {
        contentType: "text/json";
        data: OpenIddictApplicationGetStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type OpenIddictApplicationGetResponse = (OpenIddictApplicationGetStatus200 | OpenIddictApplicationGetStatus400 | OpenIddictApplicationGetStatus401 | OpenIddictApplicationGetStatus403 | OpenIddictApplicationGetStatus404 | OpenIddictApplicationGetStatus500 | OpenIddictApplicationGetStatus501);
