/* oxlint-disable */

import { tagPublicGetAllRelatedTags } from "./tagPublicGetAllRelatedTags.ts";
import { tagPublicGetPopularTags } from "./tagPublicGetPopularTags.ts";

export function tagPublic() {
  return { tagPublicGetAllRelatedTags, tagPublicGetPopularTags };
}
