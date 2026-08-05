/* oxlint-disable */

/**
 * @type any
 */
export type GdprCancelMyScheduledDeletionStatus200 = any;

/**
 * @type object
 */
export type GdprCancelMyScheduledDeletionRequestConfig = {
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
export type GdprCancelMyScheduledDeletionResponses = {
  "200": GdprCancelMyScheduledDeletionStatus200;
};

/**
 * @description Union of all possible responses
 */
export type GdprCancelMyScheduledDeletionResponse = GdprCancelMyScheduledDeletionStatus200;
