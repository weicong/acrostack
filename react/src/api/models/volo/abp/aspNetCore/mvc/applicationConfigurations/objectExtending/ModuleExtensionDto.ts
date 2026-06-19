/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../../../VoloAbpAccountProfileDtoExtraProperties.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingEntityExtensionDto } from "./EntityExtensionDto.ts";

/**
 * @type object
 */
export type VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingModuleExtensionDto = {
  /**
   * @type object | undefined
   */
  entities?: {
    [key: string]: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingEntityExtensionDto;
  } | null;
  configuration?: VoloAbpAccountProfileDtoExtraProperties;
};
