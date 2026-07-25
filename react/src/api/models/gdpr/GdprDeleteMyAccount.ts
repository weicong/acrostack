/* oxlint-disable */

/**
 * @type any
 */
export type GdprDeleteMyAccountStatus200 = any;

/**
 * @type object
 */
export type GdprDeleteMyAccountRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/gdpr/account";
};

/**
 * @type object
 */
export type GdprDeleteMyAccountResponses = {
  "200": GdprDeleteMyAccountStatus200;
};

/**
 * @description Union of all possible responses
 */
export type GdprDeleteMyAccountResponse = GdprDeleteMyAccountStatus200;
