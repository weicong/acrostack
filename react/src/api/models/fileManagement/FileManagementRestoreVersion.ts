/* oxlint-disable */

import type { AcroStackFileManagementFileEntryDto } from '../acroStack/fileManagement/FileEntryDto'

export type FileManagementRestoreVersionPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    versionId: string;
};

export type FileManagementRestoreVersionStatus200Plain = AcroStackFileManagementFileEntryDto;

export type FileManagementRestoreVersionStatus200Json = AcroStackFileManagementFileEntryDto;

export type FileManagementRestoreVersionStatus200Json2 = AcroStackFileManagementFileEntryDto;

export type FileManagementRestoreVersionStatus200 = (FileManagementRestoreVersionStatus200Plain | FileManagementRestoreVersionStatus200Json | FileManagementRestoreVersionStatus200Json2);

export type FileManagementRestoreVersionOptions = {
    body?: never;
    path: FileManagementRestoreVersionPath;
    query?: never;
    headers?: never;
};

export type FileManagementRestoreVersionResponses = {
    "200": ({
        contentType: "text/plain";
        data: FileManagementRestoreVersionStatus200Plain;
    } | {
        contentType: "application/json";
        data: FileManagementRestoreVersionStatus200Json;
    } | {
        contentType: "text/json";
        data: FileManagementRestoreVersionStatus200Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type FileManagementRestoreVersionResponse = FileManagementRestoreVersionStatus200;
