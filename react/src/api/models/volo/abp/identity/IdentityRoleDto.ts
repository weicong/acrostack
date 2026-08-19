/* oxlint-disable */

export type VoloAbpIdentityIdentityRoleDto = {
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
    isDefault?: boolean;
    isStatic?: boolean;
    isPublic?: boolean;
    concurrencyStamp?: string | null;
    /**
     * @description
     * Format: `date-time`
     * @type string | undefined
    */
    creationTime?: string;
};
