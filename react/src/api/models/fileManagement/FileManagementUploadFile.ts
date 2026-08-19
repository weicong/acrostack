/* oxlint-disable */

import type { AcroStackFileManagementFileEntryDto } from '../acroStack/fileManagement/FileEntryDto'

export type FileManagementUploadFileQuery = {
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    folderId?: string;
};

export type FileManagementUploadFileStatus200Plain = AcroStackFileManagementFileEntryDto;

export type FileManagementUploadFileStatus200Json = AcroStackFileManagementFileEntryDto;

export type FileManagementUploadFileStatus200Json2 = AcroStackFileManagementFileEntryDto;

export type FileManagementUploadFileStatus200 = (FileManagementUploadFileStatus200Plain | FileManagementUploadFileStatus200Json | FileManagementUploadFileStatus200Json2);

export type FileManagementUploadFileBody = {
    file?: Blob;
} | undefined;

export type FileManagementUploadFileOptions = {
    body: FileManagementUploadFileBody;
    path?: never;
    query?: FileManagementUploadFileQuery;
    headers?: never;
};

export type FileManagementUploadFileResponses = {
    "200": ({
        contentType: "text/plain";
        data: FileManagementUploadFileStatus200Plain;
    } | {
        contentType: "application/json";
        data: FileManagementUploadFileStatus200Json;
    } | {
        contentType: "text/json";
        data: FileManagementUploadFileStatus200Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type FileManagementUploadFileResponse = FileManagementUploadFileStatus200;
