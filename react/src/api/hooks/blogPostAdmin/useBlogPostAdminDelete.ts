/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogPostAdminDeletePathId,
  BlogPostAdminDeleteStatus200,
  BlogPostAdminDeleteStatus204,
  BlogPostAdminDeleteStatus400,
  BlogPostAdminDeleteStatus401,
  BlogPostAdminDeleteStatus403,
  BlogPostAdminDeleteStatus404,
  BlogPostAdminDeleteStatus500,
  BlogPostAdminDeleteStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogPostAdminDelete } from "../../clients/blogPostAdmin/blogPostAdminDelete.ts";

export const blogPostAdminDeleteMutationKey = () =>
  [{ url: "/api/cms-kit-admin/blogs/blog-posts/:id" }] as const;

export function blogPostAdminDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = blogPostAdminDeleteMutationKey();
  return mutationOptions<
    BlogPostAdminDeleteStatus200 | BlogPostAdminDeleteStatus204,
    ResponseErrorConfig<
      | BlogPostAdminDeleteStatus400
      | BlogPostAdminDeleteStatus401
      | BlogPostAdminDeleteStatus403
      | BlogPostAdminDeleteStatus404
      | BlogPostAdminDeleteStatus500
      | BlogPostAdminDeleteStatus501
    >,
    { id: BlogPostAdminDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return blogPostAdminDelete(id, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id}
 */
export function useBlogPostAdminDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogPostAdminDeleteStatus200 | BlogPostAdminDeleteStatus204,
      ResponseErrorConfig<
        | BlogPostAdminDeleteStatus400
        | BlogPostAdminDeleteStatus401
        | BlogPostAdminDeleteStatus403
        | BlogPostAdminDeleteStatus404
        | BlogPostAdminDeleteStatus500
        | BlogPostAdminDeleteStatus501
      >,
      { id: BlogPostAdminDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostAdminDeleteMutationKey();

  const baseOptions = blogPostAdminDeleteMutationOptions(config) as UseMutationOptions<
    BlogPostAdminDeleteStatus200 | BlogPostAdminDeleteStatus204,
    ResponseErrorConfig<
      | BlogPostAdminDeleteStatus400
      | BlogPostAdminDeleteStatus401
      | BlogPostAdminDeleteStatus403
      | BlogPostAdminDeleteStatus404
      | BlogPostAdminDeleteStatus500
      | BlogPostAdminDeleteStatus501
    >,
    { id: BlogPostAdminDeletePathId },
    TContext
  >;

  return useMutation<
    BlogPostAdminDeleteStatus200 | BlogPostAdminDeleteStatus204,
    ResponseErrorConfig<
      | BlogPostAdminDeleteStatus400
      | BlogPostAdminDeleteStatus401
      | BlogPostAdminDeleteStatus403
      | BlogPostAdminDeleteStatus404
      | BlogPostAdminDeleteStatus500
      | BlogPostAdminDeleteStatus501
    >,
    { id: BlogPostAdminDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogPostAdminDeleteStatus200 | BlogPostAdminDeleteStatus204,
    ResponseErrorConfig<
      | BlogPostAdminDeleteStatus400
      | BlogPostAdminDeleteStatus401
      | BlogPostAdminDeleteStatus403
      | BlogPostAdminDeleteStatus404
      | BlogPostAdminDeleteStatus500
      | BlogPostAdminDeleteStatus501
    >,
    { id: BlogPostAdminDeletePathId },
    TContext
  >;
}
