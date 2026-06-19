/* oxlint-disable */

import { timeZoneSettingsGet } from "./timeZoneSettingsGet.ts";
import { timeZoneSettingsGetTimezones } from "./timeZoneSettingsGetTimezones.ts";
import { timeZoneSettingsUpdate } from "./timeZoneSettingsUpdate.ts";

export function timeZoneSettings() {
  return { timeZoneSettingsGet, timeZoneSettingsUpdate, timeZoneSettingsGetTimezones };
}
