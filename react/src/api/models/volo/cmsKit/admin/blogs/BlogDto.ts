/* oxlint-disable */

export type VoloCmsKitAdminBlogsBlogDto = {
    readonly extraProperties?: {
        [key: string]: unknown;
    } | null;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    id?: string;
    name?: string | null;
    slug?: string | null;
    concurrencyStamp?: string | null;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    blogPostCount?: number;
};
