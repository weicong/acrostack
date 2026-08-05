/* oxlint-disable */

import { blogPostPublicDelete } from "./blogPostPublicDelete.ts";
import { blogPostPublicGet } from "./blogPostPublicGet.ts";
import { blogPostPublicGetAuthorHasBlogPost } from "./blogPostPublicGetAuthorHasBlogPost.ts";
import { blogPostPublicGetAuthorsHasBlogPosts } from "./blogPostPublicGetAuthorsHasBlogPosts.ts";
import { blogPostPublicGetList } from "./blogPostPublicGetList.ts";
import { blogPostPublicGetTagName } from "./blogPostPublicGetTagName.ts";

export function blogPostPublic() {
  return {
    blogPostPublicGet,
    blogPostPublicGetList,
    blogPostPublicGetAuthorsHasBlogPosts,
    blogPostPublicGetAuthorHasBlogPost,
    blogPostPublicDelete,
    blogPostPublicGetTagName,
  };
}
