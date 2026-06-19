/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  LoginLoginData,
  LoginLoginStatus200,
  LoginLoginStatus400,
  LoginLoginStatus401,
  LoginLoginStatus403,
  LoginLoginStatus404,
  LoginLoginStatus500,
  LoginLoginStatus501,
} from "../../models/login/LoginLogin.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { loginLogin } from "../../clients/login/loginLogin.ts";

export const loginLoginMutationKey = () => [{ url: "/api/account/login" }] as const;

export function loginLoginMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<LoginLoginData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = loginLoginMutationKey();
  return mutationOptions<
    LoginLoginStatus200,
    ResponseErrorConfig<
      | LoginLoginStatus400
      | LoginLoginStatus401
      | LoginLoginStatus403
      | LoginLoginStatus404
      | LoginLoginStatus500
      | LoginLoginStatus501
    >,
    { data?: LoginLoginData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return loginLogin(data, config);
    },
  });
}

/**
 * {@link /api/account/login}
 */
export function useLoginLogin<TContext>(
  options: {
    mutation?: UseMutationOptions<
      LoginLoginStatus200,
      ResponseErrorConfig<
        | LoginLoginStatus400
        | LoginLoginStatus401
        | LoginLoginStatus403
        | LoginLoginStatus404
        | LoginLoginStatus500
        | LoginLoginStatus501
      >,
      { data?: LoginLoginData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<LoginLoginData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? loginLoginMutationKey();

  const baseOptions = loginLoginMutationOptions(config) as UseMutationOptions<
    LoginLoginStatus200,
    ResponseErrorConfig<
      | LoginLoginStatus400
      | LoginLoginStatus401
      | LoginLoginStatus403
      | LoginLoginStatus404
      | LoginLoginStatus500
      | LoginLoginStatus501
    >,
    { data?: LoginLoginData },
    TContext
  >;

  return useMutation<
    LoginLoginStatus200,
    ResponseErrorConfig<
      | LoginLoginStatus400
      | LoginLoginStatus401
      | LoginLoginStatus403
      | LoginLoginStatus404
      | LoginLoginStatus500
      | LoginLoginStatus501
    >,
    { data?: LoginLoginData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    LoginLoginStatus200,
    ResponseErrorConfig<
      | LoginLoginStatus400
      | LoginLoginStatus401
      | LoginLoginStatus403
      | LoginLoginStatus404
      | LoginLoginStatus500
      | LoginLoginStatus501
    >,
    { data?: LoginLoginData },
    TContext
  >;
}
