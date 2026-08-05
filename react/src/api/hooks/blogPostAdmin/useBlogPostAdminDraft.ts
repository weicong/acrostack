/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
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
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogPostAdminDraft } from "../../clients/blogPostAdmin/blogPostAdminDraft.ts";

export const blogPostAdminDraftMutationKey = () =>
  [{ url: "/api/cms-kit-admin/blogs/blog-posts/:id/draft" }] as const;

export function blogPostAdminDraftMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = blogPostAdminDraftMutationKey();
  return mutationOptions<
    BlogPostAdminDraftStatus200 | BlogPostAdminDraftStatus204,
    ResponseErrorConfig<
      | BlogPostAdminDraftStatus400
      | BlogPostAdminDraftStatus401
      | BlogPostAdminDraftStatus403
      | BlogPostAdminDraftStatus404
      | BlogPostAdminDraftStatus500
      | BlogPostAdminDraftStatus501
    >,
    { id: BlogPostAdminDraftPathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return blogPostAdminDraft(id, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id/draft}
 */
export function useBlogPostAdminDraft<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogPostAdminDraftStatus200 | BlogPostAdminDraftStatus204,
      ResponseErrorConfig<
        | BlogPostAdminDraftStatus400
        | BlogPostAdminDraftStatus401
        | BlogPostAdminDraftStatus403
        | BlogPostAdminDraftStatus404
        | BlogPostAdminDraftStatus500
        | BlogPostAdminDraftStatus501
      >,
      { id: BlogPostAdminDraftPathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostAdminDraftMutationKey();

  const baseOptions = blogPostAdminDraftMutationOptions(config) as UseMutationOptions<
    BlogPostAdminDraftStatus200 | BlogPostAdminDraftStatus204,
    ResponseErrorConfig<
      | BlogPostAdminDraftStatus400
      | BlogPostAdminDraftStatus401
      | BlogPostAdminDraftStatus403
      | BlogPostAdminDraftStatus404
      | BlogPostAdminDraftStatus500
      | BlogPostAdminDraftStatus501
    >,
    { id: BlogPostAdminDraftPathId },
    TContext
  >;

  return useMutation<
    BlogPostAdminDraftStatus200 | BlogPostAdminDraftStatus204,
    ResponseErrorConfig<
      | BlogPostAdminDraftStatus400
      | BlogPostAdminDraftStatus401
      | BlogPostAdminDraftStatus403
      | BlogPostAdminDraftStatus404
      | BlogPostAdminDraftStatus500
      | BlogPostAdminDraftStatus501
    >,
    { id: BlogPostAdminDraftPathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogPostAdminDraftStatus200 | BlogPostAdminDraftStatus204,
    ResponseErrorConfig<
      | BlogPostAdminDraftStatus400
      | BlogPostAdminDraftStatus401
      | BlogPostAdminDraftStatus403
      | BlogPostAdminDraftStatus404
      | BlogPostAdminDraftStatus500
      | BlogPostAdminDraftStatus501
    >,
    { id: BlogPostAdminDraftPathId },
    TContext
  >;
}
