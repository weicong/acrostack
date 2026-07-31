/* oxlint-disable */

import { blogPostCreate } from "./blogPostCreate.ts";
import { blogPostDelete } from "./blogPostDelete.ts";
import { blogPostGet } from "./blogPostGet.ts";
import { blogPostGetBySlug } from "./blogPostGetBySlug.ts";
import { blogPostGetList } from "./blogPostGetList.ts";
import { blogPostUpdate } from "./blogPostUpdate.ts";

export function blogPost() {
  return {
    blogPostGetList,
    blogPostCreate,
    blogPostGet,
    blogPostUpdate,
    blogPostDelete,
    blogPostGetBySlug,
  };
}
