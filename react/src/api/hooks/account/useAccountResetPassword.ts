/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  AccountResetPasswordData,
  AccountResetPasswordStatus200,
  AccountResetPasswordStatus204,
  AccountResetPasswordStatus400,
  AccountResetPasswordStatus401,
  AccountResetPasswordStatus403,
  AccountResetPasswordStatus404,
  AccountResetPasswordStatus500,
  AccountResetPasswordStatus501,
} from "../../models/account/AccountResetPassword.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { accountResetPassword } from "../../clients/account/accountResetPassword.ts";

export const accountResetPasswordMutationKey = () =>
  [{ url: "/api/account/reset-password" }] as const;

export function accountResetPasswordMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<AccountResetPasswordData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = accountResetPasswordMutationKey();
  return mutationOptions<
    AccountResetPasswordStatus200 | AccountResetPasswordStatus204,
    ResponseErrorConfig<
      | AccountResetPasswordStatus400
      | AccountResetPasswordStatus401
      | AccountResetPasswordStatus403
      | AccountResetPasswordStatus404
      | AccountResetPasswordStatus500
      | AccountResetPasswordStatus501
    >,
    { data?: AccountResetPasswordData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return accountResetPassword(data, config);
    },
  });
}

/**
 * {@link /api/account/reset-password}
 */
export function useAccountResetPassword<TContext>(
  options: {
    mutation?: UseMutationOptions<
      AccountResetPasswordStatus200 | AccountResetPasswordStatus204,
      ResponseErrorConfig<
        | AccountResetPasswordStatus400
        | AccountResetPasswordStatus401
        | AccountResetPasswordStatus403
        | AccountResetPasswordStatus404
        | AccountResetPasswordStatus500
        | AccountResetPasswordStatus501
      >,
      { data?: AccountResetPasswordData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<AccountResetPasswordData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? accountResetPasswordMutationKey();

  const baseOptions = accountResetPasswordMutationOptions(config) as UseMutationOptions<
    AccountResetPasswordStatus200 | AccountResetPasswordStatus204,
    ResponseErrorConfig<
      | AccountResetPasswordStatus400
      | AccountResetPasswordStatus401
      | AccountResetPasswordStatus403
      | AccountResetPasswordStatus404
      | AccountResetPasswordStatus500
      | AccountResetPasswordStatus501
    >,
    { data?: AccountResetPasswordData },
    TContext
  >;

  return useMutation<
    AccountResetPasswordStatus200 | AccountResetPasswordStatus204,
    ResponseErrorConfig<
      | AccountResetPasswordStatus400
      | AccountResetPasswordStatus401
      | AccountResetPasswordStatus403
      | AccountResetPasswordStatus404
      | AccountResetPasswordStatus500
      | AccountResetPasswordStatus501
    >,
    { data?: AccountResetPasswordData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    AccountResetPasswordStatus200 | AccountResetPasswordStatus204,
    ResponseErrorConfig<
      | AccountResetPasswordStatus400
      | AccountResetPasswordStatus401
      | AccountResetPasswordStatus403
      | AccountResetPasswordStatus404
      | AccountResetPasswordStatus500
      | AccountResetPasswordStatus501
    >,
    { data?: AccountResetPasswordData },
    TContext
  >;
}
