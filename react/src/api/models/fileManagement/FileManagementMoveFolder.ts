/* oxlint-disable */

import type { AcroStackFileManagementFileFolderDto } from '../acroStack/fileManagement/FileFolderDto'
import type { AcroStackFileManagementMoveFolderDto } from '../acroStack/fileManagement/MoveFolderDto'

export type FileManagementMoveFolderPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type FileManagementMoveFolderStatus200Plain = AcroStackFileManagementFileFolderDto;

export type FileManagementMoveFolderStatus200Json = AcroStackFileManagementFileFolderDto;

export type FileManagementMoveFolderStatus200Json2 = AcroStackFileManagementFileFolderDto;

export type FileManagementMoveFolderStatus200 = (FileManagementMoveFolderStatus200Plain | FileManagementMoveFolderStatus200Json | FileManagementMoveFolderStatus200Json2);

export type FileManagementMoveFolderBodyJson = AcroStackFileManagementMoveFolderDto | undefined;

export type FileManagementMoveFolderBodyJson2 = AcroStackFileManagementMoveFolderDto | undefined;

export type FileManagementMoveFolderBodyJson3 = AcroStackFileManagementMoveFolderDto | undefined;

export type FileManagementMoveFolderBody = (FileManagementMoveFolderBodyJson | FileManagementMoveFolderBodyJson2 | FileManagementMoveFolderBodyJson3);

export type FileManagementMoveFolderOptions = {
    body: FileManagementMoveFolderBody;
    path: FileManagementMoveFolderPath;
    query?: never;
    headers?: never;
};

export type FileManagementMoveFolderResponses = {
    "200": ({
        contentType: "text/plain";
        data: FileManagementMoveFolderStatus200Plain;
    } | {
        contentType: "application/json";
        data: FileManagementMoveFolderStatus200Json;
    } | {
        contentType: "text/json";
        data: FileManagementMoveFolderStatus200Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type FileManagementMoveFolderResponse = FileManagementMoveFolderStatus200;
