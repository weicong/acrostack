/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  AccountVerifyPasswordResetTokenData,
  AccountVerifyPasswordResetTokenStatus200,
  AccountVerifyPasswordResetTokenStatus400,
  AccountVerifyPasswordResetTokenStatus401,
  AccountVerifyPasswordResetTokenStatus403,
  AccountVerifyPasswordResetTokenStatus404,
  AccountVerifyPasswordResetTokenStatus500,
  AccountVerifyPasswordResetTokenStatus501,
} from "../../models/account/AccountVerifyPasswordResetToken.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { accountVerifyPasswordResetToken } from "../../clients/account/accountVerifyPasswordResetToken.ts";

export const accountVerifyPasswordResetTokenMutationKey = () =>
  [{ url: "/api/account/verify-password-reset-token" }] as const;

export function accountVerifyPasswordResetTokenMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<AccountVerifyPasswordResetTokenData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = accountVerifyPasswordResetTokenMutationKey();
  return mutationOptions<
    AccountVerifyPasswordResetTokenStatus200,
    ResponseErrorConfig<
      | AccountVerifyPasswordResetTokenStatus400
      | AccountVerifyPasswordResetTokenStatus401
      | AccountVerifyPasswordResetTokenStatus403
      | AccountVerifyPasswordResetTokenStatus404
      | AccountVerifyPasswordResetTokenStatus500
      | AccountVerifyPasswordResetTokenStatus501
    >,
    { data?: AccountVerifyPasswordResetTokenData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return accountVerifyPasswordResetToken(data, config);
    },
  });
}

/**
 * {@link /api/account/verify-password-reset-token}
 */
export function useAccountVerifyPasswordResetToken<TContext>(
  options: {
    mutation?: UseMutationOptions<
      AccountVerifyPasswordResetTokenStatus200,
      ResponseErrorConfig<
        | AccountVerifyPasswordResetTokenStatus400
        | AccountVerifyPasswordResetTokenStatus401
        | AccountVerifyPasswordResetTokenStatus403
        | AccountVerifyPasswordResetTokenStatus404
        | AccountVerifyPasswordResetTokenStatus500
        | AccountVerifyPasswordResetTokenStatus501
      >,
      { data?: AccountVerifyPasswordResetTokenData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<AccountVerifyPasswordResetTokenData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? accountVerifyPasswordResetTokenMutationKey();

  const baseOptions = accountVerifyPasswordResetTokenMutationOptions(config) as UseMutationOptions<
    AccountVerifyPasswordResetTokenStatus200,
    ResponseErrorConfig<
      | AccountVerifyPasswordResetTokenStatus400
      | AccountVerifyPasswordResetTokenStatus401
      | AccountVerifyPasswordResetTokenStatus403
      | AccountVerifyPasswordResetTokenStatus404
      | AccountVerifyPasswordResetTokenStatus500
      | AccountVerifyPasswordResetTokenStatus501
    >,
    { data?: AccountVerifyPasswordResetTokenData },
    TContext
  >;

  return useMutation<
    AccountVerifyPasswordResetTokenStatus200,
    ResponseErrorConfig<
      | AccountVerifyPasswordResetTokenStatus400
      | AccountVerifyPasswordResetTokenStatus401
      | AccountVerifyPasswordResetTokenStatus403
      | AccountVerifyPasswordResetTokenStatus404
      | AccountVerifyPasswordResetTokenStatus500
      | AccountVerifyPasswordResetTokenStatus501
    >,
    { data?: AccountVerifyPasswordResetTokenData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    AccountVerifyPasswordResetTokenStatus200,
    ResponseErrorConfig<
      | AccountVerifyPasswordResetTokenStatus400
      | AccountVerifyPasswordResetTokenStatus401
      | AccountVerifyPasswordResetTokenStatus403
      | AccountVerifyPasswordResetTokenStatus404
      | AccountVerifyPasswordResetTokenStatus500
      | AccountVerifyPasswordResetTokenStatus501
    >,
    { data?: AccountVerifyPasswordResetTokenData },
    TContext
  >;
}
