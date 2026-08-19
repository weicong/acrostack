/* oxlint-disable */

export type VoloAbpTenantManagementTenantDto = {
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
    concurrencyStamp?: string | null;
};
