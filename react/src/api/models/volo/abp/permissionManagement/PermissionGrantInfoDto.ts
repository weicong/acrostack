/* oxlint-disable */

import type { VoloAbpPermissionManagementProviderInfoDto } from './ProviderInfoDto'

export type VoloAbpPermissionManagementPermissionGrantInfoDto = {
    name?: string | null;
    displayName?: string | null;
    parentName?: string | null;
    isGranted?: boolean;
    allowedProviders?: string[] | null;
    grantedProviders?: VoloAbpPermissionManagementProviderInfoDto[] | null;
    isEditable?: boolean;
};
