/* oxlint-disable */

import { blogFeatureAdminGetList } from "./blogFeatureAdminGetList.ts";
import { blogFeatureAdminSet } from "./blogFeatureAdminSet.ts";

export function blogFeatureAdmin() {
  return { blogFeatureAdminGetList, blogFeatureAdminSet };
}
