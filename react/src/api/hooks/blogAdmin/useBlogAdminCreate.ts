/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogAdminCreateData,
  BlogAdminCreateStatus200,
  BlogAdminCreateStatus400,
  BlogAdminCreateStatus401,
  BlogAdminCreateStatus403,
  BlogAdminCreateStatus404,
  BlogAdminCreateStatus500,
  BlogAdminCreateStatus501,
} from "../../models/blogAdmin/BlogAdminCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogAdminCreate } from "../../clients/blogAdmin/blogAdminCreate.ts";

export const blogAdminCreateMutationKey = () => [{ url: "/api/cms-kit-admin/blogs" }] as const;

export function blogAdminCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<BlogAdminCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = blogAdminCreateMutationKey();
  return mutationOptions<
    BlogAdminCreateStatus200,
    ResponseErrorConfig<
      | BlogAdminCreateStatus400
      | BlogAdminCreateStatus401
      | BlogAdminCreateStatus403
      | BlogAdminCreateStatus404
      | BlogAdminCreateStatus500
      | BlogAdminCreateStatus501
    >,
    { data?: BlogAdminCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return blogAdminCreate(data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs}
 */
export function useBlogAdminCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogAdminCreateStatus200,
      ResponseErrorConfig<
        | BlogAdminCreateStatus400
        | BlogAdminCreateStatus401
        | BlogAdminCreateStatus403
        | BlogAdminCreateStatus404
        | BlogAdminCreateStatus500
        | BlogAdminCreateStatus501
      >,
      { data?: BlogAdminCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<BlogAdminCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogAdminCreateMutationKey();

  const baseOptions = blogAdminCreateMutationOptions(config) as UseMutationOptions<
    BlogAdminCreateStatus200,
    ResponseErrorConfig<
      | BlogAdminCreateStatus400
      | BlogAdminCreateStatus401
      | BlogAdminCreateStatus403
      | BlogAdminCreateStatus404
      | BlogAdminCreateStatus500
      | BlogAdminCreateStatus501
    >,
    { data?: BlogAdminCreateData },
    TContext
  >;

  return useMutation<
    BlogAdminCreateStatus200,
    ResponseErrorConfig<
      | BlogAdminCreateStatus400
      | BlogAdminCreateStatus401
      | BlogAdminCreateStatus403
      | BlogAdminCreateStatus404
      | BlogAdminCreateStatus500
      | BlogAdminCreateStatus501
    >,
    { data?: BlogAdminCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogAdminCreateStatus200,
    ResponseErrorConfig<
      | BlogAdminCreateStatus400
      | BlogAdminCreateStatus401
      | BlogAdminCreateStatus403
      | BlogAdminCreateStatus404
      | BlogAdminCreateStatus500
      | BlogAdminCreateStatus501
    >,
    { data?: BlogAdminCreateData },
    TContext
  >;
}
