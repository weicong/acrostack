/* oxlint-disable */

import type { AcroStackOpenIddictManagementCreateOpenIddictApplicationDto } from '../acroStack/openIddictManagement/CreateOpenIddictApplicationDto'
import type { AcroStackOpenIddictManagementOpenIddictApplicationDto } from '../acroStack/openIddictManagement/OpenIddictApplicationDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type OpenIddictApplicationCreateStatus200Plain = AcroStackOpenIddictManagementOpenIddictApplicationDto;

export type OpenIddictApplicationCreateStatus200Json = AcroStackOpenIddictManagementOpenIddictApplicationDto;

export type OpenIddictApplicationCreateStatus200Json2 = AcroStackOpenIddictManagementOpenIddictApplicationDto;

export type OpenIddictApplicationCreateStatus200 = (OpenIddictApplicationCreateStatus200Plain | OpenIddictApplicationCreateStatus200Json | OpenIddictApplicationCreateStatus200Json2);

export type OpenIddictApplicationCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus400 = (OpenIddictApplicationCreateStatus400Plain | OpenIddictApplicationCreateStatus400Json | OpenIddictApplicationCreateStatus400Json2);

export type OpenIddictApplicationCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus401 = (OpenIddictApplicationCreateStatus401Plain | OpenIddictApplicationCreateStatus401Json | OpenIddictApplicationCreateStatus401Json2);

export type OpenIddictApplicationCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus403 = (OpenIddictApplicationCreateStatus403Plain | OpenIddictApplicationCreateStatus403Json | OpenIddictApplicationCreateStatus403Json2);

export type OpenIddictApplicationCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus404 = (OpenIddictApplicationCreateStatus404Plain | OpenIddictApplicationCreateStatus404Json | OpenIddictApplicationCreateStatus404Json2);

export type OpenIddictApplicationCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus500 = (OpenIddictApplicationCreateStatus500Plain | OpenIddictApplicationCreateStatus500Json | OpenIddictApplicationCreateStatus500Json2);

export type OpenIddictApplicationCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationCreateStatus501 = (OpenIddictApplicationCreateStatus501Plain | OpenIddictApplicationCreateStatus501Json | OpenIddictApplicationCreateStatus501Json2);

export type OpenIddictApplicationCreateBodyJson = AcroStackOpenIddictManagementCreateOpenIddictApplicationDto | undefined;

export type OpenIddictApplicationCreateBodyJson2 = AcroStackOpenIddictManagementCreateOpenIddictApplicationDto | undefined;

export type OpenIddictApplicationCreateBodyJson3 = AcroStackOpenIddictManagementCreateOpenIddictApplicationDto | undefined;

export type OpenIddictApplicationCreateBody = (OpenIddictApplicationCreateBodyJson | OpenIddictApplicationCreateBodyJson2 | OpenIddictApplicationCreateBodyJson3);

export type OpenIddictApplicationCreateOptions = {
    body: OpenIddictApplicationCreateBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type OpenIddictApplicationCreateResponses = {
    "200": ({
        contentType: "text/plain";
        data: OpenIddictApplicationCreateStatus200Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictApplicationCreateStatus200Json;
    } | {
        contentType: "text/json";
        data: OpenIddictApplicationCreateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: OpenIddictApplicationCreateStatus400Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictApplicationCreateStatus400Json;
    } | {
        contentType: "text/json";
        data: OpenIddictApplicationCreateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: OpenIddictApplicationCreateStatus401Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictApplicationCreateStatus401Json;
    } | {
        contentType: "text/json";
        data: OpenIddictApplicationCreateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: OpenIddictApplicationCreateStatus403Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictApplicationCreateStatus403Json;
    } | {
        contentType: "text/json";
        data: OpenIddictApplicationCreateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: OpenIddictApplicationCreateStatus404Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictApplicationCreateStatus404Json;
    } | {
        contentType: "text/json";
        data: OpenIddictApplicationCreateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: OpenIddictApplicationCreateStatus500Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictApplicationCreateStatus500Json;
    } | {
        contentType: "text/json";
        data: OpenIddictApplicationCreateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: OpenIddictApplicationCreateStatus501Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictApplicationCreateStatus501Json;
    } | {
        contentType: "text/json";
        data: OpenIddictApplicationCreateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type OpenIddictApplicationCreateResponse = (OpenIddictApplicationCreateStatus200 | OpenIddictApplicationCreateStatus400 | OpenIddictApplicationCreateStatus401 | OpenIddictApplicationCreateStatus403 | OpenIddictApplicationCreateStatus404 | OpenIddictApplicationCreateStatus500 | OpenIddictApplicationCreateStatus501);
