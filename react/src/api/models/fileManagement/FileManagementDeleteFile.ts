/* oxlint-disable */

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementDeleteFilePathId = string;

/**
 * @type any
 */
export type FileManagementDeleteFileStatus200 = any;

/**
 * @type object
 */
export type FileManagementDeleteFileRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: FileManagementDeleteFilePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/file-management/files/${string}`;
};

/**
 * @type object
 */
export type FileManagementDeleteFileResponses = {
  "200": FileManagementDeleteFileStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementDeleteFileResponse = FileManagementDeleteFileStatus200;
