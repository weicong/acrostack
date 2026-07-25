/* oxlint-disable */

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementDeleteFolderPathId = string;

/**
 * @type any
 */
export type FileManagementDeleteFolderStatus200 = any;

/**
 * @type object
 */
export type FileManagementDeleteFolderRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: FileManagementDeleteFolderPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/file-management/folders/${string}`;
};

/**
 * @type object
 */
export type FileManagementDeleteFolderResponses = {
  "200": FileManagementDeleteFolderStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementDeleteFolderResponse = FileManagementDeleteFolderStatus200;
