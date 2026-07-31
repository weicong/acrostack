/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  PageDeletePathId,
  PageDeleteStatus200,
  PageDeleteStatus204,
  PageDeleteStatus400,
  PageDeleteStatus401,
  PageDeleteStatus403,
  PageDeleteStatus404,
  PageDeleteStatus500,
  PageDeleteStatus501,
} from "../../models/page/PageDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { pageDelete } from "../../clients/page/pageDelete.ts";

export const pageDeleteMutationKey = () => [{ url: "/api/app/page/:id" }] as const;

export function pageDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = pageDeleteMutationKey();
  return mutationOptions<
    PageDeleteStatus200 | PageDeleteStatus204,
    ResponseErrorConfig<
      | PageDeleteStatus400
      | PageDeleteStatus401
      | PageDeleteStatus403
      | PageDeleteStatus404
      | PageDeleteStatus500
      | PageDeleteStatus501
    >,
    { id: PageDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return pageDelete(id, config);
    },
  });
}

/**
 * {@link /api/app/page/:id}
 */
export function usePageDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PageDeleteStatus200 | PageDeleteStatus204,
      ResponseErrorConfig<
        | PageDeleteStatus400
        | PageDeleteStatus401
        | PageDeleteStatus403
        | PageDeleteStatus404
        | PageDeleteStatus500
        | PageDeleteStatus501
      >,
      { id: PageDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? pageDeleteMutationKey();

  const baseOptions = pageDeleteMutationOptions(config) as UseMutationOptions<
    PageDeleteStatus200 | PageDeleteStatus204,
    ResponseErrorConfig<
      | PageDeleteStatus400
      | PageDeleteStatus401
      | PageDeleteStatus403
      | PageDeleteStatus404
      | PageDeleteStatus500
      | PageDeleteStatus501
    >,
    { id: PageDeletePathId },
    TContext
  >;

  return useMutation<
    PageDeleteStatus200 | PageDeleteStatus204,
    ResponseErrorConfig<
      | PageDeleteStatus400
      | PageDeleteStatus401
      | PageDeleteStatus403
      | PageDeleteStatus404
      | PageDeleteStatus500
      | PageDeleteStatus501
    >,
    { id: PageDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    PageDeleteStatus200 | PageDeleteStatus204,
    ResponseErrorConfig<
      | PageDeleteStatus400
      | PageDeleteStatus401
      | PageDeleteStatus403
      | PageDeleteStatus404
      | PageDeleteStatus500
      | PageDeleteStatus501
    >,
    { id: PageDeletePathId },
    TContext
  >;
}
