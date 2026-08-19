/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BlogPostAdminUpdateOptions,
  BlogPostAdminUpdateStatus200,
  BlogPostAdminUpdateStatus400,
  BlogPostAdminUpdateStatus401,
  BlogPostAdminUpdateStatus403,
  BlogPostAdminUpdateStatus404,
  BlogPostAdminUpdateStatus500,
  BlogPostAdminUpdateStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminUpdate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogPostAdminUpdate } from "../../clients/blogPostAdmin/blogPostAdminUpdate";

export const blogPostAdminUpdateMutationKey = () =>
  [{ url: "/api/cms-kit-admin/blogs/blog-posts/:id" }] as const;

export function blogPostAdminUpdateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = blogPostAdminUpdateMutationKey();
  return mutationOptions<
    BlogPostAdminUpdateStatus200,
    ResponseErrorConfig<
      | BlogPostAdminUpdateStatus400
      | BlogPostAdminUpdateStatus401
      | BlogPostAdminUpdateStatus403
      | BlogPostAdminUpdateStatus404
      | BlogPostAdminUpdateStatus500
      | BlogPostAdminUpdateStatus501
    >,
    BlogPostAdminUpdateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await blogPostAdminUpdate({ ...config, path, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id}
 */
export function useBlogPostAdminUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogPostAdminUpdateStatus200,
      ResponseErrorConfig<
        | BlogPostAdminUpdateStatus400
        | BlogPostAdminUpdateStatus401
        | BlogPostAdminUpdateStatus403
        | BlogPostAdminUpdateStatus404
        | BlogPostAdminUpdateStatus500
        | BlogPostAdminUpdateStatus501
      >,
      BlogPostAdminUpdateOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: {
        request?: "application/json" | "text/json" | "application/*+json";
        response?: "text/plain" | "application/json" | "text/json";
      };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostAdminUpdateMutationKey();

  const baseOptions = blogPostAdminUpdateMutationOptions(config) as UseMutationOptions<
    BlogPostAdminUpdateStatus200,
    ResponseErrorConfig<
      | BlogPostAdminUpdateStatus400
      | BlogPostAdminUpdateStatus401
      | BlogPostAdminUpdateStatus403
      | BlogPostAdminUpdateStatus404
      | BlogPostAdminUpdateStatus500
      | BlogPostAdminUpdateStatus501
    >,
    BlogPostAdminUpdateOptions,
    TContext
  >;

  return useMutation<
    BlogPostAdminUpdateStatus200,
    ResponseErrorConfig<
      | BlogPostAdminUpdateStatus400
      | BlogPostAdminUpdateStatus401
      | BlogPostAdminUpdateStatus403
      | BlogPostAdminUpdateStatus404
      | BlogPostAdminUpdateStatus500
      | BlogPostAdminUpdateStatus501
    >,
    BlogPostAdminUpdateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogPostAdminUpdateStatus200,
    ResponseErrorConfig<
      | BlogPostAdminUpdateStatus400
      | BlogPostAdminUpdateStatus401
      | BlogPostAdminUpdateStatus403
      | BlogPostAdminUpdateStatus404
      | BlogPostAdminUpdateStatus500
      | BlogPostAdminUpdateStatus501
    >,
    BlogPostAdminUpdateOptions,
    TContext
  >;
}
