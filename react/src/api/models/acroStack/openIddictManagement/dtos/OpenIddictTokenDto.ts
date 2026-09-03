/* oxlint-disable */

/**
 * @description Token view for admin listing. Deliberately excludes the Payload column\r\n(raw JWT/reference token material) so sensitive credentials never leave\r\nthe server.
 * @type object
 */
export type AcroStackOpenIddictManagementDtosOpenIddictTokenDto = {
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
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  authorizationId?: string | null;
  subject?: string | null;
  type?: string | null;
  status?: string | null;
  referenceId?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  expirationDate?: string | null;
};
