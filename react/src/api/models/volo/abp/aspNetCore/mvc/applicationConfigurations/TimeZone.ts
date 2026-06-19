/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcApplicationConfigurationsIanaTimeZone } from "./IanaTimeZone.ts";
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsWindowsTimeZone } from "./WindowsTimeZone.ts";

/**
 * @type object
 */
export type VoloAbpAspNetCoreMvcApplicationConfigurationsTimeZone = {
  /**
   * @type object | undefined
   */
  iana?: VoloAbpAspNetCoreMvcApplicationConfigurationsIanaTimeZone;
  /**
   * @type object | undefined
   */
  windows?: VoloAbpAspNetCoreMvcApplicationConfigurationsWindowsTimeZone;
};
