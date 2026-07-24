/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  OpenIddictScopeDeletePathId,
  OpenIddictScopeDeleteStatus200,
  OpenIddictScopeDeleteStatus204,
  OpenIddictScopeDeleteStatus400,
  OpenIddictScopeDeleteStatus401,
  OpenIddictScopeDeleteStatus403,
  OpenIddictScopeDeleteStatus404,
  OpenIddictScopeDeleteStatus500,
  OpenIddictScopeDeleteStatus501,
} from "../../models/openIddictScope/OpenIddictScopeDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { openIddictScopeDelete } from "../../clients/openIddictScope/openIddictScopeDelete.ts";

export const openIddictScopeDeleteMutationKey = () =>
  [{ url: "/api/app/open-iddict-scope/:id" }] as const;

export function openIddictScopeDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = openIddictScopeDeleteMutationKey();
  return mutationOptions<
    OpenIddictScopeDeleteStatus200 | OpenIddictScopeDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictScopeDeleteStatus400
      | OpenIddictScopeDeleteStatus401
      | OpenIddictScopeDeleteStatus403
      | OpenIddictScopeDeleteStatus404
      | OpenIddictScopeDeleteStatus500
      | OpenIddictScopeDeleteStatus501
    >,
    { id: OpenIddictScopeDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return openIddictScopeDelete(id, config);
    },
  });
}

/**
 * {@link /api/app/open-iddict-scope/:id}
 */
export function useOpenIddictScopeDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      OpenIddictScopeDeleteStatus200 | OpenIddictScopeDeleteStatus204,
      ResponseErrorConfig<
        | OpenIddictScopeDeleteStatus400
        | OpenIddictScopeDeleteStatus401
        | OpenIddictScopeDeleteStatus403
        | OpenIddictScopeDeleteStatus404
        | OpenIddictScopeDeleteStatus500
        | OpenIddictScopeDeleteStatus501
      >,
      { id: OpenIddictScopeDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? openIddictScopeDeleteMutationKey();

  const baseOptions = openIddictScopeDeleteMutationOptions(config) as UseMutationOptions<
    OpenIddictScopeDeleteStatus200 | OpenIddictScopeDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictScopeDeleteStatus400
      | OpenIddictScopeDeleteStatus401
      | OpenIddictScopeDeleteStatus403
      | OpenIddictScopeDeleteStatus404
      | OpenIddictScopeDeleteStatus500
      | OpenIddictScopeDeleteStatus501
    >,
    { id: OpenIddictScopeDeletePathId },
    TContext
  >;

  return useMutation<
    OpenIddictScopeDeleteStatus200 | OpenIddictScopeDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictScopeDeleteStatus400
      | OpenIddictScopeDeleteStatus401
      | OpenIddictScopeDeleteStatus403
      | OpenIddictScopeDeleteStatus404
      | OpenIddictScopeDeleteStatus500
      | OpenIddictScopeDeleteStatus501
    >,
    { id: OpenIddictScopeDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    OpenIddictScopeDeleteStatus200 | OpenIddictScopeDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictScopeDeleteStatus400
      | OpenIddictScopeDeleteStatus401
      | OpenIddictScopeDeleteStatus403
      | OpenIddictScopeDeleteStatus404
      | OpenIddictScopeDeleteStatus500
      | OpenIddictScopeDeleteStatus501
    >,
    { id: OpenIddictScopeDeletePathId },
    TContext
  >;
}
