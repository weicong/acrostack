/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileVersionDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/listResultDto1AcroStack/fileManagement/fileVersionDtoAcroStack/FileManagementVersion1000CultureneutralPublicKeyTokennull'

export type FileManagementGetFileVersionsPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type FileManagementGetFileVersionsStatus200Plain = VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileVersionDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

export type FileManagementGetFileVersionsStatus200Json = VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileVersionDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

export type FileManagementGetFileVersionsStatus200Json2 = VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileVersionDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

export type FileManagementGetFileVersionsStatus200 = (FileManagementGetFileVersionsStatus200Plain | FileManagementGetFileVersionsStatus200Json | FileManagementGetFileVersionsStatus200Json2);

export type FileManagementGetFileVersionsOptions = {
    body?: never;
    path: FileManagementGetFileVersionsPath;
    query?: never;
    headers?: never;
};

export type FileManagementGetFileVersionsResponses = {
    "200": ({
        contentType: "text/plain";
        data: FileManagementGetFileVersionsStatus200Plain;
    } | {
        contentType: "application/json";
        data: FileManagementGetFileVersionsStatus200Json;
    } | {
        contentType: "text/json";
        data: FileManagementGetFileVersionsStatus200Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type FileManagementGetFileVersionsResponse = FileManagementGetFileVersionsStatus200;
