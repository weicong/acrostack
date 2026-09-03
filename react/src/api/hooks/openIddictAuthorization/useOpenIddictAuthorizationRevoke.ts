/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  OpenIddictAuthorizationRevokeOptions,
  OpenIddictAuthorizationRevokeStatus200,
  OpenIddictAuthorizationRevokeStatus204,
  OpenIddictAuthorizationRevokeStatus400,
  OpenIddictAuthorizationRevokeStatus401,
  OpenIddictAuthorizationRevokeStatus403,
  OpenIddictAuthorizationRevokeStatus404,
  OpenIddictAuthorizationRevokeStatus500,
  OpenIddictAuthorizationRevokeStatus501,
} from "../../models/openIddictAuthorization/OpenIddictAuthorizationRevoke";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { openIddictAuthorizationRevoke } from "../../clients/openIddictAuthorization/openIddictAuthorizationRevoke";

export const openIddictAuthorizationRevokeMutationKey = () =>
  [{ url: "/api/app/open-iddict-authorization/:id/revoke" }] as const;

export function openIddictAuthorizationRevokeMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = openIddictAuthorizationRevokeMutationKey();
  return mutationOptions<
    OpenIddictAuthorizationRevokeStatus200 | OpenIddictAuthorizationRevokeStatus204,
    ResponseErrorConfig<
      | OpenIddictAuthorizationRevokeStatus400
      | OpenIddictAuthorizationRevokeStatus401
      | OpenIddictAuthorizationRevokeStatus403
      | OpenIddictAuthorizationRevokeStatus404
      | OpenIddictAuthorizationRevokeStatus500
      | OpenIddictAuthorizationRevokeStatus501
    >,
    OpenIddictAuthorizationRevokeOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await openIddictAuthorizationRevoke({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/open-iddict-authorization/:id/revoke}
 */
export function useOpenIddictAuthorizationRevoke<TContext>(
  options: {
    mutation?: UseMutationOptions<
      OpenIddictAuthorizationRevokeStatus200 | OpenIddictAuthorizationRevokeStatus204,
      ResponseErrorConfig<
        | OpenIddictAuthorizationRevokeStatus400
        | OpenIddictAuthorizationRevokeStatus401
        | OpenIddictAuthorizationRevokeStatus403
        | OpenIddictAuthorizationRevokeStatus404
        | OpenIddictAuthorizationRevokeStatus500
        | OpenIddictAuthorizationRevokeStatus501
      >,
      OpenIddictAuthorizationRevokeOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? openIddictAuthorizationRevokeMutationKey();

  const baseOptions = openIddictAuthorizationRevokeMutationOptions(config) as UseMutationOptions<
    OpenIddictAuthorizationRevokeStatus200 | OpenIddictAuthorizationRevokeStatus204,
    ResponseErrorConfig<
      | OpenIddictAuthorizationRevokeStatus400
      | OpenIddictAuthorizationRevokeStatus401
      | OpenIddictAuthorizationRevokeStatus403
      | OpenIddictAuthorizationRevokeStatus404
      | OpenIddictAuthorizationRevokeStatus500
      | OpenIddictAuthorizationRevokeStatus501
    >,
    OpenIddictAuthorizationRevokeOptions,
    TContext
  >;

  return useMutation<
    OpenIddictAuthorizationRevokeStatus200 | OpenIddictAuthorizationRevokeStatus204,
    ResponseErrorConfig<
      | OpenIddictAuthorizationRevokeStatus400
      | OpenIddictAuthorizationRevokeStatus401
      | OpenIddictAuthorizationRevokeStatus403
      | OpenIddictAuthorizationRevokeStatus404
      | OpenIddictAuthorizationRevokeStatus500
      | OpenIddictAuthorizationRevokeStatus501
    >,
    OpenIddictAuthorizationRevokeOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    OpenIddictAuthorizationRevokeStatus200 | OpenIddictAuthorizationRevokeStatus204,
    ResponseErrorConfig<
      | OpenIddictAuthorizationRevokeStatus400
      | OpenIddictAuthorizationRevokeStatus401
      | OpenIddictAuthorizationRevokeStatus403
      | OpenIddictAuthorizationRevokeStatus404
      | OpenIddictAuthorizationRevokeStatus500
      | OpenIddictAuthorizationRevokeStatus501
    >,
    OpenIddictAuthorizationRevokeOptions,
    TContext
  >;
}
