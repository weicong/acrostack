/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumDto } from './ExtensionEnumDto'
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingModuleExtensionDto } from './ModuleExtensionDto'

export type VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingObjectExtensionsDto = {
    modules?: {
        [key: string]: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingModuleExtensionDto;
    } | null;
    enums?: {
        [key: string]: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumDto;
    } | null;
};
