/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  OpenIddictAuthorizationDeleteOptions,
  OpenIddictAuthorizationDeleteStatus200,
  OpenIddictAuthorizationDeleteStatus204,
  OpenIddictAuthorizationDeleteStatus400,
  OpenIddictAuthorizationDeleteStatus401,
  OpenIddictAuthorizationDeleteStatus403,
  OpenIddictAuthorizationDeleteStatus404,
  OpenIddictAuthorizationDeleteStatus500,
  OpenIddictAuthorizationDeleteStatus501,
} from "../../models/openIddictAuthorization/OpenIddictAuthorizationDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { openIddictAuthorizationDelete } from "../../clients/openIddictAuthorization/openIddictAuthorizationDelete";

export const openIddictAuthorizationDeleteMutationKey = () =>
  [{ url: "/api/app/open-iddict-authorization/:id" }] as const;

export function openIddictAuthorizationDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = openIddictAuthorizationDeleteMutationKey();
  return mutationOptions<
    OpenIddictAuthorizationDeleteStatus200 | OpenIddictAuthorizationDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictAuthorizationDeleteStatus400
      | OpenIddictAuthorizationDeleteStatus401
      | OpenIddictAuthorizationDeleteStatus403
      | OpenIddictAuthorizationDeleteStatus404
      | OpenIddictAuthorizationDeleteStatus500
      | OpenIddictAuthorizationDeleteStatus501
    >,
    OpenIddictAuthorizationDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await openIddictAuthorizationDelete({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/open-iddict-authorization/:id}
 */
export function useOpenIddictAuthorizationDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      OpenIddictAuthorizationDeleteStatus200 | OpenIddictAuthorizationDeleteStatus204,
      ResponseErrorConfig<
        | OpenIddictAuthorizationDeleteStatus400
        | OpenIddictAuthorizationDeleteStatus401
        | OpenIddictAuthorizationDeleteStatus403
        | OpenIddictAuthorizationDeleteStatus404
        | OpenIddictAuthorizationDeleteStatus500
        | OpenIddictAuthorizationDeleteStatus501
      >,
      OpenIddictAuthorizationDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? openIddictAuthorizationDeleteMutationKey();

  const baseOptions = openIddictAuthorizationDeleteMutationOptions(config) as UseMutationOptions<
    OpenIddictAuthorizationDeleteStatus200 | OpenIddictAuthorizationDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictAuthorizationDeleteStatus400
      | OpenIddictAuthorizationDeleteStatus401
      | OpenIddictAuthorizationDeleteStatus403
      | OpenIddictAuthorizationDeleteStatus404
      | OpenIddictAuthorizationDeleteStatus500
      | OpenIddictAuthorizationDeleteStatus501
    >,
    OpenIddictAuthorizationDeleteOptions,
    TContext
  >;

  return useMutation<
    OpenIddictAuthorizationDeleteStatus200 | OpenIddictAuthorizationDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictAuthorizationDeleteStatus400
      | OpenIddictAuthorizationDeleteStatus401
      | OpenIddictAuthorizationDeleteStatus403
      | OpenIddictAuthorizationDeleteStatus404
      | OpenIddictAuthorizationDeleteStatus500
      | OpenIddictAuthorizationDeleteStatus501
    >,
    OpenIddictAuthorizationDeleteOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    OpenIddictAuthorizationDeleteStatus200 | OpenIddictAuthorizationDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictAuthorizationDeleteStatus400
      | OpenIddictAuthorizationDeleteStatus401
      | OpenIddictAuthorizationDeleteStatus403
      | OpenIddictAuthorizationDeleteStatus404
      | OpenIddictAuthorizationDeleteStatus500
      | OpenIddictAuthorizationDeleteStatus501
    >,
    OpenIddictAuthorizationDeleteOptions,
    TContext
  >;
}
