/* oxlint-disable */

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementRevokeShareLinkPathId = string;

/**
 * @type any
 */
export type FileManagementRevokeShareLinkStatus200 = any;

/**
 * @type object
 */
export type FileManagementRevokeShareLinkRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: FileManagementRevokeShareLinkPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/file-management/share-links/${string}`;
};

/**
 * @type object
 */
export type FileManagementRevokeShareLinkResponses = {
  "200": FileManagementRevokeShareLinkStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementRevokeShareLinkResponse = FileManagementRevokeShareLinkStatus200;
