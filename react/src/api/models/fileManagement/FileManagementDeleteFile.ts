/* oxlint-disable */

export type FileManagementDeleteFilePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type FileManagementDeleteFileStatus200 = unknown;

export type FileManagementDeleteFileOptions = {
    body?: never;
    path: FileManagementDeleteFilePath;
    query?: never;
    headers?: never;
};

export type FileManagementDeleteFileResponses = {
    "200": FileManagementDeleteFileStatus200;
};

/**
 * @description Union of all possible responses
*/
export type FileManagementDeleteFileResponse = FileManagementDeleteFileStatus200;
