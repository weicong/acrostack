/* oxlint-disable */

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementGetThumbnailPathId = string;

/**
 * @type any
 */
export type FileManagementGetThumbnailStatus200 = any;

/**
 * @type object
 */
export type FileManagementGetThumbnailRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: FileManagementGetThumbnailPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/file-management/files/${string}/thumbnail`;
};

/**
 * @type object
 */
export type FileManagementGetThumbnailResponses = {
  "200": FileManagementGetThumbnailStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementGetThumbnailResponse = FileManagementGetThumbnailStatus200;
