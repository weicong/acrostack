/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../../VoloAbpAccountProfileDtoExtraProperties.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationAuthConfigurationDto } from "./ApplicationAuthConfigurationDto.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationGlobalFeatureConfigurationDto } from "./ApplicationGlobalFeatureConfigurationDto.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDto } from "./ApplicationLocalizationConfigurationDto.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationSettingConfigurationDto } from "./ApplicationSettingConfigurationDto.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsClockDto } from "./ClockDto.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentUserDto } from "./CurrentUserDto.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsTimingDto } from "./TimingDto.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingObjectExtensionsDto } from "./objectExtending/ObjectExtensionsDto.ts";
import type { VoloAbpAspNetCoreMvcMultiTenancyCurrentTenantDto } from "../multiTenancy/CurrentTenantDto.ts";
import type { VoloAbpAspNetCoreMvcMultiTenancyMultiTenancyInfoDto } from "../multiTenancy/MultiTenancyInfoDto.ts";

/**
 * @type object
 */
export type VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto = {
  /**
   * @type object | undefined
   */
  localization?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDto;
  /**
   * @type object | undefined
   */
  auth?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationAuthConfigurationDto;
  /**
   * @type object | undefined
   */
  setting?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationSettingConfigurationDto;
  /**
   * @type object | undefined
   */
  currentUser?: VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentUserDto;
  /**
   * @type object | undefined
   */
  features?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationSettingConfigurationDto;
  /**
   * @type object | undefined
   */
  globalFeatures?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationGlobalFeatureConfigurationDto;
  /**
   * @type object | undefined
   */
  multiTenancy?: VoloAbpAspNetCoreMvcMultiTenancyMultiTenancyInfoDto;
  /**
   * @type object | undefined
   */
  currentTenant?: VoloAbpAspNetCoreMvcMultiTenancyCurrentTenantDto;
  /**
   * @type object | undefined
   */
  timing?: VoloAbpAspNetCoreMvcApplicationConfigurationsTimingDto;
  /**
   * @type object | undefined
   */
  clock?: VoloAbpAspNetCoreMvcApplicationConfigurationsClockDto;
  /**
   * @type object | undefined
   */
  objectExtensions?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingObjectExtensionsDto;
  extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
};
