/* oxlint-disable */

export type AcroStackIdentityClaimsCreateIdentityUserClaimDto = {
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    userId?: string;
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
