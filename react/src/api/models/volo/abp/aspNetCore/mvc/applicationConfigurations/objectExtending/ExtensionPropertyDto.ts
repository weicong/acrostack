/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiDto } from './ExtensionPropertyApiDto'
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyAttributeDto } from './ExtensionPropertyAttributeDto'
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyPolicyDto } from './ExtensionPropertyPolicyDto'
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiDto } from './ExtensionPropertyUiDto'
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingLocalizableStringDto } from './LocalizableStringDto'

export type VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDto = {
    type?: string | null;
    typeSimple?: string | null;
    displayName?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingLocalizableStringDto;
    api?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiDto;
    ui?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiDto;
    policy?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyPolicyDto;
    attributes?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyAttributeDto[] | null;
    configuration?: {
        [key: string]: unknown;
    } | null;
    defaultValue?: unknown | null;
};
