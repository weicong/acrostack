/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  OpenIddictTokenDeleteOptions,
  OpenIddictTokenDeleteStatus200,
  OpenIddictTokenDeleteStatus204,
  OpenIddictTokenDeleteStatus400,
  OpenIddictTokenDeleteStatus401,
  OpenIddictTokenDeleteStatus403,
  OpenIddictTokenDeleteStatus404,
  OpenIddictTokenDeleteStatus500,
  OpenIddictTokenDeleteStatus501,
} from "../../models/openIddictToken/OpenIddictTokenDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { openIddictTokenDelete } from "../../clients/openIddictToken/openIddictTokenDelete";

export const openIddictTokenDeleteMutationKey = () =>
  [{ url: "/api/app/open-iddict-token/:id" }] as const;

export function openIddictTokenDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = openIddictTokenDeleteMutationKey();
  return mutationOptions<
    OpenIddictTokenDeleteStatus200 | OpenIddictTokenDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictTokenDeleteStatus400
      | OpenIddictTokenDeleteStatus401
      | OpenIddictTokenDeleteStatus403
      | OpenIddictTokenDeleteStatus404
      | OpenIddictTokenDeleteStatus500
      | OpenIddictTokenDeleteStatus501
    >,
    OpenIddictTokenDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await openIddictTokenDelete({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/open-iddict-token/:id}
 */
export function useOpenIddictTokenDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      OpenIddictTokenDeleteStatus200 | OpenIddictTokenDeleteStatus204,
      ResponseErrorConfig<
        | OpenIddictTokenDeleteStatus400
        | OpenIddictTokenDeleteStatus401
        | OpenIddictTokenDeleteStatus403
        | OpenIddictTokenDeleteStatus404
        | OpenIddictTokenDeleteStatus500
        | OpenIddictTokenDeleteStatus501
      >,
      OpenIddictTokenDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? openIddictTokenDeleteMutationKey();

  const baseOptions = openIddictTokenDeleteMutationOptions(config) as UseMutationOptions<
    OpenIddictTokenDeleteStatus200 | OpenIddictTokenDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictTokenDeleteStatus400
      | OpenIddictTokenDeleteStatus401
      | OpenIddictTokenDeleteStatus403
      | OpenIddictTokenDeleteStatus404
      | OpenIddictTokenDeleteStatus500
      | OpenIddictTokenDeleteStatus501
    >,
    OpenIddictTokenDeleteOptions,
    TContext
  >;

  return useMutation<
    OpenIddictTokenDeleteStatus200 | OpenIddictTokenDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictTokenDeleteStatus400
      | OpenIddictTokenDeleteStatus401
      | OpenIddictTokenDeleteStatus403
      | OpenIddictTokenDeleteStatus404
      | OpenIddictTokenDeleteStatus500
      | OpenIddictTokenDeleteStatus501
    >,
    OpenIddictTokenDeleteOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    OpenIddictTokenDeleteStatus200 | OpenIddictTokenDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictTokenDeleteStatus400
      | OpenIddictTokenDeleteStatus401
      | OpenIddictTokenDeleteStatus403
      | OpenIddictTokenDeleteStatus404
      | OpenIddictTokenDeleteStatus500
      | OpenIddictTokenDeleteStatus501
    >,
    OpenIddictTokenDeleteOptions,
    TContext
  >;
}
