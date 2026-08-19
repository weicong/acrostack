/* oxlint-disable */

export type AcroStackIdentityClaimsCreateIdentityRoleClaimDto = {
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    roleId?: string;
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
