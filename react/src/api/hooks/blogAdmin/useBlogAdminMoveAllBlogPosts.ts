/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogAdminMoveAllBlogPostsPathBlogId,
  BlogAdminMoveAllBlogPostsQueryAssignToBlogId,
  BlogAdminMoveAllBlogPostsStatus200,
  BlogAdminMoveAllBlogPostsStatus204,
  BlogAdminMoveAllBlogPostsStatus400,
  BlogAdminMoveAllBlogPostsStatus401,
  BlogAdminMoveAllBlogPostsStatus403,
  BlogAdminMoveAllBlogPostsStatus404,
  BlogAdminMoveAllBlogPostsStatus500,
  BlogAdminMoveAllBlogPostsStatus501,
} from "../../models/blogAdmin/BlogAdminMoveAllBlogPosts.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogAdminMoveAllBlogPosts } from "../../clients/blogAdmin/blogAdminMoveAllBlogPosts.ts";

export const blogAdminMoveAllBlogPostsMutationKey = () =>
  [{ url: "/api/cms-kit-admin/blogs/:blogId/move-all-blog-posts" }] as const;

export function blogAdminMoveAllBlogPostsMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = blogAdminMoveAllBlogPostsMutationKey();
  return mutationOptions<
    BlogAdminMoveAllBlogPostsStatus200 | BlogAdminMoveAllBlogPostsStatus204,
    ResponseErrorConfig<
      | BlogAdminMoveAllBlogPostsStatus400
      | BlogAdminMoveAllBlogPostsStatus401
      | BlogAdminMoveAllBlogPostsStatus403
      | BlogAdminMoveAllBlogPostsStatus404
      | BlogAdminMoveAllBlogPostsStatus500
      | BlogAdminMoveAllBlogPostsStatus501
    >,
    {
      blogId: BlogAdminMoveAllBlogPostsPathBlogId;
      params?: { assignToBlogId?: BlogAdminMoveAllBlogPostsQueryAssignToBlogId };
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ blogId, params }) => {
      return blogAdminMoveAllBlogPosts(blogId, params, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/:blogId/move-all-blog-posts}
 */
export function useBlogAdminMoveAllBlogPosts<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogAdminMoveAllBlogPostsStatus200 | BlogAdminMoveAllBlogPostsStatus204,
      ResponseErrorConfig<
        | BlogAdminMoveAllBlogPostsStatus400
        | BlogAdminMoveAllBlogPostsStatus401
        | BlogAdminMoveAllBlogPostsStatus403
        | BlogAdminMoveAllBlogPostsStatus404
        | BlogAdminMoveAllBlogPostsStatus500
        | BlogAdminMoveAllBlogPostsStatus501
      >,
      {
        blogId: BlogAdminMoveAllBlogPostsPathBlogId;
        params?: { assignToBlogId?: BlogAdminMoveAllBlogPostsQueryAssignToBlogId };
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogAdminMoveAllBlogPostsMutationKey();

  const baseOptions = blogAdminMoveAllBlogPostsMutationOptions(config) as UseMutationOptions<
    BlogAdminMoveAllBlogPostsStatus200 | BlogAdminMoveAllBlogPostsStatus204,
    ResponseErrorConfig<
      | BlogAdminMoveAllBlogPostsStatus400
      | BlogAdminMoveAllBlogPostsStatus401
      | BlogAdminMoveAllBlogPostsStatus403
      | BlogAdminMoveAllBlogPostsStatus404
      | BlogAdminMoveAllBlogPostsStatus500
      | BlogAdminMoveAllBlogPostsStatus501
    >,
    {
      blogId: BlogAdminMoveAllBlogPostsPathBlogId;
      params?: { assignToBlogId?: BlogAdminMoveAllBlogPostsQueryAssignToBlogId };
    },
    TContext
  >;

  return useMutation<
    BlogAdminMoveAllBlogPostsStatus200 | BlogAdminMoveAllBlogPostsStatus204,
    ResponseErrorConfig<
      | BlogAdminMoveAllBlogPostsStatus400
      | BlogAdminMoveAllBlogPostsStatus401
      | BlogAdminMoveAllBlogPostsStatus403
      | BlogAdminMoveAllBlogPostsStatus404
      | BlogAdminMoveAllBlogPostsStatus500
      | BlogAdminMoveAllBlogPostsStatus501
    >,
    {
      blogId: BlogAdminMoveAllBlogPostsPathBlogId;
      params?: { assignToBlogId?: BlogAdminMoveAllBlogPostsQueryAssignToBlogId };
    },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogAdminMoveAllBlogPostsStatus200 | BlogAdminMoveAllBlogPostsStatus204,
    ResponseErrorConfig<
      | BlogAdminMoveAllBlogPostsStatus400
      | BlogAdminMoveAllBlogPostsStatus401
      | BlogAdminMoveAllBlogPostsStatus403
      | BlogAdminMoveAllBlogPostsStatus404
      | BlogAdminMoveAllBlogPostsStatus500
      | BlogAdminMoveAllBlogPostsStatus501
    >,
    {
      blogId: BlogAdminMoveAllBlogPostsPathBlogId;
      params?: { assignToBlogId?: BlogAdminMoveAllBlogPostsQueryAssignToBlogId };
    },
    TContext
  >;
}
