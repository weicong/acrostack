/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  OpenIddictTokenRevokeOptions,
  OpenIddictTokenRevokeStatus200,
  OpenIddictTokenRevokeStatus204,
  OpenIddictTokenRevokeStatus400,
  OpenIddictTokenRevokeStatus401,
  OpenIddictTokenRevokeStatus403,
  OpenIddictTokenRevokeStatus404,
  OpenIddictTokenRevokeStatus500,
  OpenIddictTokenRevokeStatus501,
} from "../../models/openIddictToken/OpenIddictTokenRevoke";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { openIddictTokenRevoke } from "../../clients/openIddictToken/openIddictTokenRevoke";

export const openIddictTokenRevokeMutationKey = () =>
  [{ url: "/api/app/open-iddict-token/:id/revoke" }] as const;

export function openIddictTokenRevokeMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = openIddictTokenRevokeMutationKey();
  return mutationOptions<
    OpenIddictTokenRevokeStatus200 | OpenIddictTokenRevokeStatus204,
    ResponseErrorConfig<
      | OpenIddictTokenRevokeStatus400
      | OpenIddictTokenRevokeStatus401
      | OpenIddictTokenRevokeStatus403
      | OpenIddictTokenRevokeStatus404
      | OpenIddictTokenRevokeStatus500
      | OpenIddictTokenRevokeStatus501
    >,
    OpenIddictTokenRevokeOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await openIddictTokenRevoke({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/open-iddict-token/:id/revoke}
 */
export function useOpenIddictTokenRevoke<TContext>(
  options: {
    mutation?: UseMutationOptions<
      OpenIddictTokenRevokeStatus200 | OpenIddictTokenRevokeStatus204,
      ResponseErrorConfig<
        | OpenIddictTokenRevokeStatus400
        | OpenIddictTokenRevokeStatus401
        | OpenIddictTokenRevokeStatus403
        | OpenIddictTokenRevokeStatus404
        | OpenIddictTokenRevokeStatus500
        | OpenIddictTokenRevokeStatus501
      >,
      OpenIddictTokenRevokeOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? openIddictTokenRevokeMutationKey();

  const baseOptions = openIddictTokenRevokeMutationOptions(config) as UseMutationOptions<
    OpenIddictTokenRevokeStatus200 | OpenIddictTokenRevokeStatus204,
    ResponseErrorConfig<
      | OpenIddictTokenRevokeStatus400
      | OpenIddictTokenRevokeStatus401
      | OpenIddictTokenRevokeStatus403
      | OpenIddictTokenRevokeStatus404
      | OpenIddictTokenRevokeStatus500
      | OpenIddictTokenRevokeStatus501
    >,
    OpenIddictTokenRevokeOptions,
    TContext
  >;

  return useMutation<
    OpenIddictTokenRevokeStatus200 | OpenIddictTokenRevokeStatus204,
    ResponseErrorConfig<
      | OpenIddictTokenRevokeStatus400
      | OpenIddictTokenRevokeStatus401
      | OpenIddictTokenRevokeStatus403
      | OpenIddictTokenRevokeStatus404
      | OpenIddictTokenRevokeStatus500
      | OpenIddictTokenRevokeStatus501
    >,
    OpenIddictTokenRevokeOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    OpenIddictTokenRevokeStatus200 | OpenIddictTokenRevokeStatus204,
    ResponseErrorConfig<
      | OpenIddictTokenRevokeStatus400
      | OpenIddictTokenRevokeStatus401
      | OpenIddictTokenRevokeStatus403
      | OpenIddictTokenRevokeStatus404
      | OpenIddictTokenRevokeStatus500
      | OpenIddictTokenRevokeStatus501
    >,
    OpenIddictTokenRevokeOptions,
    TContext
  >;
}
