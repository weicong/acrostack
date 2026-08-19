/* oxlint-disable */

export type FileManagementDownloadFilePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type FileManagementDownloadFileStatus200 = unknown;

export type FileManagementDownloadFileOptions = {
  body?: never;
  path: FileManagementDownloadFilePath;
  query?: never;
  headers?: never;
};

export type FileManagementDownloadFileResponses = {
  "200": FileManagementDownloadFileStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementDownloadFileResponse = FileManagementDownloadFileStatus200;
