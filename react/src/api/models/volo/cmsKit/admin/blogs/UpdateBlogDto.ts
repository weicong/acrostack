/* oxlint-disable */

export type VoloCmsKitAdminBlogsUpdateBlogDto = {
    readonly extraProperties?: {
        [key: string]: unknown;
    } | null;
    /**
     * @minLength 1
     * @maxLength 64
     * @type string
    */
    name: string;
    /**
     * @minLength 1
     * @maxLength 64
     * @type string
    */
    slug: string;
    concurrencyStamp?: string | null;
};
