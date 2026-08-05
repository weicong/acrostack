/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostAdminDraftPathId,
  BlogPostAdminDraftStatus200,
  BlogPostAdminDraftStatus204,
  BlogPostAdminDraftStatus400,
  BlogPostAdminDraftStatus401,
  BlogPostAdminDraftStatus403,
  BlogPostAdminDraftStatus404,
  BlogPostAdminDraftStatus500,
  BlogPostAdminDraftStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminDraft.ts";

function getBlogPostAdminDraftUrl(id: BlogPostAdminDraftPathId) {
  const res = { method: "POST", url: `/api/cms-kit-admin/blogs/blog-posts/${id}/draft` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id/draft}
 */
export async function blogPostAdminDraft(
  id: BlogPostAdminDraftPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostAdminDraftStatus200 | BlogPostAdminDraftStatus204,
    ResponseErrorConfig<
      | BlogPostAdminDraftStatus400
      | BlogPostAdminDraftStatus401
      | BlogPostAdminDraftStatus403
      | BlogPostAdminDraftStatus404
      | BlogPostAdminDraftStatus500
      | BlogPostAdminDraftStatus501
    >,
    unknown
  >({ method: "POST", url: getBlogPostAdminDraftUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
