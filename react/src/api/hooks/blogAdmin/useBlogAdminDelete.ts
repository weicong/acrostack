/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogAdminDeletePathId,
  BlogAdminDeleteStatus200,
  BlogAdminDeleteStatus204,
  BlogAdminDeleteStatus400,
  BlogAdminDeleteStatus401,
  BlogAdminDeleteStatus403,
  BlogAdminDeleteStatus404,
  BlogAdminDeleteStatus500,
  BlogAdminDeleteStatus501,
} from "../../models/blogAdmin/BlogAdminDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogAdminDelete } from "../../clients/blogAdmin/blogAdminDelete.ts";

export const blogAdminDeleteMutationKey = () => [{ url: "/api/cms-kit-admin/blogs/:id" }] as const;

export function blogAdminDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
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
    { id: BlogAdminDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return blogAdminDelete(id, config);
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
      { id: BlogAdminDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
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
    { id: BlogAdminDeletePathId },
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
    { id: BlogAdminDeletePathId },
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
    { id: BlogAdminDeletePathId },
    TContext
  >;
}
