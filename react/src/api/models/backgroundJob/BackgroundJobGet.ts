/* oxlint-disable */

import type { AcroStackBackgroundJobsBackgroundJobDto } from '../acroStack/backgroundJobs/BackgroundJobDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type BackgroundJobGetPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type BackgroundJobGetStatus200Plain = AcroStackBackgroundJobsBackgroundJobDto;

export type BackgroundJobGetStatus200Json = AcroStackBackgroundJobsBackgroundJobDto;

export type BackgroundJobGetStatus200Json2 = AcroStackBackgroundJobsBackgroundJobDto;

export type BackgroundJobGetStatus200 = (BackgroundJobGetStatus200Plain | BackgroundJobGetStatus200Json | BackgroundJobGetStatus200Json2);

export type BackgroundJobGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus400 = (BackgroundJobGetStatus400Plain | BackgroundJobGetStatus400Json | BackgroundJobGetStatus400Json2);

export type BackgroundJobGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus401 = (BackgroundJobGetStatus401Plain | BackgroundJobGetStatus401Json | BackgroundJobGetStatus401Json2);

export type BackgroundJobGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus403 = (BackgroundJobGetStatus403Plain | BackgroundJobGetStatus403Json | BackgroundJobGetStatus403Json2);

export type BackgroundJobGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus404 = (BackgroundJobGetStatus404Plain | BackgroundJobGetStatus404Json | BackgroundJobGetStatus404Json2);

export type BackgroundJobGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus500 = (BackgroundJobGetStatus500Plain | BackgroundJobGetStatus500Json | BackgroundJobGetStatus500Json2);

export type BackgroundJobGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus501 = (BackgroundJobGetStatus501Plain | BackgroundJobGetStatus501Json | BackgroundJobGetStatus501Json2);

export type BackgroundJobGetOptions = {
    body?: never;
    path: BackgroundJobGetPath;
    query?: never;
    headers?: never;
};

export type BackgroundJobGetResponses = {
    "200": ({
        contentType: "text/plain";
        data: BackgroundJobGetStatus200Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobGetStatus200Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobGetStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: BackgroundJobGetStatus400Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobGetStatus400Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobGetStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BackgroundJobGetStatus401Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobGetStatus401Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobGetStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BackgroundJobGetStatus403Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobGetStatus403Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobGetStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BackgroundJobGetStatus404Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobGetStatus404Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobGetStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BackgroundJobGetStatus500Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobGetStatus500Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobGetStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BackgroundJobGetStatus501Plain;
    } | {
        contentType: "application/json";
        data: BackgroundJobGetStatus501Json;
    } | {
        contentType: "text/json";
        data: BackgroundJobGetStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BackgroundJobGetResponse = (BackgroundJobGetStatus200 | BackgroundJobGetStatus400 | BackgroundJobGetStatus401 | BackgroundJobGetStatus403 | BackgroundJobGetStatus404 | BackgroundJobGetStatus500 | BackgroundJobGetStatus501);
