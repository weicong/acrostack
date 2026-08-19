/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitAdminMediaDescriptorsMediaDescriptorDto } from '../volo/cmsKit/admin/mediaDescriptors/MediaDescriptorDto'

export type MediaDescriptorAdminCreatePath = {
    entityType: string;
};

export type MediaDescriptorAdminCreateQuery = {
    /**
     * @minLength 0
     * @maxLength 255
     * @type string
    */
    Name: string;
};

export type MediaDescriptorAdminCreateStatus200Plain = VoloCmsKitAdminMediaDescriptorsMediaDescriptorDto;

export type MediaDescriptorAdminCreateStatus200Json = VoloCmsKitAdminMediaDescriptorsMediaDescriptorDto;

export type MediaDescriptorAdminCreateStatus200Json2 = VoloCmsKitAdminMediaDescriptorsMediaDescriptorDto;

export type MediaDescriptorAdminCreateStatus200 = (MediaDescriptorAdminCreateStatus200Plain | MediaDescriptorAdminCreateStatus200Json | MediaDescriptorAdminCreateStatus200Json2);

export type MediaDescriptorAdminCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus400 = (MediaDescriptorAdminCreateStatus400Plain | MediaDescriptorAdminCreateStatus400Json | MediaDescriptorAdminCreateStatus400Json2);

export type MediaDescriptorAdminCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus401 = (MediaDescriptorAdminCreateStatus401Plain | MediaDescriptorAdminCreateStatus401Json | MediaDescriptorAdminCreateStatus401Json2);

export type MediaDescriptorAdminCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus403 = (MediaDescriptorAdminCreateStatus403Plain | MediaDescriptorAdminCreateStatus403Json | MediaDescriptorAdminCreateStatus403Json2);

export type MediaDescriptorAdminCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus404 = (MediaDescriptorAdminCreateStatus404Plain | MediaDescriptorAdminCreateStatus404Json | MediaDescriptorAdminCreateStatus404Json2);

export type MediaDescriptorAdminCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus500 = (MediaDescriptorAdminCreateStatus500Plain | MediaDescriptorAdminCreateStatus500Json | MediaDescriptorAdminCreateStatus500Json2);

export type MediaDescriptorAdminCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus501 = (MediaDescriptorAdminCreateStatus501Plain | MediaDescriptorAdminCreateStatus501Json | MediaDescriptorAdminCreateStatus501Json2);

export type MediaDescriptorAdminCreateBody = {
    File?: Blob;
} | undefined;

export type MediaDescriptorAdminCreateOptions = {
    body: MediaDescriptorAdminCreateBody;
    path: MediaDescriptorAdminCreatePath;
    query: MediaDescriptorAdminCreateQuery;
    headers?: never;
};

export type MediaDescriptorAdminCreateResponses = {
    "200": ({
        contentType: "text/plain";
        data: MediaDescriptorAdminCreateStatus200Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorAdminCreateStatus200Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorAdminCreateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: MediaDescriptorAdminCreateStatus400Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorAdminCreateStatus400Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorAdminCreateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: MediaDescriptorAdminCreateStatus401Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorAdminCreateStatus401Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorAdminCreateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: MediaDescriptorAdminCreateStatus403Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorAdminCreateStatus403Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorAdminCreateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: MediaDescriptorAdminCreateStatus404Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorAdminCreateStatus404Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorAdminCreateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: MediaDescriptorAdminCreateStatus500Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorAdminCreateStatus500Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorAdminCreateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: MediaDescriptorAdminCreateStatus501Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorAdminCreateStatus501Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorAdminCreateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type MediaDescriptorAdminCreateResponse = (MediaDescriptorAdminCreateStatus200 | MediaDescriptorAdminCreateStatus400 | MediaDescriptorAdminCreateStatus401 | MediaDescriptorAdminCreateStatus403 | MediaDescriptorAdminCreateStatus404 | MediaDescriptorAdminCreateStatus500 | MediaDescriptorAdminCreateStatus501);
