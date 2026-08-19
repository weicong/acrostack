/* oxlint-disable */

export type AcroStackIdentityClaimsUpdateIdentityClaimDto = {
  /**
   * @minLength 0
   * @maxLength 256
   * @type string
   */
  claimType: string;
  /**
   * @minLength 0
   * @maxLength 1024
   * @type string
   */
  claimValue: string;
};
