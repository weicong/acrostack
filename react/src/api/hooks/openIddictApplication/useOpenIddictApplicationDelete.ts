/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  OpenIddictApplicationDeletePathId,
  OpenIddictApplicationDeleteStatus200,
  OpenIddictApplicationDeleteStatus204,
  OpenIddictApplicationDeleteStatus400,
  OpenIddictApplicationDeleteStatus401,
  OpenIddictApplicationDeleteStatus403,
  OpenIddictApplicationDeleteStatus404,
  OpenIddictApplicationDeleteStatus500,
  OpenIddictApplicationDeleteStatus501,
} from "../../models/openIddictApplication/OpenIddictApplicationDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { openIddictApplicationDelete } from "../../clients/openIddictApplication/openIddictApplicationDelete.ts";

export const openIddictApplicationDeleteMutationKey = () =>
  [{ url: "/api/app/open-iddict-application/:id" }] as const;

export function openIddictApplicationDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = openIddictApplicationDeleteMutationKey();
  return mutationOptions<
    OpenIddictApplicationDeleteStatus200 | OpenIddictApplicationDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictApplicationDeleteStatus400
      | OpenIddictApplicationDeleteStatus401
      | OpenIddictApplicationDeleteStatus403
      | OpenIddictApplicationDeleteStatus404
      | OpenIddictApplicationDeleteStatus500
      | OpenIddictApplicationDeleteStatus501
    >,
    { id: OpenIddictApplicationDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return openIddictApplicationDelete(id, config);
    },
  });
}

/**
 * {@link /api/app/open-iddict-application/:id}
 */
export function useOpenIddictApplicationDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      OpenIddictApplicationDeleteStatus200 | OpenIddictApplicationDeleteStatus204,
      ResponseErrorConfig<
        | OpenIddictApplicationDeleteStatus400
        | OpenIddictApplicationDeleteStatus401
        | OpenIddictApplicationDeleteStatus403
        | OpenIddictApplicationDeleteStatus404
        | OpenIddictApplicationDeleteStatus500
        | OpenIddictApplicationDeleteStatus501
      >,
      { id: OpenIddictApplicationDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? openIddictApplicationDeleteMutationKey();

  const baseOptions = openIddictApplicationDeleteMutationOptions(config) as UseMutationOptions<
    OpenIddictApplicationDeleteStatus200 | OpenIddictApplicationDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictApplicationDeleteStatus400
      | OpenIddictApplicationDeleteStatus401
      | OpenIddictApplicationDeleteStatus403
      | OpenIddictApplicationDeleteStatus404
      | OpenIddictApplicationDeleteStatus500
      | OpenIddictApplicationDeleteStatus501
    >,
    { id: OpenIddictApplicationDeletePathId },
    TContext
  >;

  return useMutation<
    OpenIddictApplicationDeleteStatus200 | OpenIddictApplicationDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictApplicationDeleteStatus400
      | OpenIddictApplicationDeleteStatus401
      | OpenIddictApplicationDeleteStatus403
      | OpenIddictApplicationDeleteStatus404
      | OpenIddictApplicationDeleteStatus500
      | OpenIddictApplicationDeleteStatus501
    >,
    { id: OpenIddictApplicationDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    OpenIddictApplicationDeleteStatus200 | OpenIddictApplicationDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictApplicationDeleteStatus400
      | OpenIddictApplicationDeleteStatus401
      | OpenIddictApplicationDeleteStatus403
      | OpenIddictApplicationDeleteStatus404
      | OpenIddictApplicationDeleteStatus500
      | OpenIddictApplicationDeleteStatus501
    >,
    { id: OpenIddictApplicationDeletePathId },
    TContext
  >;
}
