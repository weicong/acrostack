/* oxlint-disable */

import type { VoloAbpNameValue } from '../../../NameValue'
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationResourceDto } from './ApplicationLocalizationResourceDto'
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentCultureDto } from './CurrentCultureDto'
import type { VoloAbpLocalizationLanguageInfo } from '../../../localization/LanguageInfo'

export type VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDto = {
    values?: {
        [key: string]: {
            [key: string]: string;
        };
    } | null;
    resources?: {
        [key: string]: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationResourceDto;
    } | null;
    languages?: VoloAbpLocalizationLanguageInfo[] | null;
    currentCulture?: VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentCultureDto;
    defaultResourceName?: string | null;
    languagesMap?: {
        [key: string]: VoloAbpNameValue[];
    } | null;
    languageFilesMap?: {
        [key: string]: VoloAbpNameValue[];
    } | null;
    useRouteBasedCulture?: boolean;
};
