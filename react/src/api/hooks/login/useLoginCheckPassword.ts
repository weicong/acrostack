/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  LoginCheckPasswordData,
  LoginCheckPasswordStatus200,
  LoginCheckPasswordStatus400,
  LoginCheckPasswordStatus401,
  LoginCheckPasswordStatus403,
  LoginCheckPasswordStatus404,
  LoginCheckPasswordStatus500,
  LoginCheckPasswordStatus501,
} from "../../models/login/LoginCheckPassword.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { loginCheckPassword } from "../../clients/login/loginCheckPassword.ts";

export const loginCheckPasswordMutationKey = () =>
  [{ url: "/api/account/check-password" }] as const;

export function loginCheckPasswordMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<LoginCheckPasswordData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = loginCheckPasswordMutationKey();
  return mutationOptions<
    LoginCheckPasswordStatus200,
    ResponseErrorConfig<
      | LoginCheckPasswordStatus400
      | LoginCheckPasswordStatus401
      | LoginCheckPasswordStatus403
      | LoginCheckPasswordStatus404
      | LoginCheckPasswordStatus500
      | LoginCheckPasswordStatus501
    >,
    { data?: LoginCheckPasswordData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return loginCheckPassword(data, config);
    },
  });
}

/**
 * {@link /api/account/check-password}
 */
export function useLoginCheckPassword<TContext>(
  options: {
    mutation?: UseMutationOptions<
      LoginCheckPasswordStatus200,
      ResponseErrorConfig<
        | LoginCheckPasswordStatus400
        | LoginCheckPasswordStatus401
        | LoginCheckPasswordStatus403
        | LoginCheckPasswordStatus404
        | LoginCheckPasswordStatus500
        | LoginCheckPasswordStatus501
      >,
      { data?: LoginCheckPasswordData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<LoginCheckPasswordData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? loginCheckPasswordMutationKey();

  const baseOptions = loginCheckPasswordMutationOptions(config) as UseMutationOptions<
    LoginCheckPasswordStatus200,
    ResponseErrorConfig<
      | LoginCheckPasswordStatus400
      | LoginCheckPasswordStatus401
      | LoginCheckPasswordStatus403
      | LoginCheckPasswordStatus404
      | LoginCheckPasswordStatus500
      | LoginCheckPasswordStatus501
    >,
    { data?: LoginCheckPasswordData },
    TContext
  >;

  return useMutation<
    LoginCheckPasswordStatus200,
    ResponseErrorConfig<
      | LoginCheckPasswordStatus400
      | LoginCheckPasswordStatus401
      | LoginCheckPasswordStatus403
      | LoginCheckPasswordStatus404
      | LoginCheckPasswordStatus500
      | LoginCheckPasswordStatus501
    >,
    { data?: LoginCheckPasswordData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    LoginCheckPasswordStatus200,
    ResponseErrorConfig<
      | LoginCheckPasswordStatus400
      | LoginCheckPasswordStatus401
      | LoginCheckPasswordStatus403
      | LoginCheckPasswordStatus404
      | LoginCheckPasswordStatus500
      | LoginCheckPasswordStatus501
    >,
    { data?: LoginCheckPasswordData },
    TContext
  >;
}
