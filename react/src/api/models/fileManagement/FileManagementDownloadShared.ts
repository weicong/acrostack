/* oxlint-disable */

export type FileManagementDownloadSharedPath = {
  token: string;
};

export type FileManagementDownloadSharedStatus200 = unknown;

export type FileManagementDownloadSharedOptions = {
  body?: never;
  path: FileManagementDownloadSharedPath;
  query?: never;
  headers?: never;
};

export type FileManagementDownloadSharedResponses = {
  "200": FileManagementDownloadSharedStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementDownloadSharedResponse = FileManagementDownloadSharedStatus200;
