/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../../../VoloAbpAccountProfileDtoExtraProperties.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiDto } from "./ExtensionPropertyApiDto.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyAttributeDto } from "./ExtensionPropertyAttributeDto.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyPolicyDto } from "./ExtensionPropertyPolicyDto.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiDto } from "./ExtensionPropertyUiDto.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingLocalizableStringDto } from "./LocalizableStringDto.ts";

/**
 * @type object
 */
export type VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDto = {
  /**
   * @type string | undefined
   */
  type?: string | null;
  /**
   * @type string | undefined
   */
  typeSimple?: string | null;
  /**
   * @type object | undefined
   */
  displayName?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingLocalizableStringDto;
  /**
   * @type object | undefined
   */
  api?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiDto;
  /**
   * @type object | undefined
   */
  ui?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiDto;
  /**
   * @type object | undefined
   */
  policy?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyPolicyDto;
  /**
   * @type array | undefined
   */
  attributes?:
    | VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyAttributeDto[]
    | null;
  configuration?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @type any | undefined
   */
  defaultValue?: any | null;
};
