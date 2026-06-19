/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  AccountSendPasswordResetCodeData,
  AccountSendPasswordResetCodeStatus200,
  AccountSendPasswordResetCodeStatus204,
  AccountSendPasswordResetCodeStatus400,
  AccountSendPasswordResetCodeStatus401,
  AccountSendPasswordResetCodeStatus403,
  AccountSendPasswordResetCodeStatus404,
  AccountSendPasswordResetCodeStatus500,
  AccountSendPasswordResetCodeStatus501,
} from "../../models/account/AccountSendPasswordResetCode.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { accountSendPasswordResetCode } from "../../clients/account/accountSendPasswordResetCode.ts";

export const accountSendPasswordResetCodeMutationKey = () =>
  [{ url: "/api/account/send-password-reset-code" }] as const;

export function accountSendPasswordResetCodeMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<AccountSendPasswordResetCodeData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = accountSendPasswordResetCodeMutationKey();
  return mutationOptions<
    AccountSendPasswordResetCodeStatus200 | AccountSendPasswordResetCodeStatus204,
    ResponseErrorConfig<
      | AccountSendPasswordResetCodeStatus400
      | AccountSendPasswordResetCodeStatus401
      | AccountSendPasswordResetCodeStatus403
      | AccountSendPasswordResetCodeStatus404
      | AccountSendPasswordResetCodeStatus500
      | AccountSendPasswordResetCodeStatus501
    >,
    { data?: AccountSendPasswordResetCodeData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return accountSendPasswordResetCode(data, config);
    },
  });
}

/**
 * {@link /api/account/send-password-reset-code}
 */
export function useAccountSendPasswordResetCode<TContext>(
  options: {
    mutation?: UseMutationOptions<
      AccountSendPasswordResetCodeStatus200 | AccountSendPasswordResetCodeStatus204,
      ResponseErrorConfig<
        | AccountSendPasswordResetCodeStatus400
        | AccountSendPasswordResetCodeStatus401
        | AccountSendPasswordResetCodeStatus403
        | AccountSendPasswordResetCodeStatus404
        | AccountSendPasswordResetCodeStatus500
        | AccountSendPasswordResetCodeStatus501
      >,
      { data?: AccountSendPasswordResetCodeData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<AccountSendPasswordResetCodeData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? accountSendPasswordResetCodeMutationKey();

  const baseOptions = accountSendPasswordResetCodeMutationOptions(config) as UseMutationOptions<
    AccountSendPasswordResetCodeStatus200 | AccountSendPasswordResetCodeStatus204,
    ResponseErrorConfig<
      | AccountSendPasswordResetCodeStatus400
      | AccountSendPasswordResetCodeStatus401
      | AccountSendPasswordResetCodeStatus403
      | AccountSendPasswordResetCodeStatus404
      | AccountSendPasswordResetCodeStatus500
      | AccountSendPasswordResetCodeStatus501
    >,
    { data?: AccountSendPasswordResetCodeData },
    TContext
  >;

  return useMutation<
    AccountSendPasswordResetCodeStatus200 | AccountSendPasswordResetCodeStatus204,
    ResponseErrorConfig<
      | AccountSendPasswordResetCodeStatus400
      | AccountSendPasswordResetCodeStatus401
      | AccountSendPasswordResetCodeStatus403
      | AccountSendPasswordResetCodeStatus404
      | AccountSendPasswordResetCodeStatus500
      | AccountSendPasswordResetCodeStatus501
    >,
    { data?: AccountSendPasswordResetCodeData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    AccountSendPasswordResetCodeStatus200 | AccountSendPasswordResetCodeStatus204,
    ResponseErrorConfig<
      | AccountSendPasswordResetCodeStatus400
      | AccountSendPasswordResetCodeStatus401
      | AccountSendPasswordResetCodeStatus403
      | AccountSendPasswordResetCodeStatus404
      | AccountSendPasswordResetCodeStatus500
      | AccountSendPasswordResetCodeStatus501
    >,
    { data?: AccountSendPasswordResetCodeData },
    TContext
  >;
}
