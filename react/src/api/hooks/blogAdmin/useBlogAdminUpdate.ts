/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogAdminUpdateData,
  BlogAdminUpdatePathId,
  BlogAdminUpdateStatus200,
  BlogAdminUpdateStatus400,
  BlogAdminUpdateStatus401,
  BlogAdminUpdateStatus403,
  BlogAdminUpdateStatus404,
  BlogAdminUpdateStatus500,
  BlogAdminUpdateStatus501,
} from "../../models/blogAdmin/BlogAdminUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogAdminUpdate } from "../../clients/blogAdmin/blogAdminUpdate.ts";

export const blogAdminUpdateMutationKey = () => [{ url: "/api/cms-kit-admin/blogs/:id" }] as const;

export function blogAdminUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<BlogAdminUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = blogAdminUpdateMutationKey();
  return mutationOptions<
    BlogAdminUpdateStatus200,
    ResponseErrorConfig<
      | BlogAdminUpdateStatus400
      | BlogAdminUpdateStatus401
      | BlogAdminUpdateStatus403
      | BlogAdminUpdateStatus404
      | BlogAdminUpdateStatus500
      | BlogAdminUpdateStatus501
    >,
    { id: BlogAdminUpdatePathId; data?: BlogAdminUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return blogAdminUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/:id}
 */
export function useBlogAdminUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogAdminUpdateStatus200,
      ResponseErrorConfig<
        | BlogAdminUpdateStatus400
        | BlogAdminUpdateStatus401
        | BlogAdminUpdateStatus403
        | BlogAdminUpdateStatus404
        | BlogAdminUpdateStatus500
        | BlogAdminUpdateStatus501
      >,
      { id: BlogAdminUpdatePathId; data?: BlogAdminUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<BlogAdminUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogAdminUpdateMutationKey();

  const baseOptions = blogAdminUpdateMutationOptions(config) as UseMutationOptions<
    BlogAdminUpdateStatus200,
    ResponseErrorConfig<
      | BlogAdminUpdateStatus400
      | BlogAdminUpdateStatus401
      | BlogAdminUpdateStatus403
      | BlogAdminUpdateStatus404
      | BlogAdminUpdateStatus500
      | BlogAdminUpdateStatus501
    >,
    { id: BlogAdminUpdatePathId; data?: BlogAdminUpdateData },
    TContext
  >;

  return useMutation<
    BlogAdminUpdateStatus200,
    ResponseErrorConfig<
      | BlogAdminUpdateStatus400
      | BlogAdminUpdateStatus401
      | BlogAdminUpdateStatus403
      | BlogAdminUpdateStatus404
      | BlogAdminUpdateStatus500
      | BlogAdminUpdateStatus501
    >,
    { id: BlogAdminUpdatePathId; data?: BlogAdminUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogAdminUpdateStatus200,
    ResponseErrorConfig<
      | BlogAdminUpdateStatus400
      | BlogAdminUpdateStatus401
      | BlogAdminUpdateStatus403
      | BlogAdminUpdateStatus404
      | BlogAdminUpdateStatus500
      | BlogAdminUpdateStatus501
    >,
    { id: BlogAdminUpdatePathId; data?: BlogAdminUpdateData },
    TContext
  >;
}
