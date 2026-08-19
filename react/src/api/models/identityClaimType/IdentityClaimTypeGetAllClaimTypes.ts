/* oxlint-disable */

import type { AcroStackIdentityClaimsIdentityClaimTypeDto } from '../acroStack/identityClaims/IdentityClaimTypeDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type IdentityClaimTypeGetAllClaimTypesStatus200Plain = AcroStackIdentityClaimsIdentityClaimTypeDto[];

export type IdentityClaimTypeGetAllClaimTypesStatus200Json = AcroStackIdentityClaimsIdentityClaimTypeDto[];

export type IdentityClaimTypeGetAllClaimTypesStatus200Json2 = AcroStackIdentityClaimsIdentityClaimTypeDto[];

export type IdentityClaimTypeGetAllClaimTypesStatus200 = (IdentityClaimTypeGetAllClaimTypesStatus200Plain | IdentityClaimTypeGetAllClaimTypesStatus200Json | IdentityClaimTypeGetAllClaimTypesStatus200Json2);

export type IdentityClaimTypeGetAllClaimTypesStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus400 = (IdentityClaimTypeGetAllClaimTypesStatus400Plain | IdentityClaimTypeGetAllClaimTypesStatus400Json | IdentityClaimTypeGetAllClaimTypesStatus400Json2);

export type IdentityClaimTypeGetAllClaimTypesStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus401 = (IdentityClaimTypeGetAllClaimTypesStatus401Plain | IdentityClaimTypeGetAllClaimTypesStatus401Json | IdentityClaimTypeGetAllClaimTypesStatus401Json2);

export type IdentityClaimTypeGetAllClaimTypesStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus403 = (IdentityClaimTypeGetAllClaimTypesStatus403Plain | IdentityClaimTypeGetAllClaimTypesStatus403Json | IdentityClaimTypeGetAllClaimTypesStatus403Json2);

export type IdentityClaimTypeGetAllClaimTypesStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus404 = (IdentityClaimTypeGetAllClaimTypesStatus404Plain | IdentityClaimTypeGetAllClaimTypesStatus404Json | IdentityClaimTypeGetAllClaimTypesStatus404Json2);

export type IdentityClaimTypeGetAllClaimTypesStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus500 = (IdentityClaimTypeGetAllClaimTypesStatus500Plain | IdentityClaimTypeGetAllClaimTypesStatus500Json | IdentityClaimTypeGetAllClaimTypesStatus500Json2);

export type IdentityClaimTypeGetAllClaimTypesStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeGetAllClaimTypesStatus501 = (IdentityClaimTypeGetAllClaimTypesStatus501Plain | IdentityClaimTypeGetAllClaimTypesStatus501Json | IdentityClaimTypeGetAllClaimTypesStatus501Json2);

export type IdentityClaimTypeGetAllClaimTypesOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type IdentityClaimTypeGetAllClaimTypesResponses = {
    "200": ({
        contentType: "text/plain";
        data: IdentityClaimTypeGetAllClaimTypesStatus200Plain;
    } | {
        contentType: "application/json";
        data: IdentityClaimTypeGetAllClaimTypesStatus200Json;
    } | {
        contentType: "text/json";
        data: IdentityClaimTypeGetAllClaimTypesStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: IdentityClaimTypeGetAllClaimTypesStatus400Plain;
    } | {
        contentType: "application/json";
        data: IdentityClaimTypeGetAllClaimTypesStatus400Json;
    } | {
        contentType: "text/json";
        data: IdentityClaimTypeGetAllClaimTypesStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: IdentityClaimTypeGetAllClaimTypesStatus401Plain;
    } | {
        contentType: "application/json";
        data: IdentityClaimTypeGetAllClaimTypesStatus401Json;
    } | {
        contentType: "text/json";
        data: IdentityClaimTypeGetAllClaimTypesStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: IdentityClaimTypeGetAllClaimTypesStatus403Plain;
    } | {
        contentType: "application/json";
        data: IdentityClaimTypeGetAllClaimTypesStatus403Json;
    } | {
        contentType: "text/json";
        data: IdentityClaimTypeGetAllClaimTypesStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: IdentityClaimTypeGetAllClaimTypesStatus404Plain;
    } | {
        contentType: "application/json";
        data: IdentityClaimTypeGetAllClaimTypesStatus404Json;
    } | {
        contentType: "text/json";
        data: IdentityClaimTypeGetAllClaimTypesStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: IdentityClaimTypeGetAllClaimTypesStatus500Plain;
    } | {
        contentType: "application/json";
        data: IdentityClaimTypeGetAllClaimTypesStatus500Json;
    } | {
        contentType: "text/json";
        data: IdentityClaimTypeGetAllClaimTypesStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: IdentityClaimTypeGetAllClaimTypesStatus501Plain;
    } | {
        contentType: "application/json";
        data: IdentityClaimTypeGetAllClaimTypesStatus501Json;
    } | {
        contentType: "text/json";
        data: IdentityClaimTypeGetAllClaimTypesStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type IdentityClaimTypeGetAllClaimTypesResponse = (IdentityClaimTypeGetAllClaimTypesStatus200 | IdentityClaimTypeGetAllClaimTypesStatus400 | IdentityClaimTypeGetAllClaimTypesStatus401 | IdentityClaimTypeGetAllClaimTypesStatus403 | IdentityClaimTypeGetAllClaimTypesStatus404 | IdentityClaimTypeGetAllClaimTypesStatus500 | IdentityClaimTypeGetAllClaimTypesStatus501);
