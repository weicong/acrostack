/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyGlobalFeaturePolicyDto } from "./ExtensionPropertyGlobalFeaturePolicyDto.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyPermissionPolicyDto } from "./ExtensionPropertyPermissionPolicyDto.ts";

/**
 * @type object
 */
export type VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyPolicyDto =
  {
    /**
     * @type object | undefined
     */
    globalFeatures?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyGlobalFeaturePolicyDto;
    /**
     * @type object | undefined
     */
    features?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyGlobalFeaturePolicyDto;
    /**
     * @type object | undefined
     */
    permissions?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyPermissionPolicyDto;
  };
