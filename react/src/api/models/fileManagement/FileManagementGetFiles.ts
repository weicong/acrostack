/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileEntryDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/listResultDto1AcroStack/fileManagement/fileEntryDtoAcroStack/FileManagementVersion1000CultureneutralPublicKeyTokennull'

export type FileManagementGetFilesQuery = {
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    folderId?: string;
};

export type FileManagementGetFilesStatus200Plain = VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileEntryDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

export type FileManagementGetFilesStatus200Json = VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileEntryDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

export type FileManagementGetFilesStatus200Json2 = VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileEntryDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

export type FileManagementGetFilesStatus200 = (FileManagementGetFilesStatus200Plain | FileManagementGetFilesStatus200Json | FileManagementGetFilesStatus200Json2);

export type FileManagementGetFilesOptions = {
    body?: never;
    path?: never;
    query?: FileManagementGetFilesQuery;
    headers?: never;
};

export type FileManagementGetFilesResponses = {
    "200": ({
        contentType: "text/plain";
        data: FileManagementGetFilesStatus200Plain;
    } | {
        contentType: "application/json";
        data: FileManagementGetFilesStatus200Json;
    } | {
        contentType: "text/json";
        data: FileManagementGetFilesStatus200Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type FileManagementGetFilesResponse = FileManagementGetFilesStatus200;
