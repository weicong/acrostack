/* oxlint-disable */

import { ratingPublicCreate } from "./ratingPublicCreate.ts";
import { ratingPublicDelete } from "./ratingPublicDelete.ts";
import { ratingPublicGetGroupedStarCounts } from "./ratingPublicGetGroupedStarCounts.ts";

export function ratingPublic() {
  return { ratingPublicCreate, ratingPublicDelete, ratingPublicGetGroupedStarCounts };
}
