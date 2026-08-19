/* oxlint-disable */

import type { AcroStackFileManagementCreateShareLinkDto } from '../acroStack/fileManagement/CreateShareLinkDto'
import type { AcroStackFileManagementFileShareDto } from '../acroStack/fileManagement/FileShareDto'

export type FileManagementCreateShareLinkPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type FileManagementCreateShareLinkStatus200Plain = AcroStackFileManagementFileShareDto;

export type FileManagementCreateShareLinkStatus200Json = AcroStackFileManagementFileShareDto;

export type FileManagementCreateShareLinkStatus200Json2 = AcroStackFileManagementFileShareDto;

export type FileManagementCreateShareLinkStatus200 = (FileManagementCreateShareLinkStatus200Plain | FileManagementCreateShareLinkStatus200Json | FileManagementCreateShareLinkStatus200Json2);

export type FileManagementCreateShareLinkBodyJson = AcroStackFileManagementCreateShareLinkDto | undefined;

export type FileManagementCreateShareLinkBodyJson2 = AcroStackFileManagementCreateShareLinkDto | undefined;

export type FileManagementCreateShareLinkBodyJson3 = AcroStackFileManagementCreateShareLinkDto | undefined;

export type FileManagementCreateShareLinkBody = (FileManagementCreateShareLinkBodyJson | FileManagementCreateShareLinkBodyJson2 | FileManagementCreateShareLinkBodyJson3);

export type FileManagementCreateShareLinkOptions = {
    body: FileManagementCreateShareLinkBody;
    path: FileManagementCreateShareLinkPath;
    query?: never;
    headers?: never;
};

export type FileManagementCreateShareLinkResponses = {
    "200": ({
        contentType: "text/plain";
        data: FileManagementCreateShareLinkStatus200Plain;
    } | {
        contentType: "application/json";
        data: FileManagementCreateShareLinkStatus200Json;
    } | {
        contentType: "text/json";
        data: FileManagementCreateShareLinkStatus200Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type FileManagementCreateShareLinkResponse = FileManagementCreateShareLinkStatus200;
