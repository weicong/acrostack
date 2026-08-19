/* oxlint-disable */

import type { AcroStackFileManagementStorageInfoDto } from '../acroStack/fileManagement/StorageInfoDto'

export type FileManagementGetStorageInfoStatus200Plain = AcroStackFileManagementStorageInfoDto;

export type FileManagementGetStorageInfoStatus200Json = AcroStackFileManagementStorageInfoDto;

export type FileManagementGetStorageInfoStatus200Json2 = AcroStackFileManagementStorageInfoDto;

export type FileManagementGetStorageInfoStatus200 = (FileManagementGetStorageInfoStatus200Plain | FileManagementGetStorageInfoStatus200Json | FileManagementGetStorageInfoStatus200Json2);

export type FileManagementGetStorageInfoOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type FileManagementGetStorageInfoResponses = {
    "200": ({
        contentType: "text/plain";
        data: FileManagementGetStorageInfoStatus200Plain;
    } | {
        contentType: "application/json";
        data: FileManagementGetStorageInfoStatus200Json;
    } | {
        contentType: "text/json";
        data: FileManagementGetStorageInfoStatus200Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type FileManagementGetStorageInfoResponse = FileManagementGetStorageInfoStatus200;
