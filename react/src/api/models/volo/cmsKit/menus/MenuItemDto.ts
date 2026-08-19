/* oxlint-disable */

export type VoloCmsKitMenusMenuItemDto = {
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
     * Format: `date-time`
     * @type string | undefined
    */
    creationTime?: string;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    creatorId?: string | null;
    /**
     * @description
     * Format: `date-time`
     * @type string | undefined
    */
    lastModificationTime?: string | null;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    lastModifierId?: string | null;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    parentId?: string | null;
    displayName?: string | null;
    isActive?: boolean;
    url?: string | null;
    icon?: string | null;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    order?: number;
    target?: string | null;
    elementId?: string | null;
    cssClass?: string | null;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    pageId?: string | null;
    requiredPermissionName?: string | null;
    concurrencyStamp?: string | null;
};
