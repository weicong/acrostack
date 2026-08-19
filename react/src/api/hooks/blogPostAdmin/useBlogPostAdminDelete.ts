/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BlogPostAdminDeleteOptions,
  BlogPostAdminDeleteStatus200,
  BlogPostAdminDeleteStatus204,
  BlogPostAdminDeleteStatus400,
  BlogPostAdminDeleteStatus401,
  BlogPostAdminDeleteStatus403,
  BlogPostAdminDeleteStatus404,
  BlogPostAdminDeleteStatus500,
  BlogPostAdminDeleteStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogPostAdminDelete } from "../../clients/blogPostAdmin/blogPostAdminDelete";

export const blogPostAdminDeleteMutationKey = () =>
  [{ url: "/api/cms-kit-admin/blogs/blog-posts/:id" }] as const;

export function blogPostAdminDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
    BlogPostAdminDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await blogPostAdminDelete({ ...config, path, throwOnError: true });
      return data;
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
      BlogPostAdminDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
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
    BlogPostAdminDeleteOptions,
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
    BlogPostAdminDeleteOptions,
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
    BlogPostAdminDeleteOptions,
    TContext
  >;
}
