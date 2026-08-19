/* oxlint-disable */

import type { AcroStackFileManagementCreateFileFolderDto } from '../acroStack/fileManagement/CreateFileFolderDto'
import type { AcroStackFileManagementFileFolderDto } from '../acroStack/fileManagement/FileFolderDto'

export type FileManagementCreateFolderStatus200Plain = AcroStackFileManagementFileFolderDto;

export type FileManagementCreateFolderStatus200Json = AcroStackFileManagementFileFolderDto;

export type FileManagementCreateFolderStatus200Json2 = AcroStackFileManagementFileFolderDto;

export type FileManagementCreateFolderStatus200 = (FileManagementCreateFolderStatus200Plain | FileManagementCreateFolderStatus200Json | FileManagementCreateFolderStatus200Json2);

export type FileManagementCreateFolderBodyJson = AcroStackFileManagementCreateFileFolderDto | undefined;

export type FileManagementCreateFolderBodyJson2 = AcroStackFileManagementCreateFileFolderDto | undefined;

export type FileManagementCreateFolderBodyJson3 = AcroStackFileManagementCreateFileFolderDto | undefined;

export type FileManagementCreateFolderBody = (FileManagementCreateFolderBodyJson | FileManagementCreateFolderBodyJson2 | FileManagementCreateFolderBodyJson3);

export type FileManagementCreateFolderOptions = {
    body: FileManagementCreateFolderBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type FileManagementCreateFolderResponses = {
    "200": ({
        contentType: "text/plain";
        data: FileManagementCreateFolderStatus200Plain;
    } | {
        contentType: "application/json";
        data: FileManagementCreateFolderStatus200Json;
    } | {
        contentType: "text/json";
        data: FileManagementCreateFolderStatus200Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type FileManagementCreateFolderResponse = FileManagementCreateFolderStatus200;
