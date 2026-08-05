/* oxlint-disable */

import { globalResourcePublicGetGlobalScript } from "./globalResourcePublicGetGlobalScript.ts";
import { globalResourcePublicGetGlobalStyle } from "./globalResourcePublicGetGlobalStyle.ts";

export function globalResourcePublic() {
  return { globalResourcePublicGetGlobalScript, globalResourcePublicGetGlobalStyle };
}
