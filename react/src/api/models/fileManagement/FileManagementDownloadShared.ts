/* oxlint-disable */

/**
 * @type string
 */
export type FileManagementDownloadSharedPathToken = string;

/**
 * @type any
 */
export type FileManagementDownloadSharedStatus200 = any;

/**
 * @type object
 */
export type FileManagementDownloadSharedRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    token: FileManagementDownloadSharedPathToken;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/file-management/shared/${string}`;
};

/**
 * @type object
 */
export type FileManagementDownloadSharedResponses = {
  "200": FileManagementDownloadSharedStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementDownloadSharedResponse = FileManagementDownloadSharedStatus200;
