/* oxlint-disable */

import type { AcroStackIdentityClaimsIdentityClaimDto } from '../acroStack/identityClaims/IdentityClaimDto'
import type { AcroStackIdentityClaimsUpdateIdentityClaimDto } from '../acroStack/identityClaims/UpdateIdentityClaimDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type IdentityUserClaimUpdatePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type IdentityUserClaimUpdateStatus200Plain = AcroStackIdentityClaimsIdentityClaimDto;

export type IdentityUserClaimUpdateStatus200Json = AcroStackIdentityClaimsIdentityClaimDto;

export type IdentityUserClaimUpdateStatus200Json2 = AcroStackIdentityClaimsIdentityClaimDto;

export type IdentityUserClaimUpdateStatus200 = (IdentityUserClaimUpdateStatus200Plain | IdentityUserClaimUpdateStatus200Json | IdentityUserClaimUpdateStatus200Json2);

export type IdentityUserClaimUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus400 = (IdentityUserClaimUpdateStatus400Plain | IdentityUserClaimUpdateStatus400Json | IdentityUserClaimUpdateStatus400Json2);

export type IdentityUserClaimUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus401 = (IdentityUserClaimUpdateStatus401Plain | IdentityUserClaimUpdateStatus401Json | IdentityUserClaimUpdateStatus401Json2);

export type IdentityUserClaimUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus403 = (IdentityUserClaimUpdateStatus403Plain | IdentityUserClaimUpdateStatus403Json | IdentityUserClaimUpdateStatus403Json2);

export type IdentityUserClaimUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus404 = (IdentityUserClaimUpdateStatus404Plain | IdentityUserClaimUpdateStatus404Json | IdentityUserClaimUpdateStatus404Json2);

export type IdentityUserClaimUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus500 = (IdentityUserClaimUpdateStatus500Plain | IdentityUserClaimUpdateStatus500Json | IdentityUserClaimUpdateStatus500Json2);

export type IdentityUserClaimUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimUpdateStatus501 = (IdentityUserClaimUpdateStatus501Plain | IdentityUserClaimUpdateStatus501Json | IdentityUserClaimUpdateStatus501Json2);

export type IdentityUserClaimUpdateBodyJson = AcroStackIdentityClaimsUpdateIdentityClaimDto | undefined;

export type IdentityUserClaimUpdateBodyJson2 = AcroStackIdentityClaimsUpdateIdentityClaimDto | undefined;

export type IdentityUserClaimUpdateBodyJson3 = AcroStackIdentityClaimsUpdateIdentityClaimDto | undefined;

export type IdentityUserClaimUpdateBody = (IdentityUserClaimUpdateBodyJson | IdentityUserClaimUpdateBodyJson2 | IdentityUserClaimUpdateBodyJson3);

export type IdentityUserClaimUpdateOptions = {
    body: IdentityUserClaimUpdateBody;
    path: IdentityUserClaimUpdatePath;
    query?: never;
    headers?: never;
};

export type IdentityUserClaimUpdateResponses = {
    "200": ({
        contentType: "text/plain";
        data: IdentityUserClaimUpdateStatus200Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimUpdateStatus200Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimUpdateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: IdentityUserClaimUpdateStatus400Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimUpdateStatus400Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimUpdateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: IdentityUserClaimUpdateStatus401Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimUpdateStatus401Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimUpdateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: IdentityUserClaimUpdateStatus403Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimUpdateStatus403Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimUpdateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: IdentityUserClaimUpdateStatus404Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimUpdateStatus404Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimUpdateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: IdentityUserClaimUpdateStatus500Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimUpdateStatus500Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimUpdateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: IdentityUserClaimUpdateStatus501Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimUpdateStatus501Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimUpdateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type IdentityUserClaimUpdateResponse = (IdentityUserClaimUpdateStatus200 | IdentityUserClaimUpdateStatus400 | IdentityUserClaimUpdateStatus401 | IdentityUserClaimUpdateStatus403 | IdentityUserClaimUpdateStatus404 | IdentityUserClaimUpdateStatus500 | IdentityUserClaimUpdateStatus501);
