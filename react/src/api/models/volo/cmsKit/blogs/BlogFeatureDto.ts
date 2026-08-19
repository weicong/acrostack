/* oxlint-disable */

export type VoloCmsKitBlogsBlogFeatureDto = {
    readonly extraProperties?: {
        [key: string]: unknown;
    } | null;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    id?: string;
    featureName?: string | null;
    isEnabled?: boolean;
};
