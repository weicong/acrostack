/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogPostAdminPublishPathId,
  BlogPostAdminPublishStatus200,
  BlogPostAdminPublishStatus204,
  BlogPostAdminPublishStatus400,
  BlogPostAdminPublishStatus401,
  BlogPostAdminPublishStatus403,
  BlogPostAdminPublishStatus404,
  BlogPostAdminPublishStatus500,
  BlogPostAdminPublishStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminPublish.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogPostAdminPublish } from "../../clients/blogPostAdmin/blogPostAdminPublish.ts";

export const blogPostAdminPublishMutationKey = () =>
  [{ url: "/api/cms-kit-admin/blogs/blog-posts/:id/publish" }] as const;

export function blogPostAdminPublishMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = blogPostAdminPublishMutationKey();
  return mutationOptions<
    BlogPostAdminPublishStatus200 | BlogPostAdminPublishStatus204,
    ResponseErrorConfig<
      | BlogPostAdminPublishStatus400
      | BlogPostAdminPublishStatus401
      | BlogPostAdminPublishStatus403
      | BlogPostAdminPublishStatus404
      | BlogPostAdminPublishStatus500
      | BlogPostAdminPublishStatus501
    >,
    { id: BlogPostAdminPublishPathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return blogPostAdminPublish(id, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id/publish}
 */
export function useBlogPostAdminPublish<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogPostAdminPublishStatus200 | BlogPostAdminPublishStatus204,
      ResponseErrorConfig<
        | BlogPostAdminPublishStatus400
        | BlogPostAdminPublishStatus401
        | BlogPostAdminPublishStatus403
        | BlogPostAdminPublishStatus404
        | BlogPostAdminPublishStatus500
        | BlogPostAdminPublishStatus501
      >,
      { id: BlogPostAdminPublishPathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostAdminPublishMutationKey();

  const baseOptions = blogPostAdminPublishMutationOptions(config) as UseMutationOptions<
    BlogPostAdminPublishStatus200 | BlogPostAdminPublishStatus204,
    ResponseErrorConfig<
      | BlogPostAdminPublishStatus400
      | BlogPostAdminPublishStatus401
      | BlogPostAdminPublishStatus403
      | BlogPostAdminPublishStatus404
      | BlogPostAdminPublishStatus500
      | BlogPostAdminPublishStatus501
    >,
    { id: BlogPostAdminPublishPathId },
    TContext
  >;

  return useMutation<
    BlogPostAdminPublishStatus200 | BlogPostAdminPublishStatus204,
    ResponseErrorConfig<
      | BlogPostAdminPublishStatus400
      | BlogPostAdminPublishStatus401
      | BlogPostAdminPublishStatus403
      | BlogPostAdminPublishStatus404
      | BlogPostAdminPublishStatus500
      | BlogPostAdminPublishStatus501
    >,
    { id: BlogPostAdminPublishPathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogPostAdminPublishStatus200 | BlogPostAdminPublishStatus204,
    ResponseErrorConfig<
      | BlogPostAdminPublishStatus400
      | BlogPostAdminPublishStatus401
      | BlogPostAdminPublishStatus403
      | BlogPostAdminPublishStatus404
      | BlogPostAdminPublishStatus500
      | BlogPostAdminPublishStatus501
    >,
    { id: BlogPostAdminPublishPathId },
    TContext
  >;
}
