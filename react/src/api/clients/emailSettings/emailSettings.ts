/* oxlint-disable */

import { emailSettingsGet } from "./emailSettingsGet.ts";
import { emailSettingsSendTestEmail } from "./emailSettingsSendTestEmail.ts";
import { emailSettingsUpdate } from "./emailSettingsUpdate.ts";

export function emailSettings() {
  return { emailSettingsGet, emailSettingsUpdate, emailSettingsSendTestEmail };
}
