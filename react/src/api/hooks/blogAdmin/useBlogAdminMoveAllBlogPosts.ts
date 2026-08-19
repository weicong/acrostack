/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BlogAdminMoveAllBlogPostsOptions,
  BlogAdminMoveAllBlogPostsStatus200,
  BlogAdminMoveAllBlogPostsStatus204,
  BlogAdminMoveAllBlogPostsStatus400,
  BlogAdminMoveAllBlogPostsStatus401,
  BlogAdminMoveAllBlogPostsStatus403,
  BlogAdminMoveAllBlogPostsStatus404,
  BlogAdminMoveAllBlogPostsStatus500,
  BlogAdminMoveAllBlogPostsStatus501,
} from "../../models/blogAdmin/BlogAdminMoveAllBlogPosts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogAdminMoveAllBlogPosts } from "../../clients/blogAdmin/blogAdminMoveAllBlogPosts";

export const blogAdminMoveAllBlogPostsMutationKey = () =>
  [{ url: "/api/cms-kit-admin/blogs/:blogId/move-all-blog-posts" }] as const;

export function blogAdminMoveAllBlogPostsMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
    BlogAdminMoveAllBlogPostsOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, query }) => {
      const { data } = await blogAdminMoveAllBlogPosts({
        ...config,
        path,
        query,
        throwOnError: true,
      });
      return data;
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
      BlogAdminMoveAllBlogPostsOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
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
    BlogAdminMoveAllBlogPostsOptions,
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
    BlogAdminMoveAllBlogPostsOptions,
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
    BlogAdminMoveAllBlogPostsOptions,
    TContext
  >;
}
