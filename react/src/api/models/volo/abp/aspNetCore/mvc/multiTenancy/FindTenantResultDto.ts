/* oxlint-disable */

export type VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto = {
    success?: boolean;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    tenantId?: string | null;
    name?: string | null;
    normalizedName?: string | null;
    isActive?: boolean;
};
