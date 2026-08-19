/* oxlint-disable */

import type { VoloCmsKitPagesPageStatus } from '../../pages/PageStatus'

export type VoloCmsKitAdminPagesPageDto = {
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
    title?: string | null;
    slug?: string | null;
    layoutName?: string | null;
    content?: string | null;
    script?: string | null;
    style?: string | null;
    isHomePage?: boolean;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    status?: VoloCmsKitPagesPageStatus;
    concurrencyStamp?: string | null;
};
