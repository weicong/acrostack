/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { GdprDeleteMyAccountStatus200 } from "../../models/gdpr/GdprDeleteMyAccount.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { gdprDeleteMyAccount } from "../../clients/gdpr/gdprDeleteMyAccount.ts";

export const gdprDeleteMyAccountMutationKey = () => [{ url: "/api/app/gdpr/account" }] as const;

export function gdprDeleteMyAccountMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = gdprDeleteMyAccountMutationKey();
  return mutationOptions<
    GdprDeleteMyAccountStatus200,
    ResponseErrorConfig<Error>,
    undefined,
    TContext
  >({
    mutationKey,
    mutationFn: async (_) => {
      return gdprDeleteMyAccount(config);
    },
  });
}

/**
 * {@link /api/app/gdpr/account}
 */
export function useGdprDeleteMyAccount<TContext>(
  options: {
    mutation?: UseMutationOptions<
      GdprDeleteMyAccountStatus200,
      ResponseErrorConfig<Error>,
      undefined,
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? gdprDeleteMyAccountMutationKey();

  const baseOptions = gdprDeleteMyAccountMutationOptions(config) as UseMutationOptions<
    GdprDeleteMyAccountStatus200,
    ResponseErrorConfig<Error>,
    undefined,
    TContext
  >;

  return useMutation<GdprDeleteMyAccountStatus200, ResponseErrorConfig<Error>, undefined, TContext>(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    GdprDeleteMyAccountStatus200,
    ResponseErrorConfig<Error>,
    undefined,
    TContext
  >;
}
