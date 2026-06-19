/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDtoLanguagesMap } from "../../../../../VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDtoLanguagesMap.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDtoResources } from "../../../../../VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDtoResources.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentCultureDto } from "./CurrentCultureDto.ts";
import type { VoloAbpLocalizationLanguageInfo } from "../../../localization/LanguageInfo.ts";

/**
 * @type object
 */
export type VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDto = {
  /**
   * @type object | undefined
   */
  values?: {
    [key: string]: {
      [key: string]: string;
    };
  } | null;
  resources?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDtoResources;
  /**
   * @type array | undefined
   */
  languages?: VoloAbpLocalizationLanguageInfo[] | null;
  /**
   * @type object | undefined
   */
  currentCulture?: VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentCultureDto;
  /**
   * @type string | undefined
   */
  defaultResourceName?: string | null;
  languagesMap?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDtoLanguagesMap;
  languageFilesMap?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDtoLanguagesMap;
  /**
   * @type boolean | undefined
   */
  useRouteBasedCulture?: boolean;
};
