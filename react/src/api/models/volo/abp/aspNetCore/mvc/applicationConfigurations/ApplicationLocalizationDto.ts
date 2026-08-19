/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationResourceDto } from './ApplicationLocalizationResourceDto'
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentCultureDto } from './CurrentCultureDto'

export type VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationDto = {
    resources?: {
        [key: string]: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationResourceDto;
    } | null;
    currentCulture?: VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentCultureDto;
};
