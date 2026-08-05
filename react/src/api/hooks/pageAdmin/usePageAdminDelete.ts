/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  PageAdminDeletePathId,
  PageAdminDeleteStatus200,
  PageAdminDeleteStatus204,
  PageAdminDeleteStatus400,
  PageAdminDeleteStatus401,
  PageAdminDeleteStatus403,
  PageAdminDeleteStatus404,
  PageAdminDeleteStatus500,
  PageAdminDeleteStatus501,
} from "../../models/pageAdmin/PageAdminDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { pageAdminDelete } from "../../clients/pageAdmin/pageAdminDelete.ts";

export const pageAdminDeleteMutationKey = () => [{ url: "/api/cms-kit-admin/pages/:id" }] as const;

export function pageAdminDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = pageAdminDeleteMutationKey();
  return mutationOptions<
    PageAdminDeleteStatus200 | PageAdminDeleteStatus204,
    ResponseErrorConfig<
      | PageAdminDeleteStatus400
      | PageAdminDeleteStatus401
      | PageAdminDeleteStatus403
      | PageAdminDeleteStatus404
      | PageAdminDeleteStatus500
      | PageAdminDeleteStatus501
    >,
    { id: PageAdminDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return pageAdminDelete(id, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/pages/:id}
 */
export function usePageAdminDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PageAdminDeleteStatus200 | PageAdminDeleteStatus204,
      ResponseErrorConfig<
        | PageAdminDeleteStatus400
        | PageAdminDeleteStatus401
        | PageAdminDeleteStatus403
        | PageAdminDeleteStatus404
        | PageAdminDeleteStatus500
        | PageAdminDeleteStatus501
      >,
      { id: PageAdminDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? pageAdminDeleteMutationKey();

  const baseOptions = pageAdminDeleteMutationOptions(config) as UseMutationOptions<
    PageAdminDeleteStatus200 | PageAdminDeleteStatus204,
    ResponseErrorConfig<
      | PageAdminDeleteStatus400
      | PageAdminDeleteStatus401
      | PageAdminDeleteStatus403
      | PageAdminDeleteStatus404
      | PageAdminDeleteStatus500
      | PageAdminDeleteStatus501
    >,
    { id: PageAdminDeletePathId },
    TContext
  >;

  return useMutation<
    PageAdminDeleteStatus200 | PageAdminDeleteStatus204,
    ResponseErrorConfig<
      | PageAdminDeleteStatus400
      | PageAdminDeleteStatus401
      | PageAdminDeleteStatus403
      | PageAdminDeleteStatus404
      | PageAdminDeleteStatus500
      | PageAdminDeleteStatus501
    >,
    { id: PageAdminDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    PageAdminDeleteStatus200 | PageAdminDeleteStatus204,
    ResponseErrorConfig<
      | PageAdminDeleteStatus400
      | PageAdminDeleteStatus401
      | PageAdminDeleteStatus403
      | PageAdminDeleteStatus404
      | PageAdminDeleteStatus500
      | PageAdminDeleteStatus501
    >,
    { id: PageAdminDeletePathId },
    TContext
  >;
}
