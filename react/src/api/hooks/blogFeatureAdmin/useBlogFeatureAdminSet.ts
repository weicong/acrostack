/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogFeatureAdminSetData,
  BlogFeatureAdminSetPathBlogId,
  BlogFeatureAdminSetStatus200,
  BlogFeatureAdminSetStatus204,
  BlogFeatureAdminSetStatus400,
  BlogFeatureAdminSetStatus401,
  BlogFeatureAdminSetStatus403,
  BlogFeatureAdminSetStatus404,
  BlogFeatureAdminSetStatus500,
  BlogFeatureAdminSetStatus501,
} from "../../models/blogFeatureAdmin/BlogFeatureAdminSet.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogFeatureAdminSet } from "../../clients/blogFeatureAdmin/blogFeatureAdminSet.ts";

export const blogFeatureAdminSetMutationKey = () =>
  [{ url: "/api/cms-kit-admin/blogs/:blogId/features" }] as const;

export function blogFeatureAdminSetMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<BlogFeatureAdminSetData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = blogFeatureAdminSetMutationKey();
  return mutationOptions<
    BlogFeatureAdminSetStatus200 | BlogFeatureAdminSetStatus204,
    ResponseErrorConfig<
      | BlogFeatureAdminSetStatus400
      | BlogFeatureAdminSetStatus401
      | BlogFeatureAdminSetStatus403
      | BlogFeatureAdminSetStatus404
      | BlogFeatureAdminSetStatus500
      | BlogFeatureAdminSetStatus501
    >,
    { blogId: BlogFeatureAdminSetPathBlogId; data?: BlogFeatureAdminSetData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ blogId, data }) => {
      return blogFeatureAdminSet(blogId, data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/:blogId/features}
 */
export function useBlogFeatureAdminSet<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogFeatureAdminSetStatus200 | BlogFeatureAdminSetStatus204,
      ResponseErrorConfig<
        | BlogFeatureAdminSetStatus400
        | BlogFeatureAdminSetStatus401
        | BlogFeatureAdminSetStatus403
        | BlogFeatureAdminSetStatus404
        | BlogFeatureAdminSetStatus500
        | BlogFeatureAdminSetStatus501
      >,
      { blogId: BlogFeatureAdminSetPathBlogId; data?: BlogFeatureAdminSetData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<BlogFeatureAdminSetData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogFeatureAdminSetMutationKey();

  const baseOptions = blogFeatureAdminSetMutationOptions(config) as UseMutationOptions<
    BlogFeatureAdminSetStatus200 | BlogFeatureAdminSetStatus204,
    ResponseErrorConfig<
      | BlogFeatureAdminSetStatus400
      | BlogFeatureAdminSetStatus401
      | BlogFeatureAdminSetStatus403
      | BlogFeatureAdminSetStatus404
      | BlogFeatureAdminSetStatus500
      | BlogFeatureAdminSetStatus501
    >,
    { blogId: BlogFeatureAdminSetPathBlogId; data?: BlogFeatureAdminSetData },
    TContext
  >;

  return useMutation<
    BlogFeatureAdminSetStatus200 | BlogFeatureAdminSetStatus204,
    ResponseErrorConfig<
      | BlogFeatureAdminSetStatus400
      | BlogFeatureAdminSetStatus401
      | BlogFeatureAdminSetStatus403
      | BlogFeatureAdminSetStatus404
      | BlogFeatureAdminSetStatus500
      | BlogFeatureAdminSetStatus501
    >,
    { blogId: BlogFeatureAdminSetPathBlogId; data?: BlogFeatureAdminSetData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogFeatureAdminSetStatus200 | BlogFeatureAdminSetStatus204,
    ResponseErrorConfig<
      | BlogFeatureAdminSetStatus400
      | BlogFeatureAdminSetStatus401
      | BlogFeatureAdminSetStatus403
      | BlogFeatureAdminSetStatus404
      | BlogFeatureAdminSetStatus500
      | BlogFeatureAdminSetStatus501
    >,
    { blogId: BlogFeatureAdminSetPathBlogId; data?: BlogFeatureAdminSetData },
    TContext
  >;
}
