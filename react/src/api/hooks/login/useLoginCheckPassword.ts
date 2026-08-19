/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  LoginCheckPasswordOptions,
  LoginCheckPasswordStatus200,
  LoginCheckPasswordStatus400,
  LoginCheckPasswordStatus401,
  LoginCheckPasswordStatus403,
  LoginCheckPasswordStatus404,
  LoginCheckPasswordStatus500,
  LoginCheckPasswordStatus501,
} from "../../models/login/LoginCheckPassword";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { loginCheckPassword } from "../../clients/login/loginCheckPassword";

export const loginCheckPasswordMutationKey = () =>
  [{ url: "/api/account/check-password" }] as const;

export function loginCheckPasswordMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
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
    LoginCheckPasswordOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await loginCheckPassword({ ...config, body, throwOnError: true });
      return data;
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
      LoginCheckPasswordOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: {
        request?: "application/json" | "text/json" | "application/*+json";
        response?: "text/plain" | "application/json" | "text/json";
      };
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
    LoginCheckPasswordOptions,
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
    LoginCheckPasswordOptions,
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
    LoginCheckPasswordOptions,
    TContext
  >;
}
