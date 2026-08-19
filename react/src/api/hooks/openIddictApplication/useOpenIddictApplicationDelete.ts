/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  OpenIddictApplicationDeleteOptions,
  OpenIddictApplicationDeleteStatus200,
  OpenIddictApplicationDeleteStatus204,
  OpenIddictApplicationDeleteStatus400,
  OpenIddictApplicationDeleteStatus401,
  OpenIddictApplicationDeleteStatus403,
  OpenIddictApplicationDeleteStatus404,
  OpenIddictApplicationDeleteStatus500,
  OpenIddictApplicationDeleteStatus501,
} from "../../models/openIddictApplication/OpenIddictApplicationDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { openIddictApplicationDelete } from "../../clients/openIddictApplication/openIddictApplicationDelete";

export const openIddictApplicationDeleteMutationKey = () =>
  [{ url: "/api/app/open-iddict-application/:id" }] as const;

export function openIddictApplicationDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
    OpenIddictApplicationDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await openIddictApplicationDelete({ ...config, path, throwOnError: true });
      return data;
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
      OpenIddictApplicationDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
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
    OpenIddictApplicationDeleteOptions,
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
    OpenIddictApplicationDeleteOptions,
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
    OpenIddictApplicationDeleteOptions,
    TContext
  >;
}
