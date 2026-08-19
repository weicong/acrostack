/* oxlint-disable */

export type VoloCmsKitTagsTagDto = {
    readonly extraProperties?: {
        [key: string]: unknown;
    } | null;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    id?: string;
    entityType?: string | null;
    name?: string | null;
    concurrencyStamp?: string | null;
};
