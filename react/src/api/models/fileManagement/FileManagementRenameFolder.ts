/* oxlint-disable */

import type { AcroStackFileManagementFileFolderDto } from '../acroStack/fileManagement/FileFolderDto'
import type { AcroStackFileManagementRenameDto } from '../acroStack/fileManagement/RenameDto'

export type FileManagementRenameFolderPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type FileManagementRenameFolderStatus200Plain = AcroStackFileManagementFileFolderDto;

export type FileManagementRenameFolderStatus200Json = AcroStackFileManagementFileFolderDto;

export type FileManagementRenameFolderStatus200Json2 = AcroStackFileManagementFileFolderDto;

export type FileManagementRenameFolderStatus200 = (FileManagementRenameFolderStatus200Plain | FileManagementRenameFolderStatus200Json | FileManagementRenameFolderStatus200Json2);

export type FileManagementRenameFolderBodyJson = AcroStackFileManagementRenameDto | undefined;

export type FileManagementRenameFolderBodyJson2 = AcroStackFileManagementRenameDto | undefined;

export type FileManagementRenameFolderBodyJson3 = AcroStackFileManagementRenameDto | undefined;

export type FileManagementRenameFolderBody = (FileManagementRenameFolderBodyJson | FileManagementRenameFolderBodyJson2 | FileManagementRenameFolderBodyJson3);

export type FileManagementRenameFolderOptions = {
    body: FileManagementRenameFolderBody;
    path: FileManagementRenameFolderPath;
    query?: never;
    headers?: never;
};

export type FileManagementRenameFolderResponses = {
    "200": ({
        contentType: "text/plain";
        data: FileManagementRenameFolderStatus200Plain;
    } | {
        contentType: "application/json";
        data: FileManagementRenameFolderStatus200Json;
    } | {
        contentType: "text/json";
        data: FileManagementRenameFolderStatus200Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type FileManagementRenameFolderResponse = FileManagementRenameFolderStatus200;
