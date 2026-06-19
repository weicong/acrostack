/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumDto } from "./ExtensionEnumDto.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingModuleExtensionDto } from "./ModuleExtensionDto.ts";

/**
 * @type object
 */
export type VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingObjectExtensionsDto = {
  /**
   * @type object | undefined
   */
  modules?: {
    [key: string]: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingModuleExtensionDto;
  } | null;
  /**
   * @type object | undefined
   */
  enums?: {
    [key: string]: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumDto;
  } | null;
};
