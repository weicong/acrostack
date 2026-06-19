/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  AccountRegisterData,
  AccountRegisterStatus200,
  AccountRegisterStatus400,
  AccountRegisterStatus401,
  AccountRegisterStatus403,
  AccountRegisterStatus404,
  AccountRegisterStatus500,
  AccountRegisterStatus501,
} from "../../models/account/AccountRegister.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { accountRegister } from "../../clients/account/accountRegister.ts";

export const accountRegisterMutationKey = () => [{ url: "/api/account/register" }] as const;

export function accountRegisterMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<AccountRegisterData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = accountRegisterMutationKey();
  return mutationOptions<
    AccountRegisterStatus200,
    ResponseErrorConfig<
      | AccountRegisterStatus400
      | AccountRegisterStatus401
      | AccountRegisterStatus403
      | AccountRegisterStatus404
      | AccountRegisterStatus500
      | AccountRegisterStatus501
    >,
    { data?: AccountRegisterData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return accountRegister(data, config);
    },
  });
}

/**
 * {@link /api/account/register}
 */
export function useAccountRegister<TContext>(
  options: {
    mutation?: UseMutationOptions<
      AccountRegisterStatus200,
      ResponseErrorConfig<
        | AccountRegisterStatus400
        | AccountRegisterStatus401
        | AccountRegisterStatus403
        | AccountRegisterStatus404
        | AccountRegisterStatus500
        | AccountRegisterStatus501
      >,
      { data?: AccountRegisterData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<AccountRegisterData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? accountRegisterMutationKey();

  const baseOptions = accountRegisterMutationOptions(config) as UseMutationOptions<
    AccountRegisterStatus200,
    ResponseErrorConfig<
      | AccountRegisterStatus400
      | AccountRegisterStatus401
      | AccountRegisterStatus403
      | AccountRegisterStatus404
      | AccountRegisterStatus500
      | AccountRegisterStatus501
    >,
    { data?: AccountRegisterData },
    TContext
  >;

  return useMutation<
    AccountRegisterStatus200,
    ResponseErrorConfig<
      | AccountRegisterStatus400
      | AccountRegisterStatus401
      | AccountRegisterStatus403
      | AccountRegisterStatus404
      | AccountRegisterStatus500
      | AccountRegisterStatus501
    >,
    { data?: AccountRegisterData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    AccountRegisterStatus200,
    ResponseErrorConfig<
      | AccountRegisterStatus400
      | AccountRegisterStatus401
      | AccountRegisterStatus403
      | AccountRegisterStatus404
      | AccountRegisterStatus500
      | AccountRegisterStatus501
    >,
    { data?: AccountRegisterData },
    TContext
  >;
}
