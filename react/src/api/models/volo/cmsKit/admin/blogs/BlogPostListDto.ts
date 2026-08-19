/* oxlint-disable */

import type { VoloCmsKitBlogsBlogPostStatus } from '../../blogs/BlogPostStatus'

export type VoloCmsKitAdminBlogsBlogPostListDto = {
    readonly extraProperties?: {
        [key: string]: unknown;
    } | null;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    id?: string;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    blogId?: string;
    blogName?: string | null;
    title?: string | null;
    slug?: string | null;
    shortDescription?: string | null;
    content?: string | null;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    coverImageMediaId?: string | null;
    /**
     * @description
     * Format: `date-time`
     * @type string | undefined
    */
    creationTime?: string;
    /**
     * @description
     * Format: `date-time`
     * @type string | undefined
    */
    lastModificationTime?: string | null;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    status?: VoloCmsKitBlogsBlogPostStatus;
};
