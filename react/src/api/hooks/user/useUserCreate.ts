/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  UserCreateOptions,
  UserCreateStatus200,
  UserCreateStatus400,
  UserCreateStatus401,
  UserCreateStatus403,
  UserCreateStatus404,
  UserCreateStatus500,
  UserCreateStatus501,
} from "../../models/user/UserCreate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { userCreate } from "../../clients/user/userCreate";

export const userCreateMutationKey = () => [{ url: "/api/identity/users" }] as const;

export function userCreateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = userCreateMutationKey();
  return mutationOptions<
    UserCreateStatus200,
    ResponseErrorConfig<
      | UserCreateStatus400
      | UserCreateStatus401
      | UserCreateStatus403
      | UserCreateStatus404
      | UserCreateStatus500
      | UserCreateStatus501
    >,
    UserCreateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await userCreate({ ...config, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/identity/users}
 */
export function useUserCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      UserCreateStatus200,
      ResponseErrorConfig<
        | UserCreateStatus400
        | UserCreateStatus401
        | UserCreateStatus403
        | UserCreateStatus404
        | UserCreateStatus500
        | UserCreateStatus501
      >,
      UserCreateOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? userCreateMutationKey();

  const baseOptions = userCreateMutationOptions(config) as UseMutationOptions<
    UserCreateStatus200,
    ResponseErrorConfig<
      | UserCreateStatus400
      | UserCreateStatus401
      | UserCreateStatus403
      | UserCreateStatus404
      | UserCreateStatus500
      | UserCreateStatus501
    >,
    UserCreateOptions,
    TContext
  >;

  return useMutation<
    UserCreateStatus200,
    ResponseErrorConfig<
      | UserCreateStatus400
      | UserCreateStatus401
      | UserCreateStatus403
      | UserCreateStatus404
      | UserCreateStatus500
      | UserCreateStatus501
    >,
    UserCreateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    UserCreateStatus200,
    ResponseErrorConfig<
      | UserCreateStatus400
      | UserCreateStatus401
      | UserCreateStatus403
      | UserCreateStatus404
      | UserCreateStatus500
      | UserCreateStatus501
    >,
    UserCreateOptions,
    TContext
  >;
}
