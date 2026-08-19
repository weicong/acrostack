/* oxlint-disable */

export type VoloCmsKitPublicCommentsUpdateCommentInput = {
    readonly extraProperties?: {
        [key: string]: unknown;
    } | null;
    /**
     * @minLength 0
     * @maxLength 512
     * @type string
    */
    text: string;
    concurrencyStamp?: string | null;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    captchaToken?: string | null;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    captchaAnswer?: number;
};
