/* oxlint-disable */

import type { AcroStackIdentityClaimsCreateIdentityRoleClaimDto } from '../acroStack/identityClaims/CreateIdentityRoleClaimDto'
import type { AcroStackIdentityClaimsIdentityClaimDto } from '../acroStack/identityClaims/IdentityClaimDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type IdentityRoleClaimCreateStatus200Plain = AcroStackIdentityClaimsIdentityClaimDto;

export type IdentityRoleClaimCreateStatus200Json = AcroStackIdentityClaimsIdentityClaimDto;

export type IdentityRoleClaimCreateStatus200Json2 = AcroStackIdentityClaimsIdentityClaimDto;

export type IdentityRoleClaimCreateStatus200 = (IdentityRoleClaimCreateStatus200Plain | IdentityRoleClaimCreateStatus200Json | IdentityRoleClaimCreateStatus200Json2);

export type IdentityRoleClaimCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus400 = (IdentityRoleClaimCreateStatus400Plain | IdentityRoleClaimCreateStatus400Json | IdentityRoleClaimCreateStatus400Json2);

export type IdentityRoleClaimCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus401 = (IdentityRoleClaimCreateStatus401Plain | IdentityRoleClaimCreateStatus401Json | IdentityRoleClaimCreateStatus401Json2);

export type IdentityRoleClaimCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus403 = (IdentityRoleClaimCreateStatus403Plain | IdentityRoleClaimCreateStatus403Json | IdentityRoleClaimCreateStatus403Json2);

export type IdentityRoleClaimCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus404 = (IdentityRoleClaimCreateStatus404Plain | IdentityRoleClaimCreateStatus404Json | IdentityRoleClaimCreateStatus404Json2);

export type IdentityRoleClaimCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus500 = (IdentityRoleClaimCreateStatus500Plain | IdentityRoleClaimCreateStatus500Json | IdentityRoleClaimCreateStatus500Json2);

export type IdentityRoleClaimCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityRoleClaimCreateStatus501 = (IdentityRoleClaimCreateStatus501Plain | IdentityRoleClaimCreateStatus501Json | IdentityRoleClaimCreateStatus501Json2);

export type IdentityRoleClaimCreateBodyJson = AcroStackIdentityClaimsCreateIdentityRoleClaimDto | undefined;

export type IdentityRoleClaimCreateBodyJson2 = AcroStackIdentityClaimsCreateIdentityRoleClaimDto | undefined;

export type IdentityRoleClaimCreateBodyJson3 = AcroStackIdentityClaimsCreateIdentityRoleClaimDto | undefined;

export type IdentityRoleClaimCreateBody = (IdentityRoleClaimCreateBodyJson | IdentityRoleClaimCreateBodyJson2 | IdentityRoleClaimCreateBodyJson3);

export type IdentityRoleClaimCreateOptions = {
    body: IdentityRoleClaimCreateBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type IdentityRoleClaimCreateResponses = {
    "200": ({
        contentType: "text/plain";
        data: IdentityRoleClaimCreateStatus200Plain;
    } | {
        contentType: "application/json";
        data: IdentityRoleClaimCreateStatus200Json;
    } | {
        contentType: "text/json";
        data: IdentityRoleClaimCreateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: IdentityRoleClaimCreateStatus400Plain;
    } | {
        contentType: "application/json";
        data: IdentityRoleClaimCreateStatus400Json;
    } | {
        contentType: "text/json";
        data: IdentityRoleClaimCreateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: IdentityRoleClaimCreateStatus401Plain;
    } | {
        contentType: "application/json";
        data: IdentityRoleClaimCreateStatus401Json;
    } | {
        contentType: "text/json";
        data: IdentityRoleClaimCreateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: IdentityRoleClaimCreateStatus403Plain;
    } | {
        contentType: "application/json";
        data: IdentityRoleClaimCreateStatus403Json;
    } | {
        contentType: "text/json";
        data: IdentityRoleClaimCreateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: IdentityRoleClaimCreateStatus404Plain;
    } | {
        contentType: "application/json";
        data: IdentityRoleClaimCreateStatus404Json;
    } | {
        contentType: "text/json";
        data: IdentityRoleClaimCreateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: IdentityRoleClaimCreateStatus500Plain;
    } | {
        contentType: "application/json";
        data: IdentityRoleClaimCreateStatus500Json;
    } | {
        contentType: "text/json";
        data: IdentityRoleClaimCreateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: IdentityRoleClaimCreateStatus501Plain;
    } | {
        contentType: "application/json";
        data: IdentityRoleClaimCreateStatus501Json;
    } | {
        contentType: "text/json";
        data: IdentityRoleClaimCreateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type IdentityRoleClaimCreateResponse = (IdentityRoleClaimCreateStatus200 | IdentityRoleClaimCreateStatus400 | IdentityRoleClaimCreateStatus401 | IdentityRoleClaimCreateStatus403 | IdentityRoleClaimCreateStatus404 | IdentityRoleClaimCreateStatus500 | IdentityRoleClaimCreateStatus501);
