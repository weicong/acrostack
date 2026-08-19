/* oxlint-disable */

export type VoloAbpAccountSendPasswordResetCodeDto = {
    /**
     * @description
     * Format: `email`
     * @minLength 0
     * @maxLength 256
     * @type string
    */
    email: string;
    /**
     * @minLength 1
     * @type string
    */
    appName: string;
    returnUrl?: string | null;
    returnUrlHash?: string | null;
};
