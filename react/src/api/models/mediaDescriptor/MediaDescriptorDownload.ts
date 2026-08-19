/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type MediaDescriptorDownloadPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type MediaDescriptorDownloadStatus200Plain = Blob;

export type MediaDescriptorDownloadStatus200Json = Blob;

export type MediaDescriptorDownloadStatus200Json2 = Blob;

export type MediaDescriptorDownloadStatus200 = (MediaDescriptorDownloadStatus200Plain | MediaDescriptorDownloadStatus200Json | MediaDescriptorDownloadStatus200Json2);

export type MediaDescriptorDownloadStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus400 = (MediaDescriptorDownloadStatus400Plain | MediaDescriptorDownloadStatus400Json | MediaDescriptorDownloadStatus400Json2);

export type MediaDescriptorDownloadStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus401 = (MediaDescriptorDownloadStatus401Plain | MediaDescriptorDownloadStatus401Json | MediaDescriptorDownloadStatus401Json2);

export type MediaDescriptorDownloadStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus403 = (MediaDescriptorDownloadStatus403Plain | MediaDescriptorDownloadStatus403Json | MediaDescriptorDownloadStatus403Json2);

export type MediaDescriptorDownloadStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus404 = (MediaDescriptorDownloadStatus404Plain | MediaDescriptorDownloadStatus404Json | MediaDescriptorDownloadStatus404Json2);

export type MediaDescriptorDownloadStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus500 = (MediaDescriptorDownloadStatus500Plain | MediaDescriptorDownloadStatus500Json | MediaDescriptorDownloadStatus500Json2);

export type MediaDescriptorDownloadStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus501 = (MediaDescriptorDownloadStatus501Plain | MediaDescriptorDownloadStatus501Json | MediaDescriptorDownloadStatus501Json2);

export type MediaDescriptorDownloadOptions = {
    body?: never;
    path: MediaDescriptorDownloadPath;
    query?: never;
    headers?: never;
};

export type MediaDescriptorDownloadResponses = {
    "200": ({
        contentType: "text/plain";
        data: MediaDescriptorDownloadStatus200Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorDownloadStatus200Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorDownloadStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: MediaDescriptorDownloadStatus400Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorDownloadStatus400Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorDownloadStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: MediaDescriptorDownloadStatus401Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorDownloadStatus401Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorDownloadStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: MediaDescriptorDownloadStatus403Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorDownloadStatus403Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorDownloadStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: MediaDescriptorDownloadStatus404Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorDownloadStatus404Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorDownloadStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: MediaDescriptorDownloadStatus500Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorDownloadStatus500Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorDownloadStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: MediaDescriptorDownloadStatus501Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorDownloadStatus501Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorDownloadStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type MediaDescriptorDownloadResponse = (MediaDescriptorDownloadStatus200 | MediaDescriptorDownloadStatus400 | MediaDescriptorDownloadStatus401 | MediaDescriptorDownloadStatus403 | MediaDescriptorDownloadStatus404 | MediaDescriptorDownloadStatus500 | MediaDescriptorDownloadStatus501);
