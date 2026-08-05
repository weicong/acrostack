/* oxlint-disable */

/**
 * @type any
 */
export type GdprGetMyScheduledDeletionStatus200 = any;

/**
 * @type object
 */
export type GdprGetMyScheduledDeletionRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/gdpr/scheduled-deletion";
};

/**
 * @type object
 */
export type GdprGetMyScheduledDeletionResponses = {
  "200": GdprGetMyScheduledDeletionStatus200;
};

/**
 * @description Union of all possible responses
 */
export type GdprGetMyScheduledDeletionResponse = GdprGetMyScheduledDeletionStatus200;
