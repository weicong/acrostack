/* oxlint-disable */

export type FileManagementGetThumbnailPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type FileManagementGetThumbnailStatus200 = unknown;

export type FileManagementGetThumbnailOptions = {
    body?: never;
    path: FileManagementGetThumbnailPath;
    query?: never;
    headers?: never;
};

export type FileManagementGetThumbnailResponses = {
    "200": FileManagementGetThumbnailStatus200;
};

/**
 * @description Union of all possible responses
*/
export type FileManagementGetThumbnailResponse = FileManagementGetThumbnailStatus200;
