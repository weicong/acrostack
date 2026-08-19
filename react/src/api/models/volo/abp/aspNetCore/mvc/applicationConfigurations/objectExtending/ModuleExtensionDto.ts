/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingEntityExtensionDto } from './EntityExtensionDto'

export type VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingModuleExtensionDto = {
    entities?: {
        [key: string]: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingEntityExtensionDto;
    } | null;
    configuration?: {
        [key: string]: unknown;
    } | null;
};
