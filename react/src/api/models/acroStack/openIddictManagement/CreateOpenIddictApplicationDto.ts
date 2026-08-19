/* oxlint-disable */

export type AcroStackOpenIddictManagementCreateOpenIddictApplicationDto = {
    /**
     * @minLength 0
     * @maxLength 64
     * @type string
    */
    clientId: string;
    /**
     * @minLength 0
     * @maxLength 200
     * @type string | undefined
    */
    displayName?: string | null;
    clientType?: string | null;
    consentType?: string | null;
    clientSecret?: string | null;
    permissions?: string[] | null;
    redirectUris?: string[] | null;
    postLogoutRedirectUris?: string[] | null;
    requirements?: string[] | null;
};
