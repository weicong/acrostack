/* oxlint-disable */

/**
 * @type any
 */
export type GdprExportStatus200 = any;

/**
 * @type object
 */
export type GdprExportRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/gdpr/export";
};

/**
 * @type object
 */
export type GdprExportResponses = {
  "200": GdprExportStatus200;
};

/**
 * @description Union of all possible responses
 */
export type GdprExportResponse = GdprExportStatus200;
