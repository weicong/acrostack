/* oxlint-disable */

export type VoloCmsKitAdminBlogsCreateBlogDto = {
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
};
