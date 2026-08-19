/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type MarkedItemPublicTogglePath = {
    entityType: string;
    entityId: string;
};

export type MarkedItemPublicToggleStatus200Plain = boolean;

export type MarkedItemPublicToggleStatus200Json = boolean;

export type MarkedItemPublicToggleStatus200Json2 = boolean;

export type MarkedItemPublicToggleStatus200 = (MarkedItemPublicToggleStatus200Plain | MarkedItemPublicToggleStatus200Json | MarkedItemPublicToggleStatus200Json2);

export type MarkedItemPublicToggleStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus400 = (MarkedItemPublicToggleStatus400Plain | MarkedItemPublicToggleStatus400Json | MarkedItemPublicToggleStatus400Json2);

export type MarkedItemPublicToggleStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus401 = (MarkedItemPublicToggleStatus401Plain | MarkedItemPublicToggleStatus401Json | MarkedItemPublicToggleStatus401Json2);

export type MarkedItemPublicToggleStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus403 = (MarkedItemPublicToggleStatus403Plain | MarkedItemPublicToggleStatus403Json | MarkedItemPublicToggleStatus403Json2);

export type MarkedItemPublicToggleStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus404 = (MarkedItemPublicToggleStatus404Plain | MarkedItemPublicToggleStatus404Json | MarkedItemPublicToggleStatus404Json2);

export type MarkedItemPublicToggleStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus500 = (MarkedItemPublicToggleStatus500Plain | MarkedItemPublicToggleStatus500Json | MarkedItemPublicToggleStatus500Json2);

export type MarkedItemPublicToggleStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus501 = (MarkedItemPublicToggleStatus501Plain | MarkedItemPublicToggleStatus501Json | MarkedItemPublicToggleStatus501Json2);

export type MarkedItemPublicToggleOptions = {
    body?: never;
    path: MarkedItemPublicTogglePath;
    query?: never;
    headers?: never;
};

export type MarkedItemPublicToggleResponses = {
    "200": ({
        contentType: "text/plain";
        data: MarkedItemPublicToggleStatus200Plain;
    } | {
        contentType: "application/json";
        data: MarkedItemPublicToggleStatus200Json;
    } | {
        contentType: "text/json";
        data: MarkedItemPublicToggleStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: MarkedItemPublicToggleStatus400Plain;
    } | {
        contentType: "application/json";
        data: MarkedItemPublicToggleStatus400Json;
    } | {
        contentType: "text/json";
        data: MarkedItemPublicToggleStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: MarkedItemPublicToggleStatus401Plain;
    } | {
        contentType: "application/json";
        data: MarkedItemPublicToggleStatus401Json;
    } | {
        contentType: "text/json";
        data: MarkedItemPublicToggleStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: MarkedItemPublicToggleStatus403Plain;
    } | {
        contentType: "application/json";
        data: MarkedItemPublicToggleStatus403Json;
    } | {
        contentType: "text/json";
        data: MarkedItemPublicToggleStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: MarkedItemPublicToggleStatus404Plain;
    } | {
        contentType: "application/json";
        data: MarkedItemPublicToggleStatus404Json;
    } | {
        contentType: "text/json";
        data: MarkedItemPublicToggleStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: MarkedItemPublicToggleStatus500Plain;
    } | {
        contentType: "application/json";
        data: MarkedItemPublicToggleStatus500Json;
    } | {
        contentType: "text/json";
        data: MarkedItemPublicToggleStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: MarkedItemPublicToggleStatus501Plain;
    } | {
        contentType: "application/json";
        data: MarkedItemPublicToggleStatus501Json;
    } | {
        contentType: "text/json";
        data: MarkedItemPublicToggleStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type MarkedItemPublicToggleResponse = (MarkedItemPublicToggleStatus200 | MarkedItemPublicToggleStatus400 | MarkedItemPublicToggleStatus401 | MarkedItemPublicToggleStatus403 | MarkedItemPublicToggleStatus404 | MarkedItemPublicToggleStatus500 | MarkedItemPublicToggleStatus501);
