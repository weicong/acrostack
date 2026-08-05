/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogPostAdminUpdateData,
  BlogPostAdminUpdatePathId,
  BlogPostAdminUpdateStatus200,
  BlogPostAdminUpdateStatus400,
  BlogPostAdminUpdateStatus401,
  BlogPostAdminUpdateStatus403,
  BlogPostAdminUpdateStatus404,
  BlogPostAdminUpdateStatus500,
  BlogPostAdminUpdateStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogPostAdminUpdate } from "../../clients/blogPostAdmin/blogPostAdminUpdate.ts";

export const blogPostAdminUpdateMutationKey = () =>
  [{ url: "/api/cms-kit-admin/blogs/blog-posts/:id" }] as const;

export function blogPostAdminUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<BlogPostAdminUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
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
    { id: BlogPostAdminUpdatePathId; data?: BlogPostAdminUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return blogPostAdminUpdate(id, data, config);
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
      { id: BlogPostAdminUpdatePathId; data?: BlogPostAdminUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<BlogPostAdminUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
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
    { id: BlogPostAdminUpdatePathId; data?: BlogPostAdminUpdateData },
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
    { id: BlogPostAdminUpdatePathId; data?: BlogPostAdminUpdateData },
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
    { id: BlogPostAdminUpdatePathId; data?: BlogPostAdminUpdateData },
    TContext
  >;
}
