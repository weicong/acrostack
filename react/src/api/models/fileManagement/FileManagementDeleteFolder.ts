/* oxlint-disable */

export type FileManagementDeleteFolderPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type FileManagementDeleteFolderStatus200 = unknown;

export type FileManagementDeleteFolderOptions = {
  body?: never;
  path: FileManagementDeleteFolderPath;
  query?: never;
  headers?: never;
};

export type FileManagementDeleteFolderResponses = {
  "200": FileManagementDeleteFolderStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementDeleteFolderResponse = FileManagementDeleteFolderStatus200;
