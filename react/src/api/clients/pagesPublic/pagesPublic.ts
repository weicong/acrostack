/* oxlint-disable */

import { pagesPublicDoesSlugExist } from "./pagesPublicDoesSlugExist.ts";
import { pagesPublicFindBySlug } from "./pagesPublicFindBySlug.ts";
import { pagesPublicFindDefaultHomePage } from "./pagesPublicFindDefaultHomePage.ts";

export function pagesPublic() {
  return { pagesPublicFindBySlug, pagesPublicFindDefaultHomePage, pagesPublicDoesSlugExist };
}
