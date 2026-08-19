/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BlogAdminDeleteOptions,
  BlogAdminDeleteStatus200,
  BlogAdminDeleteStatus204,
  BlogAdminDeleteStatus400,
  BlogAdminDeleteStatus401,
  BlogAdminDeleteStatus403,
  BlogAdminDeleteStatus404,
  BlogAdminDeleteStatus500,
  BlogAdminDeleteStatus501,
} from "../../models/blogAdmin/BlogAdminDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogAdminDelete } from "../../clients/blogAdmin/blogAdminDelete";

export const blogAdminDeleteMutationKey = () => [{ url: "/api/cms-kit-admin/blogs/:id" }] as const;

export function blogAdminDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = blogAdminDeleteMutationKey();
  return mutationOptions<
    BlogAdminDeleteStatus200 | BlogAdminDeleteStatus204,
    ResponseErrorConfig<
      | BlogAdminDeleteStatus400
      | BlogAdminDeleteStatus401
      | BlogAdminDeleteStatus403
      | BlogAdminDeleteStatus404
      | BlogAdminDeleteStatus500
      | BlogAdminDeleteStatus501
    >,
    BlogAdminDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await blogAdminDelete({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/:id}
 */
export function useBlogAdminDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogAdminDeleteStatus200 | BlogAdminDeleteStatus204,
      ResponseErrorConfig<
        | BlogAdminDeleteStatus400
        | BlogAdminDeleteStatus401
        | BlogAdminDeleteStatus403
        | BlogAdminDeleteStatus404
        | BlogAdminDeleteStatus500
        | BlogAdminDeleteStatus501
      >,
      BlogAdminDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogAdminDeleteMutationKey();

  const baseOptions = blogAdminDeleteMutationOptions(config) as UseMutationOptions<
    BlogAdminDeleteStatus200 | BlogAdminDeleteStatus204,
    ResponseErrorConfig<
      | BlogAdminDeleteStatus400
      | BlogAdminDeleteStatus401
      | BlogAdminDeleteStatus403
      | BlogAdminDeleteStatus404
      | BlogAdminDeleteStatus500
      | BlogAdminDeleteStatus501
    >,
    BlogAdminDeleteOptions,
    TContext
  >;

  return useMutation<
    BlogAdminDeleteStatus200 | BlogAdminDeleteStatus204,
    ResponseErrorConfig<
      | BlogAdminDeleteStatus400
      | BlogAdminDeleteStatus401
      | BlogAdminDeleteStatus403
      | BlogAdminDeleteStatus404
      | BlogAdminDeleteStatus500
      | BlogAdminDeleteStatus501
    >,
    BlogAdminDeleteOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogAdminDeleteStatus200 | BlogAdminDeleteStatus204,
    ResponseErrorConfig<
      | BlogAdminDeleteStatus400
      | BlogAdminDeleteStatus401
      | BlogAdminDeleteStatus403
      | BlogAdminDeleteStatus404
      | BlogAdminDeleteStatus500
      | BlogAdminDeleteStatus501
    >,
    BlogAdminDeleteOptions,
    TContext
  >;
}
