/* oxlint-disable */

import { blogPostAdminCreate } from "./blogPostAdminCreate.ts";
import { blogPostAdminCreateAndPublish } from "./blogPostAdminCreateAndPublish.ts";
import { blogPostAdminCreateAndSendToReview } from "./blogPostAdminCreateAndSendToReview.ts";
import { blogPostAdminDelete } from "./blogPostAdminDelete.ts";
import { blogPostAdminDraft } from "./blogPostAdminDraft.ts";
import { blogPostAdminGet } from "./blogPostAdminGet.ts";
import { blogPostAdminGetList } from "./blogPostAdminGetList.ts";
import { blogPostAdminHasBlogPostWaitingForReview } from "./blogPostAdminHasBlogPostWaitingForReview.ts";
import { blogPostAdminPublish } from "./blogPostAdminPublish.ts";
import { blogPostAdminSendToReview } from "./blogPostAdminSendToReview.ts";
import { blogPostAdminUpdate } from "./blogPostAdminUpdate.ts";

export function blogPostAdmin() {
  return {
    blogPostAdminCreate,
    blogPostAdminGetList,
    blogPostAdminDelete,
    blogPostAdminGet,
    blogPostAdminUpdate,
    blogPostAdminPublish,
    blogPostAdminDraft,
    blogPostAdminCreateAndPublish,
    blogPostAdminSendToReview,
    blogPostAdminCreateAndSendToReview,
    blogPostAdminHasBlogPostWaitingForReview,
  };
}
