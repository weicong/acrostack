/* oxlint-disable */

import type { AcroStackFileManagementFileEntryDto } from '../acroStack/fileManagement/FileEntryDto'
import type { AcroStackFileManagementMoveFileDto } from '../acroStack/fileManagement/MoveFileDto'

export type FileManagementMoveFilePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type FileManagementMoveFileStatus200Plain = AcroStackFileManagementFileEntryDto;

export type FileManagementMoveFileStatus200Json = AcroStackFileManagementFileEntryDto;

export type FileManagementMoveFileStatus200Json2 = AcroStackFileManagementFileEntryDto;

export type FileManagementMoveFileStatus200 = (FileManagementMoveFileStatus200Plain | FileManagementMoveFileStatus200Json | FileManagementMoveFileStatus200Json2);

export type FileManagementMoveFileBodyJson = AcroStackFileManagementMoveFileDto | undefined;

export type FileManagementMoveFileBodyJson2 = AcroStackFileManagementMoveFileDto | undefined;

export type FileManagementMoveFileBodyJson3 = AcroStackFileManagementMoveFileDto | undefined;

export type FileManagementMoveFileBody = (FileManagementMoveFileBodyJson | FileManagementMoveFileBodyJson2 | FileManagementMoveFileBodyJson3);

export type FileManagementMoveFileOptions = {
    body: FileManagementMoveFileBody;
    path: FileManagementMoveFilePath;
    query?: never;
    headers?: never;
};

export type FileManagementMoveFileResponses = {
    "200": ({
        contentType: "text/plain";
        data: FileManagementMoveFileStatus200Plain;
    } | {
        contentType: "application/json";
        data: FileManagementMoveFileStatus200Json;
    } | {
        contentType: "text/json";
        data: FileManagementMoveFileStatus200Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type FileManagementMoveFileResponse = FileManagementMoveFileStatus200;
