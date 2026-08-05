/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogPostAdminCreateData,
  BlogPostAdminCreateStatus200,
  BlogPostAdminCreateStatus400,
  BlogPostAdminCreateStatus401,
  BlogPostAdminCreateStatus403,
  BlogPostAdminCreateStatus404,
  BlogPostAdminCreateStatus500,
  BlogPostAdminCreateStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogPostAdminCreate } from "../../clients/blogPostAdmin/blogPostAdminCreate.ts";

export const blogPostAdminCreateMutationKey = () =>
  [{ url: "/api/cms-kit-admin/blogs/blog-posts" }] as const;

export function blogPostAdminCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<BlogPostAdminCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = blogPostAdminCreateMutationKey();
  return mutationOptions<
    BlogPostAdminCreateStatus200,
    ResponseErrorConfig<
      | BlogPostAdminCreateStatus400
      | BlogPostAdminCreateStatus401
      | BlogPostAdminCreateStatus403
      | BlogPostAdminCreateStatus404
      | BlogPostAdminCreateStatus500
      | BlogPostAdminCreateStatus501
    >,
    { data?: BlogPostAdminCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return blogPostAdminCreate(data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts}
 */
export function useBlogPostAdminCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogPostAdminCreateStatus200,
      ResponseErrorConfig<
        | BlogPostAdminCreateStatus400
        | BlogPostAdminCreateStatus401
        | BlogPostAdminCreateStatus403
        | BlogPostAdminCreateStatus404
        | BlogPostAdminCreateStatus500
        | BlogPostAdminCreateStatus501
      >,
      { data?: BlogPostAdminCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<BlogPostAdminCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostAdminCreateMutationKey();

  const baseOptions = blogPostAdminCreateMutationOptions(config) as UseMutationOptions<
    BlogPostAdminCreateStatus200,
    ResponseErrorConfig<
      | BlogPostAdminCreateStatus400
      | BlogPostAdminCreateStatus401
      | BlogPostAdminCreateStatus403
      | BlogPostAdminCreateStatus404
      | BlogPostAdminCreateStatus500
      | BlogPostAdminCreateStatus501
    >,
    { data?: BlogPostAdminCreateData },
    TContext
  >;

  return useMutation<
    BlogPostAdminCreateStatus200,
    ResponseErrorConfig<
      | BlogPostAdminCreateStatus400
      | BlogPostAdminCreateStatus401
      | BlogPostAdminCreateStatus403
      | BlogPostAdminCreateStatus404
      | BlogPostAdminCreateStatus500
      | BlogPostAdminCreateStatus501
    >,
    { data?: BlogPostAdminCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogPostAdminCreateStatus200,
    ResponseErrorConfig<
      | BlogPostAdminCreateStatus400
      | BlogPostAdminCreateStatus401
      | BlogPostAdminCreateStatus403
      | BlogPostAdminCreateStatus404
      | BlogPostAdminCreateStatus500
      | BlogPostAdminCreateStatus501
    >,
    { data?: BlogPostAdminCreateData },
    TContext
  >;
}
