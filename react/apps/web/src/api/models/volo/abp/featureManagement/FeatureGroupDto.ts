/* oxlint-disable */

import type { VoloAbpFeatureManagementFeatureDto } from "./FeatureDto";

export type VoloAbpFeatureManagementFeatureGroupDto = {
  name?: string | null;
  displayName?: string | null;
  features?: VoloAbpFeatureManagementFeatureDto[] | null;
};
