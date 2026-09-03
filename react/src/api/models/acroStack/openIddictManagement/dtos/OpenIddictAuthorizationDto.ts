/* oxlint-disable */

/**
 * @description Authorization view for admin listing. Deliberately excludes the\r\nProperties column (consent/principal JSON) to keep the surface minimal.
 * @type object
 */
export type AcroStackOpenIddictManagementDtosOpenIddictAuthorizationDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  applicationId?: string | null;
  subject?: string | null;
  type?: string | null;
  status?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationDate?: string | null;
};
