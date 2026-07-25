/* oxlint-disable */

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementDownloadFilePathId = string;

/**
 * @type any
 */
export type FileManagementDownloadFileStatus200 = any;

/**
 * @type object
 */
export type FileManagementDownloadFileRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: FileManagementDownloadFilePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/file-management/files/${string}/download`;
};

/**
 * @type object
 */
export type FileManagementDownloadFileResponses = {
  "200": FileManagementDownloadFileStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementDownloadFileResponse = FileManagementDownloadFileStatus200;
