/* oxlint-disable */

import type { VoloCmsKitPagesPageStatus } from '../pages/PageStatus'

export type VoloCmsKitContentsPageDto = {
    readonly extraProperties?: {
        [key: string]: unknown;
    } | null;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    id?: string;
    title?: string | null;
    slug?: string | null;
    layoutName?: string | null;
    content?: string | null;
    script?: string | null;
    style?: string | null;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    status?: VoloCmsKitPagesPageStatus;
};
