/* oxlint-disable */

export type FileManagementRevokeShareLinkPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type FileManagementRevokeShareLinkStatus200 = unknown;

export type FileManagementRevokeShareLinkOptions = {
  body?: never;
  path: FileManagementRevokeShareLinkPath;
  query?: never;
  headers?: never;
};

export type FileManagementRevokeShareLinkResponses = {
  "200": FileManagementRevokeShareLinkStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementRevokeShareLinkResponse = FileManagementRevokeShareLinkStatus200;
