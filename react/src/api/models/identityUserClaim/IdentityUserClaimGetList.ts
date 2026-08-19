/* oxlint-disable */

import type { AcroStackIdentityClaimsIdentityClaimDto } from '../acroStack/identityClaims/IdentityClaimDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type IdentityUserClaimGetListQuery = {
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    userId?: string;
};

export type IdentityUserClaimGetListStatus200Plain = AcroStackIdentityClaimsIdentityClaimDto[];

export type IdentityUserClaimGetListStatus200Json = AcroStackIdentityClaimsIdentityClaimDto[];

export type IdentityUserClaimGetListStatus200Json2 = AcroStackIdentityClaimsIdentityClaimDto[];

export type IdentityUserClaimGetListStatus200 = (IdentityUserClaimGetListStatus200Plain | IdentityUserClaimGetListStatus200Json | IdentityUserClaimGetListStatus200Json2);

export type IdentityUserClaimGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus400 = (IdentityUserClaimGetListStatus400Plain | IdentityUserClaimGetListStatus400Json | IdentityUserClaimGetListStatus400Json2);

export type IdentityUserClaimGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus401 = (IdentityUserClaimGetListStatus401Plain | IdentityUserClaimGetListStatus401Json | IdentityUserClaimGetListStatus401Json2);

export type IdentityUserClaimGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus403 = (IdentityUserClaimGetListStatus403Plain | IdentityUserClaimGetListStatus403Json | IdentityUserClaimGetListStatus403Json2);

export type IdentityUserClaimGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus404 = (IdentityUserClaimGetListStatus404Plain | IdentityUserClaimGetListStatus404Json | IdentityUserClaimGetListStatus404Json2);

export type IdentityUserClaimGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus500 = (IdentityUserClaimGetListStatus500Plain | IdentityUserClaimGetListStatus500Json | IdentityUserClaimGetListStatus500Json2);

export type IdentityUserClaimGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimGetListStatus501 = (IdentityUserClaimGetListStatus501Plain | IdentityUserClaimGetListStatus501Json | IdentityUserClaimGetListStatus501Json2);

export type IdentityUserClaimGetListOptions = {
    body?: never;
    path?: never;
    query?: IdentityUserClaimGetListQuery;
    headers?: never;
};

export type IdentityUserClaimGetListResponses = {
    "200": ({
        contentType: "text/plain";
        data: IdentityUserClaimGetListStatus200Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimGetListStatus200Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimGetListStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: IdentityUserClaimGetListStatus400Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimGetListStatus400Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimGetListStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: IdentityUserClaimGetListStatus401Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimGetListStatus401Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimGetListStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: IdentityUserClaimGetListStatus403Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimGetListStatus403Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimGetListStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: IdentityUserClaimGetListStatus404Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimGetListStatus404Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimGetListStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: IdentityUserClaimGetListStatus500Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimGetListStatus500Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimGetListStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: IdentityUserClaimGetListStatus501Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimGetListStatus501Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimGetListStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type IdentityUserClaimGetListResponse = (IdentityUserClaimGetListStatus200 | IdentityUserClaimGetListStatus400 | IdentityUserClaimGetListStatus401 | IdentityUserClaimGetListStatus403 | IdentityUserClaimGetListStatus404 | IdentityUserClaimGetListStatus500 | IdentityUserClaimGetListStatus501);
