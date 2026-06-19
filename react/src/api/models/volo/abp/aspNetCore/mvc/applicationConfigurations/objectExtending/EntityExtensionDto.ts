/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../../../VoloAbpAccountProfileDtoExtraProperties.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDto } from "./ExtensionPropertyDto.ts";

/**
 * @type object
 */
export type VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingEntityExtensionDto = {
  /**
   * @type object | undefined
   */
  properties?: {
    [key: string]: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDto;
  } | null;
  configuration?: VoloAbpAccountProfileDtoExtraProperties;
};
