/* oxlint-disable */

import { blogAdminCreate } from "./blogAdminCreate.ts";
import { blogAdminDelete } from "./blogAdminDelete.ts";
import { blogAdminGet } from "./blogAdminGet.ts";
import { blogAdminGetAllList } from "./blogAdminGetAllList.ts";
import { blogAdminGetList } from "./blogAdminGetList.ts";
import { blogAdminMoveAllBlogPosts } from "./blogAdminMoveAllBlogPosts.ts";
import { blogAdminUpdate } from "./blogAdminUpdate.ts";

export function blogAdmin() {
  return {
    blogAdminGet,
    blogAdminUpdate,
    blogAdminDelete,
    blogAdminGetList,
    blogAdminCreate,
    blogAdminGetAllList,
    blogAdminMoveAllBlogPosts,
  };
}
