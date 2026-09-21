/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationAuthConfigurationDto } from "./ApplicationAuthConfigurationDto";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationFeatureConfigurationDto } from "./ApplicationFeatureConfigurationDto";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationGlobalFeatureConfigurationDto } from "./ApplicationGlobalFeatureConfigurationDto";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDto } from "./ApplicationLocalizationConfigurationDto";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationSettingConfigurationDto } from "./ApplicationSettingConfigurationDto";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsClockDto } from "./ClockDto";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentUserDto } from "./CurrentUserDto";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsTimingDto } from "./TimingDto";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingObjectExtensionsDto } from "./objectExtending/ObjectExtensionsDto";
import type { VoloAbpAspNetCoreMvcMultiTenancyCurrentTenantDto } from "../multiTenancy/CurrentTenantDto";
import type { VoloAbpAspNetCoreMvcMultiTenancyMultiTenancyInfoDto } from "../multiTenancy/MultiTenancyInfoDto";

export type VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto = {
  localization?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDto;
  auth?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationAuthConfigurationDto;
  setting?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationSettingConfigurationDto;
  currentUser?: VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentUserDto;
  features?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationFeatureConfigurationDto;
  globalFeatures?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationGlobalFeatureConfigurationDto;
  multiTenancy?: VoloAbpAspNetCoreMvcMultiTenancyMultiTenancyInfoDto;
  currentTenant?: VoloAbpAspNetCoreMvcMultiTenancyCurrentTenantDto;
  timing?: VoloAbpAspNetCoreMvcApplicationConfigurationsTimingDto;
  clock?: VoloAbpAspNetCoreMvcApplicationConfigurationsClockDto;
  objectExtensions?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingObjectExtensionsDto;
  extraProperties?: {
    [key: string]: unknown;
  } | null;
};
