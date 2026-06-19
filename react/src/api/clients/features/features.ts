/* oxlint-disable */

import { featuresDelete } from "./featuresDelete.ts";
import { featuresGet } from "./featuresGet.ts";
import { featuresUpdate } from "./featuresUpdate.ts";

export function features() {
  return { featuresGet, featuresUpdate, featuresDelete };
}
