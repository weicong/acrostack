/* oxlint-disable */

import type { AcroStackBooksBookDto } from '../acroStack/books/BookDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type BookGetPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type BookGetStatus200Plain = AcroStackBooksBookDto;

export type BookGetStatus200Json = AcroStackBooksBookDto;

export type BookGetStatus200Json2 = AcroStackBooksBookDto;

export type BookGetStatus200 = (BookGetStatus200Plain | BookGetStatus200Json | BookGetStatus200Json2);

export type BookGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus400 = (BookGetStatus400Plain | BookGetStatus400Json | BookGetStatus400Json2);

export type BookGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus401 = (BookGetStatus401Plain | BookGetStatus401Json | BookGetStatus401Json2);

export type BookGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus403 = (BookGetStatus403Plain | BookGetStatus403Json | BookGetStatus403Json2);

export type BookGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus404 = (BookGetStatus404Plain | BookGetStatus404Json | BookGetStatus404Json2);

export type BookGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus500 = (BookGetStatus500Plain | BookGetStatus500Json | BookGetStatus500Json2);

export type BookGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus501 = (BookGetStatus501Plain | BookGetStatus501Json | BookGetStatus501Json2);

export type BookGetOptions = {
    body?: never;
    path: BookGetPath;
    query?: never;
    headers?: never;
};

export type BookGetResponses = {
    "200": ({
        contentType: "text/plain";
        data: BookGetStatus200Plain;
    } | {
        contentType: "application/json";
        data: BookGetStatus200Json;
    } | {
        contentType: "text/json";
        data: BookGetStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: BookGetStatus400Plain;
    } | {
        contentType: "application/json";
        data: BookGetStatus400Json;
    } | {
        contentType: "text/json";
        data: BookGetStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: BookGetStatus401Plain;
    } | {
        contentType: "application/json";
        data: BookGetStatus401Json;
    } | {
        contentType: "text/json";
        data: BookGetStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: BookGetStatus403Plain;
    } | {
        contentType: "application/json";
        data: BookGetStatus403Json;
    } | {
        contentType: "text/json";
        data: BookGetStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: BookGetStatus404Plain;
    } | {
        contentType: "application/json";
        data: BookGetStatus404Json;
    } | {
        contentType: "text/json";
        data: BookGetStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: BookGetStatus500Plain;
    } | {
        contentType: "application/json";
        data: BookGetStatus500Json;
    } | {
        contentType: "text/json";
        data: BookGetStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: BookGetStatus501Plain;
    } | {
        contentType: "application/json";
        data: BookGetStatus501Json;
    } | {
        contentType: "text/json";
        data: BookGetStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type BookGetResponse = (BookGetStatus200 | BookGetStatus400 | BookGetStatus401 | BookGetStatus403 | BookGetStatus404 | BookGetStatus500 | BookGetStatus501);
